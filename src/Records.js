// src/screens/Records.js
import React, { useState, useEffect } from 'react';
import './Records.css'; // Import your custom CSS file for styling

const Records = () => {
  const [selectedHostel, setSelectedHostel] = useState('Hostel 1');
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Function to fetch records based on selected hostel
  const fetchRecords = async (hostel) => {
    setLoading(true);
    setError('');
    let apiUrl = '';

    switch (hostel) {
      case 'Hostel 1':
        apiUrl = 'http://127.0.0.1:5001/api/hostel1/Hostel1';
        break;
      case 'Hostel 2':
        apiUrl = 'http://127.0.0.1:5002/api/hostel2/Hostel2';
        break;
      case 'Hostel 3':
        apiUrl = 'http://127.0.0.1:5003/api/hostel3/Hostel3';
        break;
      case 'Hostel 4':
        apiUrl = 'http://127.0.0.1:5004/api/hostel4/Hostel4';
        break;
      default:
        apiUrl = '';
    }

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setRecords(data);
      console.log(data)
    } catch (err) {
      setError('Failed to fetch data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch records whenever hostel selection changes
  useEffect(() => {
    fetchRecords(selectedHostel);
  }, [selectedHostel]);

  return (
    <div className="records-container">
      <h2>Student Records</h2>

      {/* Dropdown for selecting the hostel */}
      <div className="hostel-select">
        <label htmlFor="hostel">Select Hostel:</label>
        <select
          id="hostel"
          value={selectedHostel}
          onChange={(e) => setSelectedHostel(e.target.value)}
        >
          <option value="Hostel 1">Hostel 1</option>
          <option value="Hostel 2">Hostel 2</option>
          <option value="Hostel 3">Hostel 3</option>
          <option value="Hostel 4">Hostel 4</option>
        </select>
      </div>

      {/* Show loading spinner */}
      {loading && <div className="loading">Loading...</div>}

      {/* Show error message */}
      {error && <div className="error">{error}</div>}

      {/* Records table */}
      {!loading && records.length > 0 && (
        <div className="records-table">
          <table>
            <thead>
              <tr>
                <th>Hostel Name</th>
                <th>Student Name</th>
                <th>Mobile No</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record._id}>
                  <td>{record.HostelName}</td>
                  <td>{record.StudentName}</td>
                  <td>{record.MobileNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* If no records found */}
      {!loading && records.length === 0 && <div className="no-records">No records found.</div>}
    </div>
  );
};

export default Records;
