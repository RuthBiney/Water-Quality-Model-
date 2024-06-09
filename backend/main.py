import base64
import io
from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel
import pickle as pk
import numpy as np
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt
import seaborn as sns



# Create a FastAPI app
app = FastAPI()


def generate_plots(data, prediction, potable_probability, not_potable_probability):
    # Create a data frame from the input data
    data_df = pd.DataFrame([data[0]], columns=[
        'ph', 'hardness', 'solids', 'chloramines', 'sulfate',
        'conductivity', 'organic_carbon', 'trihalomethanes', 'turbidity'
    ])

    # Generate a bar plot for the feature values
    fig, ax = plt.subplots(figsize=(10, 6))
    ax = data_df.plot(kind='bar', ax=ax)
    ax.set_title('Water Quality Parameters')
    ax.set_xlabel('Parameter')
    ax.set_ylabel('Value')
    plot_1 = fig_to_base64(fig)

    # Generate a pie chart for the prediction probabilities
    fig, ax = plt.subplots(figsize=(6, 6))
    labels = ['Not Potable', 'Potable']
    sizes = [not_potable_probability, potable_probability]
    colors = ['r', 'g']
    ax.pie(sizes, labels=labels, colors=colors, autopct='%1.1f%%', startangle=90)
    ax.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.
    ax.set_title('Prediction Probabilities')
    plot_2 = fig_to_base64(fig)

    return [plot_1, plot_2]

def fig_to_base64(fig):
    """
    Converts a Matplotlib figure to a base64 encoded string.
    """
    buf = io.BytesIO()
    fig.savefig(buf, format='png', bbox_inches='tight')
    buf.seek(0)
    encoded = base64.b64encode(buf.read()).decode('utf-8')
    buf.close()
    return encoded

# Define a model class for the request body
class WaterQualityRequest(BaseModel):
    ph: Union[float, None] = None
    hardness: Union[float, None] = None
    solids: Union[float, None] = None
    chloramines: Union[float, None] = None
    sulfate: Union[float, None] = None
    conductivity: Union[float, None] = None
    organic_carbon: Union[float, None] = None
    trihalomethanes: Union[float, None] = None
    turbidity: Union[float, None] = None


@app.get("/")
async def index():
    return {
        "message": "Yes, you are connected to the Internet and you are connected to api "
    }


@app.post("/water-quality")
async def water_quality(request: WaterQualityRequest):
    try:
        # Load the trained model
        with open("./water_potability_model.pkl", "rb") as file:
            model = pk.load(file)

        # Prepare the request data and turn it into
        data = [
            [
                request.ph,
                request.hardness,
                request.solids,
                request.chloramines,
                request.sulfate,
                request.conductivity,
                request.organic_carbon,
                request.trihalomethanes,
                request.turbidity,
            ]
        ]

        # Standardize the features
        scaler = StandardScaler()
        data_scaled = scaler.fit_transform(data)

        # Make a prediction
        raw_predictions = model.predict(data_scaled)

        # Convert raw predictions to probabilities
        if hasattr(model, 'predict_proba'):
            probabilities = model.predict_proba(data_scaled)[0]
            potable_probability = probabilities[1]
            not_potable_probability = probabilities[0]
        else:
            potable_probability = raw_predictions[0]
            not_potable_probability = 1 - potable_probability

        # Convert the prediction to a string
        prediction = np.round(raw_predictions).astype(int)[0][0]
        if prediction == 1:
            prediction_str = "Potable"
        else:
            prediction_str = "Not Potable"

        # Generate plots and visualizations
        plots = generate_plots(data, prediction, potable_probability, not_potable_probability)

        return {
            "potability": prediction_str,
            "potable_probability": potable_probability,
            "not_potable_probability": not_potable_probability,
            "plots": plots
        }
    except Exception as e:
        return {"error": str(e)}