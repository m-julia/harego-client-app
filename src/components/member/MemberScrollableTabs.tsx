import React from 'react';
import { makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonIcon from '@material-ui/icons/Person';
import ListIcon from '@material-ui/icons/List';
import RateReviewIcon from '@material-ui/icons/RateReview';
import ForumIcon from '@material-ui/icons/Forum';
import MemberAbout from './MemberAbout';
import myTheme from '../../customTheme/myTheme';
import { Paper } from '@material-ui/core';
import MemberAdv from './MemberAdv';


function a11yProps(index: any) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    margin: theme.spacing(0)
},
paper: {
    border: 'none',
    alignItems: "left",
    margin: theme.spacing(0),
    padding: 0
}
  
}));

export default function MemberScrollableTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={myTheme}>
    <div className={classes.root}>
      <Paper variant='outlined' className={classes.paper}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="About" icon={<PersonIcon /> } {...a11yProps(0)}  />
          <Tab label="Advertisements" icon={<ListIcon />} {...a11yProps(1)} />
          <Tab label="Reviews" icon={<RateReviewIcon />} {...a11yProps(2)} />
          <Tab label="Messages" icon={<ForumIcon />} {...a11yProps(3)} />
        
        </Tabs>
        </Paper>
        {value === 0 && <MemberAbout />}
        {value === 1 && <MemberAdv />}
     
    </div>
    </ThemeProvider>
  );
}
