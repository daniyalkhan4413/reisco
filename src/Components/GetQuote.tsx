import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  useTheme,
  useMediaQuery,
  Grid,
  Alert,
  MenuItem,
} from "@mui/material";

const services = [
  "Freight Shipping",
  "Warehousing",
  "Dispatch & Coordination",
  "24/7 Support",
  "Route Optimization",
  "Cargo Insurance",
];

const GetQuote: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    details: "",
  });

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      details: "",
    });
  };

  return (
    <Box
      sx={{
        py: 8,
        px: isSmallScreen ? 2 : 6,
        minHeight: "100vh",
        backgroundColor: "#002b24",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 900 }}>
        <Typography
          variant="h2"
          align="center"
          sx={{
            color: "#e8f5e9",
            fontWeight: 700,
            mb: 4,
            fontSize: { xs: "2.5rem", md: "4rem" },
            textTransform: "uppercase",
          }}
        >
          Get Your Free Quote
        </Typography>

        <Typography
          variant="h5"
          align="center"
          sx={{
            color: "#c8e6c9",
            fontWeight: 400,
            mb: 6,
            fontSize: { xs: "1rem", md: "1.25rem" },
            lineHeight: 1.8,
            maxWidth: 700,
            mx: "auto",
          }}
        >
          Fill out the form below and our team will get back to you with a customized quote tailored to your logistics needs.
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Card
            sx={{
              width: isSmallScreen ? '100%' : 600,
              maxWidth: isSmallScreen ? 240 : 600, // Ultra-narrow mobile width
              p: isSmallScreen ? 5 : 8,
              backgroundColor: "#003d33",
              borderRadius: 3,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
              color: "#fff",
            }}
          >
            {submitted && (
              <Alert severity="success" sx={{ mb: 3 }}>
                Thank you! Your request has been received.
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    required
                    InputLabelProps={{ style: { color: "#a5d6a7" } }}
                    InputProps={{
                      style: { color: "#fff" },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    required
                    InputLabelProps={{ style: { color: "#a5d6a7" } }}
                    InputProps={{
                      style: { color: "#fff" },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{ style: { color: "#a5d6a7" } }}
                    InputProps={{
                      style: { color: "#fff" },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Interested Service"
                    name="service"
                    select
                    value={formData.service}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    required
                    InputLabelProps={{ style: { color: "#a5d6a7" } }}
                    InputProps={{
                      style: { color: "#fff" },
                    }}
                  >
                    {services.map((service) => (
                      <MenuItem key={service} value={service}>
                        {service}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Additional Details"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    multiline
                    minRows={4}
                    InputLabelProps={{ style: { color: "#a5d6a7" } }}
                    InputProps={{
                      style: { color: "#fff" },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    size="large"
                    type="submit"
                    fullWidth={isSmallScreen} // Full width on mobile
                    sx={{
                      mt: 2,
                      px: isSmallScreen ? 5 : 8,
                      py: 2,
                      fontWeight: 600,
                      textTransform: "none",
                      borderRadius: "8px",
                      fontSize: "1rem",
                      backgroundColor: "#66bb6a",
                      color: "#003d33",
                      boxShadow: "0px 4px 12px rgba(0,0,0,0.4)",
                      "&:hover": {
                        backgroundColor: "#388e3c",
                        color: "#e8f5e9",
                      },
                    }}
                  >
                    Request Quote
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default GetQuote;
