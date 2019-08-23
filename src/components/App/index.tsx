import React from 'react';
import Search from 'components/Search';
import Player from 'components/Player';
import PageNotFound from 'components/404';
import { Switch, Route } from 'react-router-dom';

const App: React.FC = () => {

    return (
        <React.Fragment>
            <Switch>
                <Route exact path='/' component={Search}/>
                <Route path='/player/:name?-:id(\d+)' render={route => <Player id={route.match.params.id} />} />
                <Route path='/' component={PageNotFound}/>
            </Switch>
        </React.Fragment>
    );
};

export default App;