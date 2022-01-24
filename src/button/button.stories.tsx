import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from ".";

export default {
  title: "Input/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  const { children, ...other } = args;
  return <Button {...other}>{children}</Button>;
};

export const ButtonSimple = Template.bind({});
