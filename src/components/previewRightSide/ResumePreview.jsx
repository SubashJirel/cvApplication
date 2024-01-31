import PreviewPersonalDetails from './PreviewPersonalDetails';
function ResumePreview({ personalInfo }) {
  return (
    <div className="  bg-white shadow-lg preview-container border border-purple-600 h-full  mt-6 ml-6 mr-8 ">
      <div className="resume top bg-white grid h-full w-full sticky top-0 auto-rows-auto">
        <PreviewPersonalDetails personalInfo={personalInfo} />
        <div>{/* work and education */}</div>
      </div>
    </div>
  );
}

export default ResumePreview;
