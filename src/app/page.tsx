"use client";
import { useState } from "react";

import NavBar from "@/component/NavBar";
import SideBar from "@/component/SideBar";
import Box from "@mui/material/Box";

export default function Home() {
  let [open, setOpen] = useState(false);
  return (
    <Box style={{ marginBottom: 70, padding: 10}}>
      <NavBar open={open} handleOpen={() => setOpen((open = !open))} />
      <SideBar open={open} handleOpen={() => setOpen((open = !open))} />
    </Box>
  );
}
