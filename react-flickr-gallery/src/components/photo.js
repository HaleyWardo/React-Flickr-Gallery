import React from 'react';
import PropTypes from 'prop-types';

const Photo = props => (
    <div>
        <li className="photos-wrap">
            <img src={props.source} alt='' />
        </li>
    </div>
);

Photo.propTypes = {
    source : PropTypes.string.isRequired
}

export default Photo;