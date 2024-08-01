import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

const StyledAvatar = styled(Box)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: "#ffff", // 직접 색상 지정
  width: theme.spacing(7),
  height: theme.spacing(7),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
}));

export default StyledAvatar;
