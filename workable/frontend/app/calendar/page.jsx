'use client'
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";

function Calendar() {
    const [showPopup, setShowPopup] = useState(false);
    const openPopup = () => {
        setShowPopup(true);
        console.log(showPopup);
      };

    const closePopup = () => {
        setShowPopup(false);
      };
  return (
    <div>
          
      {showPopup && <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
        <div className="bg-white p-8 rounded-md absolute">
          
          <h2 className="text-lg text-black font-semibold mb-4">Add Member</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                name="phone"
                type="text"
                placeholder="Enter Phone No."
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pos">
                Position:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              onClick={closePopup}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
                Close
            </button>
            </div>
            
          </form>
        </div>
      </div>}
      <button className="p-5 bg-blue-600 text-white" onClick={openPopup}>
 Add Event
      </button>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
        }}
        events={[
            { title: 'event 1', date: '2024-03-01' },
            { title: 'event 2', date: '2024-03-08' }
          ]}
        height={"90vh"}
      />
    </div>
  );
}

export default Calendar;