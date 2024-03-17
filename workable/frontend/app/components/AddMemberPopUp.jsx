import { useState } from "react";
import { db } from "../firebase.js";
import { collection, addDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import SelectComponent from './SelectComponenet.js';
  

const AddMemberPopup = ({ close }) => {

    const [name, setName] = useState('');
    const [empId, setEmpId] = useState('');
    const [phone, setPhone] = useState('');
    const [pos, setPos] = useState('');
    const [salary, setSalary] = useState('');
    const [dept, setDept] = useState('');
    const [tenure, setTenure] = useState('');
    const [age, setAge] = useState('');
    const [perf, setPerf] = useState('');
    const [managersatisfaction, setManagerSatisfaction] = useState('');
    const [wlb, setWlb] = useState('');
    const [children, setChildren] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const handleDepartmentChange = (department) => {
    setSelectedDepartment(department);
  };

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };
    

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

    const onSubmit = async(e)=>{
        
        try {
            const docRef = doc(db,'Employees',empId);

            const data= {
                Name: name,
                Phone_No: phone,
                Position: pos,
                Salary: salary,
                Department: dept,
                Tenure: tenure,
                Age: age,
                PerformanceRating: perf,
                ManagerSatisfaction: managersatisfaction,
                WorkLifeBalance: wlb,
                NumberOfChildren: children
            }// Dept,pos,ten,age,perf,sal,msatis,wlb,child

            await setDoc(docRef,data);
            console.log("Pushed Data");            
        } catch (error) {
            console.log(error);
        }

        
    }

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
        <div className="bg-white p-8 rounded-md">
          
          <h2 className="text-lg text-black font-semibold mb-4">Add Member</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emp_id">
                Employee Id:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="emp_id"
                name="emp_id"
                type="text"
                placeholder="Enter name"
                required
                onChange={(e) => setEmpId(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                Phone No.:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                name="phone"
                type="text"
                placeholder="Enter Phone No."
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
      <h2>Select Department and Role:</h2>
      <SelectComponent value={{ department: selectedDepartment, role: selectedRole }} onChange={handleDepartmentChange} />
    </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pos">
                  Position:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  id="pos"
                  name="pos"
                type="text"
                placeholder="Enter Employee Position"
                required
                onChange={(e) => setPos(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="salary">
                Salary:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="salary"
                name="salary"
                type="text"
                placeholder="Enter Employee Salary"
                required
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
            {/* Similar fields for phone, role, and salary */}
            <div className="flex justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit">
                Add
            </button>
            <button
              onClick={close}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
                Close
            </button>
            </div>
            
          </form>
        </div>
      </div>
    );
  };
  
  export default AddMemberPopup;
  