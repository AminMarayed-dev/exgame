import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const DariyaLogo = () => {
  return (
    <div className="flex items-center">
      <img
        src="/Dariya_Logo.svg"
        alt="Dariya Logo"
        className="w-10 h-10 mr-2"
      />
    </div>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "خانه", href: "/" },
    { name: "خدمات داریا", href: "/services" },
    { name: "بلاگ", href: "/blog" },
    { name: "درباره ما", href: "/about" },
  ];

  // Function to check if a menu item is active
  const isActiveLink = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-[#1E1E1E] backdrop-blur-md border-b border-divider"
      maxWidth="xl"
      position="sticky"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      {/* Mobile Menu Toggle */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-primary"
        />
        <NavbarBrand
          as="a"
          href="https://fa.exdariya.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer flex items-center"
        >
          <DariyaLogo />
          <p className="font-bold text-xl text-primary ml-2">Dariya</p>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navigation Links */}
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index} isActive={isActiveLink(item.href)}>
            <Link
              color={isActiveLink(item.href) ? "primary" : "foreground"}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              aria-current={isActiveLink(item.href) ? "page" : undefined}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Authentication Buttons */}
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="/register"
            variant="solid"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary-600 hover:to-secondary-600 text-primary-foreground font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            احراز هویت
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-[#1E1E1E]/95 backdrop-blur-md pt-8">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color={isActiveLink(item.href) ? "primary" : "foreground"}
              className={`w-full transition-colors duration-200 font-medium py-3 text-lg ${
                isActiveLink(item.href)
                  ? "text-primary border-l-2 border-primary pl-4"
                  : "text-[#E0E0E0] hover:text-[#FFA726]"
              }`}
              href={item.href}
              size="lg"
              aria-current={isActiveLink(item.href) ? "page" : undefined}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
