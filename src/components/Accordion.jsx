import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      id="accordion-color"
      data-accordion="collapse"
      data-active-classes="bg-green-400  text-white "
      className="br bg-white mx-auto"
    >
   
      {items.map((item, index) => (
        <div key={index}>
          {/* Accordion Header */}
          <h2 id={`accordion-color-heading-${index}`}>
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border ${index === 0 ? 'border-b-0 rounded-t-xl' : 'border-b-0'
                } border-gray-200 hover:text-white   hover:bg-[#56C596]  gap-3 ${activeIndex === index ? 'bg-[#56C596] text-white' : ''}`}
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`accordion-color-body-${index}`}
            >
              <span className='font-bold '>{item.day_number}</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 transform ${activeIndex === index ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>

          {/* Accordion Content */}
          {activeIndex === index && (
            <div
              id={`accordion-color-body-${index}`}
              aria-labelledby={`accordion-color-heading-${index}`}
            >
              <div className="p-5 border border-t-0 border-gray-200 ">
                {item.description}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default Accordion;
