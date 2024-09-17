import React from "react";

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Logo from "@/components/brand/Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-black p-8 flex justify-between items-center relative">
      <Logo black />
      <div className="flex gap-4 items-center absolute left-1/2 translate-x-[-50%]">
        <Link href="mailto:contact@eezy360.com">
          <MdEmail className="text-2xl hover:text-white transition-colors" />
        </Link>
        <Link href="tel:+447707400932">
          <FaPhoneAlt className="text-2xl hover:text-white transition-colors" />
        </Link>
      </div>
      <div>2024 © EEZY 360 All Rights Reserved</div>
    </footer>
  );
};

export default Footer;
