"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ children, url }) => {
  const path = usePathname();
  const isActive = path === url;

  let classNames = "rounded-lg text-sm transition-colors";
  if (isActive) classNames += ` bg-primary text-black`;

  return (
    <li className={`${classNames} hover:bg-primary hover:text-black`}>
      <Link href={url} className="px-4 py-2 inline-block">
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
