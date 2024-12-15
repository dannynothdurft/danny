import { MainConfig, NavigationConfig } from "@/config";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  return (
    <div className="NAVIGATION--CONTAINER">
      <Link href={NavigationConfig.baseLink}>
        <Image
          src={MainConfig.logo}
          width={35}
          height={35}
          alt={MainConfig.logoAlt}
        />
      </Link>
      <nav className="NAVIGATION--LINKS--CONTAINER">
        {NavigationConfig.navigationLinks.map((navLink) => {
          return (
            <Link href={navLink.href} key={navLink.id}>
              {navLink.label}
            </Link>
          );
        })}
      </nav>
      <Link href={NavigationConfig.cta.href} className="btn">
        {NavigationConfig.cta.label}
      </Link>
    </div>
  );
};

export default Navigation;
