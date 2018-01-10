import FetchImages from '../service/FetchImages';
import React from 'react';

class ApiFetch extends React.Component {
	constructor() {
		super();
		this.state = {
			photos: [],
			loading: true,
			tag: ''
		};
	}

	componentDidMount = () => {
		this.setState({ loading: true });

		return FetchImages(this.props.tag)
		.then((photos) => {
			this.setState({
				photos: photos,
				loading: false
			});
		})
	}

	render () {
		return (
			<div className='photo-container'>
				{
					(this.state.loading)
					? <div className='loading'></div>
					: this.state.photos.map((photo) => {
						return <img className='photo' key={photo.id} src={photo.source} alt='' />
					})
				}
			</div>
		);
	}
}

export default ApiFetch;
