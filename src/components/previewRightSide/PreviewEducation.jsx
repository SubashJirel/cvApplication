import exampleData from '../../example-data';
import { useState } from 'react';
function PreviewEducation({ education }) {
  return (
    <>
      <h2 className="text-2xl font-bold">Education</h2>
      {education.map((val) => (
        <section className="flex gap-3" key={val.id}>
          <div>
            <div className="flex flex-col">
              {val.startDate} - {val.endDate}
            </div>
            <div>{val.location}</div>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold">{val.schoolName}</h3>
            <p>{val.degree}</p>
          </div>
        </section>
      ))}
    </>
  );
}
export default PreviewEducation;
