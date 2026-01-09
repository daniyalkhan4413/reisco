import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent, Avatar, Rating } from "@mui/material";

type Testimonial = {
  name: string;
  position: string;
  image: string;
  feedback: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Alex Johnson",
    position: "Chief Logistics Officer, HyperDrive Inc.",
    image: "https://randomuser.me/api/portraits/men/1.jpg", // Random Image 1
    feedback: "HyperDrive's logistics operations have never been smoother. A game-changer for our business!",
    rating: 5,
  },
  {
    name: "Emily Davis",
    position: "Director of Marketing, BlueWave Solutions",
    image: "https://randomuser.me/api/portraits/women/2.jpg", // Random Image 2
    feedback: "Absolutely fantastic experience! The team is responsive, and the platform is incredibly intuitive.",
    rating: 4,
  },
  {
    name: "Michael Lee",
    position: "Head of Operations, Quantum Logistics",
    image: "https://randomuser.me/api/portraits/men/3.jpg", // Random Image 3
    feedback: "Reliable, efficient, and exactly what we needed for scaling our operations. I highly recommend it.",
    rating: 4,
  },
];

const Testimonial: React.FC = () => {
  return (
    <Box
      sx={{
        py: 8,
         // Vibrant background color for the section
      }}
    >
      <Container>
       <Typography
  variant="h2"
  align="center"
  sx={{
    color: "#fff",
    fontWeight: 700,
    mb: 4,
    fontSize: { xs: "2.5rem", md: "4rem" },
    textTransform: "uppercase",
  }}
>
          What Our Clients Say
</Typography>
        <Grid container spacing={4} justifyContent="center">
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                  overflow: "hidden",
                  bgcolor: "white",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar
                      src={testimonial.image}
                      alt={testimonial.name}
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        border: "4px solid #1976d2", // Border color for emphasis
                      }}
                    />
                    <Box>
                      <Typography variant="h6" fontWeight={600} color="#1976d2">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.position}
                      </Typography>
                    </Box>
                  </Box>
                  <Box mt={2}>
                    <Rating value={testimonial.rating} readOnly precision={0.5} sx={{ color: "#fbc02d" }} />
                  </Box>
                  <Typography variant="body1" color="text.secondary" mt={2}>
                    "{testimonial.feedback}"
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonial;
