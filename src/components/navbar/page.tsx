"use client";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "../customButton/customButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import { Collapse, Divider, Grid, Menu, MenuItem, styled } from "@mui/material";
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

interface MenuItem {
  href: string;
  text: string;
  img: any;
}

interface MenuItemsMap {
  [key: string]: MenuItem[];
}

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorCollection, setAnchorCollection] = useState(null);
  const [anchorSolutions, setAnchorSolutions] = useState(null);
  const [activeItem, setActiveItem] = useState("Home");
  const router = usePathname();
  const Path = useRouter();
  const [state, setState] = React.useState({
    right: false,
  });
  const [open, setOpen] = React.useState(false);
  const [openCompany, setOpenCompany] = React.useState(false);
  const [openSolutions, setOpenSolutions] = useState(false);
  const [menuComponent, setMenuComponent] = useState("");

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
        setOpenSolutions(false);
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
  }, [router]);

  const handleMenuMouseEnter = (event: any) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleCollectionMouseEnter = (event: any) => {
    event.stopPropagation();
    setAnchorCollection(event.currentTarget);
  };

  const handleSolutionsMouseEnter = (event: any) => {
    event.stopPropagation();
    setAnchorSolutions(event.currentTarget);
  };

  const handleMenuClose = (event: any) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const handleCollectionClose = (event: any) => {
    event.stopPropagation();
    setAnchorCollection(null);
  };

  const handleSolutionClose = (event: any) => {
    event.stopPropagation();
    setAnchorSolutions(null);
  };

  const toggleNavigation = () => {
    setShowNav((value) => !value);
  };

  const SolutionsNav = [
    {
      href: "/solutions/educational-institutions",
      text: "Educational Institutions",
      img: "/EducationaL.svg",
    },
    {
      href: "/solutions/travel-agencies",
      text: "Travel Agencies",
      img: "/TravelAgencies.svg",
    },
    {
      href: "/solutions/hospitality",
      text: "Hospitality",
      img: "/HospitalitySolution.svg",
    },
    {
      href: "/solutions/lifestyle",
      text: "Lifestyle",
      img: "/LifestyleSolution.svg",
    },
    {
      href: "/solutions/tech-services",
      text: "Tech Services",
      img: "/TechServicesSolution.svg",
    },
    {
      href: "/solutions/healthcare",
      text: "Healthcare",
      img: "/healthcareSolution.svg",
    },
    {
      href: "/solutions/e-commerce-industries",
      text: "E-commerce Industries",
      img: "/EcommerceSolution.svg",
    },
    {
      href: "/solutions/major-brands",
      text: "Major Brands",
      img: "/MajorBrandsSolution.svg",
    },
    {
      href: "/solutions/small-businesses",
      text: "Small Businesses",
      img: "/SmallBusinessesSolution.svg",
    },
    {
      href: "/solutions/resellers-and-retailers",
      text: "Resellers and Retailers",
      img: "/ResellersSolution.svg",
    },
  ];

  const renderMenuItem = (item: NavigationItem) => {
    const { name, link } = item;
    if (name === "Products" || name === "Company" || name === "Solutions") {
      const anchor =
        name === "Products"
          ? anchorEl
          : name === "Company"
          ? anchorCollection
          : anchorSolutions;
      const handleMouseEnter =
        name === "Products"
          ? handleMenuMouseEnter
          : name === "Company"
          ? handleCollectionMouseEnter
          : handleSolutionsMouseEnter;
      const handleClose =
        name === "Products"
          ? handleMenuClose
          : name === "Company"
          ? handleCollectionClose
          : handleSolutionClose;

      const menuItemsMap: MenuItemsMap = {
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
        Solutions: [
          {
            href: "/solutions/educational-institutions",
            text: "Educational Institutions",
            img: "/EducationaL.svg",
          },
          {
            href: "/solutions/travel-agencies",
            text: "Travel Agencies",
            img: "/TravelAgencies.svg",
          },
          {
            href: "/solutions/hospitality",
            text: "Hospitality",
            img: "/HospitalitySolution.svg",
          },
          {
            href: "/solutions/lifestyle",
            text: "Lifestyle",
            img: "/LifestyleSolution.svg",
          },
          {
            href: "/solutions/tech-services",
            text: "Tech Services",
            img: "/TechServicesSolution.svg",
          },
          {
            href: "/solutions/healthcare",
            text: "Healthcare",
            img: "/healthcareSolution.svg",
          },
          {
            href: "/solutions/e-commerce-industries",
            text: "E-commerce Industries",
            img: "/EcommerceSolution.svg",
          },
          {
            href: "/solutions/major-brands",
            text: "Major Brands",
            img: "/MajorBrandsSolution.svg",
          },
          {
            href: "/solutions/small-businesses",
            text: "Small Businesses",
            img: "/SmallBusinessesSolution.svg",
          },
          {
            href: "/solutions/resellers-and-retailers",
            text: "Resellers and Retailers",
            img: "/ResellersSolution.svg",
          },
        ],
      };

      return (
        <div
          className={`relative hover:underline`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleClose}
        >
          <p
            className={`cursor-pointer text-[16px]`}
            // onMouseOver={() => setMenuComponent(name)}
            // onMouseLeave={() => setMenuComponent("")}
          >
            {name}
          </p>
          {/* {menuComponent && ( */}
          <Menu
            anchorEl={anchor}
            open={Boolean(anchor)}
            onClose={handleClose}
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleClose}
            transitionDuration={800}
            PaperProps={{
              style: {
                maxHeight: "220px",
                overflowY: "auto",
              },
            }}
          >
            {menuItemsMap[name]?.map((menuItem, index) => (
              <MenuItem
                key={index}
                component={Link}
                href={menuItem.href}
                onClick={(e) => {
                  handleClose(e);
                  Path.push(menuItem.href);
                }}
                sx={{ paddingTop: 1, paddingBottom: 1 }}
                className="text-decoration-line: none;"
              >
                <Image
                  src={menuItem.img}
                  alt={`.`}
                  className="mr-2"
                  width={20}
                  height={20}
                />
                <p className="p-1 text-[16px]">{menuItem.text} </p>
              </MenuItem>
            ))}
          </Menu>
          {/* )} */}
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

  const handleClickSolutions = () => {
    setOpenSolutions(!openSolutions);
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="flex justify-between lg:px-20 items-center p-5 bg-white drop-shadow-md ">
        <button className="">
          <Link href={"/"}>
            <Image src={Logo} alt="logo" width={130} height={30} />{" "}
          </Link>
        </button>
        <div className="hidden lg:flex gap-8 text-sm mx-2">
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
                    if (
                      !(
                        item.name == "Products" ||
                        item.name == "Company" ||
                        item.name == "Solutions"
                      )
                    ) {
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
            PaperProps={{ style: { padding: 10 } }}
            transitionDuration={800}
          >
            <List
              sx={{ width: "300px", bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              className="mx-4"
            >
              <ListItemButton
                className="mb-1 my-4 rounded-md  flex justify-end items-end "
                onClick={toggleDrawer("right", false)}
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
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
                sx={{ marginLeft: 2, marginRight: 2 }}
              >
                <Image src={"/HOME.svg"} alt={`.`} width={20} height={20} />
                <Link href="/">
                  <p className="ml-4">Home</p>
                </Link>
              </ListItemButton>
              <Divider
                // className="mx-8"
                style={{ marginLeft: 20, marginRight: 20 }}
              />
              <ListItemButton
                className="mb-1  my-2 rounded-md"
                onClick={handleClick}
                sx={{ marginLeft: 2, marginRight: 2 }}
              >
                <Image src={"/PRODUCT.svg"} alt={`.`} width={20} height={20} />
                <p className="mx-4">Products</p>
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse
                in={open}
                timeout={800}
                unmountOnExit
                // className="shadow-sm shadow-primaryPurple-100 rounded-lg mt-2"
              >
                <List component="div" disablePadding>
                  <ListItemButton
                    sx={{ pl: 6 }}
                    onClick={toggleDrawer("right", false)}
                  >
                    <ListItemIcon>
                      <Image src={collection} alt={`.`} />
                    </ListItemIcon>
                    <Link href="/products/collection">Collection</Link>
                  </ListItemButton>
                  <Divider
                    // className="mx-10"
                    style={{ marginLeft: 40, marginRight: 40 }}
                  />
                  <ListItemButton
                    sx={{ pl: 6 }}
                    onClick={toggleDrawer("right", false)}
                  >
                    <ListItemIcon>
                      <Image src={payout} alt={`.`} />
                    </ListItemIcon>
                    <Link href="/products/payouts">Payouts</Link>
                  </ListItemButton>
                </List>
              </Collapse>
              <Divider
                // className="mx-8"
                style={{ marginLeft: 20, marginRight: 20 }}
              />
              <ListItemButton
                className="mb-1  my-2 rounded-md"
                onClick={handleClickSolutions}
                sx={{ marginLeft: 2, marginRight: 2 }}
              >
                <Image src={"/SOLUTION.svg"} alt={`.`} width={20} height={20} />
                <p className="mx-4">Solutions</p>
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse
                in={openSolutions}
                unmountOnExit
                timeout={1400}
                // className="shadow-sm shadow-primaryPurple-100 rounded-lg mt-2"
              >
                <List component="div" disablePadding>
                  {SolutionsNav.map((item, index) => (
                    <div key={index}>
                      <ListItemButton
                        sx={{ pl: 6 }}
                        onClick={toggleDrawer("right", false)}
                      >
                        <ListItemIcon>
                          <Image
                            src={item.img}
                            alt={`.`}
                            width={30}
                            height={30}
                          />
                        </ListItemIcon>
                        <Link href={item.href}>{item.text}</Link>
                      </ListItemButton>
                      <Divider
                        // className="mx-10"
                        style={{ marginLeft: 40, marginRight: 40 }}
                      />
                    </div>
                  ))}
                </List>
              </Collapse>
              <Divider
                // className="mx-8"
                style={{ marginLeft: 20, marginRight: 20 }}
              />
              <ListItemButton
                className="mb-1  my-2 rounded-md"
                onClick={toggleDrawer("right", false)}
                sx={{ marginLeft: 2, marginRight: 2 }}
              >
                <Image src={"/PRICING.svg"} alt={`.`} width={20} height={20} />
                <Link href="/pricing">
                  <p className="ml-4">Pricing</p>
                </Link>
              </ListItemButton>
              <Divider
                // className="mx-8"
                style={{ marginLeft: 20, marginRight: 20 }}
              />
              <ListItemButton
                className="mb-1  my-2 rounded-md"
                onClick={toggleDrawer("right", false)}
                sx={{ marginLeft: 2, marginRight: 2 }}
              >
                <Image src={"/DEVAPI.svg"} alt={`.`} width={20} height={20} />
                <Link href="/developerapi">
                  <p className="ml-4">Developer Api</p>
                </Link>
              </ListItemButton>
              <Divider
                // className="mx-8"
                style={{ marginLeft: 20, marginRight: 20 }}
              />
              <ListItemButton
                className="mb-1  my-2 rounded-md"
                onClick={handleClickCompany}
                sx={{ marginLeft: 2, marginRight: 2 }}
              >
                <Image src={"/COMPANY.svg"} alt={`.`} width={20} height={20} />
                <p className="mx-4">Company</p>
                {openCompany ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse
                in={openCompany}
                timeout={1000}
                unmountOnExit
                // className="shadow-sm shadow-primaryPurple-100 rounded-lg mt-2"
              >
                <List component="div" disablePadding>
                  <ListItemButton
                    sx={{ pl: 6 }}
                    onClick={toggleDrawer("right", false)}
                  >
                    <ListItemIcon>
                      <Image src={aboutus} alt={`.`} />
                    </ListItemIcon>
                    <Link href="/company/aboutus">About us</Link>
                  </ListItemButton>
                  <Divider
                    // className="mx-10"
                    style={{ marginLeft: 40, marginRight: 40 }}
                  />
                  <ListItemButton
                    sx={{ pl: 6 }}
                    onClick={toggleDrawer("right", false)}
                  >
                    <ListItemIcon>
                      <Image src={contactus} alt={`.`} />
                    </ListItemIcon>
                    <Link href="/company/contactus">Contact Us</Link>
                  </ListItemButton>
                  <Divider
                    // className="mx-10"
                    style={{ marginLeft: 40, marginRight: 40 }}
                  />
                  <ListItemButton
                    sx={{ pl: 6 }}
                    onClick={toggleDrawer("right", false)}
                  >
                    <ListItemIcon>
                      <Image src={blogs} alt={`.`} />
                    </ListItemIcon>
                    <Link href="/company/blogs">Blogs</Link>
                  </ListItemButton>
                  <Divider
                    // className="mx-10"
                    style={{ marginLeft: 40, marginRight: 40 }}
                  />
                  <ListItemButton
                    sx={{ pl: 6 }}
                    onClick={toggleDrawer("right", false)}
                  >
                    <ListItemIcon>
                      <Image src={faqs} alt={`.`} />
                    </ListItemIcon>
                    <Link href="/company/faqs">Faqs</Link>
                  </ListItemButton>
                </List>
              </Collapse>
              <Divider
                // className="mx-8"
                style={{ marginLeft: 20, marginRight: 20 }}
              />
            </List>
            <div className=" flex justify-center items-center gap-6 mt-40 pb-5">
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
