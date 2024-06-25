import React, { useState } from "react";
import { login } from "../stores/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAuth } from "../hooks/useAuth";
import { PATH } from "../config/path";
import { message } from "antd";
import { copyTopClipboard } from "../utils/copyToClipBoard";

const Account = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const user = await dispatch(login({ username, password })).unwrap();
      message.success("Bạn đã đăng nhập thành công!");
      if (user.username === "admin") {
        navigate(PATH.Admin);
      } else {
        navigate(PATH.Profile);
      }
    } catch (err) {
      console.log("err", err);
    }
  };
  const _copyToClipboard = (ev: React.MouseEvent<HTMLDivElement>) => {
    const text = (ev.currentTarget as HTMLElement).innerText;
    copyTopClipboard(text);
    message.info("Copy to clipboard");
  };
  return (
    <div className="d-flex justify-content-center">
      <div className=" card-body col-12 col-md-6">
        {/* Heading */}
        <h6 className="mb-7">Returning Customer</h6>
        {/* Form */}
        <div className="row">
          <div className="col-12">
            {/* Email */}
            <div className="form-group">
              <label className="sr-only" htmlFor="loginEmail">
                Email Address *
              </label>
              <input
                className="form-control form-control-sm"
                id="loginEmail"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                placeholder="Username *"
                required
              />
            </div>
          </div>
          <div className="col-12">
            {/* Password */}
            <div className="form-group">
              <label className="sr-only" htmlFor="loginPassword">
                Password *
              </label>
              <input
                className="form-control form-control-sm"
                id="loginPassword"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password *"
                required
              />
            </div>
          </div>
          <div className="col-12 col-md">
            {/* Remember */}
            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  className="custom-control-input"
                  id="loginRemember"
                  type="checkbox"
                />
                <label className="custom-control-label" htmlFor="loginRemember">
                  Remember me
                </label>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-auto">
            {/* Link */}
            <div className="form-group">
              <a
                className="font-size-sm text-reset"
                data-toggle="modal"
                href="#modalPasswordReset"
              >
                Forgot Password?
              </a>
            </div>
          </div>
          <div className="col-12">
            {/* Button */}
            <button
              className="btn btn-sm btn-dark"
              type="submit"
              onClick={handleSubmit}
            >
              Sign In
            </button>
          </div>
          <div className="col-12">
            <div className="mt-5 font-light font-size-sm text-muted">
              Tài khoản User:{" "}
              <div className="text-black">
                <span
                  className="underline cursor-pointer"
                  onClick={_copyToClipboard}
                >
                  user
                </span>{" "}
                /
                <span
                  className="underline cursor-pointer"
                  onClick={_copyToClipboard}
                >
                  123
                </span>
                3
              </div>
            </div>
            <div className="mt-5 font-light font-size-sm text-muted">
              Tài khoản Admin:{" "}
              <div className="text-black">
                <span
                  className="underline cursor-pointer"
                  onClick={_copyToClipboard}
                >
                  admin
                </span>{" "}
                /
                <span
                  className="underline cursor-pointer"
                  onClick={_copyToClipboard}
                >
                  123
                </span>
                3
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
