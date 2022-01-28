import React from "react";
import { Field } from "formik";
import { Input } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'

function ChackraTextarea(props) {
  const { label, name, ...rest } = props;
  return (
    <div>
      <Field name={name}>
        {({ field, form }) => {
          return (
            <FormControl isInvalid={form.errors[name] && form.touched[name]}>
              <FormLabel htmlFor={name}>{label}</FormLabel>
              <Input as='textarea' placeholder='Write something...' pt={2} id={name} {...rest} {...field}></Input>
              <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
            </FormControl>
          );
        }}
      </Field>
      {/* <Input placeholder='Basic usage' /> */}
    </div>
  );
}

export default ChackraTextarea;
