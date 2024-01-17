import React from "react";

export default function Form() {
  
  return (
    <>
      <form action="" className="w-25 mx-auto bg-info-subtle form-control position-absolute top-50 start-50 translate-middle">
        <fieldset>
          <legend className="text-center">Sign Up Here!</legend>

          <label htmlFor="">Username</label>
          <br />
          <input type="text" className="form-control" placeholder="Enter Your Name"/>
          <br />
          <label htmlFor="">Email</label>
          <br />
          <input type="email" className="form-control" placeholder="Enter Your Email"/>
          <br />
          <label htmlFor="">Password</label>
          <br />
          <input type="password" className="form-control" placeholder="Enter your Password"/>
          <button type="submit" className="btn btn-primary my-3">Submit</button>
        </fieldset>
      </form>
    </>
  );
}
