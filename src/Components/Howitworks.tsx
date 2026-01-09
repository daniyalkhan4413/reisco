import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
  Stack,
} from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const steps = [
  {
    title: "Request a Quote",
    description:
      "Submit your shipping details quickly and easily using our online form.",
    icon: <PaymentIcon sx={{ fontSize: 32 }} />,
  },
  {
    title: "We Plan Your Route",
    description:
      "Our team optimizes routes for the fastest and safest delivery.",
    icon: <LocalShippingIcon sx={{ fontSize: 32 }} />,
  },
  {
    title: "Real-Time Tracking",
    description:
      "Track your shipment live with our real-time GPS updates.",
    icon: <CheckCircleOutlineIcon sx={{ fontSize: 32 }} />,
  },
  {
    title: "24/7 Customer Support",
    description:
      "Get assistance anytime from our expert support team.",
    icon: <SupportAgentIcon sx={{ fontSize: 32 }} />,
  },
];

const HowItWorks: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        py: 10,
        px: isSmallScreen ? 2 : 6,
        color: "#e3f2fd",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url('/assets/containers.jpg')`,
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
          backgroundColor: "rgba(13, 71, 161, 0.85)", // overlay
          zIndex: -1,
        },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 700,
            mb: 4,
            fontSize: { xs: "2rem", md: "3rem" },
            color: "#fff",
          }}
        >
          How It Works
        </Typography>

        <Typography
          variant="body1"
          align="center"
          sx={{
            color: "rgba(255, 255, 255, 0.75)",
            maxWidth: 600,
            mx: "auto",
            mb: 6,
          }}
        >
          We make shipping simple and transparent from quote to delivery.
        </Typography>

        <Stack
          direction={isSmallScreen ? "column" : "row"}
          spacing={isSmallScreen ? 4 : 6}
          alignItems="flex-start"
          justifyContent="center"
        >
          {steps.map((step, i) => (
            <Stack
              key={i}
              spacing={2}
              sx={{
                backgroundColor: activeStep === i ? "#ffc107" : "#1565c0",
                p: 3,
                borderRadius: 2,
                flex: 1,
                minWidth: 200,
                transition: "all 0.3s",
                boxShadow: activeStep === i ? "0 4px 20px rgba(0,0,0,0.3)" : "none",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  bgcolor: "#fff",
                  color: activeStep === i ? "#ffc107" : "#0d47a1",
                  mb: 1,
                }}
              >
                {step.icon}
              </Box>
              <Typography variant="h6" fontWeight={700} color="#fff">
                {step.title}
              </Typography>
              <Typography variant="body2" color="rgba(255,255,255,0.9)">
                {step.description}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default HowItWorks;
