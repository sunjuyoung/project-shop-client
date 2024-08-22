import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { loginPostAsync, logout } from "../slice/loginSlice";

const useCustomLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginState = useSelector((state) => state.loginSlice);

  const isLogin = loginState.email ? true : false;

  const exceptionLoginHandle = (ex) => {
    console.log(ex);
  };

  const doLogin = async (loginParam) => {
    const action = await dispatch(loginPostAsync(loginParam));

    return action.payload;
  };

  const doLogout = () => {
    dispatch(logout());
  };

  const moveToPath = (path) => {
    navigate({ pathname: path }, { replace: true });
  };

  const moveToLogin = () => {
    navigate({ pathname: "/login" }, { replace: true });
  };

  const moveToLoginReturn = () => {
    return <Navigate replace to="/login" />;
  };

  return {
    doLogin,
    doLogout,
    moveToPath,
    moveToLogin,
    moveToLoginReturn,
    loginState,
    isLogin,
  };
};

export default useCustomLogin;
