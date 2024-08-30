import React from "react";
import { Link, CardActions, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

type Product = {
  pname: string;
  description: string;
  imageUrl: string;
  productUrl: string;
};

const ProductCard = (props: Product) => {
  console.log(props.imageUrl);
  return (
    <Card>
      <CardMedia component="img" image={props.imageUrl} alt="green iguana" />
      <CardContent>
        <Typography
          gutterBottom
          fontWeight="fontWeightBold"
          color="#262626"
          component="div"
        >
          {props.pname}
        </Typography>
        <Typography
          gutterBottom
          fontWeight="fontWeightBold"
          color="text.secondary"
        >
          {props.description}
        </Typography>
        <CardActions>
          <Link href={props.productUrl}>作品詳細</Link>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
