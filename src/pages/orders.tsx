import { AppBar, Container } from '@components';
import { Box } from '@material-ui/core';
import Image from 'next/image';
import { Fragment } from 'react';

const Orders = () => {
  return (
    <Fragment>
      <Container main appBar>
        <AppBar title="Dalam Proses" />
        <Box
          height={'87vh'}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image src="/icons/placeholder-order.svg" width={253} height={200} />
        </Box>
      </Container>
    </Fragment>
  );
};

export default Orders;
