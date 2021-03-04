import { Form, Container, AppBar, Gap, Button } from '@components';
import Image from 'next/image';
import { Fragment, useEffect } from 'react';
import { Box, FormControl, makeStyles, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { MdEmail, MdLock } from 'react-icons/md';
import { firebaseClient } from '@config';

interface DataProps {
  email: string;
  password: string;
}

const styles = makeStyles((theme) => ({
  contentWrapper: {
    padding: theme.spacing(2.5),
  },
  title: {
    fontWeight: 'bold',
    padding: theme.spacing(4, 0, 3),
  },
  imgWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const Login = () => {
  const classes = styles();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data: DataProps) => {
    await firebaseClient
      .auth()
      .signInWithEmailAndPassword(data.email, data.password);
    window.location.href = '/';
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
    }
  }, []);

  return (
    <Fragment>
      <Container appBar>
        <AppBar title="Sign In" back noShadow />
        <Box height={'100%'} className={classes.contentWrapper}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
              minHeight: `calc(100vh - 104px)`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box display="flex" flexDirection="column">
              <div className={classes.imgWrapper}>
                <Image src="/icons/logo.svg" width={60} height={60} />
              </div>
              <Typography className={classes.title}>
                Masuk menggunakan email
              </Typography>
              <FormControl fullWidth>
                <Form
                  name="email"
                  formRef={register({
                    required: 'Required',
                    pattern: {
                      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Invalid email address',
                    },
                  })}
                  icon={<MdEmail />}
                  placeholder="Email"
                  // type="email"
                  helper={errors?.email?.message}
                  error={errors?.email}
                />
              </FormControl>
              <Gap size={2} />
              <FormControl fullWidth>
                <Form
                  name="password"
                  formRef={register({
                    minLength: {
                      value: 8,
                      message: 'Minimum 8 characters',
                    },
                  })}
                  icon={<MdLock />}
                  placeholder="Password"
                  password
                  helper={errors?.password?.message}
                  error={errors.password}
                />
              </FormControl>
            </Box>
            <Button title="Masuk" type="submit" />
          </form>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Login;
