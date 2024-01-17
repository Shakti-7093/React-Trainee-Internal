import React from "react";

const Card = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="card-header">
          <h3>{props.heading}</h3>
        </div>
        <div className="card-img">
          <img src={props.img} className="img-fluid" />
        </div>
        <div className="card-text">
          <p>{props.contain}</p>
        </div>
        <div className="card-footer">
          <h4>{props.footer}</h4>
        </div>
      </div>
    </>
  );
};

export default Card;
