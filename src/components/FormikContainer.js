import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";


function FormikContainer() {
 

  const dropdownOptions = [
    { key: 'Select an option', value: ''},
    { key: 'option 1', value: 'option 1'},
    { key: 'option 2', value: 'option 2'},
    { key: 'option 3', value: 'option 3'}
  ]
  const dropdownFruits = [
    { key: 'Select a Fruit', value: ''},
    { key: 'Mango', value: 'Mango'},
    { key: 'Papaya', value: 'Papaya'},
    { key: 'Melon', value: 'Melon'},
    { key: 'Pineapple', value: 'Pineapple'}
  ]
  const radioOptions = [
    { key: 'option 1', value: 'radioValue 1'},
    { key: 'option 2', value: 'radioValue 2'},
    { key: 'option 3', value: 'radioValue 3'}
  ]
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    selectOptionFruit: "",
    radioOption: ""
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Required Email"),
    description: Yup.string().required("Required Description"),
    selectOption: Yup.string().required("Required"),
    selectOptionFruit: Yup.string().required("Required Fruit"),
    radioOption: Yup.string().required("Required")
  });
  const onSubmit = (values) => console.log("Form data", values);
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
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
