import React,{ useState } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import InsertChartOutlinedOutlinedIcon from '@material-ui/icons/InsertChartOutlinedOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import AccessibilityOutlinedIcon from '@material-ui/icons/AccessibilityOutlined';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Calendar} from './Calendar/index';
import {Home} from './Home/index';
import {Today} from './Today/index';
import {Insight} from './Insight/index';
import {NewWorkout} from './NewWorkout/index';
import '../styles/navigation.scss'

export const Navigation = ():JSX.Element => {
  const [value, setValue] = useState<number>(0);

  return (
    <Router>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className="navigation-container"
      >
        <Link to="/home">
        <BottomNavigationAction label="Today" icon={<AccessibilityOutlinedIcon fontSize="large"/>}/>
        </Link>
        <Link to="/today">
          <BottomNavigationAction label="Today" icon={<AssignmentOutlinedIcon fontSize="large"/>}/>
        </Link>
        <Link to="/new-workout">
          <BottomNavigationAction label="New Workout" icon={<AddCircleOutlineOutlinedIcon fontSize="large"/>}/>
        </Link>
        <Link to="/calendar">
          <BottomNavigationAction label="Calendar" icon={<EventOutlinedIcon fontSize="large"/>}/>
        </Link>
        <Link to="/insight">
          <BottomNavigationAction label="Insight" icon={<InsertChartOutlinedOutlinedIcon fontSize="large"/>}/>
        </Link>

      </BottomNavigation>

      <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/today">
            <Today/>
          </Route>
          <Route path="/new-workout">
            <NewWorkout/>
          </Route>
          <Route path="/calendar">
            <Calendar/>
          </Route>
          <Route path="/insight">
            <Insight/>
          </Route>
        </Switch>
    </Router>
  );
}