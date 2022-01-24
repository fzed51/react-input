import React, { useEffect, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { InputText } from ".";

export default {
  title: "Input/Text",
  component: InputText,
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => {
  const { value, onChange, ...other } = args;
  const [v, setV] = useState(value || "");
  useEffect(() => {
    setV(value);
  }, [value]);
  const hc = (v, e) => {
    setV(v), onChange(v, e);
  };
  return <InputText {...other} value={v} onChange={hc} />;
};

export const General = Template.bind({});
General.args = {
  label: "champ text",
  value: "",
};
