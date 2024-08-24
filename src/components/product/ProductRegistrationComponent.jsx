// src/components/ProductRegistrationComponent.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  CssBaseline,
  Grid,
  Paper,
  ThemeProvider,
  createTheme,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  ImageList,
  ImageListItem,
} from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { styled } from "@mui/system";
import { postAdd } from "../../api/productApi";
import FetchingModal from "../common/FetchingModal";
import ResultModal from "../common/ResultModal";

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

const ProductRegistrationComponent = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stockQuantity: "",
    categoryId: "",
    files: [],
  });
  const [fetching, setFetching] = useState(false);
  const [previews, setPreviews] = useState([]);
  const [result, setResult] = useState(null);
  const uploadRef = useRef();

  useEffect(() => {
    // 파일이 변경될 때마다 미리보기 생성
    const objectUrls = product.files.map((file) => URL.createObjectURL(file));
    setPreviews(objectUrls);

    // 컴포넌트가 언마운트되면 URL 객체 해제
    return () => objectUrls.forEach((url) => URL.revokeObjectURL(url));
  }, [product.files]);

  const handleChange = (e) => {
    // const { name, value } = event.target;
    // setFormData((prev) => ({
    //   ...prev,
    //   [name]: value,
    // }));
    product[e.target.name] = e.target.value;
    setProduct({ ...product });
  };

  const handleFileChange = (event) => {
    setProduct((prev) => ({
      ...prev,
      files: Array.from(event.target.files),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const files = uploadRef.current.files;

    //   const files = product.files;

    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("stockQuantity", product.stockQuantity);
    formData.append("categoryId", product.categoryId);

    postAdd(formData);
  };

  const closeModal = () => {
    setResult(null);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        {result ? (
          <ResultModal
            title="상품 등록"
            content={result.content}
            callbackFn={closeModal}
          />
        ) : (
          <></>
        )}

        <CssBaseline />
        <StyledPaper elevation={6}>
          <StyledAvatar>
            <AddBoxIcon fontSize="large" />
          </StyledAvatar>
          <Typography component="h1" variant="h5">
            상품 등록
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              {/* 기존 필드들은 그대로 유지 */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="상품명"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="description"
                  label="상품 설명"
                  name="description"
                  multiline
                  rows={4}
                  value={product.description}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="price"
                  label="가격"
                  name="price"
                  type="number"
                  value={product.price}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="stockQuantity"
                  label="재고 수량"
                  name="stockQuantity"
                  type="number"
                  value={product.stockQuantity}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="category-label">카테고리</InputLabel>
                  <Select
                    labelId="category-label"
                    id="categoryId"
                    name="categoryId"
                    value={product.categoryId}
                    onChange={handleChange}
                    label="카테고리"
                  >
                    <MenuItem value={14}>카테고리 1</MenuItem>
                    <MenuItem value={15}>카테고리 2</MenuItem>
                    <MenuItem value={16}>카테고리 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="raised-button-file"
                  ref={uploadRef}
                  multiple
                  type="file"
                  onChange={handleFileChange}
                />
                <label htmlFor="raised-button-file">
                  <Button variant="contained" component="span">
                    상품 이미지 업로드
                  </Button>
                </label>
                <Typography variant="caption" display="block" gutterBottom>
                  {product.files.length > 0
                    ? `${product.files.length}개의 파일이 선택됨`
                    : "파일을 선택하세요"}
                </Typography>
              </Grid>
              {previews.length > 0 && (
                <Grid item xs={12}>
                  <ImageList
                    sx={{ width: "100%", height: 200 }}
                    cols={3}
                    rowHeight={164}
                  >
                    {previews.map((item, index) => (
                      <ImageListItem key={index}>
                        <img
                          src={item}
                          alt={`상품 이미지 ${index + 1}`}
                          loading="lazy"
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </Grid>
              )}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              상품 등록하기
            </Button>
          </Box>
        </StyledPaper>
      </Container>
    </ThemeProvider>
  );
};

export default ProductRegistrationComponent;
