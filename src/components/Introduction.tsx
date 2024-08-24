import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import tako from "../img/koen.jpg";
import SchoolIcon from "@mui/icons-material/School";

const Introduction = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={9}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            bgcolor: "#b2dfdb",
          }}
        >
          <Grid container justifyContent="center">
            <Grid item xs={4}>
              <CardMedia src={tako} component="img" height="" alt="" />
            </Grid>
            <Grid item xs={8}>
              <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                  道上康介
                </Typography>
                <Typography variant="h5">
                  ECCコンピュータ専門学校 3年（26卒）
                </Typography>
                <Typography variant="h5">高度情報処理研究学科</Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Introduction;
