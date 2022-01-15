import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BallotIcon from '@material-ui/icons/Ballot';
import { Link } from "react-router-dom";
import SimpleMenu from "./NavBarMenu";
import BookIcon from '@material-ui/icons/Book';
import MessageIcon from "@material-ui/icons/Message";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Bonjour
          </Typography>
          <SimpleMenu />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <ListItem button key="Liste produit">
              <ListItemIcon>
                {" "}
                <HomeIcon style={{ color: "#039be5" }} />
              </ListItemIcon>
              <ListItemText primary="Acceuil" />
            </ListItem>
          </Link>

          <Link
            to="/utilisateur"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button key="Utilisateur">
              <ListItemIcon>
                {" "}
                <SupervisorAccountIcon style={{ color: "#039be5" }} />
              </ListItemIcon>
              <ListItemText primary="Promoteurs" />
            </ListItem>
          </Link>

          <Link
            to="/financiere"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button key="financiere">
              <ListItemIcon>
                {" "}
                <SupervisorAccountIcon style={{ color: "#039be5" }} />
              </ListItemIcon>
              <ListItemText primary="Financières" />
            </ListItem>
          </Link>

          <Link
            to="/list-projet"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button key="Demande de Projet">
              <ListItemIcon>
                {" "}
                <BallotIcon style={{ color: "#039be5" }} />
              </ListItemIcon>
              <ListItemText primary="Demande de Projet" />
            </ListItem>
          </Link>
          <Link
            to="/list-formation"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button key="">
              <ListItemIcon>
                {" "}
                <BookIcon style={{ color: "#039be5" }} />
              </ListItemIcon>
              <ListItemText primary="Nos formations" />
            </ListItem>
          </Link>
          <Link
            to="/list-client"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button>
              <ListItemIcon>
                <MessageIcon style={{ color: "#039be5" }}  />
              </ListItemIcon>
              <ListItemText primary="Nos clients" />
            </ListItem>
          </Link>
        </List>
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {props.centent}
      </main>
    </div>
  );
}
