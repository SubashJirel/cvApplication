import { useState } from 'react';
import uniqid from 'uniqid';

import exampleData from '../../example-data';

import { Trash2 } from 'lucide-react';
function EducationSection({ education }) {
  const [showBtnForm, setShowBtnForm] = useState('button');
  const [formData, setFormData] = useState({
    degree: '',
    schoolName: '',
    startDate: '',
    endDate: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddEducation = () => {
    const newEducation = {
      ...formData,
      id: uniqid(),
    };
    education.push(newEducation);
    toggleShow();
    console.log(newEducation);
  };

  const btnShow = showBtnForm == 'button';
  const formShow = showBtnForm == 'form';
  function toggleShow() {
    setShowBtnForm((prev) => (prev == 'button' ? 'form' : 'button'));
  }
  return (
    <>
      <h1 className="text-3xl">Education</h1>
      {education.map((val) => (
        <>
          <div className="flex items-center">
            <div className="m-3" key={val.id}>
              {val.schoolName}{' '}
            </div>
            <Trash2 />
          </div>
        </>
      ))}
      {btnShow && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleShow}
        >
          Add
        </button>
      )}
      {formShow && (
        <div className="bg-white p-4 rounded shadow">
          <form>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                School Name:
              </label>
              <input
                name="schoolName"
                value={formData.schoolName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                type="text"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Degree:</label>
              <input
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                type="text"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Start Date:
              </label>
              <input
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                type="text"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">End Date:</label>
              <input
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                type="text"
              />
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
              <button
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                onClick={toggleShow}
              >
                Cancel
              </button>
              <button
                onClick={handleAddEducation}
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
export default EducationSection;
