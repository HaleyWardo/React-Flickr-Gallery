import FetchImages from '../service/FetchImages';
import ImageNotFound from './ImageNotFound';
import React from 'react';

class ImageWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      loading: true
    };
    // this.loadContent = this.loadContent.bind(this);
  }

  loadContent = (query) => {
    this.setState({ loading: true });

    return FetchImages(query)
      .then((photos) => {
        this.setState({
          photos: photos,
          hasPhotos: photos && photos.length > 0,
          loading: false
      	});
      })
    }

    componentDidMount = () => {
      this.loadContent(this.props.match.params.query);
    }

    componentWillReceiveProps = (nextProps) => {
      const currentQuery = this.props.match.params.query;
      const nextQuery = nextProps.match.params.query;

      if(currentQuery !== nextQuery) {
        this.loadContent(nextQuery);
      }
  }

  render() {
    const query = this.props.match.params.query;
    const photos = this.state.photos;
    let heading = null;

    if (this.state.hasPhotos || this.state.loading ) {
      heading =
        <div>
          <h1 className='photo-heading'>{query}</h1>
        </div>;
    }

  	return (
      <div>
        {heading}
        {
          (this.state.loading)
          ? <div className='loading'> </div>
          :
          <div>
            {
              (photos.length > 0)
              ? photos.map((photo) => {
                return (
                  <a href={photo.url} key={photo.id} target="_blank">
                    <img className='photo' key={photo.id} src={photo.source} alt='' />
                  </a>
                );
              })
              : <ImageNotFound />
            }
          </div>
        }
    	</div>
  	);
  }
}

export default ImageWrapper;
