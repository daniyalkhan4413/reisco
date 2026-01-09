import React from "react";
import {
  Box,
  Typography,
  Container,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const TermsAndPrivacy: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        py: 12,
        px: isSmallScreen ? 2 : 6,
        color: "#e3f2fd", // light blue text
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url('/assets/containers.jpg')`, // adjust path if needed
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
      <Container maxWidth="md">
        {/* Page Title */}
        <Typography
          variant="h3"
          fontWeight={700}
          textAlign="center"
          mb={8}
          color="#ffffff"
        >
          Terms of Use & Privacy Policy
        </Typography>

        {/* --- Terms of Use --- */}
        <Typography variant="h4" fontWeight={600} mb={3}>
          Terms of Use
        </Typography>

        <Typography mb={2}>
          Welcome to 51 State Transportation Solutions LLC. By using our website, you agree to these Terms of Use. Please read them carefully.
        </Typography>

        <Section title="1. About Us">
          51 State Transportation Solutions LLC is a transportation brokerage company connecting shippers with independent carriers. We do not directly transport goods.
        </Section>

        <Section title="2. Use of the Website">
          You agree to use the website for lawful purposes and to provide accurate information when requesting quotes or services.
        </Section>

        <Section title="3. Services and Quotes">
          Shipping quotes provided are estimates and subject to change. Final pricing may vary based on additional services.
        </Section>

        <Section title="4. Limitation of Liability">
          We are not liable for delays, damages, or losses incurred during transportation. Our role is limited to connecting shippers with carriers.
        </Section>

        <Section title="5. Intellectual Property">
          All content on this website is the property of 51 State Transportation Solutions LLC and may not be used without permission.
        </Section>

        <Section title="6. Governing Law" mb={6}>
          These terms are governed by the laws of the State of Connecticut.
        </Section>

        <Divider sx={{ my: 6, borderColor: "#90caf9" }} />

        {/* --- Privacy Policy --- */}
        <Typography variant="h4" fontWeight={600} mb={3}>
          Privacy Policy
        </Typography>

        <Typography mb={2}>
          We are committed to protecting your privacy. This policy explains how we collect and use your information.
        </Typography>

        <Section title="1. Information We Collect">
          We collect personal information like your name, email, phone number, and shipping details.
        </Section>

        <Section title="2. How We Use Your Information">
          Your information is used to provide shipping quotes, process shipments, and improve our services.
        </Section>

        <Section title="3. Sharing of Information">
          We may share your information with third-party carriers for shipping purposes. We do not sell your information.
        </Section>

        <Section title="4. Data Security">
          We implement security measures to protect your personal information.
        </Section>

        <Section title="5. Cookies">
          Our website may use cookies to improve user experience. You can control cookie preferences through your browser settings.
        </Section>

        <Section title="6. Third-Party Links">
          We are not responsible for the privacy practices of other websites linked on our site.
        </Section>

        <Section title="7. Contact Us">
          If you have any questions, please contact us at:
          <br />
          <strong>Email:</strong> info@51statetransportation.com
          <br />
          <strong>Phone:</strong> (866) 372 0906
        </Section>
      </Container>
    </Box>
  );
};

// Reusable section component for spacing and style consistency
const Section: React.FC<{
  title: string;
  children: React.ReactNode;
  mb?: number;
}> = ({ title, children, mb = 4 }) => (
  <>
    <Typography variant="h6" fontWeight={600} mb={1}>
      {title}
    </Typography>
    <Typography mb={mb}>{children}</Typography>
  </>
);

export default TermsAndPrivacy;
