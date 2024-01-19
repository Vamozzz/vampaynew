"use client";
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// interface DrawerProps {
//     showNav: boolean;
//     setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
//   }

// const TemporaryDrawer: React.FC<DrawerProps> = ({ setShowNav , showNav }) => {

//   const list = () => (
//     <Box
//       sx={{ width: 250 }}
//       role="presentation"
//       onClick={setShowNav((value)=>!value)}
//       onKeyDown={setShowNav((value)=>!value)}
//     >
//       <List>
//         {['Home', 'Products', 'Pricing', 'Developer Api','Company'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       <Drawer anchor="right" open={showNav} onClose={()=>setShowNav((value)=>!value)}>
//         {list()}
//       </Drawer>
//     </div>
//   );
// };

// export default TemporaryDrawer;

// Import necessary modules from Next.js
// import Link from 'next/link';
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// interface DrawerProps {
//   showNav: boolean;
//   setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const TemporaryDrawer: React.FC<DrawerProps> = ({ setShowNav, showNav }) => {
//   const list = () => (
//     <Box
//       sx={{ width: 250 }}
//       role="presentation"
//       onClick={() => setShowNav((value) => !value)}
//       onKeyDown={() => setShowNav((value) => !value)}
//     >
//       <List>
//         {navigationItems.map((item, index) => (
//           <ListItem key={index} disablePadding>
//             <Link href={item.link} passHref>
//               <ListItemButton component="a">
//                 <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//                 <ListItemText primary={item.name} />
//               </ListItemButton>
//             </Link>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       <Drawer anchor="right" open={showNav} onClose={() => setShowNav((value) => !value)}>
//         {list()}
//       </Drawer>
//     </div>
//   );
// };

// export default TemporaryDrawer;

// // Example navigationItems array
// const navigationItems = [
//   {
//     name: 'Home',
//     link: '/',
//   },
//   {
//     name: 'Products',
//     link: '/products',
//   },
//   {
//     name: 'Pricing',
//     link: '/pricing',
//   },
//   {
//     name: 'Developer API',
//     link: '/developerapi',
//   },
//   {
//     name: 'Company',
//     link: '/company',
//   },
// ];

// import Link from 'next/link';
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';

// interface DrawerProps {
//   showNav: boolean;
//   setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
// }

// interface NavigationItem {
//   name: string;
//   link?: string;
//   nestedItems?: NavigationItem[];
// }

// const TemporaryDrawer: React.FC<DrawerProps> = ({ setShowNav, showNav }) => {
//   const [openNested, setOpenNested] = React.useState<number | null>(null);

//   const handleToggleNested = (index: number) => {
//     setOpenNested((prevIndex) => (prevIndex === index ? null : index));
//   };

//   const renderListItems = (items: NavigationItem[]) => {

//     return items.map((item, index) => (
//       <div key={index}>
//         <ListItem disablePadding>
//           <ListItemButton onClick={() => handleToggleNested(index)}>
//             {/* <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon> */}
//             <ListItemText primary={item.name} />
//             {item.nestedItems && (openNested === index ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
//           </ListItemButton>
//         </ListItem>
//         {item.nestedItems && (
//           <div style={{ paddingLeft: 20 }}>
//             {openNested === index &&
//               item.nestedItems.map((nestedItem, nestedIndex) => (
//                 <ListItem key={nestedIndex} disablePadding>
//                   <Link href={nestedItem.link || '#'} passHref>
//                     <ListItemButton component="a" onClick={() => setShowNav(false)}>
//                       {/* <ListItemIcon>
//                         {nestedIndex % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                       </ListItemIcon> */}
//                       <ListItemText primary={nestedItem.name} />
//                     </ListItemButton>
//                   </Link>
//                 </ListItem>
//               ))}
//           </div>
//         )}
//       </div>
//     ));
//   };

//   return (
//     <div>
//       <Drawer anchor="right" open={showNav} onClose={() => setShowNav((value) => !value)}>
//         <Box
//           sx={{ width: 250 }}
//           role="presentation"
//           onClick={() => setShowNav((value) => !value)}
//           onKeyDown={() => setShowNav((value) => !value)}
//         >
//           <List>{renderListItems(navigationItems)}</List>
//         </Box>
//       </Drawer>
//     </div>
//   );
// };

// export default TemporaryDrawer;

// // Example navigationItems array
// const navigationItems: NavigationItem[] = [
//   {
//     name: 'Home',
//     link: '/',
//   },
//   {
//     name: 'Products',
//     nestedItems: [
//       {
//         name: 'Collection',
//         link: '/products/collection',
//       },
//       {
//         name: 'Payout',
//         link: '/products/payout',
//       },
//     ],
//   },
//   {
//     name: 'Pricing',
//     link: '/pricing',
//   },
//   {
//     name: 'Developer API',
//     link: '/developerapi',
//   },
//   {
//     name: 'Company',
//     nestedItems: [
//       {
//         name: 'About Us',
//         link: '/company/aboutus',
//       },
//       {
//         name: 'Contact Us',
//         link: '/company/contactus',
//       },
//       {
//         name: 'Blogs',
//         link: '/company/blogs',
//       },
//       {
//         name: 'FAQs',
//         link: '/company/faqs',
//       },
//     ],
//   },
// ];

// import Link from 'next/link';
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Collapse from '@mui/material/Collapse';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';

// interface DrawerProps {
//   showNav: boolean;
//   setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
// }

// interface NavigationItem {
//   name: string;
//   link?: string;
//   nestedItems?: NavigationItem[];
// }

// const TemporaryDrawer: React.FC<DrawerProps> = ({ setShowNav, showNav }) => {
//   const [openNested, setOpenNested] = React.useState<number | null>(null);

//   const handleToggleNested = (index: number) => {
//     setOpenNested((prevIndex) => (prevIndex === index ? null : index));
//   };

//   const renderListItems = (items: NavigationItem[]) => {
//     return items.map((item, index) => (
//       <div key={index}>
//         <ListItem disablePadding>
//           <ListItemButton onClick={() => handleToggleNested(index)}>
//             <ListItemText primary={item.name} />
//             {item.nestedItems && (openNested === index ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
//           </ListItemButton>
//         </ListItem>
//         {item.nestedItems && (
//           <Collapse in={openNested === index} timeout="auto" unmountOnExit>
//             <List component="div" disablePadding>
//               {item.nestedItems.map((nestedItem, nestedIndex) => (
//                 <ListItem key={nestedIndex} disablePadding>
//                   <Link href={nestedItem.link || '#'} passHref>
//                     <ListItemButton component="a" onClick={() => setShowNav(false)}>
//                       <ListItemText primary={nestedItem.name} />
//                     </ListItemButton>
//                   </Link>
//                 </ListItem>
//               ))}
//             </List>
//           </Collapse>
//         )}
//       </div>
//     ));
//   };

//   return (
//     <div>
//       <Drawer anchor="right" open={showNav} onClose={() => setShowNav((value) => !value)}>
//         <Box
//           sx={{ width: 250 }}
//           role="presentation"
//           onClick={() => setShowNav((value) => !value)}
//           onKeyDown={() => setShowNav((value) => !value)}
//         >
//           <List>{renderListItems(navigationItems)}</List>
//         </Box>
//       </Drawer>
//     </div>
//   );
// };

// export default TemporaryDrawer;

// // Example navigationItems array
// const navigationItems: NavigationItem[] = [
//   {
//     name: 'Home',
//     link: '/',
//   },
//   {
//     name: 'Products',
//     nestedItems: [
//       {
//         name: 'Collection',
//         link: '/products/collection',
//       },
//       {
//         name: 'Payout',
//         link: '/products/payout',
//       },
//     ],
//   },
//   {
//     name: 'Pricing',
//     link: '/pricing',
//   },
//   {
//     name: 'Developer API',
//     link: '/developerapi',
//   },
//   {
//     name: 'Company',
//     nestedItems: [
//       {
//         name: 'About Us',
//         link: '/company/aboutus',
//       },
//       {
//         name: 'Contact Us',
//         link: '/company/contactus',
//       },
//       {
//         name: 'Blogs',
//         link: '/company/blogs',
//       },
//       {
//         name: 'FAQs',
//         link: '/company/faqs',
//       },
//     ],
//   },
// ];

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
import { ListItemIcon, ListSubheader } from "@mui/material";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import CustomButton from "../customButton/customButton";
import { handleLogin, handleRegister } from "@/utils/customFunctions";

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

  return (
    <div>
      <Drawer
        anchor="right"
        open={showNav}
        onClose={() => setShowNav((value) => !value)}
      >
        <List
          sx={{ width: "300px", maxWidth: 500, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton>
            <Link href="/">Home</Link>
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <p>Products</p>
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <Link href="/products/collection">Collection</Link>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <Link href="/products/payouts">Payouts</Link>
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton>
            <Link href="/pricing">Pricing</Link>
          </ListItemButton>
          <ListItemButton>
            <Link href="/developerapi">Developer Api</Link>
          </ListItemButton>
          <ListItemButton onClick={handleClickCompany}>
            <p>Company</p>
            {openCompany ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openCompany} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <Link href="/company/aboutus">About us</Link>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <Link href="/company/contactus">Contact Us</Link>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <Link href="/company/blogs">Blogs</Link>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <Link href="/company/faqs">Faqs</Link>
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        <div className=" flex justify-center items-center gap-6 mt-10">
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
