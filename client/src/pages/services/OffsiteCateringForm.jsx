import React, { useState } from 'react';

function OffsiteCateringForm() {
  const [formData, setFormData] = useState({
    date: '',
    venue: '',
    time: '',
    expected_persons: ''
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
      const response = await fetch('http://localhost:3000/api/offcatering', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        setStatus('success');
        setFormData({ date: '', venue: '', time: '', expected_persons: '' });
        console.log('Created:', data);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission failed:', error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="max-w-xl w-full bg-gray-800 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">Offsite Catering Request</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-white-700 mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              placeholder="Select date"
              className="w-full border border-gray-300 p-2 rounded-md placeholder-gray-600 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white-700 mb-1">Venue</label>
            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              required
              placeholder="Enter venue"
              className="w-full border border-gray-300 p-2 rounded-md placeholder-gray-600 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white-700 mb-1">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              placeholder="Enter time"
              className="w-full border border-gray-300 p-2 rounded-md placeholder-gray-600 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white-700 mb-1">Expected Persons</label>
            <input
              type="number"
              name="expected_persons"
              value={formData.expected_persons}
              onChange={handleChange}
              required
              placeholder="Enter number of persons"
              className="w-full border border-gray-300 p-2 rounded-md placeholder-gray-600 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>

          {status === 'success' && (
            <p className="text-green-600 text-center mt-3">Submission successful!</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-center mt-3">Submission failed. Try again.</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default OffsiteCateringForm;
