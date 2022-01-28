import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { Button, ButtonGroup, Stack } from '@chakra-ui/react'

function EnrollmentForm() {
  const dropdownOptions = [
    { key: "Select youe course", value: "" },
    { key: "React", value: "react" },
    { key: "Angular", value: "angular" },
    { key: "Vue", value: "vue" }
  ];

  const checkboxOptions = [
    { key: "HTML", value: "html" },
    { key: "CSS", value: "css" },
    { key: "Javascript", value: "jvascript" }
  ];

  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skills: [],
    courseDate: null
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    bio: Yup.string().required("Required"),
    course: Yup.string().required("Required"),
    courseDate: Yup.date().required("Required").nullable(),
  });

  const onSubmit = (values) => {
    console.log("Form Date", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="chackrainput"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl control="chackratextarea" label="Bio" name="bio" />
            <FormikControl
              control="chackraselect"
              label="Course"
              name="course"
              options={dropdownOptions}
            />
            <FormikControl
              control="chackracheckbox"
              label="Your Skillset"
              name="skills"
              options={checkboxOptions}
            />
            <FormikControl
              control="date"
              label="Course Date"
              name="courseDate"
            />
            {/* <button type="submit" disabled={!formik.isValid}>
              Submit
            </button> */}
            <Button  mt={3}  type="submit" disabled={!formik.isValid} colorScheme='blue'>Submit</Button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default EnrollmentForm;
