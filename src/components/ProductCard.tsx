import {
  Card,
  makeStyles,
  Theme,
  CardContent,
  Typography,
  CardMedia,
} from '@material-ui/core';
import { Fragment } from 'react';
import { Button, Box } from '@material-ui/core';
import Image from 'next/image';
import { useCurrencyFormatter as currencyFormat } from '@hooks';
import { ProductType } from '@dto';

interface ProductCardProps {
  data: ProductType;
}

const styles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    padding: theme.spacing(1.5, 2.5),
    borderRadius: 0,
    transition: '0.3s ease 0s all',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#0000000a',
    },
  },
  content: {
    marginLeft: theme.spacing(2),
    padding: '0 !important',
    display: 'flex',
    width: '100%',
  },
  cover: {
    maxHeight: 80,
    maxWidth: 80,
    '@media (max-width:360px)': {
      maxHeight: 60,
      maxWidth: 60,
    },
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 8,
  },

  title: {
    fontWeight: 'bold',
  },
  helper: {
    color: theme.palette.primary.main,
    cursor: 'pointer',
  },
  imageWrapper: {
    width: '100%',
    height: '100%',
    maxHeight: 80,
    maxWidth: 80,
    '@media (max-width:360px)': {
      maxHeight: 60,
      maxWidth: 60,
    },
  },
  image: {
    objectFit: 'cover',
    borderRadius: 8,
  },
  buttonWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  button: {
    textTransform: 'capitalize',
    height: 32,
    fontWeight: 'bold',
    padding: theme.spacing(0.5, 1.5),
    border: `1px solid ${theme.palette.primary.main}`,
    position: 'relative',
    bottom: 0,
    right: 0,
    '@media (max-width:360px)': {
      fontSize: '.75rem',
      padding: theme.spacing(0.5, 1),
    },
  },
  discountPercent: {
    color: '#fff',
    fontSize: '.75em',
  },
  discountPrice: {
    color: '#A6A6A6',
    textDecoration: 'line-through',
  },
}));

const ProductCard = ({ data }: ProductCardProps) => {
  const classes = styles();
  const discount = (
    (Number(data.sale_price) / Number(data.regular_price)) *
    100
  ).toFixed(0);

  return (
    <Fragment>
      <Card className={classes.root} elevation={0}>
        <CardMedia className={classes.imageWrapper}>
          <Image
            src={
              data.thumbnail_url
                ? data.thumbnail_url
                : `http://via.placeholder.com/40`
            }
            alt={data.name}
            width={80}
            height={80}
            className={classes.image}
          />
        </CardMedia>
        <CardContent className={classes.content}>
          <Box
            flexGrow={1}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            sx={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
            }}
          >
            <Typography variant="body1" noWrap sx={{ fontWeight: 'bold' }}>
              {data.name}
            </Typography>
            {data.sale_price && (
              <Box display="flex" alignItems="center">
                <Box px={1} py={0.5} mr={1} borderRadius={1} bgcolor="#EB4755">
                  <Typography
                    variant="body2"
                    className={classes.discountPercent}
                  >
                    {discount}%
                  </Typography>
                </Box>
                <Typography variant="body2" className={classes.discountPrice}>
                  {currencyFormat.format(Number(data.regular_price))}
                </Typography>
              </Box>
            )}
            <Typography variant="body2">
              {data.sale_price
                ? currencyFormat.format(Number(data.sale_price))
                : currencyFormat.format(Number(data.regular_price))}
            </Typography>
          </Box>
          <Box className={classes.buttonWrapper}>
            <Button className={classes.button}>Tambah</Button>
          </Box>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default ProductCard;
