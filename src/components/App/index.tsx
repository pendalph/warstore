import React from 'react';
import Search from 'components/Search';
import Player from 'components/Player';
import HouseIcon from 'images/icons/house.svg';
import PlayerIcon from 'images/icons/user.svg';
import NewsIcon from 'images/icons/newspaper.svg';
import PageNotFound from 'components/404';
import { Switch, Route, NavLink } from 'react-router-dom';

const App: React.FC = () => {

    return (
        <div className='wrapper'>
            <div className='side-menu'>
                <div className='logo'>WS</div>
                <nav>
                    <ul className='nav-list'>
                        <li className='nav-list__link'><NavLink  to={`/`} activeClassName='is-active'><img src={HouseIcon} alt="Home"/></NavLink ></li>
                        <li className='nav-list__link'><NavLink  to={`/player`}><img src={PlayerIcon} alt="Player"/></NavLink ></li>
                        <li className='nav-list__link'><NavLink  to={`/news`}><img src={NewsIcon} alt="News"/></NavLink ></li>
                    </ul>
                </nav>
            </div>
            <div className='content'>
                <Switch>
                    <Route exact path='/' component={Search}/>
                    <Route path='/player/:name?-:id(\d+)' render={route => <Player id={route.match.params.id} />} />
                    <Route path='/' component={PageNotFound}/>
                </Switch>
            </div>
        </div>
    );
};

export default App;