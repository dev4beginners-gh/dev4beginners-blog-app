import React from "react";
import { StoryFn } from "@storybook/react";
import MuiButton from ".";

export default {
  title: "atoms/Button",
  component: MuiButton,
  argTypes: {
    onClick: { action: 'You clicked me !' },
  },
};

const Template: StoryFn<typeof MuiButton> = (args) => <MuiButton {...args} />;

export const CreateBiodataButton = Template.bind({});

CreateBiodataButton.args = {
  label: "Create free biodata now",
  bgColor: "#4CAF50", 
  labelColor: "#FFFFFF",
  lableVariant: 'body1'
};
