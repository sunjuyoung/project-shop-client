import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "white", color: "black", boxShadow: 1 }}
    >
      <Toolbar className="flex justify-between">
        <Typography variant="h6">쇼핑몰</Typography>
        <Box className="flex items-center space-x-4">
          <Button color="inherit">홈</Button>
          <Button color="inherit">쇼핑</Button>
          <Button color="inherit">딜</Button>
          <Button color="inherit">연락처</Button>
          <IconButton edge="end" color="inherit" aria-label="cart">
            <FaShoppingCart />
          </IconButton>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="account"
            onClick={handleMenu}
          >
            <FaUserCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>프로필</MenuItem>
            <MenuItem onClick={handleClose}>내 계정</MenuItem>
            <MenuItem onClick={handleClose}>로그아웃</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
