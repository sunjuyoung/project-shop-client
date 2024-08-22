// src/components/LoginComponent.jsx
import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  CssBaseline,
  Link,
  Grid,
  Paper,
  Divider,
  IconButton,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import StyledPaper from "../ui/StyledPaper";
import StyledAvatar from "../ui/StyleAvatar";
import { useDispatch } from "react-redux";
import useCustomLogin from "../../hooks/useCustomLogin";
import { useNavigate } from "react-router-dom";
import { getNaverLoginLink } from "../../api/oauth/naverApi";

const theme = createTheme();

const initState = {
  email: "",
  password: "",
};

const LoginComponent = () => {
  const [loginParam, setLoginParam] = useState({ ...initState });
  const { doLogin, moveToPath, doLogout } = useCustomLogin();
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    loginParam[e.target.name] = e.target.value;

    setLoginParam({ ...loginParam });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    doLogin(loginParam).then((res) => {
      console.log(res);
      if (res.error) {
        alert(res.error);
      } else {
        moveToPath("/");
      }
    });
  };

  const handleGoogleLogin = () => {
    console.log("Google 로그인 시도");
  };

  const handleNaverLogin = () => {
    console.log("Naver 로그인 시도");
    const naverLink = getNaverLoginLink();
    console.log(naverLink);
    window.location.href = naverLink;
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <StyledPaper elevation={6}>
          <StyledAvatar>
            <LockOutlinedIcon fontSize="large" />
          </StyledAvatar>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="이메일 주소"
              name="email"
              autoComplete="email"
              autoFocus
              value={loginParam.email}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="current-password"
              value={loginParam.password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              로그인
            </Button>
            <Divider sx={{ my: 2 }}>또는</Divider>
            <div className="flex justify-center">
              <IconButton
                onClick={handleNaverLogin}
                sx={{
                  mt: 1,

                  mb: 2,
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  width: "55px",
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                  },
                }}
              >
                <img
                  src="/img/btn_naver.png"
                  style={{ width: "25px", margin: "4px" }}
                />
              </IconButton>
              <IconButton
                onClick={handleGoogleLogin}
                sx={{
                  mt: 1,
                  ml: 2,
                  mb: 2,
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  width: "55px",
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                  },
                }}
              >
                <img
                  src="/img/btn_kakao.png"
                  style={{ width: "30px", margin: "4px" }}
                />
              </IconButton>
              <IconButton
                onClick={handleGoogleLogin}
                sx={{
                  mt: 1,
                  ml: 2,
                  mb: 2,
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  py: 0,
                  width: "55px",
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                  },
                }}
              >
                <img
                  src="/img/btn_google.png"
                  style={{ width: "20px", margin: "4px" }}
                />
                {/* <Typography variant="button">Google 로그인</Typography> */}
              </IconButton>
            </div>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  비밀번호 찾기
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"계정이 없으신가요? 회원가입"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </StyledPaper>
      </Container>
    </ThemeProvider>
  );
};

export default LoginComponent;
