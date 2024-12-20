import React from 'react';
import RouterUs from '../i18n/us/routerUs';
import RouterDe from '../i18n/de/routerDe'; // Adjusted import path
import RouterUk from '../i18n/uk/routerUk'; // Adjusted import path

const Menu = ({ region }) => {
    return (
        <div>
            {region === 'en' ? <RouterUs />:null}
            {region === 'de' ? <RouterDe />:null}
            {region === 'uk' ? <RouterUk />:null}
        </div>
    );
}

export default Menu;
