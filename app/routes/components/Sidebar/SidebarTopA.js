import React from "react";
import { faker } from "@faker-js/faker";
import { Link } from "react-router-dom";

import {
  Sidebar,
  UncontrolledButtonDropdown,
  Avatar,
  AvatarAddOn,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "./../../../components";
import { randomAvatar } from "./../../../utilities";



const SidebarTopA = () => (
  <React.Fragment>
    {/* START: Sidebar Default */}
    <Sidebar.HideSlim>
      <Sidebar.Section className="pt-0">
        <Link to="/" className="d-block">
          <Sidebar.HideSlim>
            <Avatar.Image
              size="lg"
              src='img'
              addOns={[
                <AvatarAddOn.Icon
                  className="fa fa-circle"
                  color="white"
                  key="avatar-icon-bg"
                />,
                <AvatarAddOn.Icon
                  className="fa fa-circle"
                  color="success"
                  key="avatar-icon-fg"
                />,
              ]}
            />
            <p>Name</p>
          </Sidebar.HideSlim>
        </Link>
          
   
      </Sidebar.Section>
    </Sidebar.HideSlim>
    {/* END: Sidebar Default */}

    {/* START: Sidebar Slim */}
    <Sidebar.ShowSlim>
      <Sidebar.Section>
        <Avatar.Image
          size="sm"
          src='img'
          addOns={[
            <AvatarAddOn.Icon
              className="fa fa-circle"
              color="white"
              key="avatar-icon-bg"
            />,
            <AvatarAddOn.Icon
              className="fa fa-circle"
              color="success"
              key="avatar-icon-fg"
            />,
          ]}
        />
      </Sidebar.Section>
    </Sidebar.ShowSlim>
    {/* END: Sidebar Slim */}
  </React.Fragment>
);

export { SidebarTopA };
