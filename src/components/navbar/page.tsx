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
import { navigationItems } from "@/constants/features";
import TemporaryDrawer from "../drawer/drawer";

interface NavigationItem {
  name: string;
  link: string;
}
// NavigationItem[]
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showProducts, setShowProducts] =useState(false);
  const [showCompany, setShowCompany] =useState(false)

  const toggleNavigation = () => {
    setShowNav((value) => !value);
  };

  const toggleProductNav = () => {
    setShowNav((value) => !value);
  };
  
  const toggleCompanyNav = () => {
    setShowNav((value) => !value);
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="flex  justify-between lg:px-20 items-center p-3 bg-white drop-shadow-md ">
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
            <CustomButton>login</CustomButton>
            <CustomButton filled={true} endIcon={true}>
              Open an Account
            </CustomButton>
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

      {/* {showNav ? (
        <div className=" relative flex justify-center z-100 bg-black mt-2 ">
          <div className=" absolute w-[90%] mx-auto   rounded-lg ">
            
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
      ) : null} */}

      {showNav ? (
        <TemporaryDrawer showNav={showNav} setShowNav={setShowNav} />
      ) : null}
    </nav>
  );
};

export default Navbar;
