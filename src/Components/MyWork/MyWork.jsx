import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import { useNavigate } from 'react-router-dom';

const MyWork = () => {
  const navigate = useNavigate();

  // Function to redirect to individual project pages
  const handleReadMore = (work) => {
    if (work.w_no === 1) {
      navigate('/projects/1');
    } else if (work.w_no === 2) {
      navigate('/projects/2');
    }
    // Add more conditions for other projects
  };

  return (
    <div id="work" className="mywork">
      <div className="title-box">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div key={index} className="mywork-item">
            <img src={work.w_img} alt={work.w_name} />
            <h2
              style={{
                fontSize: '30px',
                fontWeight: 700,
                background: 'linear-gradient(270deg, #DF8908 50.41%, #B415FF 90.25%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {work.w_name}
            </h2>
            <p>{work.w_short_desc}</p>
            <button className="read-more-btn" onClick={() => handleReadMore(work)}>
              Read More
            </button>
          </div>
        ))}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
