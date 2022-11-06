import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Gradient from "../Components/Login/Gradient";
import LoginForm from "../Components/Login/LoginForm";
import styles from "./Styles/Login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth.data);
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/categories");
    }
  }, [isAuthenticated]);
  return (
    <div className={styles.Login}>
      <Gradient />
      <LoginForm />
    </div>
  );
};

export default Login;
