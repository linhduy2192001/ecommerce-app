import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../config/path";
import { authActions } from "../../stores/auth";
import { message } from "antd";

const Profile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogOut = () => {
    dispatch(authActions.logout());
    message.success("Bạn đã đăng xuất thành công");
    navigate(PATH.Account);
  };
  return (
    <div className="container">
      <div className="pt-7">
        <div className="col-12">
          {/* Heading */}
          <h3 className="text-center">Thông tin người dùng</h3>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className=" card-body col-12 col-md-6">
          <div className="row">
            <div className="col-md-6">
              {/* Email */}
              <div className="form-group">
                <label htmlFor="accountEmail">Username *</label>
                <input
                  className="form-control form-control-sm"
                  id="accountEmail"
                  type="email"
                  value={user?.username}
                  placeholder="Username *"
                  required
                />
              </div>
            </div>
            <div className="col-12 col-md-12">
              {/* Password */}
              <div className="form-group">
                <label htmlFor="accountPassword">Current Password</label>
                <input
                  className="form-control form-control-sm"
                  id="accountPassword"
                  type="password"
                  value={user?.password}
                  placeholder="Current Password"
                  required
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="AccountNewPassword">New Password</label>
                <input
                  className="form-control form-control-sm"
                  id="AccountNewPassword"
                  type="password"
                  placeholder="New Password"
                  required
                />
              </div>
            </div>

            <div className="col-12">
              {/* Button */}
              <button className="btn btn-dark" type="submit">
                Save Changes
              </button>
              <button
                className="ml-3 btn btn-light"
                type="submit"
                onClick={handleLogOut}
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
