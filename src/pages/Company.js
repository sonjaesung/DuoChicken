import React, { Fragment, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import About from '../components/company/about';
import { useLocation } from 'react-router-dom';

const Company = observer(() => {
    const location = useLocation();

    return <Fragment> {location.pathname === '/company/about' && <About />}</Fragment>;
});

export default Company;
