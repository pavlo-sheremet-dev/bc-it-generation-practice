import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Text, Loader, GalleryList } from 'components';

// const STATUS = {
//   idle: 'idle',
//   pending: 'pending',
//   resolved: 'resolver',
//   rejected: 'rejected',
// };

// 3 ДЗ - 25.12
// test - 27.12
// 4 ДЗ - 29.12
// 5-6 ДЗ - 02.01-08.01

export class Gallery extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    totalPages: 0,
    loading: false,
    // status: STATUS.idle,
    error: '',
  };

  componentDidUpdate = async (_, prevState) => {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.getImages();
    }
  };

  getQuery = queryObject => {
    this.setState({
      query: queryObject.text,
      images: [],
      page: 1,
      totalPages: 0,
    });
  };

  incrementPage = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
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

  render() {
    const { images, totalPages, page, loading, error } = this.state;

    const showGallery = images.length > 0;

    const showBtn = Boolean(totalPages) && totalPages !== page;
    return (
      <>
        <SearchForm onSubmit={this.getQuery} />

        {showGallery && <GalleryList images={images} />}

        {!showGallery && (
          <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        )}

        {error && <p>{this.state.error}</p>}

        {showBtn && (
          <Button type="button" onClick={this.incrementPage} disabled={loading}>
            {loading ? <Loader /> : <span>Load More</span>}
          </Button>
        )}
      </>
    );
  }
}
