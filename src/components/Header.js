import React from 'react';

const Header = (props) => (
        <div className="header">
        <div className="container" >
        <h1 className="header__title">{props.title}</h1>

            {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>} 

            {props.sub_subtitle && <h2 className="header__subtitle"> {props.sub_subtitle}</h2>}

        </div>
           
        </div>
    );

Header.defaultProps = {
    title: 'Coping Mechanisms'
};


export default Header; 