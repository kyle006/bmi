import React, { useState } from 'react';
import './App.css';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('mänlich');
  const [bmiResult, setBmiResult] = useState(null);

  const calculateBMI = () => {
    if (!weight || !height) {
      alert('Bitte füllen sie alle Felder aus');
      return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

   

    setBmiResult(bmi.toFixed(2));
  };

  const getBmiCategory = () => {
    if (bmiResult < 18.5) {
      return 'Untergewicht';
    } else if (bmiResult >= 18.5 && bmiResult <= 24.9) {
      return 'Normal gewicht';
    } else if (bmiResult >= 25.0 && bmiResult <= 29.9) {
      return 'Präadipositas';
    } else if (bmiResult >= 30.0 && bmiResult <= 34.9) {
      return 'Adipositas Grad I';
    } else if (bmiResult >= 35.0 && bmiResult <= 39.9) {
      return 'Adipositas Grad II';
    } else {
      return 'Adipositas Grad III';
    }
  };
  

  return (
    <div >
      <h1>BMI Calculator</h1>
      <form>
        <div >
          <label >Gewicht (kg)</label>
          <input value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
        <div>
          <label >Grösse (cm)</label>
          <input value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>
        <div >
          <label>Geschlecht</label>
          <select  value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button type="button" onClick={calculateBMI}>BMI Ausrechnen</button>
      </form>
      {bmiResult !== null && (
        <div className="mt-4">
          <h2>Deine BMI: {bmiResult}</h2>
          <p>BMI Kategorie: {getBmiCategory()}</p>
        </div>
      )}
    </div>
  );
};

export default BmiCalculator;
