import { Fragment, useEffect, useState } from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
  Paper,
} from '@material-ui/core';
import { useRouter } from 'next/router';
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
  const [value, setValue] = useState(0);
  const { push, pathname } = useRouter();

  useEffect(() => {
    if (pathname === '/') {
      setValue(0);
    } else if (pathname === '/orders') {
      setValue(1);
    } else if (pathname === '/help') {
      setValue(2);
    } else if (pathname === '/profile') {
      setValue(3);
    }
  }, [value]);

  useEffect(() => {
    let value = 0;
    switch (pathname) {
      case '/':
        value = 0;
        break;
      case '/orders':
        value = 1;
        break;
      case '/help':
        value = 2;
        break;
      case '/profile':
        value = 3;
        break;
    }
    setValue(value);
  }, [pathname]);

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
          <BottomNavigationAction
            label="Belanja"
            icon={<Store size={24} />}
            onClick={() => push('/')}
          />
          <BottomNavigationAction
            label="Transaksi"
            icon={<Receipt size={24} />}
            onClick={() => push('/orders')}
          />
          <BottomNavigationAction
            label="Bantuan"
            icon={<Help size={24} />}
            onClick={() => push('/help')}
          />
          <BottomNavigationAction
            label="Profil"
            icon={<Profile size={24} />}
            onClick={() => push('/profile')}
          />
        </BottomNavigation>
      </Paper>
    </Fragment>
  );
};

export default FixedBottomNavigation;
