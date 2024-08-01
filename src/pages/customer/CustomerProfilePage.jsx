// ProfilePage.jsx
import React from "react";
import { Container, Typography, Box } from "@mui/material";
import ProfileComponent from "../../components/customer/ProfileComponent";
import BasicLayout from "../../layouts/BasicLayout";

const CustomerProfilePage = () => {
  return (
    <BasicLayout>
      <Container maxWidth="md">
        <Box my={4}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            align="center"
            sx={{ fontWeight: "bold" }}
          >
            내 프로필
          </Typography>
          <ProfileComponent />
        </Box>
      </Container>
    </BasicLayout>
  );
};

export default CustomerProfilePage;
