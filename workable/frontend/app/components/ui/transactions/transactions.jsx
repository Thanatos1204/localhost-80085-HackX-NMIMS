import React, { useState } from "react";
import Image from "next/image";
import styles from "./transactions.module.css";

const Transactions = (props) => {

  const { show } = props;
  const [statusFilter, setStatusFilter] = useState('all'); // Initialize state for filtering status

  const [complaints, setComplaints] = useState([
    { id: 1, title: "No Decentralised Portal For Complaint Redressal", status: "Pending", category: "Public Service", date: "11.02.2024" },
    { id: 2, title: "FRAUD Messages", status: "Done", category: "FIRs", date: "11.02.2024" },
    { id: 3, title: "Transaction Fraud", status: "Done", category: "Tax", date: "11.02.2024" },
    { id: 4, title: "Tax Fraud", status: "Pending", category: "Tax", date: "10.02.2024" },
    { id: 5, title: "Public Service", status: "Pending", category: "Public Service", date: "10.02.2024" }
  ]);
  

  const handleStatusFilterChange = (status) => {
    setStatusFilter(status);
  };

  const updateComplaintStatus = (id, newStatus) => {
    setTimeout(() => {
      setComplaints(complaints.map(complaint => {
        if (complaint.id === id) {
          return { ...complaint, status: newStatus };
        }
        return complaint;
      }));
    }, 1000); // Adjust the delay time as needed (1000 milliseconds = 1 second)
  };

  return (<>
  {show && (
    <div className={styles.container}>
    <h2 className={styles.title}>Latest Complaints</h2>
    {/* Button to filter status */}
    <div className="space-x-4 mb-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleStatusFilterChange('all')}>All</button>
      <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleStatusFilterChange('Pending')}>Pending</button>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleStatusFilterChange('Done')}>Done</button>
    </div>
    <table className={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Status</th>
          <th>Category</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {complaints.map(complaint => {
          // Filter based on selected status
          if (statusFilter === 'all' || complaint.status === statusFilter) {
            return (
              <tr key={complaint.id}>
                <td>{complaint.id}</td>
                <td>{complaint.title}</td>
                <td>
                  <span className={`${styles.status} ${styles[complaint.status.toLowerCase()]}`}>
                    {complaint.status}
                  </span>
                </td>
                <td>{complaint.category}</td>
                <td>{complaint.date}</td>
                 {/* Button to change status */}
                 <td>
                  {complaint.status !== 'Done' && (
                    <button onClick={() => updateComplaintStatus(complaint.id, 'Done')} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">Mark as Done</button>
                  )}
                  {complaint.status !== 'Pending' && (
                    <button onClick={() => updateComplaintStatus(complaint.id, 'Pending')} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded">Mark as Pending</button>
                  )}
                </td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  </div>)}</>   
  );
};

export default Transactions;