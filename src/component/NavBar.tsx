"use client";

import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import Image from "next/image";

import Profil from "../../public/Photo.png";
import burgerbutton from "../../public/burgerbutton.svg";
import setting from "../../public/Settings.svg";
import help from "../../public/Help.svg";
import absence from "../../public/Absence_Icon.svg";

import "@/assets/css/navbar.scss";
import { SideBarProps } from "@/Data/type";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";

const NavBar = ({ open, handleOpen }: SideBarProps) => {
  return (
    <AppBar className={open ? " navbar drawer" : "navbar"} position="fixed">
      <Box sx={{ px: 2 }}>
        <Toolbar className="toolbar" variant="dense">
          <Box
            sx={{ mr: 2, ...(open && { display: "none" }) }}
            onClick={handleOpen}
          >
            <Image src={burgerbutton} width={40} height={40} alt="burger" />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} className="route">
            <Image src={absence} width={40} height={40} alt="absence" />
            <Typography variant="body1" className="text">
              Absence
            </Typography>
          </Box>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            className="option"
          >
            <Image src={help} width={40} height={40} alt="help" />
            <Image src={setting} width={40} height={40} alt="setting" />
          </Box>
          <Divider orientation="vertical" />
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div className="user">
              <Typography variant="body1" className="text">
                Nom et Prénom
              </Typography>
              <Divider />
              <Typography variant="body2" color="black" align="center">
                Entreprise
              </Typography>
            </div>

            <IconButton sx={{ p: 0 }}>
              <Image
                src={Profil}
                width={40}
                height={40}
                alt="Picture of the author"
              />
            </IconButton>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};
export default NavBar;
