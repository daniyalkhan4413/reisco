import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
  Container,
  Snackbar,
  Alert,
  CircularProgress,
  Stack,
  Link,
} from "@mui/material";

import backgroundImage from "../assets/contactus.jpg";

const ContactPage: React.FC = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone Number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const validationErrors = validateForm();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  setLoading(true);
  console.log(formData.phone)
  try {
    await axios.post("https://biancamailserver.vercel.app/api/send-contact", {
      name: formData.fullName,
      email: formData.email,
      phone : formData.phone,
      message: formData.message,
    });

    setSnackbarOpen(true);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      message: "",
    });
  } catch (error) {
    console.error("❌ Failed to submit contact form:", error);
    alert("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <Box
      sx={{
        position: "relative",
        py: 16,
        px: isSmall ? 2 : 6,
        minHeight: "100vh",
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
          backgroundColor: "rgba(13, 71, 161, 0.4)",
          zIndex: -1,
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          {/* LEFT TEXT */}
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" sx={{ color: "#26c6da", fontWeight: 700, mb: 1 }}>
              Let's Talk
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#ffffff", mb: 3 }}>
              Contact Our Team
            </Typography>
            <Typography sx={{ fontSize: "1.1rem", color: "#d0eaf5", lineHeight: 1.8, mb: 4 }}>
              Need support, have a question, or want to explore a partnership? Our team is here to assist you.
            </Typography>
            <Stack spacing={2} sx={{ color: "#ffffff" }}>
              <Box>
                <Typography variant="h6" fontWeight={700}>Location</Typography>
                <Link
                  href=""
                  target="_blank"
                  underline="hover"
                  color="inherit"
                  sx={{ fontSize: "1.25rem", color: "#d0eaf5", "&:hover": { color: "#42a5f5" } }}
                >
                 4820 GREENRIDGE CT FAIRFIELD, CA, 94534
                </Link>
              </Box>
              <Box>
                <Typography variant="h6" fontWeight={700}>Phone</Typography>
                <Link href="tel:+14155324090" underline="hover" color="inherit" sx={{ fontSize: "1.25rem", color: "#d0eaf5", "&:hover": { color: "#42a5f5" } }}>
                  (415) 532-4090
                </Link>
              </Box>
              <Box>
                <Typography variant="h6" fontWeight={700}>Email</Typography>
                <Link href="mailto:matiasriesco88@hotmail.com" underline="hover" color="inherit" sx={{ fontSize: "1.25rem", color: "#d0eaf5", "&:hover": { color: "#42a5f5" } }}>
                  matiasriesco88@hotmail.com
                </Link>
              </Box>
            </Stack>
          </Grid>

          {/* RIGHT FORM */}
          <Grid item xs={12} md={6}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                backgroundColor: "#fff",
                p: 4,
                borderRadius: 2,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
              }}
            >
              <Grid container spacing={2}>
                {/* Full Name */}
                <Grid item xs={12}>
                  <Typography variant="caption" fontWeight={700}>
                    Full Name*
                  </Typography>
                  <TextField
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    fullWidth
                    error={!!errors.fullName}
                    helperText={errors.fullName}
                    placeholder="Enter your full name"
                    variant="outlined"
                    InputProps={{
                      sx: {
                        backgroundColor: "#f5f5f5",
                        borderRadius: 1,
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#26c6da",
                        },
                      },
                    }}
                  />
                </Grid>

                {/* Phone */}
                <Grid item xs={12} sm={6}>
                  <Typography variant="caption" fontWeight={700}>
                    Phone Number*
                  </Typography>
                  <TextField
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    fullWidth
                    error={!!errors.phone}
                    helperText={errors.phone}
                    placeholder="Your contact number"
                    variant="outlined"
                    InputProps={{
                      sx: {
                        backgroundColor: "#f5f5f5",
                        borderRadius: 1,
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#26c6da",
                        },
                      },
                    }}
                  />
                </Grid>

                {/* Email */}
                <Grid item xs={12} sm={6}>
                  <Typography variant="caption" fontWeight={700}>
                    Email Address*
                  </Typography>
                  <TextField
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email}
                    placeholder="Your email"
                    variant="outlined"
                    InputProps={{
                      sx: {
                        backgroundColor: "#f5f5f5",
                        borderRadius: 1,
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#26c6da",
                        },
                      },
                    }}
                  />
                </Grid>

                {/* Message */}
                <Grid item xs={12}>
                  <Typography variant="caption" fontWeight={700}>
                    Your Message*
                  </Typography>
                  <TextField
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows={4}
                    error={!!errors.message}
                    helperText={errors.message}
                    placeholder="Tell us how we can help you..."
                    variant="outlined"
                    InputProps={{
                      sx: {
                        backgroundColor: "#f5f5f5",
                        borderRadius: 1,
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#26c6da",
                        },
                      },
                    }}
                  />
                </Grid>

                {/* Submit */}
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: "#1976d2",
                      color: "#fff",
                      fontWeight: "bold",
                      px: 4,
                      py: 1.5,
                      borderRadius: 1,
                      ":hover": {
                        backgroundColor: "#1565c0",
                      },
                    }}
                  >
                    {loading ? <CircularProgress size={24} sx={{ color: "#fff" }} /> : "Send Message"}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        {/* Snackbar Notification */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={4000}
          onClose={() => setSnackbarOpen(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert severity="success" onClose={() => setSnackbarOpen(false)} sx={{ width: "100%" }}>
            Message sent successfully!
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default ContactPage;
