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

app = Flask(__name__)
CORS(app)

os.makedirs('images', exist_ok=True)

@app.route('/', methods=['GET'])
def index():
    return render_template('two.html')

def predict(test_image):
    model = tf.keras.models.load_model('train_model3.keras')

    image = tf.keras.preprocessing.image.load_img(test_image, target_size=(128, 128))
    input_arr = tf.keras.preprocessing.image.img_to_array(image)
    input_arr = np.array([input_arr])

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
    # Get the base64 image data from the frontend
    data = request.get_json()
    image_data = data['image']

    image_data = image_data.split(',')[1]
    
    timestamp = int(time.time())
    unique_filename = f"{timestamp}_{uuid.uuid4().hex}.jpg"
    image_path = os.path.join('images', unique_filename)
    
    img = Image.open(io.BytesIO(base64.b64decode(image_data)))

    # Save the image to the 'images' directory with a unique filename
    img.save(image_path)

    # Make prediction
    prediction,percent = predict(image_path)
    print("=",percent)

    return jsonify({
        'prediction': prediction,
        'percent' : percent,
        'image_path': image_path
    })

if __name__ == '__main__':
    app.run(debug=True)
