"use client";

import Link from "next/link";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import {
  Divider,
  IconButton,
  ListItemIcon,
  ListSubheader,
  SwipeableDrawer,
} from "@mui/material";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import CustomButton from "../customButton/customButton";
import { handleLogin, handleRegister } from "@/utils/customFunctions";

import collection from "@/assets/images/import.svg";
import payout from "@/assets/images/export.svg";
import aboutus from "@/assets/images/ABOUTUS.svg";
import contactus from "@/assets/images/CONTACTUS.svg";
import faqs from "@/assets/images/FAQs.svg";
import blogs from "@/assets/images/BLOGS.svg";
import Image from "next/image";

interface DrawerProps {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

interface NavigationItem {
  name: string;
  link?: string;
  nestedItems?: NavigationItem[];
}

const TemporaryDrawer: React.FC<DrawerProps> = ({ setShowNav, showNav }) => {
  const [openNested, setOpenNested] = React.useState<number | null>(null);
  const [open, setOpen] = React.useState(false);
  const [openCompany, setOpenCompany] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickCompany = () => {
    setOpenCompany(!openCompany);
  };

  const toggleDrawer = () => {
    setTimeout(() => {
      setShowNav(!showNav);
    }, 700);
  };

  return (
    <div>
      <Drawer
        anchor="right"
        role="presentation"
        open={showNav}
        onClose={toggleDrawer}
        // style={{
        //   transform: showNav ? "translateX(0)" : "translateX(100%)",
        //   transition: "transform 3000ms ease-in-out",
        // }}
        PaperProps={{ style: { height: "65vh" } }}
        transitionDuration={{ appear: 3000, enter: 3000, exit: 3000 }}
      >
        {/* <div className=" bg-grayBackground ">
          <ListItemButton className="">
            <ListItemIcon onClick={toggleDrawer} className="">
              <Image src={"/CLOSE.svg"} alt={`.`} height={40} width={40} />
            </ListItemIcon>
          </ListItemButton>
        </div> */}
        <List
          sx={{ width: "280px", bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          className="mx-4  mt-2"
        >
          <ListItem
            className="py-4 "
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={toggleDrawer}>
                <Image
                  src={"/CLOSE.svg"}
                  alt={`.`}
                  height={40}
                  width={40}
                  className=""
                />
              </IconButton>
            }
          ></ListItem>
        </List>
        <List
          sx={{ width: "280px", bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          className="mx-4  "
        >
          <ListItemButton
            className="mb-1 shadow-md my-2 rounded-md "
            onClick={toggleDrawer}
          >
            <Image src={"/HOME.svg"} alt={`.`} width={20} height={20} />
            <Link href="/">
              <p className="ml-4">Home</p>
            </Link>
          </ListItemButton>
          {/* <Divider className="mr-12" /> */}
          <ListItemButton
            className="mb-1 shadow-md my-2 rounded-md"
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
            className="shadow-sm shadow-primaryPurple-100 rounded-lg mt-2"
          >
            <List component="div" disablePadding>
              <ListItemButton  sx={{ pl: 4, }} onClick={toggleDrawer}>
                <ListItemIcon>
                  <Image src={collection} alt={`.`} />
                </ListItemIcon>
                <Link href="/products/collection">Collection</Link>
              </ListItemButton>
              {/* <Divider className="mx-10" /> */}
              <ListItemButton sx={{ pl: 4 }} onClick={toggleDrawer}>
                <ListItemIcon>
                  <Image src={payout} alt={`.`} />
                </ListItemIcon>
                <Link href="/products/payouts">Payouts</Link>
              </ListItemButton>
            </List>
          </Collapse>
          {/* <Divider className="mr-12" /> */}
          <ListItemButton
            className="mb-1 shadow-md my-2 rounded-md"
            onClick={toggleDrawer}
          >
            <Image src={"/PRICING.svg"} alt={`.`} width={20} height={20} />
            <Link href="/pricing">
              <p className="ml-4">Pricing</p>
            </Link>
          </ListItemButton>
          {/* <Divider className="mr-12" /> */}
          <ListItemButton
            className="mb-1 shadow-md my-2 rounded-md"
            onClick={toggleDrawer}
          >
            <Image src={"/DEVAPI.svg"} alt={`.`} width={20} height={20} />
            <Link href="/developerapi">
              <p className="ml-4">Developer Api</p>
            </Link>
          </ListItemButton>
          {/* <Divider className="mr-12" /> */}
          <ListItemButton
            className="mb-1 shadow-md my-2 rounded-md"
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
            className="shadow-sm shadow-primaryPurple-100 rounded-lg mt-2"
          >
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={toggleDrawer}>
                <ListItemIcon>
                  <Image src={aboutus} alt={`.`} />
                </ListItemIcon>
                <Link href="/company/aboutus">About us</Link>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={toggleDrawer}>
                <ListItemIcon>
                  <Image src={contactus} alt={`.`} />
                </ListItemIcon>
                <Link href="/company/contactus">Contact Us</Link>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={toggleDrawer}>
                <ListItemIcon>
                  <Image src={blogs} alt={`.`} />
                </ListItemIcon>
                <Link href="/company/blogs">Blogs</Link>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={toggleDrawer}>
                <ListItemIcon>
                  <Image src={faqs} alt={`.`} />
                </ListItemIcon>
                <Link href="/company/faqs">Faqs</Link>
              </ListItemButton>
            </List>
          </Collapse>
          {/* <Divider className="mr-12" /> */}
        </List>
        <div className=" flex justify-center items-center gap-6 mt-20 pb-5">
          <CustomButton onClick={handleLogin}>login</CustomButton>
          <CustomButton onClick={handleRegister} filled={true} endIcon={true}>
            Open an Account
          </CustomButton>
        </div>
      </Drawer>
    </div>
  );
};

export default TemporaryDrawer;
