// pages/ApplicantsPage.js
'use client'
import React, { useState, useEffect } from 'react';
import { db } from "../firebase.js";
import { collection, addDoc, doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import 'firebase/firestore';
import ApplicantCard from '../components/ApplicantCard';

const ApplicantsPage = () => {
  const [applicants, setApplicants] = useState([]);
  const [shortlistedApplicants, setShortlistedApplicants] = useState([]);

  
  async function getData(){
    console.log("run");
    try {
        const collectionRef = collection(db,'Applicants');
        console.log("run1");
        const docSnapshots = await getDocs(collectionRef);
        console.log("run2");
        setApplicants(docSnapshots.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        console.log(applicants);  
    } catch (error) {
        console.log(error);
    }
    
}

useEffect(() => {
    async function fetchData() {
      await getData();
      console.log("Look at my: ", applicants);
    }
    fetchData();
  }, []);

  const handleShortlist = (applicantId) => {
    const shortlistedApplicant = applicants.find(applicant => applicant.id === applicantId);
    setShortlistedApplicants([...shortlistedApplicants, shortlistedApplicant]);
    setApplicants(applicants.filter(applicant => applicant.id !== applicantId));
  };

  
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-semibold mb-6">Applicant Overview</h1>
      {/* <button onClick={getData}>HI</button> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applicants.map(applicant => (
          <ApplicantCard key={applicant.id} applicant={applicant}  onShortlist={() => handleShortlist(applicant.id)} />
        ))}
      </div>
      <h2 className="text-2xl font-semibold mt-12 mb-4">Shortlisted Applicants</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shortlistedApplicants.map(applicant => (
          <ApplicantCard key={applicant.id} applicant={applicant}/>
        ))}
      </div>
    </div>
  );
};

export default ApplicantsPage;
