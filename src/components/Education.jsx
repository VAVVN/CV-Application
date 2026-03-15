import React, { useState} from 'react';

import '../styles/Education.css'

export default function Education() {
  const [formData, setFormData] = useState({
    degree: "",
    institution: "",
    yearOfGraduation: ""
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
    <section className="education">
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <h2>Education</h2>
          <div>
            <label>
              Degree{" "}
              <input
                type="text"
                name="degree"
                placeholder="Your degree"
                value={formData.degree}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Institution{" "}
              <input
                type="text"
                name="institution"
                placeholder="Your institution"
                value={formData.institution}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Year of Graduation{" "}
              <input
                type="text"
                name="yearOfGraduation"
                placeholder="Year of Graduation"
                value={formData.yearOfGraduation}
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
          <h2>Education Preview</h2>
          <label>Degree {formData.degree}</label>
          <label>Institution {formData.institution}</label>
          <label>Year of Graduation {formData.yearOfGraduation}</label>
          <button type="button" onClick={() => setSubmitted(false)}>Edit</button>
        </>
      )}
    </section>
  );
}
