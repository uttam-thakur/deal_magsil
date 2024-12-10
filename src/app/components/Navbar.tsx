"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Link from "next/link";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Image from "next/image";
interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  // { label: "Clients", path: "/clients" },
  { label: "Clients & Projects", path: "/projects" },
  { label: "Contact Us", path: "/contact" },
  { label: "Brouchers", path: "/brouchers" },
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img
        src="/images/dmlogo1.png"
        alt="Company Logo"
        style={{
          height: "60px",
          width: "60px",
          marginTop: "10px",
          cursor: "pointer",
        }}
      />

      <Image
        src="/images/logo3.png"
        alt="DEAL MAGSIL"
        width={200}
        height={20}
        style={{
          objectFit: "contain",
          marginTop: "40px",
        }}
      />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <Link href={item.path} passHref>
              <ListItemButton
                sx={{
                  textAlign: "center",
                  color: "black",
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    style: {
                      letterSpacing: "1px", // Adjust letter spacing
                    },
                  }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "50px",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          overflowY: "hidden",
        }}
      >
        <a
          href="https://wa.me/yourwhatsapplink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon
            sx={{
              color: "white",
              "&:hover": {
                color: "green",
                transform: "scale(1.5)",
                transition: "all 0.3s ease",
              },
            }}
          />
        </a>
        <a
          href="https://facebook.com/yourfacebookpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon
            sx={{
              color: "white",
              "&:hover": {
                color: "blue",
                transform: "scale(1.5)",
                transition: "all 0.3s ease",
              },
            }}
          />
        </a>
        <a
          href="https://instagram.com/yourinstagramprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon
            sx={{
              color: "white",
              "&:hover": {
                color: "red",
                transform: "scale(1.5)",
                transition: "all 0.3s ease",
              },
            }}
          />
        </a>
        <a
          href="https://twitter.com/yourtwitterprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon
            sx={{
              color: "white",
              "&:hover": {
                color: "blue",
                transform: "scale(1.5)",
                transition: "all 0.3s ease",
              },
            }}
          />
        </a>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background:
            "linear-gradient(180deg, hsla(0, 0%, 5%, .85) 33.03%, hsla(0, 0%, 5%, 0) 91.03%)",
          height: "190px",
          position: "absolute",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Company Logo */}
          <Link href="/" passHref style={{ textDecoration: "none" }}>
            <Box
              sx={{ display: { xs: "none", sm: "block", marginTop: "10px" } }}
            >
              {
                <Image
                  src="/images/logo1.png"
                  alt="DEAL MAGSIL"
                  width={200}
                  height={20}
                  style={{
                    marginTop: "5px",
                  }}
                />
              }
            </Box>
          </Link>

          <Box
            sx={{
              display: { xs: "block", sm: "none" },
              marginLeft: "auto",
            }}
          >
            <Image
              src="/images/logo1.png"
              alt="DEAL MAGSIL"
              width={200}
              height={20}
              style={{
                objectFit: "contain",
              }}
            />
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link href={item.path} passHref key={item.label}>
                <Button
                  sx={{
                    color: "#fff",
                    marginLeft: 2,
                    letterSpacing: "0.15rem",
                    marginTop: "15px",
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile view */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              opacity: 0.9,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
