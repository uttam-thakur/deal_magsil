import * as React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { EmojiEvents } from "@mui/icons-material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { registrations } from "../common/constant/home";
import style from "./styles/RegistrationSection.module.css";
const RegistrationSection = () => {
  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: "black",
        borderTop: "1px solid rgb(212,168,99)",
        borderBottom: "2px solid rgb(212,168,99)",
        "@media (max-width: 400px)": {
          borderBottom: "10px solid rgb(212,168,99)",
        },
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{
          mb: 3,
          lineHeight: { xs: "1.8rem", sm: "1.5rem" },
          fontWeight: 600,
          fontSize: { xs: "1.5rem", sm: "2rem" },
          marginBottom: { xs: 2, sm: 3 },
          color: "white",
        }}
      >
        Our Registrations and Certifications
      </Typography>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        className={style.card}
      >
        {registrations.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              className={style.section}
              elevation={3}
              sx={{
                padding: 2,
                display: "flex",
                alignItems: "center",
                background: "transparent",
                border: "1px solid white",
                borderRadius: "20px",
                height: "100%",
              }}
            >
              <WorkspacePremiumIcon
                sx={{
                  color: "green",
                  mr: 2,
                  height: "2.5rem",
                  width: "2.5rem",
                }}
              />
              <Typography variant="body1" color="rgb(212,168,99)">
                {item}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RegistrationSection;
