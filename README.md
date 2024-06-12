# Water-Quality-Model-

## Objective:
- To develop a model using TensorFlow/Keras for analyzing water quality data and predicting water quality .
- Develop an interface for the project Use a mobile app and/or Web app using React/ Python


# About Dataset
This dataset contains water quality measurements and assessments related to potability, which is the suitability of water for human consumption. The dataset's primary objective is to provide insights into water quality parameters and assist in determining whether the water is potable or not. Each row in the dataset represents a water sample with specific attributes, and the "Potability" column indicates whether the water is suitable for consumption.


## Columns:
- pH: The pH level of the water.
- Hardness: Water hardness, a measure of mineral content.
- Solids: Total dissolved solids in the water.
- Chloramines: Chloramines concentration in the water.
- Sulfate: Sulfate concentration in the water.
- Conductivity: Electrical conductivity of the water.
- Organic_carbon: Organic carbon content in the water.
- Trihalomethanes: Trihalomethanes concentration in the water.
- Turbidity: Turbidity level, a measure of water clarity.
- Potability: Target variable; indicates water potability with values 1 (potable) and 0 (not potable).


## Objective:
The main objective of this dataset is to assess and predict water potability based on water quality attributes. It can be used for evaluating the safety and suitability of water sources for human consumption, making informed decisions about water treatment, and ensuring compliance with water quality standards.

## Data Source:
The data was collected from [here](https://github.com/MainakRepositor/Datasets/blob/master/water_potability.csv)

Credits go to them.



# how to use the Repo
The Project is Divided into `Backend` , `frontend` and `Model` 

For the `Backend`, it contains the code `fastapi` server we are using

For the `Frontend`, it contains the code `Nextjs` server we are using to interact with the backend that contains the model. 

For the `Model`, it contains the code `Jupter Notebook` server we are using to build the  model and also make predictions for the model


## Frontend Documentation
The Project Documentation, OUr frontend is fully integrated and build with `Nextjs`

### To get started, 

1. Download the project
```
git clone https://github.com/RuthBiney/Water-Quality-Model-.git
```

2. Head the frontend folder and also get into the predict-app 
```
cd frontend


then

cd predict-app
```
3. Install the dependencies
```
npm install
```
4. run the server to start prediction and info about app 
```
npm run start 
```


## Backend Documentation
The Project Documentation, Our backend is fully integrated and build with `fastapi`

### To get started, 

1. Download the project
```
git clone https://github.com/RuthBiney/Water-Quality-Model-.git
```
2. navigate to the backend
```
cd backend
```
3. create a new virtual environment
```
python -m venv <name of env> 

eg. 
python -m venv env
```
4. Install the dependencies needed for the virtual environment
```
pip install -r requirements.txt
```
5. Run the server to be able to interact with the server 
```
fastapi dev main.py
```


## Model
Our model is a simple python code that using tensor and keras to build the model that is used to predict the water portability 

### Getting started with the code. 
To be able to run the model or work with the model

1. Build a virtual env 
```
python -m venv env
```
2. install the dependencies
```
pip install -r requirements.txt
```

3. Run the model
- You can run the model using the jupyter notebook with the name of `model.ipynb` 
- Or you can choose to run the model using the scrip in the `water_quality_prediction.py`

```
To be able to run the code
python water_quality_prediction.py
```


# Our Data and Model Explanation 
[Explanations](https://github.com/RuthBiney/Water-Quality-Model-/blob/main/Group%201%20Model%20Evaluation%20.pdf)



## Authors and contributors
- Kayongo Johnson Brian - b.kayongo@alustudent.com - [Github Profile](https://github.com/kaybrian)
- Joak Buoy Gai - b.joak@alustudent.com - [Github Pofile](github.com/joakbouy)
- Ruth Senir Biney - r.biney@alustudent.com - [Github Profile](https://github.com/RuthBiney)
- John Odai Obodai  


