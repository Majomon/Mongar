
import React from "react";
import listServices from "../../utils/ListServices";
import CardService from "../CardService/CardService";

export default function ContainCards() {
  return (
    <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
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
