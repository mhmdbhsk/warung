import { AppBar, Container } from '@components';

import { Box } from '@material-ui/core';
import { Fragment } from 'react';

const Help = () => {
  return (
    <Fragment>
      <Container main appBar>
        <AppBar title="Help" />
        <Box
          height={'87vh'}
          display="flex"
          alignItems="center"
          justifyContent="center"
        ></Box>
      </Container>
    </Fragment>
  );
};

export default Help;
