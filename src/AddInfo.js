// src/screens/AddInfo.js
import React, { useState } from 'react';
import './AddInfo.css';

const AddInfo = () => {
  const [formData, setFormData] = useState({
    hostelName: 'Hostel 1',
    studentName: '',
    mobileNo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let apiUrl = '';
    switch (formData.hostelName) {
      case 'Hostel 1':
        apiUrl = 'http://127.0.0.1:5001/api/hostel1/AddHostel1Students';
        break;
      case 'Hostel 2':
        apiUrl = 'http://127.0.0.1:5002/api/hostel2/AddHostel2Students';
        break;
      case 'Hostel 3':
        apiUrl = 'http://127.0.0.1:5003/api/hostel3/AddHostel3Students';
        break;
      case 'Hostel 4':
        apiUrl = 'http://127.0.0.1:5004/api/hostel4/AddHostel4Students';
        break;
      default:
        break;
    }

    const dataToSend = {
      HostelName: formData.hostelName,
      StudentName: formData.studentName,
      MobileNo: formData.mobileNo,
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        const result = await response.json();
        alert('Student added successfully!');
      } else {
        alert('Failed to add student.');
      }
    } catch (error) {
      alert('An error occurred while adding the student.');
    }
  };

  return (
    <div className="add-info-container">
      <h2>Add Student Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="hostelName">Select Hostel</label>
          <select
            id="hostelName"
            name="hostelName"
            value={formData.hostelName}
            onChange={handleChange}
            required
          >
            <option value="Hostel 1">Hostel 1</option>
            <option value="Hostel 2">Hostel 2</option>
            <option value="Hostel 3">Hostel 3</option>
            <option value="Hostel 4">Hostel 4</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="studentName">Student Name</label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            placeholder="Enter student's name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobileNo">Mobile Number</label>
          <input
            type="tel"
            id="mobileNo"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            placeholder="Enter mobile number"
            required
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default AddInfo;
