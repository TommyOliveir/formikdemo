import React from "react";
import { Field } from "formik";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

function ChackraTextarea(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <Field name={name}>
        {({ field, form }) => {
          return (
            <FormControl isInvalid={form.errors[name] && form.touched[name]}>
              <FormLabel htmlFor={name}>{label}</FormLabel>
              <Select id={name} {...rest} {...field}>
                {options.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.key}
                    </option>
                  );
                })}
              </Select>
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
