from flask import Flask, render_template, request, jsonify
import tensorflow as tf
import numpy as np
import os
import io
import base64
from PIL import Image
import time
import uuid
from flask_cors import CORS
from keras.preprocessing.image import ImageDataGenerator
import matplotlib.pyplot as plt

app = Flask(__name__)
CORS(app)

os.makedirs('images', exist_ok=True)

'''@app.route('/', methods=['GET'])
def index():
    return render_template('two.html')'''

def predict(test_image):
    model = tf.keras.models.load_model('train_model2.keras')

    image = tf.keras.preprocessing.image.load_img(test_image, target_size=(96, 96))
    input_arr = tf.keras.preprocessing.image.img_to_array(image)
    input_arr = np.array([input_arr])
    input_arr = input_arr/255
    input_arr = tf.cast(input_arr, tf.float32)

    prediction = model.predict(input_arr)
    result_index = np.argmax(prediction)

    percent = np.max(prediction) * 100
    percent = round(percent, 2)
    class_name = [
        'Actinic keratoses and intraepithelial carcinoma',
        'Basal cell carcinoma',
        'Benign keratosis-like lesions',
        'Dermatofibroma',
        'Melanoma',
        'Melanocytic nevi',
        'Vascular lesions'
    ]
    
    result_label = class_name[result_index]
    
    # Debugging output
    print(f"Prediction: {result_label}, Image Path: {test_image}")
    return result_label,percent

@app.route('/predict', methods=['POST'])
def work():
    data = request.get_json()
    image_data = data['image']

    image_data = image_data.split(',')[1]
    
    timestamp = int(time.time())
    unique_filename = f"{timestamp}_{uuid.uuid4().hex}.jpg"
    image_path = os.path.join('images', unique_filename)
    
    img = Image.open(io.BytesIO(base64.b64decode(image_data)))

    img.save(image_path)

    # Make prediction
    prediction, percent  = predict(image_path)
    print("=",percent,"hdfhdsiuhfiuhduhfiuh")
    if percent < 85:
        prediction = "Congratulations!, Model detects you don't have any type of skin cancer."

    return jsonify({
        'prediction': prediction,
        #'percent' : percent,
        'image_path': image_path
    })

if __name__ == '__main__':
    app.run(debug=True)
