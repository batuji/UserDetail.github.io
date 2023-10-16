import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import "./ViewDetails.css";
import { light } from "@material-ui/core/styles/createPalette";

const useStyles = makeStyles((theme) => ({
  detailsContainer: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.grey[300]}`,
    backgroundColor: theme.palette.background.paper,
  },
  customHeading: {
    color: theme.palette.primary.main,
  },
  sectionContainer: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.grey[300]}`,
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0px 4px 8px tomato",
  },
  sectionHeading: {
    color: theme.palette.success.main,
  },
  userID: {
    fontWeight: "bold",
    color: "#FF0000",
  },
  userEmail: {
    color: theme.palette.common.black,
  },
  columnsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start", // Align items to the start
    marginBottom: theme.spacing(1),
  },
  column: {
    flex: "0 0 45%",
    boxSizing: "border-box",
    padding: "20px",
  },
  left: {
    alignItems: "flex-start", // Align items to the start
    boxShadow: "0px 4px 8px  blue",
  },
  right: {
    alignItems: "flex-start", // Align items to the end
    boxShadow: "0px 4px 8px blue",
  },
}));

const ViewDetails = ({ user }) => {
  const classes = useStyles();

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();
  return (
    <div className={classes.sectionContainer}>
      <Typography variant="h4" className={classes.customHeading}>
        User Details
      </Typography>
      <Typography className={classes.userID}>User ID: {user.id}</Typography>
      <div className={`${classes.sectionContainer} container`}>
        <Typography variant="h5" className={classes.sectionHeading}>
          Company
        </Typography>
        {user.company && (
          <>
            <Typography>Company Name: {user.company.name}</Typography>
            <Typography>Catch Phrase: {user.company.catchPhrase}</Typography>
            <Typography>BS: {user.company.bs}</Typography>
          </>
        )}
        <div className={`${classes.updateInfo} update-info`}>
          <Typography variant="caption">
            Updated on {formattedDate} at {formattedTime}
          </Typography>
        </div>
        <div className={classes.sectionContainer}>
          <div className={classes.columnsContainer}>
            <div className={`${classes.column} ${classes.left}`}>
              <Typography variant="h5" className={classes.sectionHeading}>
                Contact
              </Typography>
              <Typography>User Name: {user.name}</Typography>

              <Typography className={classes.userEmail}>
                Email: {user.email}
              </Typography>
              <Typography>Phone: {user.phone}</Typography>
              <Typography>Website: {user.website}</Typography>
            </div>
            <div className={`${classes.column} ${classes.right}`}>
              <Typography variant="h5" className={classes.sectionHeading}>
                Address
              </Typography>
              {user.address && (
                <>
                  <Typography>Street: {user.address.street}</Typography>
                  <Typography>Suite: {user.address.suite}</Typography>
                  <Typography>City: {user.address.city}</Typography>
                  <Typography>Zip Code: {user.address.zipcode}</Typography>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
