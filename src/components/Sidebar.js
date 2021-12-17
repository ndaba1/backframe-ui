// @PRIMARY IMPORTS >>>>>
import { makeStyles, Typography } from "@material-ui/core";
import AssessmentIcon from "@material-ui/icons/Assessment";
import TimelineIcon from "@material-ui/icons/Timeline";
import SecurityIcon from "@material-ui/icons/Security";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import StorageIcon from "@material-ui/icons/Storage";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import DescriptionIcon from "@material-ui/icons/Description";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

// @SECONDARY IMPORTS >>>>>
import { theme } from "../theme";
import graphQL from "../assets/graphQL.png";
import RPC from "../assets/RPC.png";
import REST from "../assets/rest_logo.png";
import SOAP from "../assets/xml.png";

// @STYLE >>>>>
const useStyles = makeStyles({
  wrapper: {
    height: "calc(100vh - 55px)",
    backgroundColor: "#0E1131",
    position: "fixed",
    width: "20%",
    padding: theme.spacing(2),
    overflowY: "scroll",
    msOverflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(255,255,255,.7)",
      borderRadius: "1rem",
    },
  },
  body: {
    position: "relative",
  },
  section: {
    // paddingTop: theme.spacing(1),
    marginBottom: "8px",
  },
  item: {
    color: "white",
    zIndex: "100",
    display: "flex",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(255,255,255, 0.5)",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  text: {
    marginLeft: theme.spacing(3),
    fontSize: "16px",
    color: "#f2eff4",
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  icon: {
    fontSize: "24px",
    color: "#f2eff4",
    [theme.breakpoints.down("sm")]: {
      fontSize: "26px",
    },
  },
  links: {
    textDecoration: "none",
  },
  headings: {
    color: "#b9b8ba",
    fontWeight: "600",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    marginBottom: "3px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  circle: {
    position: "absolute",
    width: "30px",
    height: "30px",
    top: "10",
    right: "0",
    borderRadius: "50%",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.6)",
    },
  },
});

// @COMPONENT >>>>>
const SideBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <div className={classes.circle}>
          <ChevronLeftIcon style={{ color: "white", fontSize: "28px" }} />
        </div>
        <div className={classes.section}>
          <Typography variant={"body1"} className={classes.headings}>
            Dashboard
          </Typography>
          <div className={classes.item}>
            <AssessmentIcon className={classes.icon} />
            <Typography className={classes.text}>Metrics</Typography>
          </div>
          <div className={classes.item}>
            <TimelineIcon className={classes.icon} />
            <Typography className={classes.text}>Analytics</Typography>
          </div>
        </div>
        <div className={classes.section}>
          <Typography variant={"body1"} className={classes.headings}>
            Authentication
          </Typography>
          <div className={classes.item}>
            <SecurityIcon className={classes.icon} />
            <Typography className={classes.text}>Providers</Typography>
          </div>
          <div className={classes.item}>
            <AccountCircleIcon className={classes.icon} />
            <Typography className={classes.text}>Users</Typography>
          </div>
        </div>
        <div className={classes.section}>
          <Typography variant={"body1"} className={classes.headings}>
            Database
          </Typography>
          <div className={classes.item}>
            <StorageIcon className={classes.icon} />
            <Typography className={classes.text}>Primary DB</Typography>
          </div>
          <div className={classes.item}>
            <DeveloperModeIcon className={classes.icon} />
            <Typography className={classes.text}>Test-Mode</Typography>
          </div>
        </div>
        <div className={classes.section}>
          <Typography variant={"body1"} className={classes.headings}>
            APIs
          </Typography>
          <div className={classes.item}>
            <img src={REST} alt="REST" width={"24px"} />
            <Typography className={classes.text}>REST</Typography>
          </div>
          <div className={classes.item}>
            <img src={graphQL} alt="graphQL" width={"24px"} />
            <Typography className={classes.text}>GraphQL</Typography>
          </div>
          <div className={classes.item}>
            <img src={RPC} alt="gRPC" width={"26px"} />
            <Typography className={classes.text}>gRPC</Typography>
          </div>
          <div className={classes.item}>
            <img src={SOAP} alt="SOAP" width={"22px"} />
            <Typography className={classes.text}>SOAP</Typography>
          </div>
        </div>
        <div className={classes.section}>
          <Typography variant={"body1"} className={classes.headings}>
            Others
          </Typography>
          <div className={classes.item}>
            <SettingsIcon className={classes.icon} />
            <Typography className={classes.text}>Settings</Typography>
          </div>
          <div className={classes.item}>
            <DescriptionIcon className={classes.icon} />
            <Typography className={classes.text}>Documentation</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
