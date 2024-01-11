"use client"
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
import Link from 'next/link';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

interface DrawerProps {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const TemporaryDrawer: React.FC<DrawerProps> = ({ setShowNav, showNav }) => {
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setShowNav((value) => !value)}
      onKeyDown={() => setShowNav((value) => !value)}
    >
      <List>
        {navigationItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <Link href={item.link} passHref>
              <ListItemButton component="a">
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer anchor="right" open={showNav} onClose={() => setShowNav((value) => !value)}>
        {list()}
      </Drawer>
    </div>
  );
};

export default TemporaryDrawer;

// Example navigationItems array
const navigationItems = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Products',
    link: '/products',
  },
  {
    name: 'Pricing',
    link: '/pricing',
  },
  {
    name: 'Developer API',
    link: '/developerapi',
  },
  {
    name: 'Company',
    link: '/company',
  },
];

