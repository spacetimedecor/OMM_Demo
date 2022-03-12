import Hey from "./Hey.component";

import React from "react";

export default {
    title: 'Example/Hey',
    component: Hey,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

const Template = (args) => <Hey {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
