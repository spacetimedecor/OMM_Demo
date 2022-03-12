import TopBar from "./TopBar.component";

import React from "react";

export default {
    title: 'Components/TopBar',
    component: TopBar,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        backgroundColor: { control: 'color' },
        borderColor: { control: 'color' },
        color: { control: 'color' },
        height: { control: 'text' },
        imagePadding: { control: 'text' },
        withBorder: { control: 'boolean' }
    }
};

const Template = (args) => <TopBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
};
