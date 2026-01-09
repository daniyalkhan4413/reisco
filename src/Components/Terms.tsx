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
        color: "#e3f2fd",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundImage: `url('/assets/containers.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -2,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundColor: "#0d47a1",
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
          Welcome to RIESCO CO. By accessing or using our website, you agree to be
          bound by the following Terms of Use. Please review them carefully.
        </Typography>

        <Section title="1. About Us">
          RIESCO CO is a transportation brokerage and logistics services provider
          that connects shippers with independent carriers. We do not directly
          operate trucks or transport goods.
        </Section>

        <Section title="2. Use of the Website">
          You agree to use this website for lawful purposes only and to provide
          accurate and complete information when requesting quotes or services.
        </Section>

        <Section title="3. Services and Quotes">
          All shipping quotes provided are estimates and may change based on
          shipment details, carrier availability, or additional services
          requested.
        </Section>

        <Section title="4. Limitation of Liability">
          RIESCO CO is not responsible for delays, damages, or losses occurring
          during transportation. Our role is limited to coordinating services
          between shippers and carriers.
        </Section>

        <Section title="5. Intellectual Property">
          All website content, including text, graphics, logos, and media, is the
          property of RIESCO CO and may not be used without written permission.
        </Section>

        <Section title="6. Governing Law" mb={6}>
          These terms shall be governed by and interpreted in accordance with the
          laws of the State of Connecticut.
        </Section>

        <Divider sx={{ my: 6, borderColor: "#90caf9" }} />

        {/* --- Privacy Policy --- */}
        <Typography variant="h4" fontWeight={600} mb={3}>
          Privacy Policy
        </Typography>

        <Typography mb={2}>
          RIESCO CO respects your privacy and is committed to protecting your
          personal information. This policy explains how we collect, use, and
          safeguard your data.
        </Typography>

        <Section title="1. Information We Collect">
          We may collect personal information such as your name, email address,
          phone number, and shipment-related details.
        </Section>

        <Section title="2. How We Use Your Information">
          Your information is used to provide quotes, coordinate logistics
          services, communicate updates, and improve our offerings.
        </Section>

        <Section title="3. Sharing of Information">
          We may share necessary information with third-party carriers or service
          partners solely for the purpose of fulfilling logistics services. We do
          not sell personal data.
        </Section>

        <Section title="4. Data Security">
          We implement reasonable technical and organizational measures to
          protect your personal information from unauthorized access.
        </Section>

        <Section title="5. Cookies">
          Our website may use cookies to enhance functionality and user
          experience. You can manage cookie preferences through your browser
          settings.
        </Section>

        <Section title="6. Third-Party Links">
          Our website may contain links to external websites. RIESCO CO is not
          responsible for the privacy practices or content of those sites.
        </Section>

        <Section title="7. Contact Us">
          If you have any questions regarding these Terms or our Privacy Policy,
          please contact us:
          <br />
          <strong>Email:</strong> matiasriesco88@hotmail.com
          <br />
          <strong>Phone:</strong> (415) 532-4090
        </Section>
      </Container>
    </Box>
  );
};

// Reusable section component
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
