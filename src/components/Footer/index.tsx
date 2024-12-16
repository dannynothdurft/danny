import { MainConfig, FooterConfig } from "@/config";
import React from "react";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Danny Nothdurft</h3>
            <p className="text-gray-400">
              Ich kaufe Deine Digitalen Vermögenswert
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Schnelle Links</h3>
            <ul className="space-y-2 text-gray-400">
              {FooterConfig.navigationLinks.map((navLink) => {
                return (
                  <li key={navLink.id}>
                    <Link href={navLink.href} className="hover:text-white">
                      {navLink.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center">Mail: {MainConfig.email}</p>
              <p className="flex items-center">Mobile: {MainConfig.mobile}</p>
              <p className="flex items-center">
                {MainConfig.city}, {MainConfig.land}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            {FooterConfig.fromYear} {year} {MainConfig.title}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
