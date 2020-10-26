import axios from "axios";
import { PlantType } from "../plants/PlantType";

const baseUrl = "/api";

export const getAllPlants = () => {
  return axios.get(`${baseUrl}/plants`);
};
export const showSinglePlant = (id: Number) => {
  return axios.get(`${baseUrl}/plants/${id}`);
};

export const getPlantsInBasket = async (basketIDs: string[]) => {
  const allPlants = await getAllPlants();
  return (basketIDs as []).map((plantID: string): PlantType | undefined => {
    return allPlants.data.find((value: PlantType) => {
      return value._id === plantID;
    });
  });
};
