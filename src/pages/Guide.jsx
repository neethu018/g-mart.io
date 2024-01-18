import React, { useState } from 'react';
import './guide.css';
import { Link } from 'react-router-dom';
const Guide = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
   
{
  id: 1,
  title: 'English',
  langCode: 'en',
  embedCode: 'Gi3AiZCoWKI',
},
{
  id: 2,
  title: 'தமிழ் (Tamil)',
  langCode: 'tam',
  embedCode: '8BVhHMbEeEE',
}, {
  id: 3,
  title: 'हिंदी (Hindi)',
  langCode: 'hi',
  embedCode: 'uVp0Nn7S5Zw',
},
{
  id: 4,
  title: 'ಕನ್ನಡ (Kannada)',
  langCode: 'kn',
  embedCode: 'Gh52M4k9Rqg',
},
{
   id: 5,
    title: "मराठी (Marathi)",
    langCode: "mr",
   embedCode: "RgP0dKzcBL0"
  },
  {
   id: 6,
    title: "ગુજરાતી (Gujarati)",
    langCode: "gu",
   embedCode: "P6tV9nXxLW8"
  },
  
  {
   id: 7,
    title: "తెలుగు (Telugu)",
    langCode: "te",
   embedCode: "E5sybZIYIs"
  },
  {
   id: 8,
    title: "বাংল (Bengali)",
    langCode: "bn",
   embedCode: "KP4V0KyCd4Q"
  }
  ];

  return (
    <div>
      <h5 className='title'>how to buy an G-mart</h5>
      <Link to='/faq'><div className='accordions-headerx accordions-itemx'
      onClick={() => handleAccordionClick(index)}
      >
FAQ
      </div></Link>
      <h5 className='title'>Watch in your language</h5>
      {accordionData.map((item, index) => (
        <div key={index} className="accordions-item">
          <div
            className={`accordions-header ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleAccordionClick(index)}
          >
            {item.title}
          </div>
          {activeIndex === index && (
            <div className="accordions-content">
              <iframe
                title={item.title}
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${item.embedCode}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Guide;
