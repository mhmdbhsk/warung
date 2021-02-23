import {
  Card,
  makeStyles,
  Theme,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
} from '@material-ui/core';
import { Fragment } from 'react';
import { Button, Box } from '@material-ui/core';
import Image from 'next/image';
import { useCurrencyFormatter as currencyFormat } from '@hooks';

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

const data = {
  id: 3445,
  name: 'Ain Drop II',
  category_id: 43,
  category_name: 'Kesehatan',
  stock_status: 'instock',
  price: '75000',
  regular_price: '75000',
  sale_price: '60000',
  description:
    'Ain Drop adalah herba unik dari HPA yang Insya Allah, mengatasi beebagai masalah kesehatan mata.\r\n\r\nDengan ramuan yang diambil dari cairan pohon khusus dari pergunungan dingin Pakistan dan herba lainnya (diantaranya madu 4 musim), Ain Drop, berdasarkan pengalaman HPA bisa merawat kesehatan mata. Adapun penggunaan cairan khusus ini telah digunakan sejak ratusan tahun oleh masyarakat Pakistan.\r\n\r\nKhasiat Ain Drop II\r\n- rabun\r\n- mata merah\r\n- selaput mata\r\n- tekanan\r\n- sakit gigi\r\n- sakit saraf\r\n- katarak\r\n\r\nCara Penggunaan:\r\n\r\nTeteskan 1 tetes Ain Drop ke mata yang bermasalah pasa waktu pagi hari. Lakukan selama 5 hari berturut-turut.\r\n\r\nSetelah itu lakukan hal yang sama di bulan berikutnya. Jadi, dalam 1 bulan hanya digunakan selama 5 hari dalam sebulan.\r\n\r\nLakukan hal ini hingga Allah menyembuhkan mata Antum Insya Allah.',
  thumbnail_url:
    'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
};

const ProductCard = () => {
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
