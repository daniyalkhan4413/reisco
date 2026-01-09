import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import whiteglove from "../assets/whiteglove.jpg";
import serviceImg3 from "../assets/plastic.jpg";
import serviceImg2 from "../assets/service3.jpg";
import serviceImg4 from "../assets/service4.jpg";
import serviceImg5 from "../assets/service5.jpg";
import serviceImg6 from "../assets/service6.jpg";
import serviceImg7 from "../assets/service7.jpg";
import serviceImg8 from "../assets/service8.jpg";

const services = [
  {
    title: "White Glove Delivery Service",
    description:
      "Our white glove delivery service provides meticulous care, specialized handling, and placement of your high-value and fragile items. From unpacking to debris removal, our team ensures your goods arrive safely, are properly set up, and meet your exact specifications.",
    image: whiteglove,
  },
  {
    title: "General Freight Transportation",
    description:
      "We offer dependable general freight transportation with flexible pick-up and delivery schedules. Our experienced logistics team optimizes routing to ensure timely arrivals, while our modern fleet guarantees the safe and efficient movement of your cargo across diverse destinations.",
    image: serviceImg4,
  },
  {
    title: "Plastic Container Shipping",
    description:
      "Our plastic container shipping service is designed for businesses that need reliable, secure, and scalable container transport. Whether for bulk goods, industrial use, or specialized items, we handle every shipment with precision to ensure containers arrive intact and on time.",
    image: serviceImg3,
  },
  {
    title: "Dry Food Product Logistics",
    description:
      "We specialize in the safe, compliant transportation of dry food products, adhering to industry standards for hygiene and temperature control. Our logistics network ensures fast, efficient deliveries while maintaining the integrity and freshness of your food shipments.",
    image: serviceImg6,
  },
  {
    title: "Electronic Supply Chain Solutions",
    description:
      "Our electronic supply chain solutions offer secure, traceable, and efficient handling of sensitive electronic components. We manage every aspect of the supply chain, from inventory tracking to safe transport, reducing delays and preventing damage throughout the process.",
    image: serviceImg2,
  },
  {
    title: "Empty Pallet Management",
    description:
      "Our empty pallet management program helps businesses reduce waste and optimize space. We handle the collection, return, and redistribution of empty pallets, providing a sustainable and cost-effective solution to streamline your supply chain operations.",
    image: serviceImg7,
  },
  {
    title: "Dedicated Load Services",
    description:
      "Our dedicated load services provide exclusive transportation for priority or sensitive shipments. With direct delivery, no transfers, and personalized scheduling, we offer peace of mind for customers requiring specialized attention and time-sensitive logistics.",
    image: serviceImg5,
  },
  {
    title: "Short Term Storage Solutions",
    description:
      "We offer flexible short-term storage solutions with secure, climate-controlled facilities. Whether you need temporary storage during transit, seasonal inventory space, or overflow capacity, our storage services are tailored to meet your changing business needs.",
    image: serviceImg8,
  },
];

const ServicesSection: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        py: 12,
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
          backgroundImage: `url('')`,
          backgroundSize: "Contain",
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
          backgroundColor: "#0d47a1",
          zIndex: -1,
          opacity: 0.9,
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
          Our Services
        </Typography>

        {services.map((service, index) => (
          <Grid
            container
            spacing={6}
            alignItems="center"
            direction={isSmallScreen ? "column" : index % 2 === 0 ? "row" : "row-reverse"}
            key={index}
            sx={{ mb: 6 }}
          >
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={service.image}
                alt={service.title}
                sx={{
                  width: "100%",
                  border: "3px solid #42a5f5",
                  borderRadius: 2,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                {service.title}
              </Typography>
              <Typography sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                {service.description}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Container>
    </Box>
  );
};

export default ServicesSection;
