import React, { useState } from "react";
import '../styles/GeneralInfo.css' // <-- fixed path to the CSS

function GeneralInfo () {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="general-info">
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <h2>General Information</h2>
          <div>
            <label>
              Name{" "}
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Email{" "}
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Phone{" "}
              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Location{" "}
              <input
                type="text"
                name="location"
                placeholder="Your location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <br />
          <button type="submit" onClick={() => handleSubmit()}>Submit</button>
          <button type="button" onClick={() => setSubmitted(false)}>Edit</button>
        </form>
      ) : (
        <>
          <h2>General Information Preview</h2>
          <label>Name {formData.name}</label>
          <label>Email {formData.email}</label>
          <label>Phone {formData.phone}</label>
          <label>Location {formData.location}</label>
          <button type="button" onClick={() => setSubmitted(false)}>Edit</button>
        </>
      )}
    </section>
  );
}

export default GeneralInfo;