import {
 IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs,
} from '@ionic/react';
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'
import React from 'react';
import { Redirect, Route} from 'react-router-dom';

import SettingsPage from './pages/SettingsPage';

import { useAuth } from './auth';
import AddEntryPage from './pages/AddEntryPage';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import DescriptionEnneagram from './pages/DescriptionEnneagram';
import Test from './pages/Test-enneagram/Test';
import Profile from './pages/Profile';
import Questions from './pages/Questions';

import NameChange from './pages/NameChange';
import TheHeart from './pages/TheHeart';
import TheGut from './pages/TheGut';
import TheHead from './pages/TheHead';









const AppTabs: React.FC = () => {
  const {loggedIn } = useAuth();
  if(!loggedIn){
    return <Redirect to="/login" />
  }
  return (
        <IonTabs>
        <IonRouterOutlet>

      <Route exact path="/my/dashboard">
        <Dashboard/>
      </Route>
      <Route exact path="/my/questions">
        <Questions/>
      </Route>
      <Route exact path="/my/DescriptionEnneagram">
        <DescriptionEnneagram/>
      </Route>
      <Route exact path="/my/TheHeart">
        <TheHeart/>
      </Route>
      <Route exact path="/my/TheGut">
        <TheGut/>
      </Route>
      <Route exact path="/my/TheHead">
        <TheHead/>
      </Route>
     
      <Route exact path="/my/test">
        <Test/>
      </Route>
      <Route exact path="/my/home">
        <Home/>
      </Route>

      <Route exact path="/my/personalities/:id">
        <Profile/>
      </Route>
      
      <Route exact path="/my/entries/add">
        <AddEntryPage/>
      </Route>
      
      <Route exact path="/my/settings">
        <SettingsPage/>
      </Route>
      <Route exact path="/my/name-change">
        <NameChange/>
      </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
      <IonTabButton tab="profile"  href="/my/home" >
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
