import { Box, Typography, Paper, makeStyles, Grid } from '@material-ui/core';
import Image from 'next/image';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { CategoryType } from '@dto';

interface CategoryItemProps {
  data: CategoryType;
  index: number;
}

interface CategoriesProps {
  data: CategoryType[];
  loading: boolean;
}

const styles = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
  },
  helper: {
    color: theme.palette.primary.main,
    cursor: 'pointer',
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

const Categories = ({ data, loading }: CategoriesProps) => {
  console.log(loading);
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
          {loading ? (
            <h1>Loading</h1>
          ) : (
            data?.map((item, index) => (
              <div
                key={index}
                style={{
                  paddingRight: index === data.length - 1 ? 16 : 0,
                }}
              >
                <CategoryItem index={index} data={item} />
              </div>
            ))
          )}
        </Grid>
      </Paper>
    </Fragment>
  );
};

const CategoryItem = ({ data, index }: CategoryItemProps) => {
  const classes = styles();
  const { push } = useRouter();

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
        onClick={() => push(`/category/${data.id}`)}
      >
        <Box>
          <Image
            src={
              data?.image?.src
                ? `${data.image.src}`
                : `http://via.placeholder.com/40`
            }
            alt={data.name}
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
