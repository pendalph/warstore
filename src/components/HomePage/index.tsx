import React from 'react';
import ServerStatus from 'components/ServerStatus';

const HomePage: React.FC = () => {
    return(
        <React.Fragment>
            <h1>Page</h1>
            <ServerStatus />
        </React.Fragment>
    );
};

export default HomePage;