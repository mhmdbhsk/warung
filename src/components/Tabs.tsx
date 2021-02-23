import {
  createStyles,
  Tab,
  TabProps,
  Tabs,
  TabsProps,
  Theme,
  withStyles,
} from '@material-ui/core';
import { Fragment, useState } from 'react';
import { useRouter } from 'next/router';

interface StyledTabsProps extends TabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

interface StyledTabProps extends TabProps {
  label: string;
}

const CustomTabs = () => {
  const [value, setValue] = useState(0);
  const { push } = useRouter();

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <StyledTabs value={value} onChange={handleChange} aria-label="Tabs">
        <StyledTab label="Sayur" onClick={() => push('/category/sayur')} />
        <StyledTab label="Daging" onClick={() => push('/category/daging')} />
        <StyledTab label="Buah" onClick={() => push('/category/buah')} />
      </StyledTabs>
    </Fragment>
  );
};

export default CustomTabs;

const StyledTabs = withStyles((theme: Theme) => ({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      width: '100%',
      backgroundColor: theme.palette.primary.main,
    },
  },
}))((props: StyledTabsProps) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />
));

const StyledTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      '&:focus': {
        opacity: 1,
      },
    },
  })
)((props: StyledTabProps) => <Tab disableRipple {...props} />);
