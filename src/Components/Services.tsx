import React from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  Stack,
} from "@mui/material";

import serviceImage from "../assets/freight.png";
import backgroundImg from "../assets/shipment.jpg";
import { Link } from "react-router-dom";

const services = [
  "Reliable freight services across the country with real-time tracking and timely delivery.",
  "Secure and spacious warehousing solutions for short and long-term storage.",
  "Efficient dispatch services to manage your fleet and ensure route optimization.",
  "Round-the-clock customer support to assist you with any logistics-related issues.",
  "Advanced route planning tools to reduce travel time and fuel costs.",
  "Comprehensive insurance options to protect your valuable goods in transit.",
];

const Services: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
 

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        py: 8,
        px: isSmallScreen ? 2 : 6,
        color: "#e3f2fd", // Light blue text for contrast
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${backgroundImg})`,
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
          backgroundColor: "rgba(13, 71, 161, 0.80)", // 🔵 blue overlay
          zIndex: -1,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 6,
        }}
      >
        {/* Left Section */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Seamless shipping you can trust — with end-to-end tracking and accountability
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
              marginBottom : 2,
              px: 4,
              py: 1.5,
              textTransform: "none",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#1e88e5",
              },
            }}
          >
            Ship With Us →
          </Button>

          <Stack spacing={4} sx={{ borderLeft: "3px solid #42a5f5", pl: 3 }}>
            {services.map((service, index) => (
              <Box key={index} sx={{ position: "relative" }}>
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    backgroundColor: "#42a5f5",
                    borderRadius: "50%",
                    position: "absolute",
                    left: "-29px",
                    top: "6px",
                  }}
                />
                <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
                  {service}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Right Section - Image */}
        <Box
          component="img"
          src={serviceImage}
          alt="Service Visual"
          sx={{
            flex: 1,
            maxWidth: "500px",
            width: "100%",
            border: "3px solid #42a5f5",
            borderRadius: 2,
          }}
        />
      </Box>
    </Box>
  );
};

export default Services;
