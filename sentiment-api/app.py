# archivo: api/app.py
import joblib
from flask import Flask, request, jsonify
from flask_cors import CORS 

app = Flask(__name__)
CORS(app, resources={r"/predict": {"origins": "http://localhost:5173"}}, supports_credentials=True)
# Cargar modelo y vectorizador
model = joblib.load('modelo_gradientboost.pkl')
vectorizer = joblib.load('vectorizador_tfidf.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    text = request.json['text']
    if not text:
        return jsonify({'sentiment': 'Texto vacío'}), 400
    X = vectorizer.transform([text])
    prediction = model.predict(X)[0]
    return jsonify({'sentiment': "sentimiento positivo" if prediction==1 else "sentimiento negativo"})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
