
import React from "react";
import listServices from "../../utils/ListServices";
import CardService from "../CardService/CardService";

export default function ContainCards() {
  return (
    <article className=" flex gap-4 flex-wrap items-center justify-center">
      {/* Cards de los diversos servicios */}
      {listServices.map((item) => (
        <CardService
          key={item.title}
          title={item.title}
          icon={item.icon}
          description={item.description}
          shadowColor={item.shadowColor}
          color={item.color}
        />
      ))}
    </article>
  );
}
