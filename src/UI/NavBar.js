import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PlayerInterface from '../PlayerInterface/PlayerInterface'
import TeamInterface from '../Team/TeamInterface'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Home" href="/home" {...a11yProps(0)} />
          <LinkTab label="Jason" href="/jason" {...a11yProps(1)} />
          <LinkTab label="Savvas" href="/savvas" {...a11yProps(2)} />
          <LinkTab label="Byron" href="/byron" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} style={{ height: "100%" }}>
        <TeamInterface/>
      </TabPanel>
      <TabPanel value={value} index={1} style={{ height: "100%" }}>
        <PlayerInterface
          name='Jason Ladias'
          text="Jason is a very rigid and solid player. His predictions are pretty accurate and even his false predictions are not far from being accurate."
          image={require('../images/jason.jpg')}
          URI={'jason'} />
      </TabPanel>
      <TabPanel value={value} index={2} style={{ height: "100%" }}>
        <PlayerInterface
          name='Savvas Vezyridis' 
          text="Savvas is an old and experienced player. He can find very delicate bets although his arrogance is his weak point" 
          image={require('../images/savvas.jpg')}
          URI={'savvas'} />
      </TabPanel>
      <TabPanel value={value} index={3} style={{ height: "100%" }}>
        <PlayerInterface 
        name='Byron Tasioulas' 
        text="Byron is capable for the best and the worst. He can be described as an unstable player having his ups and downs" 
        image={require('../images/byron.jpg')} 
        URI={'byron'}/>
      </TabPanel>
    </div>
  );
}