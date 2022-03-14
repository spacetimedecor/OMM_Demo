import Hero from "./Hero.component";

import React from "react";

export default {
    title: 'Sections/Hero',
    component: Hero,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
    argTypes: {
        environmentPreset: {
            control: 'select',
            options: [
                "sunset",
                "dawn",
                "night",
                "warehouse",
                "forest",
                "apartment",
                "studio",
                "city",
                "park",
                "lobby"
            ],
        }
    }
};

const Template = (args) => <Hero {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    environmentPreset: "park"
};
