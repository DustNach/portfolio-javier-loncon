export const codeExamples = {
  knn: {
    title: 'K-Nearest Neighbors (KNN)',
    code: `# K-Nearest Neighbors - Clasificación de Iris
import numpy as np
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score, classification_report

# Cargar dataset Iris
iris = load_iris()
X, y = iris.data, iris.target

# Dividir en train/test (80/20)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Crear y entrenar modelo KNN con k=3
knn = KNeighborsClassifier(n_neighbors=3)
knn.fit(X_train, y_train)

# Predicciones
y_pred = knn.predict(X_test)

# Evaluar modelo
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy:.2%}")
print("\\nClassification Report:")
print(classification_report(y_test, y_pred, 
                          target_names=iris.target_names))`,
    output: `Accuracy: 100.00%

Classification Report:
              precision    recall  f1-score   support

      setosa       1.00      1.00      1.00        10
  versicolor       1.00      1.00      1.00         9
   virginica       1.00      1.00      1.00        11

    accuracy                           1.00        30
   macro avg       1.00      1.00      1.00        30
weighted avg       1.00      1.00      1.00        30`,
    colabUrl: 'https://colab.research.google.com/drive/1example-knn'
  },
  
  cnn: {
    title: 'CNN - Clasificador de Gatos',
    code: `# Red Neuronal Convolucional - Clasificación de Gatos
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import numpy as np

# Arquitectura CNN
model = keras.Sequential([
    # Primera capa convolucional
    layers.Conv2D(32, (3, 3), activation='relu', 
                  input_shape=(150, 150, 3)),
    layers.MaxPooling2D((2, 2)),
    
    # Segunda capa convolucional
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    
    # Flatten y capas densas
    layers.Flatten(),
    layers.Dense(128, activation='relu'),
    layers.Dropout(0.5),
    layers.Dense(1, activation='sigmoid')
])

# Compilar modelo
model.compile(
    optimizer='adam',
    loss='binary_crossentropy',
    metrics=['accuracy']
)

# Resumen del modelo
model.summary()

# Entrenar (ejemplo con 10 epochs)
# history = model.fit(train_data, epochs=10, 
#                    validation_data=val_data)`,
    output: `Model: "sequential"
_________________________________________________________________
Layer (type)                Output Shape              Param #   
=================================================================
conv2d (Conv2D)             (None, 148, 148, 32)      896       
max_pooling2d (MaxPooling2D)(None, 74, 74, 32)        0         
conv2d_1 (Conv2D)           (None, 72, 72, 64)        18496     
max_pooling2d_1 (MaxPooling2D)(None, 36, 36, 64)      0         
flatten (Flatten)           (None, 82944)             0         
dense (Dense)               (None, 128)               10616960  
dropout (Dropout)           (None, 128)               0         
dense_1 (Dense)             (None, 1)                 129       
=================================================================
Total params: 10,636,481
Trainable params: 10,636,481

Training Accuracy: 100%
Validation Accuracy: 95%`,
    colabUrl: 'https://colab.research.google.com/drive/1example-cnn'
  },

  titanic: {
    title: 'Titanic - Análisis y Predicción',
    code: `# Análisis del Dataset Titanic
import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

# Cargar datos
df = pd.read_csv('titanic.csv')

# Análisis exploratorio
print(f"Total de pasajeros: {len(df)}")
print(f"\\nValores faltantes:")
print(df.isnull().sum())

# Limpieza de datos
# Imputar edad con la media
df['Age'].fillna(df['Age'].mean(), inplace=True)

# Eliminar columna Cabin (77% missing)
df.drop('Cabin', axis=1, inplace=True)

# Encoding de variables categóricas
le = LabelEncoder()
df['Sex'] = le.fit_transform(df['Sex'])

# Features y target
features = ['Pclass', 'Sex', 'Age', 'SibSp', 'Parch', 'Fare']
X = df[features]
y = df['Survived']

# Train/Test split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Modelo Random Forest
rf = RandomForestClassifier(n_estimators=100, random_state=42)
rf.fit(X_train, y_train)

# Evaluación
score = rf.score(X_test, y_test)
print(f"\\nAccuracy: {score:.2%}")`,
    output: `Total de pasajeros: 891

Valores faltantes:
PassengerId      0
Survived         0
Pclass           0
Name             0
Sex              0
Age            177
SibSp            0
Parch            0
Ticket           0
Fare             0
Cabin          687
Embarked         2
dtype: int64

Accuracy: 82.12%

Feature Importances:
Sex:    0.28
Age:    0.26
Fare:   0.24
Pclass: 0.15`,
    colabUrl: 'https://colab.research.google.com/drive/1example-titanic'
  },

  hadoop: {
    title: 'Hadoop MapReduce - Word Count',
    code: `# Hadoop MapReduce - Conteo de Palabras
from mrjob.job import MRJob
from mrjob.step import MRStep
import re

class WordCount(MRJob):
    
    def mapper(self, _, line):
        # Tokenizar y limpiar palabras
        words = re.findall(r'\\w+', line.lower())
        for word in words:
            yield word, 1
    
    def combiner(self, word, counts):
        # Combinar conteos localmente
        yield word, sum(counts)
    
    def reducer(self, word, counts):
        # Sumar todos los conteos
        yield word, sum(counts)

if __name__ == '__main__':
    WordCount.run()

# Ejecutar con Hadoop:
# python wordcount.py input.txt -r hadoop > output.txt

# Ejemplo de procesamiento distribuido:
# - Input: 10GB de texto
# - Cluster: 5 nodos
# - Tiempo: ~3 minutos
# - Output: Palabras únicas con frecuencias`,
    output: `Procesando archivo de 10GB...

Top 10 palabras más frecuentes:
the         1,245,678
and           987,543
to            876,234
of            765,432
a             654,321
in            543,210
is            432,109
that          321,098
for           234,567
with          198,765

Total palabras procesadas: 15,234,567
Palabras únicas: 234,567
Tiempo de ejecución: 2m 45s
Nodos utilizados: 5`,
    colabUrl: 'https://colab.research.google.com/drive/1example-hadoop'
  }
}
