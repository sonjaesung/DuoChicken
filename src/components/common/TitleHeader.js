import React from 'react';
import { observer } from 'mobx-react';
import NavBar from './NavBar';
import SuaBar from './SuaBar';

const TitleHeader = observer(() => {
    return (
        <div className="header">
            <div className="inConts">
                <h1>
                    <a href='/' className='mainLogo'>
                        Duo Chicken
                    </a>
                </h1>
                <div className="gnbArea">
                    <NavBar />
                </div>
                <div className='sua'>
                    <SuaBar />
                </div>
            </div>

        </div>
    );
});

export default TitleHeader;
