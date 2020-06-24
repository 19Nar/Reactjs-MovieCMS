import React from "react";
import { Menu } from "antd";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <a href="/search">Search Movie</a>
      </Menu.Item>
      <SubMenu title={<span>Soundtracks</span>}>
        <MenuItemGroup title="iTunes Movie Soundtracks">
          <Menu.Item key="setting:1">
            2020's Best Movie Soundtracks
            <a href="/soundtracks"></a>
          </Menu.Item>
          <Menu.Item key="setting:2">
            iTunes Top 100 Best Selling Soundtracks
            <a href="/bestsellers"></a>
          </Menu.Item>
        </MenuItemGroup>
      </SubMenu>
    </Menu>
  );
}

export default LeftMenu;
