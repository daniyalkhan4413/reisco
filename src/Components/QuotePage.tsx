import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  CircularProgress,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import { useSnackbar } from "notistack";

const servicesList = [
  "Truckload",
  "LTL",
  "Intermodal",
  "Drayage",
  "Ocean",
  "Air",
  "Customs",
  "Freight Forwarding",
];

const QuotePage: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar()
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    email: "",
    from: "",
    to: "",
    howHeard: "",
    services: [] as string[],
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const requiredFields = ["name", "phone", "company", "email", "from", "to"];

    requiredFields.forEach((field) => {
      if (!formData[field as keyof typeof formData]) {
        newErrors[field] = "This field is required.";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);


    
    axios
      .post("", formData)
      .then((response) => {
        if (response.status === 200) {
          setFormData({
            name: "",
            phone: "",
            company: "",
            email: "",
            from: "",
            to: "",
            howHeard: "",
            services: [],
          });
          setErrors({});
                    enqueueSnackbar("Quote submitted successfully!", { variant: "success" }); // ✅ Success toast

        }
      })
      .catch((error) => {
        setErrors({ email: "Submission failed. Please try again." });
        console.error("Submission error:", error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        py: 16,
        px: isSmall ? 2 : 6,
        color: "#e3f2fd",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "url('https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg')",
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
          <Grid item xs={12} md={5}>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#42a5f5",
                fontWeight: 700,
                textTransform: "uppercase",
                mb: 1,
              }}
            >
              Ready to put us to work?
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontWeight: 800, color: "#ffffff", mb: 3 }}
            >
              Get A Quote
            </Typography>
            <Typography sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
              Fill out the quote request form and a member of our team will be
              in contact with you shortly.
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                backgroundColor: "#ffffff",
                color: "#000",
                p: 4,
                borderRadius: 2,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
              }}
            >
              <Grid container spacing={2}>
                {[
                  { label: "Name*", name: "name", placeholder: "First & Last Name" },
                  { label: "Phone*", name: "phone", placeholder: "Your number" },
                  { label: "Company Name*", name: "company", placeholder: "Company name" },
                  { label: "Email*", name: "email", placeholder: "Your email address" },
                ].map((field, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Typography variant="caption" sx={{ fontWeight: 700, textTransform: "uppercase" }}>
                      {field.label}
                    </Typography>
                    <TextField
                      name={field.name}
                      value={(formData as any)[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      fullWidth
                      variant="outlined"
                      error={!!errors[field.name]}
                      helperText={errors[field.name]}
                      InputProps={{
                        sx: {
                          backgroundColor: "#f5f5f5",
                          color: "#000",
                          borderRadius: 1,
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#42a5f5",
                          },
                        },
                      }}
                    />
                  </Grid>
                ))}

                {[
                  { label: "Where are you shipping from?", name: "from", placeholder: "Address" },
                  { label: "Where are you shipping to?", name: "to", placeholder: "Address" },
                ].map((field, index) => (
                  <Grid item xs={12} key={index}>
                    <Typography variant="caption" sx={{ fontWeight: 700, textTransform: "uppercase" }}>
                      {field.label}
                    </Typography>
                    <TextField
                      name={field.name}
                      value={(formData as any)[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      fullWidth
                      variant="outlined"
                      error={!!errors[field.name]}
                      helperText={errors[field.name]}
                      InputProps={{
                        sx: {
                          backgroundColor: "#f5f5f5",
                          color: "#000",
                          borderRadius: 1,
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#42a5f5",
                          },
                        },
                      }}
                    />
                  </Grid>
                ))}

                <Grid item xs={12}>
                  <Typography variant="caption" sx={{ fontWeight: 700, textTransform: "uppercase" }}>
                    Select Services:
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
                    {servicesList.map((service) => (
                      <FormControlLabel
                        key={service}
                        control={
                          <Checkbox
                            checked={formData.services.includes(service)}
                            onChange={() => handleServiceToggle(service)}
                            sx={{
                              color: "#42a5f5",
                              "&.Mui-checked": {
                                color: "#42a5f5",
                              },
                            }}
                          />
                        }
                        label={<Typography sx={{ color: "#000" }}>{service}</Typography>}
                      />
                    ))}
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="caption" sx={{ fontWeight: 700, textTransform: "uppercase" }}>
                    How did you hear about us?
                  </Typography>
                  <TextField
                    name="howHeard"
                    value={formData.howHeard}
                    onChange={handleChange}
                    placeholder="Google, Facebook, Instagram, etc..."
                    fullWidth
                    variant="outlined"
                    InputProps={{
                      sx: {
                        backgroundColor: "#f5f5f5",
                        color: "#000",
                        borderRadius: 1,
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#42a5f5",
                        },
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={loading}
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
                    {loading ? (
                      <CircularProgress size={24} sx={{ color: "#fff" }} />
                    ) : (
                      "Submit Quote"
                    )}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default QuotePage;
