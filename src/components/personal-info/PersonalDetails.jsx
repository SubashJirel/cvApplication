import InputGroup from '../inputGroup';
function PersonalDetails({ fullName, email, phoneNumber, address, onChange }) {
  return (
    <>
      <form className="ps-8" action="">
        <h2>Personal Details</h2>
        <InputGroup
          type="text"
          id="full-name"
          labelText="Full name"
          placeholder="First and last name"
          value={fullName}
          onChange={onChange}
          data-key="fullName"
        />
        <InputGroup
          type="email"
          id="email"
          labelText="Email"
          placeholder="Enter email"
          value={email}
          onChange={onChange}
          data-key="email"
        />
        <InputGroup
          type="tel"
          id="phone-number"
          labelText="Phone number"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={onChange}
          data-key="phoneNumber"
        />
        <InputGroup
          type="text"
          id="address"
          labelText="Address"
          placeholder="City, Country"
          value={address}
          onChange={onChange}
          data-key="address"
        />
      </form>
    </>
  );
}

export default PersonalDetails;
