import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { Button, ButtonGroup, Stack } from '@chakra-ui/react'

function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Form Date", values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return <Form>
              <FormikControl control='chackrainput' type='email' label='Email' name='email' />
              <FormikControl control='chackrainput' type='password' label='Password' name='password' />
              {/* <button type="submit" disabled={!formik.isValid}>Submit</button> */}
           
   
              <Button  mt={3}  type="submit" disabled={!formik.isValid} colorScheme='blue'>Submit</Button>
             
          </Form>;
        }}
      </Formik>
    </div>
  );
}

export default LoginForm;
