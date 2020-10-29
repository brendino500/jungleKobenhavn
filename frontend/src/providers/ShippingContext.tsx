import React, { createContext } from "react";

export const ShippingContext = createContext([[], () => {}]);

export const ShippingProvider = (props: any) => {
  const [shipping, setShipping] = React.useState("");

  return (
    <ShippingContext.Provider value={[shipping, setShipping]} {...props} />
  );
};
