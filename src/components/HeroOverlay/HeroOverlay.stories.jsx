import HeroOverlay from "./HeroOverlay.component";

import React from "react";

export default {
    title: 'Components/HeroOverlay',
    component: HeroOverlay,
    parameters: {
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
