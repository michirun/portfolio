import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import dog_human from "../assets/dog_human.png";
import { Box } from "@mui/material";

const Introduction = () => {
  return (
    <Box>
      <Grid container justifyContent="center">
        <Grid item xs={10} md={5} lg={5} sx={{ placeContent: "center" }}>
          <Box>
            <CardContent>
              <Typography
                variant="h1"
                fontWeight="fontWeightBold"
                component="span"
                gutterBottom
                sx={{
                  fontSize: {
                    xs: "1rem", // スマホ
                    sm: "4rem", // タブレット
                    md: "5rem", // デスクトップ中サイズ
                    lg: "5rem", // デスクトップ大サイズ
                  },
                }}
              >
                道上康介
              </Typography>
              <Typography
                variant="h3"
                fontWeight="fontWeightBold"
                component="span"
                gutterBottom
                sx={{
                  fontSize: {
                    xs: "1rem", // スマホ
                    sm: "3rem", // タブレット
                    md: "4rem", // デスクトップ中サイズ
                    lg: "4rem", // デスクトップ大サイズ
                  },
                }}
              >
                の
              </Typography>
              <Typography
                variant="h2"
                fontWeight="fontWeightMedium"
                sx={{
                  fontSize: {
                    xs: "1rem", // スマホ
                    sm: "3rem", // タブレット
                    md: "3rem", // デスクトップ中サイズ
                    lg: "3rem", // デスクトップ大サイズ
                  },
                }}
              >
                ポートフォリオサイト
              </Typography>
            </CardContent>
          </Box>
        </Grid>
        <Grid item xs={10} md={3} lg={3}>
          <CardMedia
            component="img"
            image={dog_human}
            alt="Paella dish"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Introduction;
