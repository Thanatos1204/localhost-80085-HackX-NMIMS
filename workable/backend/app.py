from flask import Flask, request, jsonify
import pickle

app = Flask(__name__)

# Load the model
model_file_path = "decisiontree.pkl"
with open(model_file_path, "rb") as file:
    model = pickle.load(file)

@app.route('/predict', methods=['POST'])
def predict():
    # Assuming the model takes a list of features as input
    data = request.get_json(force=True)
    prediction = model.predict([data['features']])
    return jsonify({'prediction': prediction.tolist()})

if __name__ == '__main__':
    app.run(debug=True)
