import { Box, Typography, Paper, makeStyles, Grid } from '@material-ui/core';
import Image from 'next/image';
import { Fragment } from 'react';

interface DataType {
  id: number;
  name: string;
  slug: string;
  parent: number;
  description: string;
  display: string | null;
  menu_order: string;
  count: string;
  image: {
    id: string | null;
    date_created: string | null;
    date_created_gmt: string | null;
    date_modified: string | null;
    date_modified_gmt: string | null;
    src: string | null;
    name: string | null;
    alt: string | null;
  };
}

interface CategoryItemProps {
  data: DataType;
  index: number;
}

const styles = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
  },
  helper: {
    color: theme.palette.primary.main,
  },
  item: {
    cursor: 'pointer',
    transition: '0.3s ease 0s all',
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      backgroundColor: '#0000000a',
    },
  },
  scrollWrapper: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    WebkitOverflowScrolling: 'touch',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  scrollItem: {
    display: 'inline-block',
    textAlign: 'center',
    padding: 0,
    textDecoration: 'none',
  },
}));

const value = [
  {
    id: 33,
    name: 'Minuman',
    slug: 'minuman',
    parent: 0,
    description: '',
    display: 'default',
    menu_order: '0',
    count: '27',
    image: {
      id: '3616',
      date_created: '2020-07-24T11:13:03.000Z',
      date_created_gmt: '2020-07-24T04:13:03.000Z',
      date_modified: '2020-07-24T11:13:03.000Z',
      date_modified_gmt: '2020-07-24T04:13:03.000Z',
      src:
        'https://dashboard.goodpangan.com/wp-content/uploads/2020/07/drink-water-1.png',
      name: 'drink-water 1',
      alt: null,
    },
  },
  {
    id: 34,
    name: 'Kecantikan',
    slug: 'perawatan-kecantikan',
    parent: 0,
    description: '',
    display: 'default',
    menu_order: '0',
    count: '26',
    image: {
      id: '3615',
      date_created: '2020-07-24T11:12:08.000Z',
      date_created_gmt: '2020-07-24T04:12:08.000Z',
      date_modified: '2020-07-24T11:12:08.000Z',
      date_modified_gmt: '2020-07-24T04:12:08.000Z',
      src:
        'https://dashboard.goodpangan.com/wp-content/uploads/2020/07/skin.png',
      name: 'skin',
      alt: null,
    },
  },
  {
    id: 43,
    name: 'Kesehatan',
    slug: 'produk-kesehatan',
    parent: 0,
    description: '',
    display: 'default',
    menu_order: '0',
    count: '88',
    image: {
      id: '3618',
      date_created: '2020-07-24T11:19:06.000Z',
      date_created_gmt: '2020-07-24T04:19:06.000Z',
      date_modified: '2020-07-24T11:19:06.000Z',
      date_modified_gmt: '2020-07-24T04:19:06.000Z',
      src:
        'https://dashboard.goodpangan.com/wp-content/uploads/2020/07/hospital.png',
      name: 'hospital',
      alt: null,
    },
  },
  {
    id: 48,
    name: 'Bumbu',
    slug: 'bumbu-matang',
    parent: 0,
    description: '',
    display: 'default',
    menu_order: '0',
    count: '6',
    image: {
      id: '3279',
      date_created: '2020-07-03T11:34:27.000Z',
      date_created_gmt: '2020-07-03T04:34:27.000Z',
      date_modified: '2020-07-03T11:34:27.000Z',
      date_modified_gmt: '2020-07-03T04:34:27.000Z',
      src:
        'https://dashboard.goodpangan.com/wp-content/uploads/2020/07/021-garlic-1.png',
      name: '021-garlic 1',
      alt: null,
    },
  },
  {
    id: 64,
    name: 'Perlengkapan Pertanian',
    slug: 'perlengkapan-pertanian',
    parent: 0,
    description: 'Perlengkapan pertanian',
    display: 'default',
    menu_order: '0',
    count: '11',
    image: {
      id: '3617',
      date_created: '2020-07-24T11:13:59.000Z',
      date_created_gmt: '2020-07-24T04:13:59.000Z',
      date_modified: '2020-07-24T11:13:59.000Z',
      date_modified_gmt: '2020-07-24T04:13:59.000Z',
      src:
        'https://dashboard.goodpangan.com/wp-content/uploads/2020/07/soil.png',
      name: 'soil',
      alt: null,
    },
  },
  {
    id: 95,
    name: 'Sembako',
    slug: 'sembako',
    parent: 0,
    description: '',
    display: 'default',
    menu_order: '0',
    count: '11',
    image: {
      id: '3278',
      date_created: '2020-07-03T11:34:23.000Z',
      date_created_gmt: '2020-07-03T04:34:23.000Z',
      date_modified: '2020-07-03T11:34:23.000Z',
      date_modified_gmt: '2020-07-03T04:34:23.000Z',
      src:
        'https://dashboard.goodpangan.com/wp-content/uploads/2020/07/003-pea-1.png',
      name: '003-pea 1',
      alt: null,
    },
  },
  {
    id: 98,
    name: 'Essential Oil',
    slug: 'essential-oil',
    parent: 0,
    description: '',
    display: 'default',
    menu_order: '0',
    count: '1',
    image: {
      id: '3614',
      date_created: '2020-07-24T11:11:15.000Z',
      date_created_gmt: '2020-07-24T04:11:15.000Z',
      date_modified: '2020-07-24T11:11:15.000Z',
      date_modified_gmt: '2020-07-24T04:11:15.000Z',
      src:
        'https://dashboard.goodpangan.com/wp-content/uploads/2020/07/aromatherapy-1.png',
      name: 'aromatherapy (1)',
      alt: null,
    },
  },
  {
    id: 99,
    name: 'Buah',
    slug: 'buah',
    parent: 0,
    description: '',
    display: 'default',
    menu_order: '0',
    count: '14',
    image: {
      id: '3613',
      date_created: '2020-07-24T11:08:44.000Z',
      date_created_gmt: '2020-07-24T04:08:44.000Z',
      date_modified: '2020-07-24T11:08:44.000Z',
      date_modified_gmt: '2020-07-24T04:08:44.000Z',
      src:
        'https://dashboard.goodpangan.com/wp-content/uploads/2020/07/050-apple-1-1.png',
      name: '050-apple 1',
      alt: null,
    },
  },
  {
    id: 112,
    name: 'Perlengkapan Rumah Tangga',
    slug: 'perlengkapan-rumah-tangga',
    parent: 0,
    description: '',
    display: 'default',
    menu_order: '0',
    count: '2',
    image: {
      id: '4283',
      date_created: '2020-10-12T13:02:12.000Z',
      date_created_gmt: '2020-10-12T06:02:12.000Z',
      date_modified: '2020-10-12T13:02:12.000Z',
      date_modified_gmt: '2020-10-12T06:02:12.000Z',
      src:
        'https://dashboard.goodpangan.com/wp-content/uploads/2020/10/WhatsApp-Image-2020-10-12-at-12.45.42.jpeg',
      name: 'WhatsApp Image 2020-10-12 at 12.45.42',
      alt: null,
    },
  },
  {
    id: 17,
    name: 'Sayuran',
    slug: 'sayuran',
    parent: 0,
    description: 'Bermacam-macam sayur mayur yang diproduksi secara alami.',
    display: 'default',
    menu_order: '3',
    count: '13',
    image: {
      id: '3277',
      date_created: '2020-07-03T11:34:21.000Z',
      date_created_gmt: '2020-07-03T04:34:21.000Z',
      date_modified: '2020-07-03T11:34:21.000Z',
      date_modified_gmt: '2020-07-03T04:34:21.000Z',
      src:
        'https://dashboard.goodpangan.com/wp-content/uploads/2020/07/018-broccoli-1.png',
      name: '018-broccoli 1',
      alt: null,
    },
  },
  {
    id: 26,
    name: 'Snack',
    slug: 'snack',
    parent: 0,
    description: '',
    display: 'default',
    menu_order: '4',
    count: '2',
    image: {
      id: '3272',
      date_created: '2020-07-03T11:33:58.000Z',
      date_created_gmt: '2020-07-03T04:33:58.000Z',
      date_modified: '2020-07-03T11:33:58.000Z',
      date_modified_gmt: '2020-07-03T04:33:58.000Z',
      src:
        'https://dashboard.goodpangan.com/wp-content/uploads/2020/07/019-potato-1.png',
      name: '019-potato 1',
      alt: null,
    },
  },
  {
    id: 27,
    name: 'Lauk Pauk',
    slug: 'lauk-pauk',
    parent: 0,
    description: 'Bermacam-macam lauk matang yang diolah secara alami.',
    display: 'default',
    menu_order: '5',
    count: '1',
    image: {
      id: '3273',
      date_created: '2020-07-03T11:34:11.000Z',
      date_created_gmt: '2020-07-03T04:34:11.000Z',
      date_modified: '2020-07-03T11:34:11.000Z',
      date_modified_gmt: '2020-07-03T04:34:11.000Z',
      src:
        'https://dashboard.goodpangan.com/wp-content/uploads/2020/07/shrimp-1-1.png',
      name: 'shrimp (1) 1',
      alt: null,
    },
  },
  {
    id: 15,
    name: 'Uncategorized',
    slug: 'uncategorized',
    parent: 0,
    description: '',
    display: null,
    menu_order: '6',
    count: '0',
    image: {
      id: null,
      date_created: null,
      date_created_gmt: null,
      date_modified: null,
      date_modified_gmt: null,
      src: null,
      name: null,
      alt: null,
    },
  },
];

const Categories = () => {
  const classes = styles();
  return (
    <Fragment>
      <Paper elevation={0}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mx={2.5}
          mb={2.5}
        >
          <Typography variant="body1" className={classes.title}>
            Telusuri Produk
          </Typography>
          <Typography variant="body2" className={classes.helper}>
            Lihat Semua
          </Typography>
        </Box>
        <Grid container className={classes.scrollWrapper}>
          {value.map((item, index) => (
            <div
              key={index}
              style={{
                paddingRight: index === value.length - 1 ? 16 : 0,
              }}
            >
              <CategoryItem index={index} data={item} />
            </div>
          ))}
        </Grid>
      </Paper>
    </Fragment>
  );
};

const CategoryItem = ({ data, index }: CategoryItemProps) => {
  const classes = styles();

  return (
    <div
      className={classes.scrollItem}
      style={{
        marginLeft: index === 0 ? 20 : 0,
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        width={75}
        p={1}
        className={classes.item}
      >
        <Box>
          <Image
            src={
              data.image.src
                ? `${data.image.src}`
                : `http://via.placeholder.com/40`
            }
            width={40}
            height={40}
          />
        </Box>
        <Box sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
          <Typography variant="caption" noWrap>
            {data.name}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Categories;