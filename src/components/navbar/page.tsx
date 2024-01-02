"use client";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "../customButton/CustomButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Tab,
  Tabs,
} from "@mui/material";

interface NavigationItem {
  name: string;
  link: string;
}
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const navigationItems: NavigationItem[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Products",
      link: "/",
    },
    {
      name: "Pricing",
      link: "/",
    },
    {
      name: "Developer API",
      link: "/",
    },
    {
      name: "Company",
      link: "/",
    },
  ];

  const toggleNavigation = () => {
    setShowNav((value) => !value);
    console.log("clicked");
  };

  return (
    <nav className="">
      <div className="flex sticky justify-between items-center p-4 bg-white drop-shadow-md ">
        <div>
          <Image src={"logo.svg"} alt="logo" width={100} height={30} />
        </div>
        <div className="md:hidden" onClick={toggleNavigation}>
          {showNav ? (
            <CloseIcon color="primary" />
          ) : (
            <MenuIcon color="primary" />
          )}
        </div>
        <div className="hidden md:flex">
          {navigationItems.map((item, index) => (
            <div key={index}>
              <Link href={item?.link}>{item?.name}</Link>
            </div>
          ))}
        </div>

        <div className="hidden md:flex ">
          <CustomButton filled={true}>login</CustomButton>
          <CustomButton>Open an Account</CustomButton>
        </div>
      </div>

      {showNav ? (
        <div className=" relative flex justify-center  bg-black mt-2 ">
          <div className=" absolute w-[90%] mx-auto bg-white  rounded-lg ">
            {/* {navigationItems.map((item, index) => (
            <div key={index}>
              <Link href={item?.link}>{item?.name}</Link>
            </div>
          ))} */}
            <Tabs
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              aria-label="scrollable force tabs example"
            >
              {navigationItems.map((item, index) => (
                <Tab label={item.name} key={index}/>
              ))}
            </Tabs>

            <List
              sx={{ width: "100%", maxWidth: 360, borderRadius:5, bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Nested List Items
                </ListSubheader>
              }
            >
              <ListItemButton>
                <ListItemIcon>
                  <CloseIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Sent mail" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CloseIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CloseIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                {open ?<KeyboardArrowUpIcon color="primary" /> : <KeyboardArrowDownIcon />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <CloseIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
