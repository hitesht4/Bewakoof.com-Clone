import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RequiredAuth = ({ children }) => {
  const { pathname } = useLocation();
  const { isAuthenticated } = useSelector((state) => state.auth.data);

  if (isAuthenticated) {
    console.log(isAuthenticated);
    return children;
  } else {
    return <Navigate to="/login" state={{ from: pathname }} replace />;
  }
};

export default RequiredAuth;
