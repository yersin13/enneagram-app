import {
 IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs,
} from '@ionic/react';
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon, home } from 'ionicons/icons'
import React from 'react';
import { Redirect, Route} from 'react-router-dom';

import SettingsPage from './pages/SettingsPage';

import { useAuth } from './auth';
import AddEntryPage from './pages/AddEntryPage';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import DescriptionEnneagram from './pages/DescriptionEnneagram';
import Test from './pages/Test-enneagram/Test';
import IntroTest from './pages/Test-enneagram/IntroTest';





const AppTabs: React.FC = () => {
  const {loggedIn} = useAuth();
  if(!loggedIn){
    return <Redirect to="/login" />
  }
  return (
        <IonTabs>
        <IonRouterOutlet>
      {/* <Route exact path="/my/entries">
        <HomePage/>
      </Route> */}
      <Route exact path="/my/dashboard">
        <Dashboard/>
      </Route>
      <Route exact path="/my/DescriptionEnneagram">
        <DescriptionEnneagram/>
      </Route>
     
      <Route exact path="/my/test">
        <Test/>
      </Route>
      <Route exact path="/my/home">
        <Home/>
      </Route>
   
      <Route exact path="/my/entries/add">
        <AddEntryPage/>
      </Route>
      <Route exact path="/my/settings">
        <SettingsPage/>
      </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
      <IonTabButton tab="profile" href="/my/home" >
          <IonIcon icon={homeIcon} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="dashboard" href="/my/dashboard" >
          <IonIcon icon={planetIcon} />
          <IonLabel>Dashboard</IonLabel>
        </IonTabButton>
        <IonTabButton tab="settings" href="/my/settings" >
        <IonIcon icon={settingsIcon} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
      </IonTabs>
  );
};

export default AppTabs;
