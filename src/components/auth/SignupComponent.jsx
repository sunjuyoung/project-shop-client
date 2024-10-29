import { useState } from "react";
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
  ThemeProvider,
  createTheme,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { styled } from "@mui/system";

const theme = createTheme();

const StyledPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(4),
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  backdropFilter: "blur(10px)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
}));

const StyledAvatar = styled(Box)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: "#ffff",
  width: theme.spacing(7),
  height: theme.spacing(7),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
}));

const SignupComponent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "agreeTerms" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleSocialSignup = () => {
    console.log("Google 회원가입 시도");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <StyledPaper elevation={6}>
          <StyledAvatar>
            <PersonAddIcon fontSize="large" />
          </StyledAvatar>
          <Typography component="h1" variant="h5">
            회원가입
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="이름"
                  autoFocus
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="성"
                  name="lastName"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="이메일 주소"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="비밀번호"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="비밀번호 확인"
                  type="password"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="agreeTerms"
                      color="primary"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                    />
                  }
                  label="이용약관과 개인정보 처리방침에 동의합니다."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              가입하기
            </Button>
            {/* 소셜 로그인 버튼들 */}
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1" align="center" gutterBottom>
                또는 소셜 계정으로 가입하기
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={
                    <img
                      src="/img/btn_naver.png"
                      alt="Naver"
                      style={{ width: "24px" }}
                    />
                  }
                  onClick={() => handleSocialSignup("NAVER")}
                  sx={{
                    backgroundColor: "#03C75A",
                    color: "#ffffff",
                    "&:hover": {
                      backgroundColor: "#02B457",
                    },
                  }}
                >
                  NAVER로 회원가입
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={
                    <img
                      src="/img/btn_kakao.png"
                      alt="Kakao"
                      style={{ width: "24px" }}
                    />
                  }
                  onClick={() => handleSocialSignup("KAKAO")}
                  sx={{
                    backgroundColor: "#FEE500",
                    color: "#000000",
                    "&:hover": {
                      backgroundColor: "#E5D400",
                    },
                  }}
                >
                  KAKAO로 회원가입
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={
                    <img
                      src="/img/btn_google.png"
                      alt="Google"
                      style={{ width: "24px" }}
                    />
                  }
                  onClick={() => handleSocialSignup("Google")}
                  sx={{
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    border: "1px solid #ccc",
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                >
                  Google로 회원가입
                </Button>
              </Box>
            </Box>

            <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
              <Grid item>
                <Link href="/login" variant="body2">
                  이미 계정이 있으신가요? 로그인
                </Link>
              </Grid>
            </Grid>
          </Box>
        </StyledPaper>
      </Container>
    </ThemeProvider>
  );
};

export default SignupComponent;
