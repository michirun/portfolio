import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import dog_human from "../assets/dog_human.png";
import cat_human from "../assets/cat_human.png";
import { Box } from "@mui/material";

const Introduction = () => {
  return (
    <Box>
      <Grid container justifyContent="center">
        <Grid item xs={5} md={5} lg={5} sx={{ placeContent: "center" }}>
          <Box>
            <CardContent>
              <Typography
                fontWeight="fontWeightBold"
                component="span"
                gutterBottom
                sx={{
                  fontSize: {
                    xs: "5vw", // スマホ
                  },
                }}
              >
                道上康介
              </Typography>
              <Typography
                fontWeight="fontWeightBold"
                component="span"
                gutterBottom
                sx={{
                  fontSize: {
                    xs: "3vw", // スマホ
                  },
                }}
              >
                の
              </Typography>
              <Typography
                variant="h1"
                fontWeight="fontWeightMedium"
                gutterBottom
                sx={{
                  fontSize: {
                    xs: "3vw", // スマホ
                  },
                }}
              >
                ポートフォリオサイト
              </Typography>
              <Typography
                variant="h1"
                fontWeight="fontWeightMedium"
                color="text.secondary"
                sx={{
                  fontSize: {
                    xs: "2vw", // スマホ
                  },
                }}
              >
                （レスポンシブにしたよ）
              </Typography>
            </CardContent>
          </Box>
        </Grid>
        <Grid item xs={3} md={3} lg={3}>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
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
          </Box>
          <Box
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          >
            <CardMedia
              component="img"
              image={cat_human}
              alt="Paella dish"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Introduction;
