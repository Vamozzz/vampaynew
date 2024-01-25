"use client";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "../customButton/customButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import { Divider, Menu, MenuItem } from "@mui/material";
import { navigationItems } from "@/constants/features";
import TemporaryDrawer from "../drawer/drawer";
import { usePathname, useRouter } from "next/navigation";
import Logo from "@/assets/images/logo.svg";
import collection from "@/assets/images/import.svg";
import payout from "@/assets/images/export.svg";
import aboutus from "@/assets/images/ABOUTUS.svg";
import contactus from "@/assets/images/CONTACTUS.svg";
import faqs from "@/assets/images/FAQs.svg";
import blogs from "@/assets/images/BLOGS.svg";
import { Padding } from "@mui/icons-material";
import { handleLogin, handleRegister } from "@/utils/customFunctions";
import { log } from "util";

interface NavigationItem {
  name: string;
  link: string;
}

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorCollection, setAnchorCollection] = useState(null);
  const [activeItem, setActiveItem] = useState("Home");
  const router = usePathname();

  useEffect(() => {
    const ourRoute = router.split("/");
    const upper = ourRoute[1].charAt(0).toUpperCase() + ourRoute[1].slice(1);
    if (ourRoute[1] === "") {
      setActiveItem("Home");
    } else if (ourRoute[1] === "developerapi") {
      setActiveItem("Developer API");
    } else {
      setActiveItem(upper);
    }
    // console.log(upper, "upper==>");
  }, [router]);

  // console.log(router, "route==>");
  // console.log(activeItem, "activeItem==>");

  const handleMenuMouseEnter = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCollectionMouseEnter = (event: any) => {
    setAnchorCollection(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCollectionClose = () => {
    setAnchorCollection(null);
  };

  const toggleNavigation = () => {
    setShowNav((value) => !value);
  };

  const renderMenuItem = (item: NavigationItem) => {
    const { name, link } = item;
    if (name === "Products" || name === "Company") {
      const anchor = name === "Products" ? anchorEl : anchorCollection;
      const handleMouseEnter =
        name === "Products" ? handleMenuMouseEnter : handleCollectionMouseEnter;
      const handleClose =
        name === "Products" ? handleMenuClose : handleCollectionClose;

      const menuItemsMap = {
        Products: [
          { href: "/products/collection", text: "Collection", img: collection },
          { href: "/products/payouts", text: "Payout", img: payout },
        ],
        Company: [
          { href: "/company/aboutus", text: "About Us", img: aboutus },
          { href: "/company/contactus", text: "Contact Us", img: contactus },
          { href: "/company/blogs", text: "Blogs", img: blogs },
          { href: "/company/faqs", text: "FAQs", img: faqs },
        ],
      };

      return (
        <div
          className={`relative hover:underline`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleClose}
        >
          <p className={`cursor-pointer `}>{name}</p>
          <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={handleClose}>
            {menuItemsMap[name].map((menuItem, index) => (
              <React.Fragment key={index}>
                <MenuItem
                  component={Link}
                  href={menuItem.href}
                  onClick={handleClose}
                  sx={{ paddingTop: 0, paddingBottom: 0 }}
                >
                  <Image src={menuItem.img} alt={`.`} />
                  <p className="p-1">{menuItem.text}</p>
                </MenuItem>
                <Divider />
              </React.Fragment>
            ))}
          </Menu>
        </div>
      );
    } else {
      return <Link href={link}>{name}</Link>;
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="flex justify-between lg:px-20 items-center p-3 bg-white drop-shadow-md ">
        <button className="">
          <Link href={"/"}>
            <Image src={Logo} alt="logo" width={130} height={30} />{" "}
          </Link>
        </button>
        <div className="hidden lg:flex md:space-x-4 lg:space-x-8 text-sm mx-2">
          {navigationItems.map((item, index) => {
            return (
              <div key={index} className="relative group cursor-pointer">
                <div
                  className={` ${
                    activeItem === item.name
                      ? " text-primaryPurple font-medium"
                      : "text-gray-700"
                  }`}
                  onClick={() => {
                    if (!(item.name == "Products" || item.name == "Company")) {
                      setActiveItem(item.name);
                    }
                  }}
                >
                  {renderMenuItem(item)}
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-transparent group-hover:bg-primaryPurple-100  transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

        <div className="flex space-x-4 justify-center items-center">
          <div className="hidden sm:flex  space-x-2 ">
            <CustomButton onClick={handleLogin}>login</CustomButton>
            <CustomButton onClick={handleRegister} filled={true} endIcon={true}>
              Open an Account
            </CustomButton>
          </div>
          <div className="lg:hidden text-center " onClick={toggleNavigation}>
            {showNav ? (
              <CloseIcon color="primary" fontSize="large" />
            ) : (
              <MenuIcon color="primary" fontSize="large" />
            )}
          </div>
        </div>
      </div>
      {showNav && <TemporaryDrawer showNav={showNav} setShowNav={setShowNav} />}
    </nav>
  );
};

export default Navbar;
