import React, { useState, useEffect } from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ShareIcon from '@mui/icons-material/Share';
import image1 from './image1.png';
import './Header.css';

function Icons() {
  const [counts1, setCounts1] = useState(() => {
    const storedCounts1 = localStorage.getItem('counts1');
    return storedCounts1 ? parseInt(storedCounts1, 10) : 0;
  });

  const [counts2, setCounts2] = useState(() => {
    const storedCounts2 = localStorage.getItem('counts2');
    return storedCounts2 ? parseInt(storedCounts2, 10) : 0;
  });

  const [counts3, setCounts3] = useState(() => {
    const storedCounts3 = localStorage.getItem('counts3');
    return storedCounts3 ? parseInt(storedCounts3, 10) : 0;
  });

  function handleSubmit1() {
    setCounts1(counts1 + 1);
  }

  function handleSubmit2() {
    setCounts2(counts2 + 1);
  }

  function handleSubmit3() {
    setCounts3(counts3 + 1);
  }

  useEffect(() => {
    localStorage.setItem('counts1', counts1.toString());
    localStorage.setItem('counts2', counts2.toString());
    localStorage.setItem('counts3', counts3.toString());
  }, [counts1, counts2, counts3]);

  return (
    <div>
      <center>
        <div className='image'>
          <h3>BY FUNCTIONAL COMPONENT</h3>
          <img src={image1} alt="My Image" />
          <p>image-1</p>
        </div>
        <div className='icons'>
          <FavoriteBorderOutlinedIcon style={{ color: 'red', fill: 'red' }} onClick={handleSubmit1} />
          <span>{counts1}</span>&nbsp;&nbsp;&nbsp;
          <ModeCommentOutlinedIcon style={{ color: 'brown' }} onClick={handleSubmit2} />
          <span>{counts2}</span>&nbsp;&nbsp;&nbsp;
          <ShareIcon style={{ color: 'black' }} onClick={handleSubmit3} />
          <span>{counts3}</span>
        </div>
      </center>
      <hr></hr>
    </div>
  );
}

export default Icons;
