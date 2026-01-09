import React from "react";
import { Box, Typography, Button, useTheme, useMediaQuery, Container } from "@mui/material";
import backgroundImage from "../assets/Containerback.jpg"; // Use your uploaded image path here
import { Link } from "react-router-dom";

const JoinTeamHero: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
        textAlign: isSmallScreen ? "center" : "left",
        overflow: "hidden",
        padding: isSmallScreen ? "4rem 1rem" : "4rem",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -2,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(13, 71, 161, 0.8)", // Dark blue overlay with opacity
          zIndex: -1,
        },
      }}
    >
      <Container maxWidth="md">
<Typography
  variant="h3"
  sx={{
    fontWeight: 700,
    fontSize: { xs: "2rem", md: "3.5rem" },
    mb: 4,
  }}
>
  Reliable, flexible logistics solutions—built to move your business forward.
</Typography>

          <Button
            component={Link}
            to="services"
            variant="contained"
            sx={{
              mt: 4,
              backgroundColor: "#42a5f5", // 🔵 Blue
              color: "#fff",
              fontWeight: 700,
              fontSize: "1rem",
              px: 4,
              py: 1.5,
              textTransform: "none",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#1e88e5",
              },
            }}
          >
             Let’s Get Moving →
          </Button>
      </Container>
    </Box>
  );
};

export default JoinTeamHero;
