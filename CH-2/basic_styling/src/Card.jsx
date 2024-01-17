import React from "react";
import Button from "./Components/Button";

const Card = () => {
  return (
    <>
      <div className="container my-5">
        <div className="d-flex justify-content-between">
          <dic className="card1 w-25">
            <div className="card">
              <div className="card-header">Primary Button</div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="Primary_btn">
                <Button 
                btn_name="primary"
                className = 'btn bg-primary border-0 text-light'
                />
                </a>
              </div>
            </div>
          </dic>
          <dic className="card2 w-25">
            <div className="card">
              <div className="card-header">Secondary Button</div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="Secondary_btn">
                <Button
                btn_name="Secondary"
                className = 'btn bg-secondary border-0 text-light'
                />
                </a>
              </div>
            </div>
          </dic>
          <dic className="card3 w-25">
            <div className="card">
              <div className="card-header">Danger Button</div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="Danger_btn">
                <Button
                btn_name="Danger"
                className = 'btn bg-danger border-0 text-light'
                />
                </a>
              </div>
            </div>
          </dic>
        </div>
      </div>
    </>
  );
};

export default Card;
