import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  ClickAwayListener,
  Paper,
  Badge,
  InputBase,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { alpha, styled } from "@mui/material/styles";
import { logout } from "../../slice/loginSlice";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius * 2, // More rounded corners
  backgroundColor: alpha(theme.palette.common.white, 1), // White background
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.9),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1), // Adjust spacing to make it closer to SHOP
    width: "auto",
  },
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // Light shadow for better visibility
  border: `1px solid ${alpha(theme.palette.common.black, 0.15)}`, // Add border for distinction
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30ch", // Make the input longer
    },
  },
}));

const Header = () => {
  const [cartItemCount, setCartItemCount] = useState(1); // 예시로 0으로 초기화
  const [anchorEl, setAnchorEl] = useState(null);
  const [categoryAnchorEl, setCategoryAnchorEl] = useState(null);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [openSubCategory, setOpenSubCategory] = useState(null);

  const loginState = useSelector((state) => state.loginSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMenu = (event) => {
    if (loginState.email === "") {
      navigate("/login");
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleCategoryMenuToggle = (event) => {
    setIsCategoryMenuOpen((prev) => !prev);
    setCategoryAnchorEl(event.currentTarget);
  };

  const handleCategoryMenuClose = () => {
    setIsCategoryMenuOpen(false);
    setCategoryAnchorEl(null);
  };

  const handleSubCategoryToggle = (category) => {
    if (openSubCategory === category) {
      setOpenSubCategory(null);
    } else {
      setOpenSubCategory(category);
    }
  };

  const handleMoveHome = () => {
    navigate("/");
  };

  const handleMoveCart = () => {
    navigate("/cart");
  };

  const handleLogout = () => {
    setAnchorEl(null);
    dispatch(logout());
    navigate("/login");
  };

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "white", color: "black", boxShadow: 1 }}
    >
      <Toolbar className="flex justify-between">
        <Box className="flex items-center space-x-1">
          {" "}
          {/* Adjust spacing here */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleCategoryMenuToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography onClick={handleMoveHome} variant="h6">
            <button>SHOP</button>
          </Typography>
        </Box>

        {/* Search Bar */}
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        <Box className="flex items-center space-x-4">
          <IconButton
            edge="end"
            color="inherit"
            aria-label="cart"
            onClick={handleMoveCart}
          >
            <Badge
              badgeContent={cartItemCount}
              color="error"
              sx={{
                "& .MuiBadge-badge": {
                  right: -3,
                  top: 3,
                  border: `2px solid white`,
                  padding: "0 4px",
                },
              }}
            >
              <FaShoppingCart />
            </Badge>
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
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
            PaperProps={{
              style: {
                marginTop: "5px",
                marginLeft: "20px",
                borderRadius: "10px",
              },
            }}
          >
            <MenuItem>프로필</MenuItem>
            <MenuItem>내 계정</MenuItem>
            <MenuItem onClick={handleLogout}>로그아웃</MenuItem>
          </Menu>
        </Box>
      </Toolbar>

      {/* Category Menu */}
      {isCategoryMenuOpen && (
        <ClickAwayListener onClickAway={handleCategoryMenuClose}>
          <Paper
            sx={{
              position: "absolute",
              top: 64,
              left: 10, // Adjust positioning as needed
              width: 300, // Set a fixed width for the category menu
              zIndex: 10,
              bgcolor: "background.paper",
            }}
          ></Paper>
        </ClickAwayListener>
      )}
    </AppBar>
  );
};

export default Header;
