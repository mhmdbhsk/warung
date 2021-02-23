import { AppBar, Container } from '@components';
import { PlaceholderOrder } from '@images';
import { Box } from '@material-ui/core';
import { Fragment } from 'react';

const Profile = () => {
  return (
    <Fragment>
      <Container main appBar>
        <AppBar title="Profil" />
        <Box
          height={'87vh'}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <PlaceholderOrder />
        </Box>
      </Container>
    </Fragment>
  );
};

export default Profile;
