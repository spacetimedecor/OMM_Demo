import GraphicBreak from "./GraphicBreak.component";

import React from "react";

export default {
    title: 'Components/GraphicBreak',
    component: GraphicBreak,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        translateX: { control: 'text' },
        duration: { control: 'number' }
    }
};

const Template = (args) => <GraphicBreak {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    translateX: "-=10%",
    translateY: "-=0",
    duration: 2,
    ease: "sine.inOut"
};

export const Secondary = Template.bind({});
Secondary.args = {
    translateX: "-=25%",
    translateY: "+=35px",
    duration: 5,
    ease: "power2",
};
