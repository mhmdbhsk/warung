import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
  Paper,
} from '@material-ui/core';
import React from 'react';
import { Fragment } from 'react';
import {
  BiStore as Store,
  BiReceipt as Receipt,
  BiHelpCircle as Help,
  BiUserCircle as Profile,
} from 'react-icons/bi';

const styles = makeStyles({
  bottomNav: {
    margin: '0 auto',
    maxWidth: 442,
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    boxShadow: '0px -2px 16px rgba(0, 0, 0, 0.08)',
  },
});

const FixedBottomNavigation = () => {
  const classes = styles();
  const [value, setValue] = React.useState(0);

  return (
    <Fragment>
      <Paper elevation={0} className={classes.bottomNav}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Belanja" icon={<Store size={24} />} />
          <BottomNavigationAction
            label="Transaksi"
            icon={<Receipt size={24} />}
          />
          <BottomNavigationAction label="Bantuan" icon={<Help size={24} />} />
          <BottomNavigationAction label="Profil" icon={<Profile size={24} />} />
        </BottomNavigation>
      </Paper>
    </Fragment>
  );
};

export default FixedBottomNavigation;
