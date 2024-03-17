import React, { useState } from 'react';

const PredictComponent = () => {
 const [features, setFeatures] = useState([]);
 const [prediction, setPrediction] = useState(null);

 const handlePredict = async () => {
    const response = await fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ features }),
    });
    const data = await response.json();
    setPrediction(data.prediction);
 };

 return (
    <div>
      {/* Input fields for features */}
      <button onClick={handlePredict}>Predict</button>
      {prediction && <p>Prediction: {prediction}</p>}
    </div>
 );
};

export default PredictComponent;
