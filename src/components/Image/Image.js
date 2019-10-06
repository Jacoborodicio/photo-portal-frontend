import React from "react";
import ActionToolbar from "../ActionToolbar/ActionToolbar";
import { withStyles } from "@material-ui/core";

const styles = {
  targetContainer: {
    position: "relative",
    padding: "1rem",
    margin: ".5rem",
    height: "60vh",
    border: "1px solid #f0f0f0",
    borderRadius: 5
  },
  titleContainer: {
    padding: "1rem"
  },
  imgContainer: {
    maxWidth: "100%",
    maxHeight: "100%"
  },
  buttonsToolbar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%"
  }
};

const Image = props => {
  const { img, classes } = props;
      if(img) {
          return (



    <div className={classes.targetContainer}>
      <div className={classes.titleContainer}>{img.title}</div>
      <div>
        <img src={img.path} alt={img.title} className={classes.imgContainer} />
      </div>
      <div className={classes.buttonsToolbar}>
        <ActionToolbar
          authorFirstName={img.authorFirstName}
          authorSecondName={img.authorSecondName}
          authorInstagram={img.authorInstagram}
          downloads={img.downloads}
        />
      </div>
    </div>
  );
} else return 'loading'
};

export default withStyles(styles)(Image);
