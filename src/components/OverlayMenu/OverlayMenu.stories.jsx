import {OverlayMenu, OverlayMenuItem} from "./OverlayMenu.component";

import React from "react";

export default {
    title: 'Components/OverlayMenu',
    component: OverlayMenu,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        backgroundColor: { control: 'color' },
    }
};

const Template = (args) => <OverlayMenu {...args}>
    <OverlayMenuItem label="HOME" to="/" />
    <OverlayMenuItem label="CREATIVE" to="/creative" />
    <OverlayMenuItem label="TECHNOLOGY" to="/technology" />
</OverlayMenu>;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
};
