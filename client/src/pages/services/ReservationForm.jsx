import React, { useState } from 'react';

function ReservationForm() {
  const [formData, setFormData] = useState({
    tables: '',
    date: '',
    time: '',
    persons_per_table: ''
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://forkedup.onrender.com/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          tables: '',
          date: '',
          time: '',
          persons_per_table: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-26 mb-20 p-6 bg-amber-600 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Make a Reservation</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Number of Tables</label>
          <input
            type="number"
            name="tables"
            value={formData.tables}
            onChange={handleChange}
            required
            placeholder="Enter number of tables"
            className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm placeholder-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm placeholder-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm placeholder-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Persons per Table</label>
          <input
            type="number"
            name="persons_per_table"
            value={formData.persons_per_table}
            onChange={handleChange}
            required
            placeholder="Enter persons per table"
            className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm placeholder-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>

        {status === 'success' && (
          <p className="text-green-600 text-center mt-3">Reservation submitted successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-center mt-3">Failed to submit. Please try again.</p>
        )}
      </form>
    </div>
  );
}

export default ReservationForm;
