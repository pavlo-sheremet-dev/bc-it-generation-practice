import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  getQuery = queryObject => {
    this.setState({ query: queryObject.text });
  };
  componentDidMount = async () => {
    // const { photos, totalPhotos } = await ImageService.getImages('car', 1);
  };
  componentDidUpdate = async (_, prevState) => {
    console.log('componentDidUpdate');
    const { query, page, images } = this.state;
    if (prevState.query !== this.state.query) {
      const { photos, totalPhotos } = await ImageService.getImages(query, page);
      this.setState(prevState => {
        return { images: [...prevState.images, ...photos] };
      });
      // console.log(photos, totalPhotos);
    }
  };

  render() {
    const { images, query } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.getQuery} />
        <p>{query}</p>
        {!!images.length && <p>Gallery List</p>}
        {images.length > 0 && <p>Gallery List</p>}
        {images.length !== 0 && <p>Gallery List</p>}
        {Boolean(images.length) && <p>Gallery List</p>}
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      </>
    );
  }
}
