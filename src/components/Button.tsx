import { makeStyles, Theme, Button, ButtonProps } from '@material-ui/core';
import { Fragment } from 'react';

interface CustomButtonProps extends ButtonProps {
  title: string;
  disabled?: boolean;
  action?: any;
}

const styles = makeStyles((theme: Theme) => ({
  root: (props: CustomButtonProps) => ({
    backgroundColor: props.disabled ? '#A6A6A6' : theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  }),
  label: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    letterSpacing: 0.6,
    fontSize: '1rem',
  },
}));

const CustomButton = (props: CustomButtonProps) => {
  const classes = styles(props);
  const { title, disabled, action, type } = props;

  return (
    <Fragment>
      <Button
        variant="contained"
        disableElevation
        fullWidth
        className={classes.root}
        disabled={disabled}
        onClick={action}
        classes={{ label: classes.label }}
        type={type}
      >
        {title}
      </Button>
    </Fragment>
  );
};

export default CustomButton;
