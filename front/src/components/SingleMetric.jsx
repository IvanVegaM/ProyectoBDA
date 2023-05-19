import React, { useState, useEffect } from "react";
import "./css/SingleMetric.css";

function SingleMetric({ title, Icon, value }) {
  return (
    <div className='single-metric'>
      {/**/}
      <div className='single-metric-content'>
        <Icon className='icon' />
        <h4>{title}</h4>
      </div>
      <h3 className='value'>{value}</h3>
    </div>
  );
}

export default SingleMetric;
