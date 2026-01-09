import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import teamImage1 from "../assets/support.png";
import teamImage2 from "../assets/truckdriver.jpg";

const AboutUsPage: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        py: 12,
        px: isSmallScreen ? 2 : 6,
        color: "#e3f2fd", // Light blue text
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
          backgroundColor: "#0d47a1", // dark blue overlay
          zIndex: -1,
        },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "3.5rem" },
            textAlign: "center",
            mb: 8,
            color: "#ffffff",
          }}
        >
          Real-World Experience Behind Every Load
        </Typography>

        <Grid container spacing={6} alignItems="center">
          {/* Row 1: Image Left, Text Right */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={teamImage1}
              alt="Support team"
              sx={{
                width: "100%",
                border: "3px solid #42a5f5",
                borderRadius: 2,
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              More Than Just Logistics
            </Typography>
            <Typography sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
              We've logged the miles and hauled the freight — literally. Our company was built by people who've
              operated box trucks, navigated tight docks, and met tight delivery windows.
              <br /><br />
              That experience fuels everything we do today, from smarter dispatching to responsive customer service.
              We're not guessing what works — we've lived it.
            </Typography>
          </Grid>

          {/* Row 2: Text Left, Image Right */}
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              Customer-Centered, Driver-Informed
            </Typography>
            <Typography sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
              We believe great logistics starts with understanding what happens on the ground. That's why our approach
              combines tech, transparency, and hands-on experience. We know how to build a process that works —
              because we've been the ones executing it.
              <br /><br />
              From local runs to long-haul dispatch, we deliver more than goods — we deliver peace of mind.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Box
              component="img"
              src={teamImage2}
              alt="Truck driver"
              sx={{
                width: "100%",
                border: "3px solid #42a5f5",
                borderRadius: 2,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUsPage;
