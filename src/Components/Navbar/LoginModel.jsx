import React from "react";
import "./LoginModel.css";

const LoginModel = ({ CloseModel, Model }) => {
  return (
    <div className={`Model-area ${Model ? "" : "hide-model"}`}>
      <div className="bg-primary login-area ">
        <h4> Please Login Here! </h4>
        <form action="" className="p-3">
          {/* email */}
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
            />
          </div>
          {/* password */}
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </div>
          <button type="submit" className="mt-2">
            Login
          </button>
        </form>
        <button onClick={CloseModel}>Close</button>
      </div>
    </div>
  );
};

export default LoginModel;
