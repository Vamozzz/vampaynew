"use client";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "../customButton/customButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import { Collapse, Divider, Menu, MenuItem } from "@mui/material";
import { navigationItems } from "@/constants/features";
// import TemporaryDrawer from "../drawer/drawer";
import { usePathname, useRouter } from "next/navigation";
import Logo from "@/assets/images/logo.svg";
import collection from "@/assets/images/import.svg";
import payout from "@/assets/images/export.svg";
import aboutus from "@/assets/images/ABOUTUS.svg";
import contactus from "@/assets/images/CONTACTUS.svg";
import faqs from "@/assets/images/FAQs.svg";
import blogs from "@/assets/images/BLOGS.svg";
import { ExpandLess, ExpandMore, Padding } from "@mui/icons-material";
import { handleLogin, handleRegister } from "@/utils/customFunctions";
import { log } from "util";

// import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

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
  const [state, setState] = React.useState({
    right: false,
  });
  const [open, setOpen] = React.useState(false);
  const [openCompany, setOpenCompany] = React.useState(false);

  const toggleDrawer =
    (anchor: "right", open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      setTimeout(() => {
        if (
          event &&
          event.type === "keydown" &&
          ((event as React.KeyboardEvent).key === "Tab" ||
            (event as React.KeyboardEvent).key === "Shift")
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
        setOpen(false);
        setOpenCompany(false);
      }, 300);
    };

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
          <p className={`cursor-pointer text-[16px]`}>{name}</p>
          <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={handleClose}>
            {menuItemsMap[name].map((menuItem, index) => (
              // <React.Fragment key={index}>
              <MenuItem
                key={index}
                component={Link}
                href={menuItem.href}
                onClick={handleClose}
                sx={{ paddingTop: 1, paddingBottom: 1 }}
              >
                <Image src={menuItem.img} alt={`.`} className="mr-2" />
                <p className="p-1 text-[16px]">{menuItem.text}</p>
              </MenuItem>
              // </React.Fragment>
            ))}
          </Menu>
        </div>
      );
    } else {
      return (
        <Link href={link}>
          <p className="text-[16px]">{name}</p>
        </Link>
      );
    }
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickCompany = () => {
    setOpenCompany(!openCompany);
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="flex justify-between lg:px-20 items-center p-5 bg-white drop-shadow-md ">
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
          <div
            className="lg:hidden text-center "
            onClick={toggleDrawer("right", true)}
          >
            {showNav ? (
              <CloseIcon color="primary" fontSize="large" />
            ) : (
              <MenuIcon color="primary" fontSize="large" />
            )}
          </div>
        </div>
      </div>
      {/* {showNav && <TemporaryDrawer showNav={showNav} setShowNav={setShowNav} />} */}
      <div>
        <React.Fragment key={"right"}>
          <SwipeableDrawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            onOpen={toggleDrawer("right", true)}
            PaperProps={{ style: { height: "65vh" } }}
          >
            <List
              sx={{ width: "300px", bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              className="mx-4  "
            >
              <ListItemButton
                className="mb-1  my-4 rounded-md  flex justify-end"
                onClick={toggleDrawer("right", false)}
              >
                <Image
                  src={"/CLOSE.svg"}
                  alt={`.`}
                  height={40}
                  width={40}
                  className=""
                />
              </ListItemButton>
              <ListItemButton
                className="mb-1  my-2 rounded-md "
                onClick={toggleDrawer("right", false)}
              >
                <Image src={"/HOME.svg"} alt={`.`} width={20} height={20} />
                <Link href="/">
                  <p className="ml-4">Home</p>
                </Link>
              </ListItemButton>
              <Divider className="mr-12" />
              <ListItemButton
                className="mb-1  my-2 rounded-md"
                onClick={handleClick}
              >
                <Image src={"/PRODUCT.svg"} alt={`.`} width={20} height={20} />
                <p className="mx-4">Products</p>
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse
                in={open}
                timeout="auto"
                unmountOnExit
                // className="shadow-sm shadow-primaryPurple-100 rounded-lg mt-2"
              >
                <List component="div" disablePadding>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={toggleDrawer("right", false)}
                  >
                    <ListItemIcon>
                      <Image src={collection} alt={`.`} />
                    </ListItemIcon>
                    <Link href="/products/collection">Collection</Link>
                  </ListItemButton>
                  <Divider className="mx-10" />
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={toggleDrawer("right", false)}
                  >
                    <ListItemIcon>
                      <Image src={payout} alt={`.`} />
                    </ListItemIcon>
                    <Link href="/products/payouts">Payouts</Link>
                  </ListItemButton>
                </List>
              </Collapse>
              <Divider className="mr-12" />
              <ListItemButton
                className="mb-1  my-2 rounded-md"
                onClick={toggleDrawer("right", false)}
              >
                <Image src={"/PRICING.svg"} alt={`.`} width={20} height={20} />
                <Link href="/pricing">
                  <p className="ml-4">Pricing</p>
                </Link>
              </ListItemButton>
              <Divider className="mr-12" />
              <ListItemButton
                className="mb-1  my-2 rounded-md"
                onClick={toggleDrawer("right", false)}
              >
                <Image src={"/DEVAPI.svg"} alt={`.`} width={20} height={20} />
                <Link href="/developerapi">
                  <p className="ml-4">Developer Api</p>
                </Link>
              </ListItemButton>
              <Divider className="mr-12" />
              <ListItemButton
                className="mb-1  my-2 rounded-md"
                onClick={handleClickCompany}
              >
                <Image src={"/COMPANY.svg"} alt={`.`} width={20} height={20} />
                <p className="mx-4">Company</p>
                {openCompany ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse
                in={openCompany}
                timeout="auto"
                unmountOnExit
                // className="shadow-sm shadow-primaryPurple-100 rounded-lg mt-2"
              >
                <List component="div" disablePadding>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={toggleDrawer("right", false)}
                  >
                    <ListItemIcon>
                      <Image src={aboutus} alt={`.`} />
                    </ListItemIcon>
                    <Link href="/company/aboutus">About us</Link>
                  </ListItemButton>
                  <Divider className="mx-10" />
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={toggleDrawer("right", false)}
                  >
                    <ListItemIcon>
                      <Image src={contactus} alt={`.`} />
                    </ListItemIcon>
                    <Link href="/company/contactus">Contact Us</Link>
                  </ListItemButton>
                  <Divider className="mx-10" />
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={toggleDrawer("right", false)}
                  >
                    <ListItemIcon>
                      <Image src={blogs} alt={`.`} />
                    </ListItemIcon>
                    <Link href="/company/blogs">Blogs</Link>
                  </ListItemButton>
                  <Divider className="mx-10" />
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={toggleDrawer("right", false)}
                  >
                    <ListItemIcon>
                      <Image src={faqs} alt={`.`} />
                    </ListItemIcon>
                    <Link href="/company/faqs">Faqs</Link>
                  </ListItemButton>
                </List>
              </Collapse>
              <Divider className="mr-12" />
            </List>
            <div className=" flex justify-center items-center gap-6 mt-20 pb-5">
              <CustomButton onClick={handleLogin}>login</CustomButton>
              <CustomButton
                onClick={handleRegister}
                filled={true}
                endIcon={true}
              >
                Open an Account
              </CustomButton>
            </div>
          </SwipeableDrawer>
        </React.Fragment>
      </div>
    </nav>
  );
};

export default Navbar;
