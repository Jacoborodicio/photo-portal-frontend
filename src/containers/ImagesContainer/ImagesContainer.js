import React from 'react';
import Image from '../../components/Image/Image';
import {withStyles} from '@material-ui/core';
import {Grid} from '@material-ui/core'
const styles = {
    globalContainer: {
        width: '100%'
    }
}
const ImagesContainer = props => {
    const {classes, images} = props;
    return (
        <Grid container className={classes.globalContainer}>
            {images.map(img => {
                return (
                <Grid item xs={4}>
                    <Image img={img}/>
                </Grid>
                );
            })}
        </Grid>
    )
};

export default withStyles(styles)(ImagesContainer);