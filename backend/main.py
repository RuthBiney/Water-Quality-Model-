from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel
import pickle as pk
import numpy as np 
import pandas as pd 



# Create a FastAPI app
app = FastAPI()




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
    # Load the trained model
    with open("water_quality_model.pkl", "rb") as file:
        model = pk.load(file)
        
    # prepare the request data into a pandas data structure    
    data = {
        "ph": [request.ph],
        "Hardness": [request.hardness],
        "Solids": [request.solids],
        "Chloramines": [request.chloramines],
        "Sulfate": [request.sulfate],
        "Conductivity": [request.conductivity],
        "Organic_carbon": [request.organic_carbon],
        "Trihalomethanes": [request.trihalomethanes],
        "Turbidity": [request.turbidity]
    }
    df = pd.DataFrame(data)
    
    print("================================")
    print(df)
    
    # Make a prediction using the loaded model
    prediction = model.predict(df)[0][0]

    
    return {"prediction": int(prediction)}
