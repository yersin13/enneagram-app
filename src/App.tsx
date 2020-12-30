import {
  IonApp, IonLoading
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React from 'react';
import { Redirect, Route, Switch} from 'react-router-dom';
import {AuthContext, useAuthInit} from './auth';
import AppTabs from './AppTabs';
import LoginPage from './pages/login-register/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/login-register/RegisterPage';
import { SlidesIntro } from './pages/SlidesIntro';
import IntroTest from './pages/Test-enneagram/IntroTest';
import TestResult from './pages/Test-enneagram/TestResult';






const App: React.FC = () => {
  const {loading, auth} = useAuthInit();
  if (loading){
    return <IonLoading isOpen />
  }
  console.log(`rendering App with auth:`,auth);
  return (
    <IonApp>
      <AuthContext.Provider value={auth}>
      <IonReactRouter>
        <Switch>
        <Route exact path="/login">
          <LoginPage />
      </Route>
      <Route exact path="/my/intro-test">
        <IntroTest/>
      </Route>
      <Route exact path="/my/test-result">
        <TestResult/>
      </Route>
      <Route exact path="/intro">
          <SlidesIntro />
      </Route>
  
      <Route exact path="/register">
          <RegisterPage />
      </Route>
      <Route path="/my">
        <AppTabs />
      </Route>
      <Redirect exact path="/" to="/my/dashboard" />
      <Route>
        <NotFoundPage/>
      </Route>
      </Switch>
      </IonReactRouter>
      </AuthContext.Provider>
    </IonApp>
  );
};

export default App;
