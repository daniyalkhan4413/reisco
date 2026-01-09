import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import notFoundBackground from "../assets/404container.jpg"; // ✅ Replace with your actual image filename

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
        px: 3,
        backgroundImage: `url(${notFoundBackground})`, // ✅ Local image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(13, 71, 161, 0.50)", // 🔵 semi-transparent blue overlay
          zIndex: 0,
        }}
      />

      {/* Content */}
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1, color: "#e3f2fd" }}>
        <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: "4rem", md: "6rem" }, mb: 3 }}>
          404
        </Typography>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Page Not Found
        </Typography>
        <Typography sx={{ fontSize: "1.2rem", mb: 4 }}>
          Sorry, the page you are looking for doesn't exist or has been moved.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
          sx={{ px: 4, py: 1.5, fontSize: "1rem", borderRadius: 2 }}
        >
          Go Back Home
        </Button>
      </Container>
    </Box>
  );
};

export default NotFoundPage;
