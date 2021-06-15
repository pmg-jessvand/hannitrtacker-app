import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Apollo Imports
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
// Components Imports
import { Header, ScrollToTop } from './components';
import { HomePage, ClientsPage, ClientDetailPage, ProjectDetailPage, SchedulePage, TaskDetailPage } from './pages';
// Hooks Import
import { useGetBaseUri } from './hooks';
// Routes Import
import * as Routes from './routes';



function App() {

  const baseUri = useGetBaseUri();

  const client = new ApolloClient({
    uri: `${baseUri}/graphql`,
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
            <Route exact path={Routes.TASK_DETAIL} component={TaskDetailPage} />
          </Switch>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
