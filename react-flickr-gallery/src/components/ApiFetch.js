import React from 'react';
import axios from 'axios';
import apiKey from '../config' ;


class ApiFetch extends React.Component {
    constructor() {
        super();
        this.state = {
            photos: [],
            loading: true,
            tag: ''
        };
    }

    componentDidMount() {
        return axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.props.tag}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
            const photos = response.data.photos.photo;
            const photoPromises = photos.map((photo) => {
                const id = photo.id;
                return axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${apiKey}&photo_id=${id}&per_page=24&format=json&nojsoncallback=1`)
                .then(size => {
                    size.id = id;
                    return size;
                });
            });
            return Promise.all(photoPromises);
        })

        .then(photos => {
            const mediumPhotos = photos.map((photo) => {
                const size = photo.data.sizes.size.find((size) => size.label === 'Small');
                return Object.assign(size, { id: photo.id });
            });

            this.setState({
                photos: mediumPhotos,
                loading: false
            });
        })

        .catch(error => {
            console.log('Error fetaching data', error);
        });
    }

    render () {
        return (
            <div className="photo-container">
            {
            (this.state.loading)
            ? <div className="loading"></div>
            : this.state.photos.map((photo) => {
                return <img className="photo" key={photo.id} src={photo.source} alt='' />
            })
            }
        </div>
        );
    }
}

export default ApiFetch;
