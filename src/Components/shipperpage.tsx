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

// Image assets
import visibilityImage from "../assets/trackingphoto.jpg";
import reliabilityImage from "../assets/truckfleet.jpg";
import savingsImage from "../assets/cost-savings.jpg";
import bgImage from "../assets/truckbackground.jpg";

const FeatureBlock = ({
  title,
  description,
  image,
  reverse,
}: {
  title: string;
  description: React.ReactNode;
  image: string;
  reverse?: boolean;
}) => (
  <Grid
    container
    spacing={6}
    alignItems="center"
    direction={reverse ? "row-reverse" : "row"}
    sx={{ mb: 14 }}
  >
    <Grid item xs={12} md={6}>
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: "100%",
          borderRadius: 2,
          border: "3px solid #42a5f5",
          boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
        }}
      />
    </Grid>

    <Grid item xs={12} md={6}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, mb: 2, color: "#ffffff" }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: "1.1rem",
          lineHeight: 1.9,
          color: "#bbdefb",
        }}
      >
        {description}
      </Typography>
    </Grid>
  </Grid>
);

const ShippersPage: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        py: 14,
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
        {/* Hero */}
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
          Logistics That Deliver for Your Business
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            maxWidth: "850px",
            mx: "auto",
            mb: 12,
            fontSize: "1.1rem",
            color: "#bbdefb",
            lineHeight: 1.8,
          }}
        >
          Whether you ship daily or occasionally, we provide the visibility,
          reliability, and control you need across your entire supply chain —
          all built to support your growth.
        </Typography>

        {/* Features */}
        <FeatureBlock
          title="Real-Time Visibility"
          image={visibilityImage}
          description={
            <>
              Track every shipment from pickup to delivery using GPS-powered
              systems. Receive real-time updates, accurate ETAs, and complete
              transparency — eliminating guesswork and delays.
            </>
          }
        />

        <FeatureBlock
          title="Reliable Capacity, Every Time"
          image={reliabilityImage}
          reverse
          description={
            <>
              Our vetted carrier network ensures dependable capacity without
              last-minute cancellations. We match your freight with the right
              equipment — backed by long-term carrier partnerships.
            </>
          }
        />

        <FeatureBlock
          title="Optimized for Cost Savings"
          image={savingsImage}
          description={
            <>
              From route optimization to flexible LTL options, we help reduce
              transportation costs while maintaining high delivery standards.
              Smarter planning means better rates.
            </>
          }
        />

        {/* CTA */}
        <Box textAlign="center" mt={10}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 2, color: "#ffffff" }}
          >
            Start Shipping with Confidence
          </Typography>

          <Typography
            sx={{
              fontSize: "1.1rem",
              color: "#bbdefb",
              mb: 4,
            }}
          >
            Our logistics experts are ready to build a solution tailored to
            your freight needs.
          </Typography>

          <Button
            variant="contained"
            size="large"
            href="/Get-your-Quote"
            sx={{
              backgroundColor: "#42a5f5",
              px: 5,
              py: 1.6,
              fontWeight: 700,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#1e88e5",
              },
            }}
          >
            Request a Quote
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ShippersPage;
