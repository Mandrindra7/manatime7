import React from "react";
import Image from "next/image";

import "@/assets/css/card.scss";
import { ManaModule } from "@/Data/type";

const CardImage = ({ icon, label}: ManaModule) => {
  return (
    <div className="card">
      <Image src={icon} width={90} height={90} alt="burger" />
      <p className="card-title">{label}</p>
    </div>
  );
};

export default CardImage;
