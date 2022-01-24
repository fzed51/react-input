import React, { ChangeEvent, useEffect, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { InputText } from ".";

export default {
  title: "Input/Text",
  component: InputText,
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => {
  const { value, onChange, ...other } = args;
  const [v, setV] = useState<string>(value || "");
  useEffect(() => {
    setV(value || "");
  }, [value]);
  const hc = (v: string, e: ChangeEvent<HTMLInputElement>) => {
    setV(v);
    onChange && onChange(v, e);
  };
  return <InputText {...other} value={v} onChange={hc} />;
};

export const General = Template.bind({});
General.args = {
  label: "champ text",
  value: "",
};
