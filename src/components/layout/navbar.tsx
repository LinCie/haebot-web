"use client";

import * as React from "react";
import {
  Navbar as NUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import haebotLogo from "@/assets/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LuPhone } from "react-icons/lu";
import NextLink from "next/link";

interface INavItems {
  path: string;
  display: string;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const pathname = usePathname();

  const navItems: INavItems[] = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/blog",
      display: "Blog",
    },
    {
      path: "/about",
      display: "About",
    },
    {
      path: "/contacts",
      display: "Contacts",
    },
  ];

  return (
    <NUINavbar maxWidth="xl" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src={haebotLogo} alt="HaeBot" className="h-8 w-fit" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {navItems.map((navItem, index) => {
          const isCurrent = navItem.path === pathname;

          return (
            <NavbarItem
              key={`${navItem.display}-${index}`}
              isActive={isCurrent ? true : false}
            >
              <Link
                as={NextLink}
                href={navItem.path}
                color={isCurrent ? "primary" : "foreground"}
                aria-current={isCurrent ? "page" : "false"}
              >
                {navItem.display}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button color="primary">
            Hubungi kami <LuPhone />
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {navItems.map((navItem, index) => {
          const isCurrent = navItem.path === pathname;

          return (
            <NavbarMenuItem
              key={`${navItem.display}-${index}`}
              isActive={isCurrent ? true : false}
            >
              <Link
                as={NextLink}
                color={isCurrent ? "primary" : "foreground"}
                aria-current={isCurrent ? "page" : "false"}
                className="w-full"
                size="lg"
              >
                {navItem.display}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </NUINavbar>
  );
};

export { Navbar };
