import React, { useState, useEffect } from 'react'
import { db } from "../firebase.js";
import { collection, addDoc, doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import AddMemberPopup from "./AddMemberPopUp.jsx"; 

 const Table = () => {

    const [data, setData] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => {
        setShowPopup(true);
        console.log(showPopup);
      };

    const closePopup = () => {
        setShowPopup(false);
      };
    

    const handleRemove = async (id) => {
        const docRef = doc(db, 'Employees', id);
        await deleteDoc(docRef);
        // Remove the deleted item from the state
        setData(data.filter(item => item.id !== id));
       };


    async function getData(){
        console.log("run");
        try {
            const collectionRef = collection(db,'Employees');
            console.log("run1");
            const docSnapshots = await getDocs(collectionRef);
            console.log("run2");
            setData(docSnapshots.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            console.log(data);  
        } catch (error) {
            console.log(error);
        }
        
    }

    useEffect(()=>{
        getData();
        console.log("Look at my: ",data);
    },[])
    
    
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg">
                    <h3 className="text-white text-xl font-bold sm:text-2xl">
                        Manage Your Team members
                    </h3>   
                    {/* <button onClick={()=>{getData()}}>get Data</button> */}
                </div>
                <div className="mt-3 md:mt-0">
                    <button
                        onClick={openPopup}
                        className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
                    >
                        Add member
                    </button>
                </div>
                {showPopup && <AddMemberPopup close={closePopup} />}
            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Username</th>
                            <th className="py-3 px-6">Email</th>
                            <th className="py-3 px-6">Position</th>
                            <th className="py-3 px-6">Salary</th>
                            <th className="py-3 px-6"></th>

                        </tr>
                    </thead>
                    <tbody className="text-white divide-y">
                        {
                            data.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                        <img src={item.avatar} className="w-10 h-10 rounded-full" />
                                        <div>
                                            <span className="block text-white text-sm font-medium">{item.Name}</span>
                                            <span className="block text-white text-xs">{item.email}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.Phone_No}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.Position}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.Salary}</td>
                                    <td className="text-right px-6 whitespace-nowrap">
                                        <a href="javascript:void()" className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            Edit
                                        </a>
                                        <button onClick={() => handleRemove(item.id)} className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default Table;

