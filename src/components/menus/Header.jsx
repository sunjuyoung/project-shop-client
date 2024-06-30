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
  List,
  ListItem,
  ListItemText,
  Collapse,
  InputBase,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { alpha, styled } from "@mui/material/styles";

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
  const [anchorEl, setAnchorEl] = useState(null);
  const [categoryAnchorEl, setCategoryAnchorEl] = useState(null);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [openSubCategory, setOpenSubCategory] = useState(null);

  const loginState = useSelector((state) => state.loginSlice);
  const navigate = useNavigate();

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
          <Typography variant="h6">SHOP</Typography>
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
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem>프로필</MenuItem>
            <MenuItem>내 계정</MenuItem>
            <MenuItem>로그아웃</MenuItem>
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
          >
            <List>
              <ListItem button onClick={() => handleSubCategoryToggle("의류")}>
                <ListItemText primary="의류" />
                {openSubCategory === "의류" ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse
                in={openSubCategory === "의류"}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  <ListItem button sx={{ pl: 4 }}>
                    <ListItemText primary="티셔츠" />
                  </ListItem>
                  <ListItem button sx={{ pl: 4 }}>
                    <ListItemText primary="바지" />
                  </ListItem>
                  <ListItem button sx={{ pl: 4 }}>
                    <ListItemText primary="자켓" />
                  </ListItem>
                </List>
              </Collapse>

              <ListItem button onClick={() => handleSubCategoryToggle("신발")}>
                <ListItemText primary="신발" />
                {openSubCategory === "신발" ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse
                in={openSubCategory === "신발"}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  <ListItem button sx={{ pl: 4 }}>
                    <ListItemText primary="운동화" />
                  </ListItem>
                  <ListItem button sx={{ pl: 4 }}>
                    <ListItemText primary="부츠" />
                  </ListItem>
                  <ListItem button sx={{ pl: 4 }}>
                    <ListItemText primary="샌들" />
                  </ListItem>
                </List>
              </Collapse>

              <ListItem button onClick={() => handleSubCategoryToggle("가방")}>
                <ListItemText primary="가방" />
                {openSubCategory === "가방" ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse
                in={openSubCategory === "가방"}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  <ListItem button sx={{ pl: 4 }}>
                    <ListItemText primary="백팩" />
                  </ListItem>
                  <ListItem button sx={{ pl: 4 }}>
                    <ListItemText primary="핸드백" />
                  </ListItem>
                  <ListItem button sx={{ pl: 4 }}>
                    <ListItemText primary="클러치" />
                  </ListItem>
                </List>
              </Collapse>

              <ListItem
                button
                onClick={() => handleSubCategoryToggle("액세서리")}
              >
                <ListItemText primary="액세서리" />
                {openSubCategory === "액세서리" ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )}
              </ListItem>
              <Collapse
                in={openSubCategory === "액세서리"}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  <ListItem button sx={{ pl: 4 }}>
                    <ListItemText primary="모자" />
                  </ListItem>
                  <ListItem button sx={{ pl: 4 }}>
                    <ListItemText primary="목걸이" />
                  </ListItem>
                  <ListItem button sx={{ pl: 4 }}>
                    <ListItemText primary="귀걸이" />
                  </ListItem>
                </List>
              </Collapse>
            </List>
          </Paper>
        </ClickAwayListener>
      )}
    </AppBar>
  );
};

export default Header;
