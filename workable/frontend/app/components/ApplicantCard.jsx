// components/ApplicantCard.js

import { useRouter } from 'next/navigation';
import React from 'react';


const ApplicantCard = ({ applicant, onShortlist, handleReport }) => {
  const { Name, Phone_No, Email } = applicant;
  const router = useRouter();

  const handleDetails = (applicantId) =>{
    console.log(applicantId);
    router.push(`/userreport/${applicantId}`);
  }


  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 h-full">
      <img
        src='/pfp.jpg'
        alt="Candidate Photo"
        className="rounded-full mx-auto"
        style={{ width: '150px', height: '150px' }}
      />
      <h2 className="text-xl text-black font-semibold mt-4">{Name}</h2>
      <p className="text-gray-700 mt-2">Phone: {Phone_No}</p>
      <p className="text-gray-700">Email: {Email}</p>
      <div className="mt-4 flex justify-between">
        <button onClick={onShortlist} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
          Shortlist
        </button>      
          <button onClick={()=>{handleDetails(Phone_No)}} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            More Details
          </button>
        
        
      </div>
    </div>
  );
};

export default ApplicantCard;
