# Import necessary libraries
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from tensorflow.keras.models import Sequential, load_model
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

# Model Architecture
model = Sequential([
    Dense(64, activation='relu', input_shape=(trainX.shape[1],), kernel_regularizer=l1(0.001)),
    Dense(64, activation='relu', kernel_regularizer=l2(0.001)),
    Dense(1, activation='sigmoid')  # Assuming a binary classification problem
])

# Early Stopping
early_stopping = EarlyStopping(monitor='val_loss', patience=10, restore_best_weights=True)

# Compile the model
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

# Train the model
history = model.fit(trainX, trainY, validation_split=0.2, epochs=100, batch_size=32, callbacks=[early_stopping])

# Save the model to a file using Keras save method
model.save('water_quality_model.h5')

# Load the model from the file using Keras load_model method
loaded_model = load_model('water_quality_model.h5')

# Model Evaluation
evaluation = loaded_model.evaluate(testX, testY)
test_loss = evaluation[0]
test_accuracy = evaluation[1]

print(f"Test Loss: {test_loss}, Test Accuracy: {test_accuracy}")

# Summary of the process and results
# Plot training & validation loss values
plt.figure(figsize=(12, 4))
plt.subplot(1, 2, 1)
plt.plot(history.history['loss'])
plt.plot(history.history['val_loss'])
plt.title('Model loss')
plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.legend(['Train', 'Validation'], loc='upper left')

# Plot training & validation accuracy values
plt.subplot(1, 2, 2)
plt.plot(history.history['accuracy'])
plt.plot(history.history['val_accuracy'])
plt.title('Model accuracy')
plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.legend(['Train', 'Validation'], loc='upper left')
plt.show()
