// //second one

// "use client";
// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
// import Link from "next/link";

// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import Image from "next/image";

// interface Props {
//   window?: () => Window;
// }

// const drawerWidth = 240;
// const navItems = [
//   { label: "Home", path: "/" },
//   { label: "Products", path: "/products" },
//   { label: "Clients & Projects", path: "/projects" },
//   { label: "Contact Us", path: "/contact" },
//   { label: "Brouchers", path: "/brouchers" },
// ];

// export default function DrawerAppBar(props: Props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const [activeLink, setActiveLink] = React.useState<string>("/");

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const handleLinkClick = (path: string) => {
//     setActiveLink(path);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
//       <img
//         src="/images/dmlogo1.png"
//         alt="Company Logo"
//         style={{
//           height: "60px",
//           width: "60px",
//           marginTop: "10px",
//           cursor: "pointer",
//         }}
//       />

//       <Image
//         src="/images/logo3.png"
//         alt="DEAL MAGSIL"
//         width={200}
//         height={20}
//         style={{
//           objectFit: "contain",
//           marginTop: "40px",
//         }}
//       />
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item.label} disablePadding>
//             <Link href={item.path} passHref>
//               <ListItemButton
//                 onClick={() => handleLinkClick(item.path)}
//                 sx={{
//                   textAlign: "center",
//                   color: activeLink === item.path ? " #fdba74" : "black",
//                   borderBottom:
//                     activeLink === item.path ? "2px solid  #fdba74" : "none",

//                   "&:hover": {
//                     scale: "1.2",
//                   },
//                 }}
//               >
//                 <ListItemText
//                   primary={item.label}
//                   primaryTypographyProps={{
//                     style: {
//                       letterSpacing: "1px", // Adjust letter spacing
//                     },
//                   }}
//                 />
//               </ListItemButton>
//             </Link>
//           </ListItem>
//         ))}
//       </List>
//       <Box
//         sx={{
//           position: "absolute",
//           bottom: 0,
//           width: "100%",
//           height: "50px",
//           backgroundColor: "black",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           gap: "30px",
//           overflowY: "hidden",
//         }}
//       >
//         <a
//           href="https://wa.me/yourwhatsapplink"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <WhatsAppIcon
//             sx={{
//               color: "white",
//               "&:hover": {
//                 color: "green",
//                 transform: "scale(1.5)",
//                 transition: "all 0.3s ease",
//               },
//             }}
//           />
//         </a>
//         <a
//           href="https://facebook.com/yourfacebookpage"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FacebookIcon
//             sx={{
//               color: "white",
//               "&:hover": {
//                 color: "blue",
//                 transform: "scale(1.5)",
//                 transition: "all 0.3s ease",
//               },
//             }}
//           />
//         </a>
//         <a
//           href="https://instagram.com/yourinstagramprofile"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <InstagramIcon
//             sx={{
//               color: "white",
//               "&:hover": {
//                 color: "red",
//                 transform: "scale(1.5)",
//                 transition: "all 0.3s ease",
//               },
//             }}
//           />
//         </a>
//         <a
//           href="https://twitter.com/yourtwitterprofile"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <TwitterIcon
//             sx={{
//               color: "white",
//               "&:hover": {
//                 color: "blue",
//                 transform: "scale(1.5)",
//                 transition: "all 0.3s ease",
//               },
//             }}
//           />
//         </a>
//       </Box>
//     </Box>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar
//         component="nav"
//         sx={{
//           background:
//             "linear-gradient(180deg, hsla(0, 0%, 5%, .85) 33.03%, hsla(0, 0%, 5%, 0) 91.03%)",
//           height: "190px",
//           position: "absolute",
//           boxShadow: "none",
//         }}
//       >
//         <Toolbar sx={{ justifyContent: "space-between" }}>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>

//           {/* Company Logo */}
//           <Link href="/" passHref style={{ textDecoration: "none" }}>
//             <Box
//               sx={{ display: { xs: "none", sm: "block", marginTop: "10px" } }}
//             >
//               {
//                 <>
//                   <Image
//                     src="/images/dmlogo.jpeg"
//                     alt="Company Logo"
//                     width={70}
//                     height={70}
//                     // style={{
//                     //   height: "60px",
//                     //   width: "60px",
//                     //   marginTop: "10px",
//                     //   cursor: "pointer",
//                     // }}
//                   />
//                   <Image
//                     src="/images/logo1.png"
//                     alt="DEAL MAGSIL"
//                     width={200}
//                     height={20}
//                     style={{
//                       marginTop: "-18px",
//                       marginLeft: "10px",
//                     }}
//                   />
//                   <button
//                     style={{
//                       background: "transparent",
//                       border: "1px solid #fdba74",
//                       color: "white",
//                       padding: "10px",
//                       letterSpacing: "1px",
//                       marginLeft: "10px",
//                       marginTop: "-25px",
//                     }}
//                   >
//                     {" "}
//                     +91 9332331442
//                   </button>
//                 </>
//               }
//             </Box>
//           </Link>

//           <Box
//             sx={{
//               display: { xs: "block", sm: "none" },
//               marginLeft: "auto",
//             }}
//           >
//             <Image
//               src="/images/logo1.png"
//               alt="DEAL MAGSIL"
//               width={200}
//               height={20}
//               style={{
//                 objectFit: "contain",
//               }}
//             />
//           </Box>

//           <Box sx={{ display: { xs: "none", sm: "block" } }}>
//             {navItems.map((item) => (
//               <Link href={item.path} passHref key={item.label}>
//                 <Button
//                   onClick={() => handleLinkClick(item.path)}
//                   sx={{
//                     color: activeLink === item.path ? "#fdba74" : "#fff",
//                     marginLeft: 2,
//                     letterSpacing: "0.15rem",
//                     marginTop: "15px",
//                     borderBottom:
//                       activeLink === item.path ? "2px solid #fdba74" : "none",

//                     "&:hover": {
//                       transition:
//                         "transform 0.5s ease-in-out, color 0.3s ease-in-out", // Smooth transition for scale and color
//                       scale: "1.05",
//                     },
//                   }}
//                 >
//                   {item.label}
//                 </Button>
//               </Link>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Drawer for mobile view */}
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//               opacity: 0.9,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>

//       <Box component="main" sx={{ p: 3 }}>
//         <Toolbar />
//       </Box>
//     </Box>
//   );
// }





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
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const drawerWidth = 240;

const navItems = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Clients & Projects", path: "/projects" },
  { label: "Contact Us", path: "/contact" },
  { label: "Brochures", path: "/brouchers" },
];

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/yourwhatsapplink",
    Icon: WhatsAppIcon,
    hoverColor: "#25D366",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/yourfacebookpage",
    Icon: FacebookIcon,
    hoverColor: "#1877F2",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/yourinstagramprofile",
    Icon: InstagramIcon,
    hoverColor: "#E4405F",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/yourtwitterprofile",
    Icon: TwitterIcon,
    hoverColor: "#1DA1F2",
  },
];

export default function DrawerAppBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerClose = React.useCallback(() => {
    setMobileOpen(false);
  }, []);

  const handleDrawerToggle = React.useCallback(() => {
    setMobileOpen((previous) => !previous);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  const navigationItems = (
    <List disablePadding>
      {navItems.map((item) => {
        const active = isActive(item.path);

        return (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              component={Link}
              href={item.path}
              prefetch={true}
              onClick={handleDrawerClose}
              selected={active}
              sx={{
                justifyContent: "center",
                color: active ? "#fdba74" : "#222",
                borderBottom: active
                  ? "2px solid #fdba74"
                  : "2px solid transparent",
                transition: "color 150ms ease",
                "&.Mui-selected": {
                  backgroundColor: "transparent",
                  color: "#fdba74",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "rgba(253,186,116,0.08)",
                },
                "&:hover": {
                  backgroundColor: "rgba(253,186,116,0.08)",
                },
              }}
            >
              <ListItemText
                primary={item.label}
                slotProps={{
                  primary: {
                    sx: {
                      textAlign: "center",
                      letterSpacing: "0.06em",
                    },
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );

  const socialIcons = (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
      }}
    >
      {socialLinks.map(({ label, href, Icon, hoverColor }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          style={{ display: "flex", color: "inherit" }}
        >
          <Icon
            sx={{
              color: "white",
              transition: "color 150ms ease",
              "&:hover": { color: hoverColor },
            }}
          />
        </a>
      ))}
    </Box>
  );

  const drawer = (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
      }}
    >
      <Box sx={{ pt: 1 }}>
        <Link href="/" onClick={handleDrawerClose} aria-label="Deal Magsil home">
          <Image
            src="/images/dmlogo1.png"
            alt="Deal Magsil icon"
            width={60}
            height={60}
            sizes="60px"
            style={{ objectFit: "contain" }}
          />
        </Link>
      </Box>

      <Box sx={{ mt: 3, mb: 2 }}>
        <Image
          src="/images/logo3.png"
          alt="DEAL MAGSIL"
          width={200}
          height={40}
          sizes="200px"
          style={{ width: "200px", height: "auto", objectFit: "contain" }}
        />
      </Box>

      <Divider />
      {navigationItems}

      <Box
        sx={{
          mt: "auto",
          minHeight: 56,
          backgroundColor: "#111",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {socialIcons}
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        component="nav"
        elevation={0}
        sx={{
          background:
            "linear-gradient(180deg, rgba(13,13,13,.92) 0%, rgba(13,13,13,.48) 65%, transparent 100%)",
          height: { xs: 100, sm: 145 },
          position: "absolute",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: "72px", sm: "90px" },
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <IconButton
            color="inherit"
            aria-label="Open navigation menu"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "inline-flex", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop logo and contact number */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 1.5,
              minWidth: 0,
            }}
          >
            <Link
              href="/"
              aria-label="Deal Magsil home"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                textDecoration: "none",
              }}
            >
              <Image
                src="/images/dmlogo.jpeg"
                alt="Deal Magsil logo"
                width={65}
                height={65}
                sizes="65px"
                priority
                style={{ objectFit: "contain" }}
              />
              <Image
                src="/images/logo1.png"
                alt="DEAL MAGSIL"
                width={180}
                height={35}
                sizes="180px"
                style={{ objectFit: "contain" }}
              />
            </Link>

            <Button
              component="a"
              href="tel:+919332331442"
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "#fdba74",
                whiteSpace: "nowrap",
                "&:hover": {
                  borderColor: "#fdba74",
                  color: "#fdba74",
                },
              }}
            >
              +91 9332331442
            </Button>
          </Box>

          {/* Compact mobile logo */}
          <Box
            sx={{
              display: { xs: "block", sm: "none" },
              ml: "auto",
            }}
          >
            <Link href="/" aria-label="Deal Magsil home">
              <Image
                src="/images/logo1.png"
                alt="DEAL MAGSIL"
                width={160}
                height={30}
                sizes="160px"
                priority
                style={{
                  width: "160px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Link>
          </Box>

          {/* Desktop navigation */}
          <Box
            component="nav"
            aria-label="Main navigation"
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 0.5,
            }}
          >
            {navItems.map((item) => {
              const active = isActive(item.path);

              return (
                <Button
                  key={item.path}
                  component={Link}
                  href={item.path}
                  prefetch={true}
                  aria-current={active ? "page" : undefined}
                  sx={{
                    color: active ? "#fdba74" : "#fff",
                    px: 1.2,
                    letterSpacing: "0.07em",
                    fontSize: "0.78rem",
                    whiteSpace: "nowrap",
                    borderRadius: 0,
                    borderBottom: active
                      ? "2px solid #fdba74"
                      : "2px solid transparent",
                    "&:hover": {
                      color: "#fdba74",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile navigation drawer */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "#fff",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Keeps page content below the navigation area */}
      <Box
        component="div"
        aria-hidden="true"
        sx={{
          height: { xs: 72, sm: 90 },
          flexShrink: 0,
        }}
      />
    </Box>
  );
}
