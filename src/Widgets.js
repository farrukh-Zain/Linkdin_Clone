import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";


function Widgets() {

  const newsArticle = (heading, subtitle) => {
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecordIcon />
      </div>
      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  }

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>linkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("PAPA React is back", "Top news - 9000 readers")}
      {newsArticle("CoronaVirus: UK updates", "To news - BB6 readers")}
      {newsArticle("Tesla hits new highs", "Cars & auto - 300 readers")}
      {newsArticle("Bitcoin Breaks $22k", "Code - 123 readers")}
      {newsArticle("PAPA react launches course?!", "Top news - 6503 readers")}
    </div>

  )
}

export default Widgets
