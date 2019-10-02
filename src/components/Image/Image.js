import React from 'react';
import ActionToolbar from '../ActionToolbar/ActionToolbar';

const Image = props => {
    return (
        <div>
            <div>
                Title of the image
            </div>
            <div>
                Image content
            </div>
            <div>
                <ActionToolbar  />
            </div>
        </div>
    )
};

export default Image;