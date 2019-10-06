import React from "react";
import { withStyles, Grid } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const styles = {
  globalContainer: {
    borderTop: "1px solid #f0f0f0",
    padding: '.5rem',
    boxSizing: 'border-box'
  },
  authorDetails: {
    textAlign: 'left'
  },
  authorName: {
      margin: 0,
      color: '#b0b0b0'
  },
  authorInstagram: {
      margin: 0,
      color: '#b5b5b5',
      fontSize: '.8rem'
  }
};
const ActionToolbar = props => {
  const { classes, authorFirstName, authorSecondName, authorInstagram, downloads } = props;
  return (
    <Grid container className={classes.globalContainer} justify={'center'}>
      <Grid item xs={10} className={classes.authorDetails}>
        <p className={classes.authorName}>
          {authorFirstName} {authorSecondName}
        </p>
        <p className={classes.authorInstagram}>@{authorInstagram}</p>
      </Grid>
      <Grid item xs={2}>
        <FontAwesomeIcon icon={faDownload} /> {downloads}
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(ActionToolbar);
