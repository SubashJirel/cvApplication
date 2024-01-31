import { Mail, PhoneCall, MapPin } from 'lucide-react';
function PreviewPersonalDetails({ personalInfo }) {
  const { fullName, email, phoneNumber, address } = personalInfo;

  return (
    <div className="bg-[#0E374E] text-white h-[140px] w-full  pt-6">
      <h1 className="resume-name text-center text-3xl font-bold mb-6">
        {fullName}
      </h1>
      <div className="flex items-center justify-center gap-[18px]">
        <div className="flex items-center">
          <Mail />
          <span className="ml-2">{email}</span>
        </div>
        <div className="flex items-center">
          <PhoneCall />
          <span className="ml-2">{phoneNumber}</span>
        </div>
        <div className="flex items-center">
          <MapPin />
          <span className="ml-2">{address}</span>
        </div>
      </div>
    </div>
  );
}
export default PreviewPersonalDetails;
