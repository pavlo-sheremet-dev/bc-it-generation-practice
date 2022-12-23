import { Grid, GridItem, ImageCard } from 'components';

export const GalleryList = ({ images }) => {
  return (
    <Grid>
      {images.map(({ id, ...image }) => (
        <GridItem key={id}>
          <ImageCard imageData={image} />
        </GridItem>
      ))}
    </Grid>
  );
};
