import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import Grid from "@mui/material/Grid";

import CardImage from "./CardImage";
import logo from "../../public/Logo.svg";

import { ManaModule } from "@/Data/type";

import "@/assets/css/drawer-module.scss";

const DrawerModule: React.FC<any> = ({ soldes, close }) => {
  const router = useRouter();
  const handlePage = () => {
    close()
    router.push("/absence")
  };
  return (
    <div className="drawer-module">
      <div className="head">
        <Image
          className="logo"
          src={logo}
          width={350}
          height={72.5}
          alt="logo"
        />
      </div>

      <Grid className="body" container spacing={4} columnGap={1} rowGap={1}>
        {soldes.map((solde: ManaModule, index: string) => (
          <Grid
            key={solde.label + index}
            spacing={1}
            onClick={handlePage}
          >
            <CardImage icon={solde.icon} label={solde.label} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DrawerModule;
