import React from 'react';

const SelectComponent = ({ value, onChange }) => {
  const handleDepartmentChange = (event) => {
    onChange(event.target.value);
  };

  const handleRoleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="department">Department:</label>
      <select value={value.department} onChange={handleDepartmentChange} className="border text-black border-gray-300 rounded-md px-3 py-2">
        <option value="">Select Department</option>
        <option value="0">Marketing</option>
        <option value="1">Sales</option>
        <option value="2">Engineering</option>
        <option value="3">Human Resources</option>
        <option value="4">Finance</option>
        <option value="5">Operations</option>
        <option value="6">IT</option>
      </select>
      {value.department !== "" && (
        <div>
          <label htmlFor="role">Role:</label>
          <select value={value.role} onChange={handleRoleChange} className="border text-black border-gray-300 rounded-md px-3 py-2 mt-2">
            <option value="">Select Role</option>
            {value.department === "0" && (
              <>
                <option value="0">Marketing Manager</option>
                <option value="1">Content Creator</option>
                <option value="2">Social Media Specialist</option>
              </>
            )}
            {value.department === "1" && (
              <>
                <option value="0">Account Executive</option>
                <option value="1">Business Development Rep</option>
                <option value="2">Sales Representative</option>
              </>
            )}
            {value.department === "2" && (
              <>
                <option value="0">Software Engineer</option>
                <option value="1">Data Scientist</option>
                <option value="2">QA Engineer</option>
              </>
            )}
            {value.department === "3" && (
              <>
                <option value="0">HR Specialist</option>
                <option value="1">Recruiter</option>
                <option value="2">Talent Manager</option>
              </>
            )}
            {value.department === "4" && (
              <>
                <option value="0">Accountant</option>
                <option value="1">Financial Analyst</option>
                <option value="2">Controller</option>
              </>
            )}
            {value.department === "5" && (
              <>
                <option value="0">Project Manager</option>
                <option value="1">Supply Chain Manager</option>
                <option value="2">Operations Analyst</option>
              </>
            )}
            {value.department === "6" && (
              <>
                <option value="0">Network Administrator</option>
                <option value="1">Software Developer</option>
                <option value="2">IT Support Specialist</option>
              </>
            )}
          </select>
        </div>
      )}
    </div>
  );
};

export default SelectComponent;
