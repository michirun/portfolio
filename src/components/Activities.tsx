import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Activities = () => {
  return (
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
            こんにちは、道上 康介（みちがみ こうすけ）です。
            <br /> ECCコンピュータ専門学校 26卒 です。
            <br />
            普段は、色々なイベントや展示会に参加しています。
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Activities;
