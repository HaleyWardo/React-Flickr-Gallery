import React from 'react';
import ApiFetch from './ApiFetch';

const Dinosaurs = (props) => (
    <div>
        <h1 className="photo-heading" >Dinosaurs</h1>
        <ApiFetch tag={props.tag} />
    </div>
);

export default Dinosaurs;