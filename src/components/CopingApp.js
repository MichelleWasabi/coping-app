import React from 'react';
import Header from './Header';
import TabsTab from './Tabs';


export default class CopingApp extends React.Component {

    render() {
        const subtitle = 'for when shit hits the fan';
        // const sub_subtitle = 'click _ button to randomly select';


        return (
            <div> 
                <Header 
                subtitle={subtitle} 
                // sub_subtitle = {sub_subtitle}
                />
                <TabsTab/>   
            </div>

        );

    }
}