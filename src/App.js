import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import ProductCreate from './components/Products/ProductCreate';
import ProductList from './components/Products/ProductList';
import ProductUpdate from './components/Products/ProductUpdate';
import ProductDelete from './components/Products/ProductDelete';
import ProductShow from './components/Products/ProductShow';
import Header from './components/Header';


const history =createBrowserHistory()
const App = () => {
  return (
    <React.Fragment>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={ProductList} exact />
            <Route path="/product/new" component={ProductCreate} exact />
            <Route path="/product/edit" exact component={ProductUpdate} />
            <Route path="/product/delete" exact component={ProductDelete}/>
            <Route path="/product/show" exact component={ProductShow} />
          </Switch>
        </div>
      </Router>

    </React.Fragment>

  );
}

export default App;