import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { Container, AppBar, ProductCard } from '@components';
import { Box, makeStyles, Theme } from '@material-ui/core';

const styles = makeStyles((theme: Theme) => ({
  root: {},
}));

const Category = () => {
  const { query } = useRouter();
  const classes = styles();

  return (
    <Fragment>
      <Container category appBar>
        <AppBar title={`${query.id}`} back category />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          className={classes.root}
        >
          <h1>Category : {query.id}</h1>
          <ProductCard />
        </Box>
      </Container>
    </Fragment>
  );
};

export default Category;
