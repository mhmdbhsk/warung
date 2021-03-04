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
import { CategoryType } from '@dto';

interface CustomTabsProps {
  data: CategoryType[] | undefined;
}

interface StyledTabsProps extends TabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

interface StyledTabProps extends TabProps {
  label: string;
}

const CustomTabs = ({ data }: CustomTabsProps) => {
  const [value, setValue] = useState(0);
  const { push } = useRouter();

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <StyledTabs value={value} onChange={handleChange} aria-label="Tabs">
        {data?.map((item) => (
          <StyledTab
            label={item.name}
            onClick={() => push(`/category/${item.id}`)}
            key={item.id}
          />
        ))}
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
  scrollButtons: {
    color: theme.palette.primary.main,
  },
  root: {
    padding: theme.spacing(0, -2.5),
  },
}))((props: StyledTabsProps) => (
  <Tabs
    variant="scrollable"
    scrollButtons="auto"
    {...props}
    TabIndicatorProps={{ children: <span /> }}
  />
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
