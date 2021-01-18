import React from "react";
import TextFieldComponent from "./TextFieldComponent";

export default function MiddleForm() {
  return (
    <>
      <TextFieldComponent label="Address" />
      <TextFieldComponent label="Apartment, suite, etc (optional)" />
      <TextFieldComponent label="City" />
    </>
  );
}
