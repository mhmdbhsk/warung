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
import { CategoryType } from '@dto';

interface CustomAppBarProps extends AppBarProps {
  title?: string;
  home?: boolean;
  back?: boolean;
  data?: CategoryType[] | undefined;
  category?: boolean;
  noShadow?: boolean;
}

interface DefaultAppBarProps extends AppBarProps {
  title?: string;
  back?: boolean;
  noShadow?: boolean;
}

interface HomeAppBarProps extends AppBarProps {}

interface CategoryAppBarProps extends AppBarProps {
  title?: string;
  data: CategoryType[] | undefined;
}

const styles = makeStyles((theme: Theme) => ({
  // Default
  default: {
    height: 64,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
    maxWidth: 442,
    margin: '0 auto',
    background: '#fff',
    right: 0,
    left: 0,
  },
  toolbar: {
    height: 64,
    padding: theme.spacing(0, 2.5),
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
  categoryToolbar: {
    padding: theme.spacing(0),
  },
  categorySearchWrapper: {
    padding: theme.spacing(0, 2.5),
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
  noShadow,
  data,
  ...rest
}: CustomAppBarProps) => {
  return home ? (
    <HomeAppBar {...rest} />
  ) : category ? (
    <CategoryAppBar title={title} data={data} {...rest} />
  ) : (
    <DefaultAppBar title={title} back={back} noShadow={noShadow} {...rest} />
  );
};

const DefaultAppBar = ({
  back,
  title,
  noShadow,
  ...rest
}: DefaultAppBarProps) => {
  const classes = styles(noShadow);
  const router = useRouter();

  return (
    <Fragment>
      <AppBar
        classes={{ root: classes.default }}
        position="fixed"
        color="transparent"
        style={{ boxShadow: `${noShadow} && 'none'` }}
        {...rest}
      >
        <Toolbar className={classes.toolbar}>
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

const CategoryAppBar = ({ title, data, ...rest }: CategoryAppBarProps) => {
  const classes = styles();
  const { push } = useRouter();

  return (
    <Fragment>
      <AppBar
        position="fixed"
        className={classes.category}
        color="transparent"
        elevation={0}
        {...rest}
      >
        <Toolbar sx={{ height: 184 }} className={classes.categoryToolbar}>
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            height="100%"
            justifyContent="space-between"
          >
            <div className={classes.categorySearchWrapper}>
              <Grid container alignItems="center" sx={{ padding: '8px 0' }}>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="primary"
                  aria-label="menu"
                  onClick={() => push('/')}
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
            </div>
            <Tabs data={data} />
          </Box>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default CustomAppBar;
