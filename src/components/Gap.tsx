import { makeStyles, Theme } from '@material-ui/core';
import { Fragment } from 'react';

interface GapProps {
  size: number;
}

const styles = makeStyles((theme: Theme) => ({
  root: (props: GapProps) => ({
    marginTop: theme.spacing(props.size ? props.size : 0),
  }),
}));

const Gap = (props: GapProps) => {
  const classes = styles(props);

  return (
    <Fragment>
      <div className={classes.root} />
    </Fragment>
  );
};

export default Gap;
