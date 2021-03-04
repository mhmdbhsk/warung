import { Fragment, useState } from 'react';
import {
  InputAdornment,
  TextField,
  TextFieldProps,
  makeStyles,
  Theme,
  IconButton,
} from '@material-ui/core';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

type FormProps = TextFieldProps & {
  name: string;
  formRef: any;
  type?: string;
  icon?: any;
  placeholder?: string;
  password?: boolean;
  helper?: string;
  error?: boolean;
};

const styles = makeStyles((theme: Theme) => ({
  icon: {
    padding: theme.spacing(0, 0.5, 0, 0.75),
  },
}));

const Form = ({
  name,
  formRef,
  icon,
  placeholder,
  password,
  type,
  helper,
  error,
}: FormProps) => {
  const classes = styles();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  return (
    <Fragment>
      <TextField
        name={name}
        inputRef={formRef}
        placeholder={placeholder}
        helperText={helper}
        error={error}
        type={
          password && !showPassword
            ? 'password'
            : password && showPassword
            ? 'text'
            : type
        }
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" className={classes.icon}>
              {icon}
            </InputAdornment>
          ),
          endAdornment: password && (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Fragment>
  );
};

export default Form;
