import { useState } from 'react';
import EducationForm from './educationForm';
import exampleData from '../../example-data';

import { Trash2 } from 'lucide-react';
function EducationSection({ education, setEducation }) {
  const [showBtnForm, setShowBtnForm] = useState('button');
  // const [education, setEducation] = useState(
  //   exampleData.personalInfo.sections.educations
  // );

  function deleteEducation(valId) {
    const updatedEducation = education.filter((val) => val.id != valId);
    setEducation(updatedEducation);
  }

  const btnShow = showBtnForm == 'button';
  const formShow = showBtnForm == 'form';
  function toggleShow() {
    setShowBtnForm((prev) => (prev == 'button' ? 'form' : 'button'));
  }
  return (
    <div className="ps-8  bg-[#FFFFFF]  shadow-xl rounded-lg w-5/6 m-auto mt-4 p-4">
      <h1 className="text-2xl font-bold mb-3 mt-2">Education</h1>
      {education.map((val) => (
        <>
          <div className="flex items-center justify-start rounded bg-[#F3F4F6] mb-2 mr-4">
            <div className="m-3 " key={val.id}>
              <div className=" font-semibold">{val.schoolName}</div>
            </div>
            <Trash2
              style={{ cursor: 'pointer' }}
              onClick={() => deleteEducation(val.id)}
            />
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
        <EducationForm
          education={education}
          setEducation={setEducation}
          toggleShow={toggleShow}
        />
      )}
    </div>
  );
}
export default EducationSection;
