import React, { useState, useEffect } from "react";
import "./css/SingleMetric.css";

function SingleMetric({ title, icon, value }) {
  return (
    <div className='single-metric'>
      <h3>{title}</h3>
      <div className='single-metric-content'>
        <p>{icon}</p>
        <p>{value}</p>
      </div>
    </div>
  );
}

export default SingleMetric;
