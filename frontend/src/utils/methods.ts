import { PlantType } from "../plants/PlantType";

export function totalCostOfBasket(
  plantsInBasket: (PlantType | undefined)[]
): number {
  let totalCost = 0;

  plantsInBasket.forEach((value) => {
    if (value !== undefined) {
      totalCost += value.price;
    }
  });
  return totalCost;
}
