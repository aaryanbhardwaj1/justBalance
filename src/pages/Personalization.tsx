import React, { useState } from 'react';
import '../Personalization.css';

const Personalization = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    diet: '',
    allergies: '',
    dietType: '',
    goals: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleNextPage = () => {
    if (currentPage < 4) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSubmit = () => {
    // Handle the form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <div className="centered overlay">
        <div className="centered mediumbox3">
        <div>
          <h2>Tell us about yourself.</h2>
        </div>


          {currentPage === 1 && (
            <div>
            <div>
            <h3 className='typewriter'>What's your diet like?</h3>
            </div>
            <div>
              <input
                type="text"
                name="dietType"
                value={formData.dietType}
                onChange={handleChange}
                placeholder="Describe your diet"
              />
              </div>
            </div>
          )}

          {currentPage === 2 && (
            <>
            <div>
              <h3 className='typewriter'>Do you have any allergies?</h3>
            </div>
              <input
                type="text"
                name="allergies"
                value={formData.allergies}
                onChange={handleChange}
                placeholder="Enter any allergies"
              />
            </>
          )}

          {currentPage === 3 && (
            <>
            <div>
              <h3 className='typewriter'>Are you vegetarian, vegan, etc?</h3>
            </div>
                <input
                type="text"
                name="dietType"
                value={formData.dietType}
                onChange={handleChange}
                placeholder="Enter any dietary restrictions"
              />
            </>
          )}

          {currentPage === 4 && (
            <>
            <div>
              <h3 className='typewriter'>What are your goals? (Cut, Maintain, Bulk) </h3>
            </div>
              <input
                type="text"
                name="goals"
                value={formData.goals}
                onChange={handleChange}
                placeholder="Enter your goals"
              />
            </>
          )}

          <div>
            {currentPage < 4 && (
              <>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                  Previous
                </button>
                <button onClick={handleNextPage} disabled={currentPage === 4}>
                  Next
                </button>
              </>
            )}
            {currentPage === 4 && (
              <button onClick={handleSubmit}>Submit</button>
            )}
            <p className='footerT'>Step {currentPage} of 4</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personalization;
