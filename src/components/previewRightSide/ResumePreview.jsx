import PreviewPersonalDetails from './PreviewPersonalDetails';
import PreviewEducation from './PreviewEducation';
import PreviewExperience from './PreviewExperience';
function ResumePreview({ personalInfo, education, experience }) {
  return (
    <div className="  bg-white shadow-lg preview-container border border-purple-600 h-full  mt-6 ml-6 mr-8 ">
      <div className="resume top bg-white flex flex-col h-full w-full auto-rows-auto">
        <PreviewPersonalDetails personalInfo={personalInfo} />
        <div className="border border-red-500 pb-10">
          <PreviewEducation education={education} />
          <PreviewExperience experience={experience} />
        </div>
      </div>
    </div>
  );
}

export default ResumePreview;
