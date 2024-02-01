import { useState, useEffect } from 'react';
import exampleData from './example-data';
import PersonalDetails from './components/personal-info/PersonalDetails';
import ResumePreview from './components/previewRightSide/ResumePreview';
import EducationSection from './components/education/EducationSection';
import ExperienceSection from './components/experience/ExperienceSection';

function App() {
  useEffect(() => {
    document.title = 'CV Builder';
  }, []);
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
      <div className="   h-screen bg-[#EEF1F3]   relative ">
        <div className=" bg-[#EEF1F3]  overflow-auto custom-scrollbar h-screen fixed w-[400px]">
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

        <div className=" ml-[400px] bg-[#EEF1F3] flex flex-col space-y-4  ">
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
