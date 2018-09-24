import React from 'react' ;
import Option from './Option';

const Options = (props) =>  (
        <div>
            <div className="widget-header">
            <h3 className="widget-header__title">My Self-Care</h3>
            <button 
            className="button button--link"
            onClick={props.handleDeleteOptions} >Remove All
            </button>
            </div>
            
            {
                props.options.map((option, index) => (
                <Option 
                key={option} 
                optionText={option} 
                count={index + 1}
                handleDeleteOptionSingle={props.handleDeleteOptionSingle}
                />
                ))
            }
           
            {props.options.length === 0 && <p className="widget__prompt">start by adding a feel-good-healthy response </p> }

        </div>
    );
export default Options;