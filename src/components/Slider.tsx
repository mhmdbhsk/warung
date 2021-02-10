import { useState, Fragment } from 'react';
import { Box, makeStyles, MobileStepper, Theme } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Image from 'next/image';

const styles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2.5),
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
  },
  image: {
    maxHeight: '94px !important',
    display: 'block',
    overflow: 'hidden',
    width: '100%',
    borderRadius: 8,
    objectFit: 'cover',
    cursor: 'pointer',
  },
  dots: {
    padding: theme.spacing(1.5, 0, 0),
  },
  dotActive: {
    width: 18,
    borderRadius: 9,
  },
}));

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Slider = () => {
  const classes = styles();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Fragment>
      <Box p={2.5}>
        <AutoPlaySwipeableViews
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Image
                  className={classes.image}
                  src={step.imgPath}
                  alt={step.label}
                  width="100%"
                  height={30}
                  layout="responsive"
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          variant="dots"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          classes={{ root: classes.dots, dotActive: classes.dotActive }}
          backButton
          nextButton
        />
      </Box>
    </Fragment>
  );
};

export default Slider;
