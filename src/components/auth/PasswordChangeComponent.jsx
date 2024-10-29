// src/components/PasswordChangeComponent.jsx
import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import StyledPaper from "../ui/StyledPaper";
import StyledAvatar from "../ui/StyleAvatar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { modifyPassword } from "../../api/customerApi";

const theme = createTheme();

const initState = {
  newPassword: "",
  confirmNewPassword: "",
  id: null,
};

const PasswordChangeComponent = () => {
  const loginInfo = useSelector((state) => state.loginSlice);
  const [passwordParams, setPasswordParams] = useState(initState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    // const { name, value } = e.target;
    // setPasswordParams((prev) => ({ ...prev, [name]: value }));
    passwordParams[e.target.name] = e.target.value;
    setPasswordParams({ ...passwordParams });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await modifyPassword({
        ...passwordParams,
        id: loginInfo.id,
      });
      console.log(response);
      if (response.status === 200) {
        alert("비밀번호가 성공적으로 변경되었습니다.");
        navigate("/"); // 홈페이지로 리다이렉트
      } else {
        alert("비밀번호 변경에 실패하였습니다.");
      }
    } catch (error) {
      console.log(error);
      alert("비밀번호 변경에 실패하였습니다.");
    }
  };
  // const handleSubmit = (e) => {
  //   console.log(loginInfo.id);
  //   setPasswordParams["id"] = loginInfo.id;
  //   e.preventDefault();

  //   // 여기에 비밀번호 변경 로직을 구현합니다.
  //   // API 호출 등의 작업을 수행합니다.
  //   console.log("비밀번호 변경 시도", passwordParams);
  //   // modifyPassword(passwordParams)
  //   //   .then((response) => {
  //   //     console.log(response);
  //   //     if (response.status === 200) {
  //   //       alert("비밀번호가 성공적으로 변경되었습니다.");
  //   //       //navigate("/"); // 홈페이지로 리다이렉트
  //   //     } else {
  //   //       alert("비밀번호 변경에 실패하였습니다.");
  //   //     }
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error);
  //   //     alert("비밀번호 변경에 실패하였습니다.");
  //   //   });

  //   // 예시: 비밀번호 변경 성공 시
  //   // alert("비밀번호가 성공적으로 변경되었습니다.");
  //   // navigate("/"); // 홈페이지로 리다이렉트
  // };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <StyledPaper elevation={6}>
          <StyledAvatar>
            <LockOutlinedIcon fontSize="large" />
          </StyledAvatar>
          <Typography component="h1" variant="h5">
            비밀번호 변경
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {/* <TextField
              margin="normal"
              required
              fullWidth
              name="currentPassword"
              label="현재 비밀번호"
              type="password"
              id="currentPassword"
              autoComplete="current-password"
              value={passwordParams.currentPassword}
              onChange={handleChange}
            /> */}
            <TextField
              margin="normal"
              required
              fullWidth
              name="newPassword"
              label="새 비밀번호"
              type="password"
              id="newPassword"
              autoComplete="new-password"
              value={passwordParams.newPassword}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmNewPassword"
              label="새 비밀번호 확인"
              type="password"
              id="confirmNewPassword"
              autoComplete="new-password"
              value={passwordParams.confirmNewPassword}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              비밀번호 변경
            </Button>
          </Box>
        </StyledPaper>
      </Container>
    </ThemeProvider>
  );
};

export default PasswordChangeComponent;
