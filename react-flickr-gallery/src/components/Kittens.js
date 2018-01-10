import React from 'react';
import ApiFetch from './ApiFetch';

const Kittens = (props) => (
    <div>
        <h1 className="photo-heading">Kittens</h1>
        <ApiFetch tag={props.tag} />
    </div>
)

export default Kittens;