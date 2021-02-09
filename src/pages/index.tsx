import { Fragment } from 'react';
import { AppBar, Categories, Container, Slider, TopSeller } from '@components';

export default function Home() {
  return (
    <Fragment>
      <Container main>
        <AppBar home />
        <Categories />
        <Slider />
        <TopSeller />
      </Container>
    </Fragment>
  );
}
