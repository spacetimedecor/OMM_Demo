import HeroOverlay from "./HeroOverlay.component";

import React from "react";

export default {
    title: 'Components/HeroOverlay',
    component: HeroOverlay,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
    argTypes: {
        backgroundColor: { control: 'color' },
    }
};

const Template = (args) => <HeroOverlay {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    backgroundColor: '#000000'
};
