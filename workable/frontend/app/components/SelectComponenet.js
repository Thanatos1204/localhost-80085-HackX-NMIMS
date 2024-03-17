import React from 'react';

const SelectComponent = ({ value, onChange }) => {
  return (
    <select value={value} onChange={onChange} className="border text-black border-gray-300 rounded-md px-3 py-2">
      <option value="0">Marketing</option>
      <option value="1">Sales</option>
      <option value="2">Engineering</option>
      <option value="3">Human Resources</option>
      <option value="4">Finance</option>
      <option value="5">Operations</option>
      <option value="6">IT</option>
    </select>
  );
};

export default SelectComponent;
