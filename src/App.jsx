import { useState } from 'react';
import exampleData from './example-data';
import PersonalDetails from './components/personal-info/PersonalDetails';
import ResumePreview from './components/previewRightSide/ResumePreview';
import EducationSection from './components/education/EducationSection';
import ExperienceSection from './components/experience/ExperienceSection';

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [education, setEducation] = useState(
    exampleData.personalInfo.sections.educations
  );
  const [experience, setExperience] = useState(
    exampleData.personalInfo.sections.experiences
  );
  // console.log(exampleData.personalInfo.sections.educations);
  // const [experienceRecords, setExperienceRecords] = useState(
  //   exampleData.sections.experiences
  // );
  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    console.log(e.target.dataset);
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  return (
    <>
      <div className="border-2 border-red-500  grid grid-cols-5 h-screen ">
        <div className="border-2 border-green-400 bg-blue-400 col-span-2 overflow-auto custom-scrollbar h-screen">
          <PersonalDetails
            onChange={handlePersonalInfoChange}
            fullName={personalInfo.fullName}
            email={personalInfo.email}
            phoneNumber={personalInfo.phoneNumber}
            address={personalInfo.address}
          />
          <EducationSection education={education} setEducation={setEducation} />
          <ExperienceSection
            experience={experience}
            setExperience={setExperience}
          />
        </div>

        <div className=" col-span-3 bg-slate-500 flex flex-col space-y-4 ">
          <ResumePreview
            personalInfo={personalInfo}
            education={education}
            experience={experience}
          />
        </div>
      </div>
    </>
  );
}
export default App;
