import React from "react";
import { Grid } from "@material-ui/core";
import coffeMakerList from "../models/constants";
import CoffeeCard, { CoffeeCardProps } from "./CoffeeCard";

const Content = () => {
  const getCoffeMakerCard = (coffeMakerObj: CoffeeCardProps) => {
    return (
      <Grid key={coffeMakerObj.imageUrl} item xs={12} sm={4}>
        <CoffeeCard {...coffeMakerObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {coffeMakerList.map(coffeMakerObj => getCoffeMakerCard(coffeMakerObj))}
    </Grid>
  );
};

export default Content;
