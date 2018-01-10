import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoWrapper = props => {


    const results = props.data;
    let images;

    if (results.length > 0) {
        images = results.map((photo) =>
            <Photo url={photo.source} key={photo.id} />
        );
    }  else {
        images = <NotFound />
    }

    return (
        <ul>
            {images}
        </ul>
    );
}

export default PhotoWrapper;




