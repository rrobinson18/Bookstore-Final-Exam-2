import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './scss/app';

import Home from './components/public/Home';
import AllBooks from './components/public/AllBooks';
import Nav from './components/public/Nav';

export interface AppProps {}
     
const App: React.SFC<AppProps> = () => {
    return ( 
       <BrowserRouter>
       <Nav />
        <main className="container">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/books" component={AllBooks} />
            </Switch>
        </main>
       </BrowserRouter>
     );
}
 
export default App;

