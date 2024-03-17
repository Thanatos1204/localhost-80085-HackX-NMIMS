'use client'
import Card from "../components/ui/card/card";
import Chart from "../components/ui/chart/chart";
import styles from "../components/ui/dashboard.module.css";
import Transactions from "../components/ui/transactions/transactions";
import Table from "../components/Table";
import React,{ useState, useEffect } from "react";

const Dashboard =() => {


  // DUMMY DATA

  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);

 const cards = [
  {
    id: 1,
    title: "Total Employees",
    number: 76,
    change: 12,
  },
  {
    id: 2,
    title: "Pending",
    number: 23,
    change: -2,
  },
  {
    id: 3,
    title: "Approved",
    number: 34,
    change: 18,
  },

  {
    id: 4,
    title: "Flagged",
    number: 19,
    change: 13,
  },
];

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}          
        </div>
        <Transactions data={data} show={show}/>
        <Chart />
        <div>
            <Table/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;