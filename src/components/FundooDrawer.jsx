import React from 'react';
import { styled} from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LightbulbIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import ArchiveIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteIcon from "@mui/icons-material/DeleteOutlineOutlined";
import LabelsIcon from "@mui/icons-material/EditOutlined";
import MuiDrawer from "@mui/material/Drawer";


function FundooDrawer(open) {

  const drawerWidth = 240;

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems:'flex-start',
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });
  
  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  return (
    <Drawer variant="permanent" open={open}>
        {/* <DrawerHeader></DrawerHeader> */}
      
        <List>
          {["Notes", "Remainder", "Edit Labels", "Archive", "Trash"].map(
            (text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index === 0 ? <LightbulbIcon /> : " "}
                    {index === 1 ? <NotificationsIcon /> : ""}
                    {index === 2 ? <LabelsIcon /> : ""}
                    {index === 3 ? <ArchiveIcon /> : ""}
                    {index === 4 ? <DeleteIcon /> : ""}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
  )
}

export default FundooDrawer