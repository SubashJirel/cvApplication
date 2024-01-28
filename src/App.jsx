import { useState } from 'react';
import exampleData from './example-data';
import PersonalDetails from './components/personal-info/PersonalDetails';

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    console.log(e.target.dataset);
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }
  return (
    <>
      <div className="border-2 border-black  grid grid-cols-5  ">
        <div className="border-2 border-green-400 bg-blue-400 col-span-2">
          Edit side
          <PersonalDetails
            onChange={handlePersonalInfoChange}
            fullName={personalInfo.fullName}
            email={personalInfo.email}
            phoneNumber={personalInfo.phoneNumber}
            address={personalInfo.address}
          />
        </div>
        <div className="border-2 border-green-400 bg-orange-500 col-span-3">
          Preview side
        </div>
      </div>
    </>
  );
}
export default App;
