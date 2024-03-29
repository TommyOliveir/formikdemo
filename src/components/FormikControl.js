import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import Select from "./Select";
import RadioButtons from "./RadioButtons";
import CheckboxGroup from "./CheckboxGroup";
import DatePicker from "./DatePicker";
import ChackraInput from "./ChackraInput";
import ChackraTextarea from "./ChackraTextarea";
import ChackraSelect from "./ChackraSelect";
import ChackraDate from "./ChackraDate";



function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckboxGroup {...rest}/>
    case "date":
      return <DatePicker {...rest}/>
    case "chackrainput":
      return <ChackraInput {...rest}/>
    case "chackratextarea":
      return <ChackraTextarea {...rest}/>
    case "chackraselect":
      return <ChackraSelect {...rest}/>
    case "chackradate":
      return <ChackraDate {...rest}/>
    default:
      return null;
  }
}

export default FormikControl;
