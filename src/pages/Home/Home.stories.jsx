import Home from "./Home.component";

import React from "react";

export default {
    title: 'Pages/Home',
    component: Home,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

const Template = (args) => <Home {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
