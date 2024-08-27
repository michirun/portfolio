import { Typography, Box, Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import React from "react";
import toilet from "../assets/toilet.jpg";
import diet from "../assets/diet.png";
import mayo from "../assets/mayo.jpg";

const Works = () => {
  return (
    <div>
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <Box>
            <Typography
              fontWeight="fontWeightBold"
              gutterBottom
              sx={{
                fontSize: {
                  xs: "2.5vw", // スマホ
                },
              }}
            >
              こんなものを作ってます.....
              <br />
              <br />
            </Typography>
            <Grid container justifyContent="center" spacing={5}>
              <Grid item lg={4} sm={6} xs={12}>
                <ProductCard
                  pname="国会劇場"
                  description="国会中継をエンタメに！"
                  imageUrl={diet}
                />
              </Grid>
              <Grid item lg={4} sm={6} xs={12}>
                <ProductCard
                  pname="叫流式便器"
                  description="叫んで流せ、心のうんこ"
                  imageUrl={toilet}
                />
              </Grid>
              <Grid item lg={4} sm={6} xs={12}>
                <ProductCard
                  pname="思春期マヨネーズ"
                  description="神出鬼没のオカン対策"
                  imageUrl={mayo}
                />
              </Grid>
              <Grid item lg={4} sm={6} xs={12}>
                <ProductCard
                  pname="思春期マヨネーズ"
                  description="神出鬼没のオカン対策"
                  imageUrl={mayo}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Works;
