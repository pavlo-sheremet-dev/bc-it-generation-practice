import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    totalPages: 0,
    loading: false,
    error: '',
  };

  getQuery = queryObject => {
    this.setState({ query: queryObject.text, images: [], page: 1 });
  };

  componentDidUpdate = async (_, prevState) => {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.getImages();
    }
  };

  getImages = async () => {
    const { query, page } = this.state;
    this.setState({ loading: true });

    try {
      const { photos, totalPages } = await ImageService.getImages(query, page);

      this.setState(prevState => {
        return {
          images: [...prevState.images, ...photos],
          totalPages,
          error: '',
        };
      });
    } catch (error) {
      this.setState({ error: 'something went wrong' });
    } finally {
      this.setState({ loading: false });
    }
  };

  incrementPage = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  render() {
    const { images } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.getQuery} />
        {!!images.length && <div>TEXT</div>}
        {images.length ? (
          <p>Gallery List</p>
        ) : (
          <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        )}

        {this.state.error && <p>{this.state.error}</p>}
        <Button type="button" onClick={this.incrementPage}>
          Load More
        </Button>
      </>
    );
  }
}

// Кнопка не показывается когда происходит загрузка, когда последняя страница.
