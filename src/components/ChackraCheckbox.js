import React from "react";
import { Field } from "formik";
import { Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
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
      <Field name={name} {...rest}>
        {({ field, form }) => {
          console.log("Field check", field);
          return options.map((option) => {
            return (
              <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                <FormLabel htmlFor={name}></FormLabel>
                
            
            
                  <Checkbox
                  key={option.key}
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value.includes(option.value)}
                  >
                    <label htmlFor={option.value}>{option.key}</label>
                  </Checkbox>             
               
             
                <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
  
              </FormControl>
            );
          });
        }}
      </Field>
      {/* <Input placeholder='Basic usage' /> */}
    </div>
  );
}

export default ChackraTextarea;
