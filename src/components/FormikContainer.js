import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
  const dropdownOptions = [
    { key: "Select an option", value: "" },
    { key: "option 1", value: "option 1" },
    { key: "option 2", value: "option 2" },
    { key: "option 3", value: "option 3" },
  ];
  const dropdownFruits = [
    { key: "Select a Fruit", value: "" },
    { key: "Mango", value: "Mango" },
    { key: "Papaya", value: "Papaya" },
    { key: "Melon", value: "Melon" },
    { key: "Pineapple", value: "Pineapple" },
  ];
  const radioOptions = [
    { key: "radioOption 1", value: "radioValue 1" },
    { key: "radioOption 2", value: "radioValue 2" },
    { key: "radioOption 3", value: "radioValue 3" },
  ];
  const checkboxOptions = [
    { key: "checkboxOption 1", value: "checkboxValue 1" },
    { key: "checkboxOption 2", value: "checkboxValue 2" },
    { key: "checkboxOption 3", value: "checkboxValue 3" },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    selectOptionFruit: "",
    radioOption: "",
    checkboxOption: [],
    birthDate: null
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Required Email"),
    description: Yup.string().required("Required Description"),
    selectOption: Yup.string().required("Required"),
    selectOptionFruit: Yup.string().required("Required Fruit"),
    radioOption: Yup.string().required("Required"),
    checkboxOption: Yup.array().required("Required hey").min("1"),
    birthDate: Yup.date().required("Date Required").nullable()
  });
  const onSubmit = (values, onSubmitProps) => {
    console.log("Form data", values);
    console.log("Save data", JSON.parse(JSON.stringify(values)));
    onSubmitProps.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <FormikControl
            control="textarea"
            label="Description"
            name="description"
          />
          <FormikControl
            control="select"
            label="Select a topic"
            name="selectOption"
            options={dropdownOptions}
          />
          <FormikControl
            control="select"
            label="Select Fruit"
            name="selectOptionFruit"
            options={dropdownFruits}
          />
          <FormikControl
            control="radio"
            label="Radio Topic"
            name="radioOption"
            options={radioOptions}
          />
          <FormikControl
            control="checkbox"
            label="Checkbox Topic"
            name="checkboxOption"
            options={checkboxOptions}
          />
          <FormikControl control="date" label="Pick a date" name="birthDate" />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
