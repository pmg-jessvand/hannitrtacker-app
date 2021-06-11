import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Apollo Imports
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
// Components Imports
import { Header, ScrollToTop } from './components';
import { HomePage, ClientsPage, ClientDetailPage, ProjectDetailPage, SchedulePage, RegistrationsPage, TaskDetailPage } from './pages';
// Routes Import
import * as Routes from './routes';



function App() {

  const client = new ApolloClient({
    uri: 'http://localhost/hannitracker/web/graphql/',
    // uri: 'https://dev-hannitracker.pantheonsite.io/graphql/',
    cache: new InMemoryCache()
  });

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router>
          <ScrollToTop />
          <Header />
          <Switch>
            <Route exact path={Routes.HOME} component={HomePage} />
            <Route exact path={Routes.CLIENTS} component={ClientsPage} />
            <Route exact path={Routes.CLIENT_DETAIL} component={ClientDetailPage} />
            <Route exact path={Routes.PROJECT_DETAIL} component={ProjectDetailPage} />
            <Route exact path={Routes.SCHEDULE} component={SchedulePage} />
            <Route exact path={Routes.REGISTRATIONS} component={RegistrationsPage} />
            <Route exact path={Routes.TASK_DETAIL} component={TaskDetailPage} />
          </Switch>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
