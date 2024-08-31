import { Typography, Box, Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import React from "react";
import toilet from "../assets/toilet.jpg";
import diet from "../assets/diet.png";
import mayo from "../assets/mayo.jpg";
import fudebako from "../assets/fudebako.png";

const Works = () => {
  return (
    <div>
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <Box>
            <Typography
              fontWeight="fontWeightBold"
              color="#262626"
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
            <Grid container spacing={5} justifyContent="center">
              <Grid item lg={4} sm={6} xs={11}>
                <ProductCard
                  pname="国会劇場"
                  description="国会中継をエンタメに！"
                  imageUrl={diet}
                  productUrl="https://protopedia.net/prototype/5059"
                />
              </Grid>
              <Grid item lg={4} sm={6} xs={11}>
                <ProductCard
                  pname="叫流式便器"
                  description="叫んで流せ、心のうんこ"
                  imageUrl={toilet}
                  productUrl="https://protopedia.net/prototype/5663"
                />
              </Grid>
              <Grid item lg={4} sm={6} xs={11}>
                <ProductCard
                  pname="思春期マヨネーズ"
                  description="神出鬼没のオカン対策"
                  imageUrl={mayo}
                  productUrl="https://protopedia.net/prototype/4944"
                />
              </Grid>
              <Grid item lg={4} sm={6} xs={11}>
                <ProductCard
                  pname="Go!Go!筆BA-GOOOOORN!"
                  description="授業中でも好きな子にいたずらできる筆箱"
                  imageUrl={fudebako}
                  productUrl="https://protopedia.net/prototype/5260"
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
