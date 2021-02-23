import { Fragment, useState, useEffect } from 'react';
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
import {
  BiArrowBack as ArrowBack,
  BiSearch as Search,
  BiFilter as Filter,
} from 'react-icons/bi';
import { useRouter } from 'next/router';
import { Box, Button } from '@material-ui/core';
import { Tabs } from '@components';

interface CustomAppBarProps extends AppBarProps {
  title?: string;
  home?: boolean;
  back?: boolean;
  category?: boolean;
}

interface DefaultAppBarProps extends AppBarProps {
  title?: string;
  back?: boolean;
}

interface HomeAppBarProps extends AppBarProps {}

interface CategoryAppBarProps extends AppBarProps {
  title?: string;
}

const styles = makeStyles((theme: Theme) => ({
  // Default
  default: {
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
    maxWidth: 442,
    margin: '0 auto',
    background: '#fff',
    right: 0,
    left: 0,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Category
  category: {
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
    maxWidth: 442,
    minHeight: 184,
    margin: '0 auto',
    background: '#fff',
    right: 0,
    left: 0,
  },
  categorySearch: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#F5F5F5',
    marginLeft: 0,
    flexGrow: 1,
  },
  categorySearchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryInputRoot: {
    color: 'inherit',
    width: '100%',
    padding: theme.spacing(1, 0),
  },
  categoryInputInput: {
    padding: theme.spacing(1, 1, 1, 6),
    width: '100%',
  },
  categoryFilterButton: {
    marginLeft: theme.spacing(2),
    minWidth: 55,
    padding: theme.spacing(1),
  },

  // Home
  home: {
    minHeight: 150,
    maxWidth: 442,
    margin: '0 auto',
    background: '#fff',
    right: 0,
    left: 0,
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

const CustomAppBar = ({
  home,
  category,
  title,
  back,
  ...rest
}: CustomAppBarProps) => {
  return home ? (
    <HomeAppBar {...rest} />
  ) : category ? (
    <CategoryAppBar title={title} {...rest} />
  ) : (
    <DefaultAppBar title={title} back={back} {...rest} />
  );
};

const DefaultAppBar = ({ back, title, ...rest }: DefaultAppBarProps) => {
  const classes = styles();
  const router = useRouter();

  return (
    <Fragment>
      <AppBar
        classes={{ root: classes.default }}
        position="fixed"
        color="transparent"
        {...rest}
      >
        <Toolbar>
          {back && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="primary"
              aria-label="menu"
              onClick={() => router.back()}
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else if (window.pageYOffset === 0) {
        setScrolled(false);
      }
    });
  }, [scrolled]);

  return (
    <Fragment>
      <AppBar
        position="fixed"
        classes={{ root: classes.home }}
        style={{
          boxShadow: scrolled ? '0px 2px 8px rgba(0, 0, 0, 0.08)' : 'none',
        }}
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

const CategoryAppBar = ({ title, ...rest }: CategoryAppBarProps) => {
  const classes = styles();
  const { back } = useRouter();

  return (
    <Fragment>
      <AppBar
        position="fixed"
        className={classes.category}
        color="transparent"
        elevation={0}
        {...rest}
      >
        <Toolbar sx={{ height: 184 }}>
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            height="100%"
            justifyContent="space-between"
          >
            <Grid container alignItems="center" sx={{ padding: '8px 0' }}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="primary"
                aria-label="menu"
                onClick={() => back()}
              >
                <ArrowBack />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                {title}
              </Typography>
            </Grid>
            <Grid container>
              <div className={classes.categorySearch}>
                <div className={classes.categorySearchIcon}>
                  <Search />
                </div>
                <InputBase
                  placeholder="Kamu mau cari apa?"
                  classes={{
                    root: classes.categoryInputRoot,
                    input: classes.categoryInputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              <Button
                variant="outlined"
                className={classes.categoryFilterButton}
              >
                <Filter size={32} />
              </Button>
            </Grid>
            <Tabs />
          </Box>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default CustomAppBar;
