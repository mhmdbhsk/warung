import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { Container, AppBar, ProductCard } from '@components';
import { Box, makeStyles, Theme } from '@material-ui/core';
import { GetServerSideProps } from 'next';
import { getListProduct, getListCategories } from '@services';
import { ProductType, CategoryType } from '@dto';

interface CategoryProps {
  categories: CategoryType[];
  products: ProductType[];
}

const Category = ({ products, categories }: CategoryProps) => {
  const { query } = useRouter();

  const categoryName = categories.filter(
    (category) => category.id.toString() === query.id
  );

  return (
    <Fragment>
      <Container category appBar>
        <AppBar
          title={`${categoryName[0].name}`}
          back
          category
          data={categories}
        />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          {products
            .filter((product) => product.category_id.toString() === query.id)
            .map((item) => (
              <ProductCard data={item} key={item.id} />
            ))}
        </Box>
      </Container>
    </Fragment>
  );
};

export default Category;

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await getListProduct();
  const categories = await getListCategories();

  if (!products || !categories) {
    return {
      props: {
        isError: true,
        message: 'error',
        categories: [],
        products: [],
      },
    };
  } else {
    return {
      props: {
        isError: false,
        message: 'success',
        categories: categories.data,
        products: products.data,
      },
    };
  }
};
