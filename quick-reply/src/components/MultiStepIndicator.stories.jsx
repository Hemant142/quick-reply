import React from "react";
import MultiStepIndicator from "./MultiStepIndicator";

export default {
  title: "MultiStepIndicator",
  component: MultiStepIndicator,
  argTypes: {
    steps: { control: "array" },
    type: {
      description: "Type of the multi-step indicator",
      control: {
        type: "select",
        options: ["Horizontal", "Vertical"],
      },
      DefaultValue: "Horizontal", // Set default value as Horizontal
    },
  },
  tags: ["autodocs"],
};

const Template = (args) => <MultiStepIndicator {...args} />;

export const Default = Template.bind({});
Default.args = {
  steps: [
    {
      key: "FULFILLED",
      status: "fulfilled",
      subtitleText: "Subtitle",
      titleText: "Everything you can do with Monday",
    },
    {
      key: "PENDING",
      status: "pending",
      subtitleText: "Subtitle",
      titleText: "Everything you can do with Monday",
    },
    {
      key: "PENDING-2",
      status: "pending",
      subtitleText: "Subtitle",
      titleText: "Everything you can do with Monday",
    },
  ],
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  steps: [
    {
      key: "FULFILLED",
      status: "fulfilled",
      subtitleText: "Subtitle",
      titleText: "Everything you can do with Monday",
    },
    {
      key: "PENDING",
      status: "pending",
      subtitleText: "Subtitle",
      titleText: "Everything you can do with Monday",
    },
    {
      key: "PENDING-2",
      status: "pending",
      subtitleText: "Subtitle",
      titleText: "Everything you can do with Monday",
    },
  ],
  type: "Horizontal",
};

export const Vertical = Template.bind({});
Vertical.args = {
  steps: [
    {
      key: "FULFILLED",
      status: "fulfilled",
      subtitleText: "Subtitle",
      titleText: "Everything you can do with Monday",
    },
    {
      key: "PENDING",
      status: "pending",
      subtitleText: "Subtitle",
      titleText: "Everything you can do with Monday",
    },
    {
      key: "PENDING-2",
      status: "pending",
      subtitleText: "Subtitle",
      titleText: "Everything you can do with Monday",
    },
  ],
  type: "Vertical",
};
