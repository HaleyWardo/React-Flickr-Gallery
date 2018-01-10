import React from 'react';
import ApiFetch from './ApiFetch';

const UserImages = (props) => (
    <div>
        <h1 className="photo-heading">{props.match.params.query}</h1>
        <ApiFetch tag={props.match.params.query} />
    </div>
)

export default UserImages;