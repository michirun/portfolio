import React from "react";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

type Product = {
  pname: string;
  description: string;
  imageUrl: string;
};

const ProductCard = (props: Product) => {
  console.log(props.imageUrl);
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" image={props.imageUrl} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom fontWeight="fontWeightBold" component="div">
            {props.pname}
          </Typography>
          <Typography fontWeight="fontWeightBold" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
