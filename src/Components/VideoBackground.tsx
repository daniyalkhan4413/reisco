import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import videoFile from "../assets/Video.mp4";

const VideoBackground: React.FC = () => {
  return (
    <Box sx={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Blue Overlay */}
     <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />  

      {/* Foreground Content */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingLeft: { xs: 4, md: 12 },
          paddingRight: 4,
          zIndex: 2,
        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.5rem", md: "4rem" },
              color: "#ffffff",
              maxWidth: "600px",
              lineHeight: 1.2,
            }}
          >
            Adapting logistics to meet tomorrow’s challenges.
          </Typography>

          <Button
            component={Link}
            to="Get-your-Quote"
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
            Get A Quote →
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoBackground;
