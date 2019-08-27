import React from 'react';
import HomePage from 'components/HomePage';
import Search from 'components/Search';
import Player from 'components/Player';
import About from 'components/About';
import PageNotFound from 'components/404';
import { Switch, Route, NavLink } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <div className='wrapper'>
            <div className='header'>
                <div className='header-logo'>
                    WARSTORE
                </div>
                <nav className='header-nav'>
                    <ul className='header-nav-list'>
                        <li className='header-nav-elements'>
                            <NavLink to='/' exact className='header-nav-elements__link' activeClassName='is-active'>Home</NavLink>
                        </li>
                        <li className='header-nav-elements'>
                            <NavLink to='/player' className='header-nav-elements__link' activeClassName='is-active'>Player</NavLink>
                        </li>
                        <li className='header-nav-elements'>
                            <NavLink to='/about' className='header-nav-elements__link' activeClassName='is-active'>About</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className='header-search'>
                    <Search />
                </div>
            </div>
            <div className='content'>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/player/:name?-:id(\d+)' render={route => <Player id={route.match.params.id} />} />
                    <Route path='/about' component={About}/>
                    <Route path='/' component={PageNotFound}/>
                </Switch>
            </div>
        </div>
    );
};

export default App;