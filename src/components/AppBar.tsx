import { Fragment } from 'react';
import {
  AppBar,
  AppBarProps,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { BiArrowBack as ArrowBack, BiSearch as Search } from 'react-icons/bi';

interface CustomAppBarProps extends AppBarProps {
  title?: string;
  home?: boolean;
  back?: boolean;
}

interface DefaultAppBarProps extends AppBarProps {
  title?: string;
  back?: boolean;
}

interface HomeAppBarProps extends AppBarProps {}

const styles = makeStyles((theme: Theme) => ({
  // Default
  default: {},
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  // Home
  home: {
    minHeight: 150,
    flexGrow: 1,
  },
  homeTitle: {
    color: '#808080',
    fontSize: 12,
    fontWeight: 'bold',
  },
  homeToolbar: {
    height: '100%',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  homeLocation: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  homeChangeLoc: {
    color: theme.palette.primary.main,
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: theme.spacing(1.5),
  },
  homeSearch: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#F5F5F5',
    marginLeft: 0,
    marginTop: 16,
    width: '100%',
  },
  homeSearchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeInputRoot: {
    color: 'inherit',
    width: '100%',
    padding: theme.spacing(1, 0),
  },
  homeInputInput: {
    padding: theme.spacing(1, 1, 1, 6),
    width: '100%',
  },
}));

const CustomAppBar = ({ home, title, back, ...rest }: CustomAppBarProps) => {
  return home ? (
    <HomeAppBar {...rest} />
  ) : (
    <DefaultAppBar title={title} back={back} {...rest} />
  );
};

const DefaultAppBar = ({ back, title, ...rest }: DefaultAppBarProps) => {
  const classes = styles();
  return (
    <Fragment>
      <AppBar position="static" {...rest}>
        <Toolbar>
          {back && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <ArrowBack />
            </IconButton>
          )}
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

const HomeAppBar = ({ ...rest }: HomeAppBarProps) => {
  const classes = styles();
  return (
    <Fragment>
      <AppBar
        position="static"
        classes={{ root: classes.home }}
        color="transparent"
        elevation={0}
        {...rest}
      >
        <Toolbar classes={{ root: classes.homeToolbar }}>
          <Grid container direction="column" style={{ width: '100%' }}>
            <Typography variant="h6" className={classes.homeTitle}>
              Kamu Belanja di
            </Typography>
            <Grid container alignItems="center">
              <Typography variant="h6" className={classes.homeLocation}>
                Bandung
              </Typography>
              <Typography variant="h6" className={classes.homeChangeLoc}>
                Ubah
              </Typography>
            </Grid>
            <div className={classes.homeSearch}>
              <div className={classes.homeSearchIcon}>
                <Search />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.homeInputRoot,
                  input: classes.homeInputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Grid>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default CustomAppBar;
