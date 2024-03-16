"use client"
import styles from './chart.module.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "Sun",
    Pending: 78,
    Flagged: 65,
    Completed:32,
  },
  {
    name: "MON",
    Pending: 74,
    Flagged: 72,
    Completed:41,
  },
  {
    name: "TUE",
    Pending: 85,
    Flagged: 52,
    Completed:45,
  },{
    name: "WED",
    Pending: 72,
    Flagged: 43,
    Completed:58,
  },{
    name: "THU",
    Pending: 40,
    Flagged: 24,
    Completed:30,
  },
  {
    name: "FRI",
    Pending: 68,
    Flagged: 25,
    Completed:12,
  },
  {
    name: "SAT",
    Pending: 79,
    Flagged: 28,
    Completed:43
  },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{background:"#151c2c", border:"none"}}/>
          <Legend />
          <Line type="monotone" dataKey="Pending" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="Completed" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
          <Line type="monotone" dataKey="Flagged" stroke="#D70040" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart