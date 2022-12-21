import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    query: '',
    images: [],
  };

  getQuery = queryObject => {
    this.setState({ query: queryObject.text });
  };

  componentDidUpdate = (_, prevState) => {
    if (prevState.query !== this.state.query) {
      console.log('query update');
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
