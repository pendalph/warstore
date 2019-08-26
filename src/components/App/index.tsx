import React from 'react';
import Search from 'components/Search';
import Player from 'components/Player';
import PageNotFound from 'components/404';
import { Switch, Route, NavLink } from 'react-router-dom';


const App: React.FC = () => {
    return (
        // <div className='wrapper'>
        //     <div className='side-menu'>
        //         <nav>
        //             <ul className='nav-list'>
        //                 <li className='nav-list__link'><NavLink  to={`/`}>1</NavLink ></li>
        //                 <li className='nav-list__link'><NavLink  to={`/player`}>2</NavLink ></li>
        //                 <li className='nav-list__link'><NavLink  to={`/news`}>3</NavLink ></li>
        //             </ul>
        //         </nav>
        //     </div>
        //     <div className='content'>
        //         <Switch>
        //             <Route exact path='/' component={Search}/>
        //             <Route path='/player/:name?-:id(\d+)' render={route => <Player id={route.match.params.id} />} />
        //             <Route path='/' component={PageNotFound}/>
        //         </Switch>
        //     </div>
        // </div>
    );
};

export default App;