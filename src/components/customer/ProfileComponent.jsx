// ProfileComponent.jsx
import React, { useState } from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Grid,
  Box,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const ProfileButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  borderRadius: theme.shape.borderRadius * 5,
  padding: theme.spacing(1, 4),
}));

const ProfileComponent = () => {

  

  const [profile, setProfile] = useState({
    name: "홍길동",
    email: "hong@example.com",
    password: "********",
    phone: "010-1234-5678",
    receiveEmails: true,
  });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setProfile((prev) => ({
      ...prev,
      [name]: name === "receiveEmails" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 프로필 업데이트 로직
    console.log("Updated profile:", profile);
  };

  return (
    <StyledPaper elevation={0}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <StyledTextField
              fullWidth
              label="이름"
              name="name"
              value={profile.name}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledTextField
              fullWidth
              label="이메일"
              name="email"
              value={profile.email}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledTextField
              fullWidth
              label="비밀번호"
              name="password"
              type="password"
              value={profile.password}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledTextField
              fullWidth
              label="연락처"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Box mt={4}>
          <Divider />
          <Box mt={2}>
            <FormControlLabel
              control={
                <Switch
                  checked={profile.receiveEmails}
                  onChange={handleChange}
                  name="receiveEmails"
                  color="primary"
                />
              }
              label="이메일 수신 동의"
            />
          </Box>
        </Box>

        <Box mt={4} textAlign="center">
          <ProfileButton
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            프로필 업데이트
          </ProfileButton>
        </Box>
      </form>
    </StyledPaper>
  );
};

export default ProfileComponent;
