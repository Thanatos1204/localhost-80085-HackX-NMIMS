import React, { useState } from 'react';

const PredictComponent = ({ features, identifier }) => {
    const [prediction, setPrediction] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const handlePredicts = async () => {
        // Your prediction logic here
        setShowPopup(true); // Show the popup after prediction
      };

    const handlePredict = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ features }),
            });
            const data = await response.json();
            setPrediction(data.prediction);
            setShowPopup(true); // Show the popup after getting the prediction
        } catch (error) {
            console.error('Prediction failed:', error);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div>
        {/* Button to trigger prediction */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handlePredicts}>Predict</button>
        
        {/* Popup */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white p-8 rounded-md">
              <p className='text-sm text-red-600'>Employee Will Stay</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => setShowPopup(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    );
};

export default PredictComponent;
