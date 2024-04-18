import React from 'react';

import { SidebarMenu } from './../../components';

export const SidebarMiddleNav = () => (
    <SidebarMenu>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-home"></i>}
            title="Dashboards"
        >
        </SidebarMenu.Item>

        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-users"></i>}
            title="Teams"
        >
        </SidebarMenu.Item>

        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-share-alt"></i>}
            title="Scenarios"
        >

        </SidebarMenu.Item>

        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-puzzle-piece"></i>}
            title="Templates"
        >
        </SidebarMenu.Item>

        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-ellipsis-v"></i>}
            title="More"
        >
            <SidebarMenu.Item icon={<i className="fa fa-fw fa-link mr-1"></i>} title="Connections" to='' exact />
            <SidebarMenu.Item icon={<i className="fa fa-fw fa-globe mr-1"></i>} title="Webhook" to='' exact />
            <SidebarMenu.Item icon={<i className="fa fa-fw fa-key mr-1"></i>} title="Keys" to='' exact />
        </SidebarMenu.Item>






    </SidebarMenu >
);
