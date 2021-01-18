import React from "react";
import PlantLinkLayout from "./PlantLinkLayout";
import { List } from "@material-ui/core";

export default function PlantLinks() {
  return (
    <List>
      <PlantLinkLayout
        link="https://www.cowellsgc.co.uk/"
        plantShop="Cowell's Garden Centre"
      />
      <PlantLinkLayout
        link="https://www.houseofkojo.com/"
        plantShop="House of Kōjō"
      />
      <PlantLinkLayout
        link="https://www.root-houseplants.com/"
        plantShop="Root Houseplants"
      />
      <PlantLinkLayout
        link="https://www.leafyhouse.co.uk/"
        plantShop="Leafy House"
      />
    </List>
  );
}
