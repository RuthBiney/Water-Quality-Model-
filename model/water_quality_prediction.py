# Import necessary libraries
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from tensorflow.keras.regularizers import l1, l2
from tensorflow.keras.callbacks import EarlyStopping
import matplotlib.pyplot as plt

# Load the dataset
file_path = '/content/water_potability.csv'
data = pd.read_csv(file_path)

# Data Preprocessing
target_column = 'Potability'
X = data.drop(target_column, axis=1)
Y = data[target_column]

# Handle missing values (e.g., by filling with mean values)
X.fillna(X.mean(), inplace=True)

# Standardize the features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Split the dataset into training and testing sets
n_train = 30
trainX, testX = X_scaled[n_train:, :], X_scaled[:n_train, :]
trainY, testY = Y[n_train:], Y[:n_train]

print(trainX.shape)
print(testX.shape)
print(trainY.shape)
print(testY.shape)

# Model Architecture
model = Sequential()

# Adding layers with L1 and L2 regularization
model.add(Dense(64, activation='relu', input_shape=(trainX.shape[1],), kernel_regularizer=l1(0.001)))
model.add(Dense(64, activation='relu', kernel_regularizer=l2(0.001)))
model.add(Dense(1, activation='sigmoid'))  # Assuming a binary classification problem

# Early Stopping
early_stopping = EarlyStopping(monitor='val_loss', patience=10, restore_best_weights=True)

# Compile the model
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

# Train the model
history = model.fit(trainX, trainY, validation_split=0.2, epochs=100, batch_size=32, callbacks=[early_stopping])

# Model Evaluation
evaluation = model.evaluate(testX, testY)
test_loss = evaluation[0]
test_accuracy = evaluation[1]

test_loss, test_accuracy
