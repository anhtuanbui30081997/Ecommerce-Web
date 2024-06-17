"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { navLinks } from "@/lib/contants";

const TopBar = () => {
  const [dropDownMenu, setDropDownMenu] = useState<boolean>(false);
  const pathName = usePathname();
  return (
    <div className="sticky bg-blue-2 top-0 z-20 w-full flex justify-between items-center px-8 py-4 shadow-xl lg:hidden">
      <Image src="/logo.png" alt="logo" width={150} height={70} />
      <div className="flex gap-8 max-md:hidden">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={`flex gap-4 text-body-medium items-center ${
              pathName === link.url ? "text-blue-1" : "text-grey-1"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="relative flex gap-4 text-body-medium items-center">
        <MenuIcon
          className="cursor-pointer md:hidden"
          onClick={() => setDropDownMenu(!dropDownMenu)}
        />
        {dropDownMenu && (
          <div className="absolute flex flex-col gap-8 top-11 right-6 p-5 bg-white shadow-xl rounded-lg">
            {navLinks.map((link) => (
              <Link
                href={link.url}
                key={link.label}
                className={`flex gap-4 text-body-medium items-center ${
                  pathName === link.url ? "text-blue-1" : "text-grey-1"
                }`}
              >
                {link.icon} {link.label}
              </Link>
            ))}
          </div>
        )}
        <UserButton />
      </div>
    </div>
  );
};

export default TopBar;
