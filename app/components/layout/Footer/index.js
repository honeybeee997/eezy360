import React from "react";
import Link from "next/link";

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

import Logo from "@/components/brand/Logo";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer
      className={`bg-primary text-black p-8 flex justify-between items-center flex-wrap relative ${classes.footer}`}
    >
      <div className="w-1/2 md:w-auto">
        <Logo black />
      </div>
      <div className="flex gap-4 items-center justify-end md:absolute left-1/2 md:translate-x-[-50%] w-1/2 md:w-auto">
        <Link href="mailto:contact@eezy360.com">
          <MdEmail className="text-2xl hover:text-white transition-colors" />
        </Link>
        <Link href="tel:+447707400932">
          <FaPhoneAlt className="text-2xl hover:text-white transition-colors" />
        </Link>
      </div>
      <div className="text-center w-full md:w-auto mt-8 md:mt-0">
        2024 © EEZY 360 All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
