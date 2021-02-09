import { Fragment } from 'react';
import {
  Container,
  ContainerProps,
  makeStyles,
  Theme,
} from '@material-ui/core';
import { BottomNavigation } from '@components';

interface MobileContainerProps extends ContainerProps {
  children: React.ReactNode;
  main?: boolean;
}

const styles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '100vh',
    height: '100%',
    padding: 0,
    background: theme.palette.background.default,
    borderRight: '1px solid #f1f1f1',
    borderLeft: '1px solid #f1f1f1',
  },
}));

const MobileContainer = ({ main, children }: MobileContainerProps) => {
  const classes = styles();

  return (
    <Fragment>
      <Container
        maxWidth="xs"
        classes={{ root: classes.root }}
        style={{ paddingBottom: main ? 56 : 0 }}
      >
        {children}
        {main && <BottomNavigation />}
      </Container>
    </Fragment>
  );
};

export default MobileContainer;
