import React, { useState } from 'react';

function CopCateringForm() {
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
      const response = await fetch('https://forkedup.onrender.com/api/copcatering', {
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
    <div className="min-h-screen bg-zink-100 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Corporate Catering Request</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Date */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">Date <span className="text-red-500">*</span></label>
            <input 
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:ring focus:ring-blue-200 text-black "
            />
          </div>

          {/* Venue */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">Venue <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              required
              placeholder="Enter venue"
              className="w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:ring focus:ring-blue-200 text-black"
            />
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">Time <span className="text-red-500">*</span></label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:ring focus:ring-blue-200 text-black "
            />
          </div>

          {/* Expected Persons */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">Expected Persons <span className="text-red-500">*</span></label>
            <input
              type="number"
              name="expected_persons"
              value={formData.expected_persons}
              onChange={handleChange}
              required
              placeholder="Enter number"
              className="w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:ring focus:ring-blue-200  text-black"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-200 font-semibold"
          >
            Submit
          </button>

          {/* Status Messages */}
          {status === 'success' && (
            <p className="text-green-600 text-center mt-3 font-medium">Submission successful!</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-center mt-3 font-medium">Submission failed. Try again.</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default CopCateringForm;
