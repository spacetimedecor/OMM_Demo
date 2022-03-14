import Home from "./Home.component";
import TopBar from "../../components/TopBar";
import React from "react";

export default {
    title: 'Pages/Home',
    component: Home,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => <>
    <TopBar />
    <Home {...args} />
</>;

export const Primary = Template.bind({});
Primary.args = {};
