import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
  IconButton,
} from "@mui/material";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getChildernCategory } from "../../api/categoryApi";

const categories = [
  {
    name: "음료",
    subcategories: ["탄산음료", "주스", "물"],
  },
  {
    name: "패션",
    subcategories: ["남성의류", "여성의류", "신발"],
  },
  {
    name: "전자제품",
    subcategories: ["모바일", "컴퓨터", "가전제품"],
  },
];

const CategoryMenu = () => {
  //getChildernCategory
  const {
    data: childCategory,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useQuery({
    queryKey: ["childernCategory"],
    queryFn: getChildernCategory(),
    staleTime: Infinity,
  });

  if (isError) {
    console.log(error);
  }

  useEffect(() => {
    if (isSuccess) {
      console.log(childCategory);
    }
  }, [childCategory, isSuccess]);

  const [anchorEl, setAnchorEl] = useState(null);
  const [subcategories, setSubcategories] = useState([]);

  const handleClick = (event, subcategories) => {
    setAnchorEl(event.currentTarget);
    setSubcategories(subcategories);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSubcategories([]);
  };

  return (
    <AppBar position="static" className="bg-white shadow">
      <Toolbar className="flex justify-between">
        <Typography variant="h6" className="text-black">
          쇼핑몰
        </Typography>
        <Box className="flex items-center space-x-4">
          {categories.map((category) => (
            <Button
              key={category.name}
              color="inherit"
              className="text-black"
              onClick={(event) => handleClick(event, category.subcategories)}
            >
              {category.name}
            </Button>
          ))}
          <IconButton edge="end" color="inherit" aria-label="cart">
            <FaShoppingCart className="text-black" />
          </IconButton>
          <IconButton edge="end" color="inherit" aria-label="account">
            <FaUserCircle className="text-black" />
          </IconButton>
        </Box>
      </Toolbar>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {subcategories.length > 0 &&
          subcategories.map((subcategory) => (
            <MenuItem key={subcategory} onClick={handleClose}>
              {subcategory}
            </MenuItem>
          ))}
      </Menu>
    </AppBar>
  );
};

export default CategoryMenu;
