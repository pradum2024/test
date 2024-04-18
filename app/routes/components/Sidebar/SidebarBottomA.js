import React from 'react';


import { SidebarMenu } from './../../../components';


const SidebarBottomA = () => (
    <SidebarMenu>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-book"></i>}
            title="Resource Hub"
        >
        </SidebarMenu.Item>

        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-rocket"></i>}
            title="What's New"
        >
        </SidebarMenu.Item>

        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-question-circle"></i>}
            title="Help"
        >
        </SidebarMenu.Item>
        
 
    </SidebarMenu >
)

export { SidebarBottomA };
