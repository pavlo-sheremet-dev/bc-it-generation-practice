import { useState } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Text, Loader, GalleryList } from 'components';
import { useEffect } from 'react';

// const STATUS = {
//   idle: 'idle',
//   pending: 'pending',
//   resolved: 'resolver',
//   rejected: 'rejected',
// };

export const Gallery = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    }
    const getImages = async () => {
      setLoading(true);

      try {
        const { photos, totalPages } = await ImageService.getImages(
          query,
          page
        );

        setImages(prev => [...prev, ...photos]);
        setTotalPage(totalPages);
        setError('');
      } catch (error) {
        setError('something went wrong');
      } finally {
        setLoading(false);
      }
    };
    getImages();
    console.log('hello, i am use effect');
  }, [query, page]);

  const getQuery = queryObject => {
    setQuery(queryObject.text);
    setImages([]);
    setPage(1);
    setTotalPage(0);
  };

  const incrementPage = () => {
    setPage(prev => prev + 1);
  };

  const showGallery = images.length > 0;
  const showBtn = Boolean(totalPages) && totalPages !== page;
  return (
    <>
      <SearchForm onSubmit={getQuery} />

      {showGallery && <GalleryList images={images} />}

      {!showGallery && (
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      )}

      {error && <p>{error}</p>}

      {showBtn && (
        <Button type="button" onClick={incrementPage} disabled={loading}>
          {loading ? <Loader /> : <span>Load More</span>}
        </Button>
      )}
    </>
  );
};
