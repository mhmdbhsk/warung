import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core';
import Image from 'next/image';
import { Fragment } from 'react';
import { useCurrencyFormatter as currencyFormat } from '@hooks';

const styles = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
  },
  helper: {
    color: theme.palette.primary.main,
    cursor: 'pointer',
  },
  card: {
    display: 'flex',
    flexGrow: 1,
    padding: theme.spacing(1.5, 2.5),
    transition: '0.3s ease 0s all',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#0000000a',
    },
  },
  imageWrapper: {
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
    flexDirection: 'column',
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

interface DataProps {
  id: number;
  name: string;
  category_id: number;
  category_name: string;
  stock_status: string;
  price: string;
  regular_price: string;
  sale_price: string | null;
  description: string;
  thumbnail_url: string;
}
interface CardProps {
  data: DataProps;
}

interface dataProps {
  data: DataProps[];
}

const data = ({ data }: dataProps) => {
  const classes = styles();
  return (
    <Fragment>
      <Paper elevation={0}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mx={2.5}
          mb={1}
        >
          <Typography variant="body1" className={classes.title}>
            Produk Terlaris
          </Typography>
          <Typography variant="body2" className={classes.helper}>
            Lihat Semua
          </Typography>
        </Box>
        <Box>
          {data.map((item) => (
            <div key={item.id}>
              <Card data={item} />
            </div>
          ))}
        </Box>
      </Paper>
    </Fragment>
  );
};

const Card = ({ data }: CardProps) => {
  const classes = styles();
  const discount = (
    (Number(data.sale_price) / Number(data.regular_price)) *
    100
  ).toFixed(0);

  return (
    <Fragment>
      <Box className={classes.card}>
        <Box borderRadius={8} className={classes.imageWrapper}>
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
        </Box>
        <Box
          flexGrow={1}
          ml={2}
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
                <Typography variant="body2" className={classes.discountPercent}>
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
          <Box flexGrow={1} width="100%" />
          <Button className={classes.button}>Tambah</Button>
        </Box>
      </Box>
    </Fragment>
  );
};

export default data;
