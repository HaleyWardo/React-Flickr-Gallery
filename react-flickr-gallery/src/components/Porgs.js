import React from 'react';
import ApiFetch from './ApiFetch';

const Porgs = (props) => (
    <div>
        <h1 className="photo-heading" >Porgs</h1>
        <ApiFetch tag={props.tag} />
    </div>
)

export default Porgs;