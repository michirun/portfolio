import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Activities = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={10}>
        <Box>
          <Typography
            fontWeight="fontWeightBold"
            gutterBottom
            sx={{
              fontSize: {
                xs: "0.8rem", // スマホ
                sm: "2rem", // タブレット
                md: "3rem", // デスクトップ中サイズ
                lg: "3rem", // デスクトップ大サイズ
              },
            }}
          >
            こんにちは、道上 康介(みちがみ こうすけ)です。
            <br /> ECCコンピュータ専門学校 在学中 です。
            <br />
            普段は、色々なイベントや展示会に参加しています。
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Activities;
