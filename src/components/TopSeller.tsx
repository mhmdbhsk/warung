import { Box, makeStyles, Paper, Typography } from '@material-ui/core';
import { Fragment } from 'react';

const styles = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
  },
  helper: {
    color: theme.palette.primary.main,
  },
}));

const TopSeller = () => {
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
            Produk Terlaris
          </Typography>
          <Typography variant="body2" className={classes.helper}>
            Lihat Semua
          </Typography>
        </Box>
      </Paper>
    </Fragment>
  );
};

export default TopSeller;
