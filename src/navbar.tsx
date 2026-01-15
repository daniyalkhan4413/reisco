import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import logoImage from "./assets/logo.png";

const pages = [
  { name: "Services", path: "/services" },
  { name: "Shippers", path: "/shippers" },
  { name: "Carriers", path: "/carrier" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },

];

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="absolute"
      elevation={0}
      sx={{
        backgroundColor: "rgba(13, 71, 161, 0.9)",
        color: "#e3f2fd",
        zIndex: 3,
        px: 0,
      }}
    >
      <Container maxWidth={false} disableGutters>
        <Toolbar
          disableGutters
          sx={{
            px: isMobile ? 2 : 4,
            minHeight: isMobile ? "64px" : "80px", // Reduced height
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left: Logo Only */}
          <NavLink
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <img
              src={logoImage}
              alt="Company Logo"
              style={{
                width: isMobile ? "150px" : "300px", // Adjusted size
                height: isMobile ? "70px" : "90px",
                objectFit: "contain",
                borderRadius: "12px",
                filter: "invert(1) hue-rotate(200deg) saturate(2)",
                display: "block",
              }}
            />
          </NavLink>

          {/* Middle: Navigation */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  component={NavLink}
                  to={page.path}
                  sx={{
                    color: "#e3f2fd",
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "1rem",
                    fontFamily: "'Poppins', sans-serif",
                    "&.active": {
                      borderBottom: "2px solid #42a5f5",
                    },
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      borderRadius: 1,
                    },
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          )}

          {/* Right: Menu Icon for Mobile */}
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* Drawer (Mobile) */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            backgroundColor: "#0d47a1",
            height: "100%",
            color: "#e3f2fd",
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem
              component={NavLink}
              to="/"
              sx={{
                color: "inherit",
                "&.active > .MuiListItemText-root": {
                  fontWeight: "bold",
                  color: "#42a5f5",
                },
              }}
            >
              <ListItemText primary="Home" />
            </ListItem>
            {pages.map((page) => (
              <ListItem
                key={page.name}
                component={NavLink}
                to={page.path}
                sx={{
                  color: "inherit",
                  "&.active > .MuiListItemText-root": {
                    fontWeight: "bold",
                    color: "#42a5f5",
                  },
                }}
              >
                <ListItemText primary={page.name} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
