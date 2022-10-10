import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import "./ResetPassword.css";
import { useAlert } from "react-alert";
import { resetPassword } from "../../Actions/User";
import { Link, useParams } from "react-router-dom";

const Resetpassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const { loading, error, message } = useSelector((state) => state.like);
  const dispatch = useDispatch();
  const alert = useAlert();
  const params = useParams();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(resetPassword(params.token, newPassword));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [alert, error, dispatch, message]);
  return (
    <div className="resetPassword">
      <form className="resetPasswordForm" onSubmit={submitHandler}>
        <Typography variant="h3" style={{ padding: "2vmax" }}>
          Social App
        </Typography>

        <input
          className="resetPasswordInputs"
          type="password"
          placeholder="new Password"
          required
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <Button type="submit" disabled={loading}>
          Reset Password
        </Button>

        <Link to="/">
          <Typography>Login</Typography>
        </Link>

        <Typography>Or</Typography>
        
        <Link to="/forgot/password">
          <Typography>Request Another Token</Typography>
        </Link>
      </form>
    </div>
  );
};

export default Resetpassword;
