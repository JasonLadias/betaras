import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PlayerInterface from '../PlayerInterface/PlayerInterface'

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
        Home
      </TabPanel>
      <TabPanel value={value} index={1} style={{ height: "100%" }}>
        <PlayerInterface
          name='Jason Ladias'
          text="The best player Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          image={require('../images/jason.jpg')}
          URI={'jason'} />
      </TabPanel>
      <TabPanel value={value} index={2} style={{ height: "100%" }}>
        <PlayerInterface
          name='Savvas Vezyridis' 
          text="The experienced player" 
          image={require('../images/byron.jpg')}
          URI={'savvas'} />
      </TabPanel>
      <TabPanel value={value} index={3} style={{ height: "100%" }}>
        <PlayerInterface 
        name='Byron Tasioulas' 
        text="The worst player" 
        image={require('../images/byron.jpg')} 
        URI={'byron'}/>
      </TabPanel>
    </div>
  );
}