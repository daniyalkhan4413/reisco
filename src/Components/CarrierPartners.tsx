import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import carrierImage from "../assets/truckdriver.jpg";
import bgImage from "../assets/Containerback.jpg";

const CarrierPartnersPage: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        py: 12,
        px: isSmallScreen ? 2 : 6,
        color: "#e3f2fd",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -2,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(13, 71, 161, 0.9)",
          zIndex: -1,
        },
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "3.5rem" },
            textAlign: "center",
            mb: 3,
            color: "#ffffff",
          }}
        >
          Become a Carrier Partner
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            maxWidth: "800px",
            mx: "auto",
            mb: 8,
            fontSize: "1.1rem",
            color: "#bbdefb",
            lineHeight: 1.8,
          }}
        >
          Join our trusted carrier network and gain access to consistent freight,
          fast payments, and 24/7 operational support. We build partnerships that
          keep your trucks moving and your business growing.
        </Typography>

        {/* Content Row */}
        <Grid container spacing={6} alignItems="center">
          {/* Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={carrierImage}
              alt="Carrier Partner"
              sx={{
                width: "100%",
                border: "3px solid #42a5f5",
                borderRadius: 2,
                boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
              }}
            />
          </Grid>

          {/* Text */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              Why Partner With Us?
            </Typography>

            <Typography sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
              We understand the challenges carriers face because we come from the
              industry ourselves. Our focus is simple — reliable freight, clear
              communication, and on-time payments.
              <br /><br />
              Whether you operate box trucks, dry vans, or semis, we work as an
              extension of your business, helping reduce downtime and maximize
              revenue.
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{
                mt: 4,
                px: 4,
                py: 1.5,
                fontWeight: 600,
                backgroundColor: "#42a5f5",
                "&:hover": {
                  backgroundColor: "#1e88e5",
                },
              }}
            >
              Get Onboarded
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CarrierPartnersPage;
