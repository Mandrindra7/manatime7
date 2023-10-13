"use client";
import React from "react";

import Image from "next/image";

import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Box, Collapse } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import burgerbutton from "../../public/burgerbutton.svg";
import acceuil from "../../public/Accueil.svg";
import add from "../../public/Add.svg";

import { SideBarProps } from "@/Data/type";
import { sideNav } from "@/Data/navigation";
import { Solde } from "@/Data/solde";

import DrawerModule from "./DrawerModule";

import "@/assets/css/sidebar.scss";
import { useRouter } from "next/navigation";

const SideBar = ({ open, handleOpen }: SideBarProps) => {
  const [openCollapse, setOpenCollapse] = React.useState<string | null>(null);
  const [openModule, setOpenModule] = React.useState<string | null>(null);

  const router = useRouter();

  const handleClick = (label: string) => {
    setOpenCollapse(label);
  };
  return (
    <div className="container">
      <Drawer
        sx={{
          width: 215,
          flexShrink: 0,
        }}
        variant="persistent"
        anchor="left"
        open={open}
        className="sidebar"
      >
        <Box className="header" onClick={handleOpen}>
          <Image src={burgerbutton} width={40} height={40} alt="burger" />
        </Box>
        <Divider />
        <ListItem className="list">
          <Image src={acceuil} width={22} height={20} alt="burger" />
          <ListItemText className="label" primary="Acceuil" />
        </ListItem>
        <Divider className="divider" />
        <ListItem className="list" onClick={() => router.push("/add-form")}>
          <Image src={add} width={22} height={20} alt="burger" />
          <ListItemText className="label" primary="Ajouter" />
        </ListItem>
        {sideNav.map((nav, index) => (
          <div key={nav.label + index}>
            <ListItem className="list-item" disablePadding>
              <ListItemButton onClick={() => handleClick(nav.label)}>
                <Image src={nav.icon} width={22} height={20} alt={nav.label} />
                <ListItemText className="label" primary={nav.label} />
                {openCollapse === nav.label ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse
              in={openCollapse === nav.label}
              timeout="auto"
              className="collapse"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {nav.children.map((child, index) => (
                  <ListItemButton
                    sx={{ pl: 4 }}
                    key={child + index}
                    className={openModule === child ? "active" : ""}
                    onClick={() => setOpenModule(child)}
                  >
                    <ListItemText className="label" primary={child} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
            <Divider className="divider" />
          </div>
        ))}
        <Divider />
      </Drawer>
      {openModule ? (
        <DrawerModule soldes={Solde} close={() => setOpenModule(null)} />
      ) : null}
    </div>
  );
};

export default SideBar;
