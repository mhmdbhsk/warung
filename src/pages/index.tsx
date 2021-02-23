import { Fragment, useState, useEffect } from 'react';
import { AppBar, Categories, Container, Slider, TopSeller } from '@components';
import { getListCategories, getListTopSeller } from '@services';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [topSeller, setTopSeller] = useState([]);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const categories = await getListCategories();
      setCategories(categories);
    } catch (error) {
      console.error('Error!', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchTopSeller = async () => {
    try {
      setLoading(true);
      const topSeller = await getListTopSeller();
      setCategories(topSeller);
    } catch (error) {
      console.error('Error!', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchTopSeller();
  }, []);

  return (
    <Fragment>
      <Container main home>
        <AppBar home />
        <Categories data={categories} />
        <Slider />
        <TopSeller data={topSeller} />
      </Container>
    </Fragment>
  );
}
