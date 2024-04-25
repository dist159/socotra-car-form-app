"use client";
import { memo, useMemo } from "react";
import Image from "next/image";

import "./list-item.scss";

type listItemProps = {
  readonly icon: string;
  readonly title: string;
  readonly subHeader?: string;
  readonly secondary?: boolean;
};

const listItem = memo((props: listItemProps) => {
  const { icon, title, subHeader, secondary } = props;

  const getIcon = useMemo(() => {
    return icon === "car" ? "/icons/car.png" : "/icons/person.png";
  }, [icon]);

  return (
    <div className={`list-item-container ${secondary ? "secondary" : ""}`}>
      <div className="icon-container">
        <Image src={getIcon} width={16} height={16} alt="icon image" />
      </div>

      <div className={`text-container ${!subHeader ? "align-title" : ""}`}>
        <div>{title}</div>
        {subHeader && <div className="text-subtitle">{subHeader}</div>}
      </div>
    </div>
  );
});

listItem.displayName = "listItem";

export default listItem;
