"use client";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "../customButton/customButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
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
import {navigationItems} from "@/constants/features"

interface NavigationItem {
  name: string;
  link: string;
}
// NavigationItem[] 
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  

  const toggleNavigation = () => {
    setShowNav((value) => !value);
    console.log("clicked");
  };

  return (
    <nav className="">
      <div className="flex sticky justify-between lg:px-20 items-center p-3 bg-white drop-shadow-md ">
        <div className="">
          <Image src={"logo.svg"} alt="logo" width={130} height={30} />
        </div>
        <div className="hidden md:flex md:space-x-4 lg:space-x-8 text-sm mx-2">
          {navigationItems.map((item, index) => (
            <div key={index}>
              <Link href={item?.link}>{item?.name}</Link>
            </div>
          ))}
        </div>
        <div className="flex space-x-4 justify-center items-center">
          <div className="hidden sm:flex  space-x-2 ">
            <CustomButton filled={true} buttonSize={"small"}>
              login
            </CustomButton>
            <CustomButton>Open an Account</CustomButton>
          </div>

          <div className="md:hidden text-center " onClick={toggleNavigation}>
            {showNav ? (
              <CloseIcon color="primary" fontSize="large" />
            ) : (
              <MenuIcon color="primary" fontSize="large" />
            )}
          </div>
        </div>
      </div>

      {showNav ? (
        <div className=" relative flex justify-center  bg-black mt-2 ">
          <div className=" absolute w-[90%] mx-auto bg-black  rounded-lg ">
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
                <Tab label={item.name} key={index} />
              ))}
            </Tabs>

            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                borderRadius: 5,
                bgcolor: "background.paper",
              }}
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
                {/* {open ?<KeyboardArrowUpIcon color="primary" /> : <KeyboardArrowDownIcon />} */}
              </ListItemButton>
              <Collapse timeout="auto" unmountOnExit>
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
