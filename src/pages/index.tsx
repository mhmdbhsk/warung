import { Fragment, useState, useEffect } from 'react';
import { AppBar, Categories, Container, Slider, TopSeller } from '@components';
import { getListCategories, getListProduct } from '@services';
import { CategoryType, ProductType } from '@dto';
import { GetServerSideProps } from 'next';

interface HomeProps {
  categories: CategoryType[];
  topSeller: ProductType[];
}

export default function Home({ categories, topSeller }: HomeProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(!isLoading);
  }, [categories, topSeller]);

  return (
    <Fragment>
      <Container main home>
        <AppBar home />
        <Categories data={categories} loading={isLoading} />
        <Slider />
        <TopSeller data={topSeller.slice(0, 5)} loading={isLoading} />
      </Container>
    </Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const categories = await getListCategories();
  const topSeller = await getListProduct();

  if (!categories || !topSeller) {
    return {
      props: {
        isError: true,
        message: 'error',
        categories: [],
        topSeller: [],
      },
    };
  } else {
    return {
      props: {
        isError: false,
        message: 'success',
        categories: categories.data,
        topSeller: topSeller.data,
      },
    };
  }
};
