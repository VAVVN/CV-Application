import React, { useState } from "react";
import '../styles/Experience.css'

function Experience() {
  const [formData, setFormData] = useState({
    jobTitle: "",
    company: "",
    yearOfEmployment: ""
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
  <section className="experience">
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <h2>Experience</h2>
          <div>
            <label>
              Job Title{" "}
              <input
                type="text"
                name="jobTitle"
                placeholder="Your job title"
                value={formData.jobTitle}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Company{" "}
              <input
                type="text"
                name="company"
                placeholder="Your company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Year of Employment{" "}
              <input
                type="text"
                name="yearOfEmployment"
                placeholder="Year of Employment"
                value={formData.yearOfEmployment}
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
          <h2>Experience Preview</h2>
          <label>Job Title {formData.jobTitle}</label>
          <label>Company {formData.company}</label>
          <label>Year of Employment {formData.yearOfEmployment}</label>
          <button type="button" onClick={() => setSubmitted(false)}>Edit</button>
        </>
      )}
    </section>
  );
}
export default Experience;
