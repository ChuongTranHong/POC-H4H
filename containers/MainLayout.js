import React from 'react';
import { Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem, MakeSelectable} from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
const SelectableList = MakeSelectable(List);

export default class MainLayout extends React.Component{
    constructor(props){
        super(props);
        this.state={
            navDrawerOpen: false,
        };

    }

    handleTouchTapLeftIconButton() {
        
        this.setState({
        navDrawerOpen: !this.state.navDrawerOpen,
        });
     };
     handleClose(){
         this.setState({navDrawerOpen: false});
     } 

     onChangeSelectList(event, value){
         this.context.router.push(value);
         this.setState({
            navDrawerOpen: false,
            });
     }


    render(){
        return (
            <div>
                <AppBar title="Disaster management"
                    onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton.bind(this)}
                    />
            
                <Drawer docked={false} open={this.state.navDrawerOpen} width={200}
                onRequestChange={(open) => this.setState({navDrawerOpen:open})}
                >
                <SelectableList onChange={this.onChangeSelectList.bind(this)}>
                    <ListItem primaryText="Disaster List" value="/"/>
                    <ListItem primaryText="Add Disaster" value="/Add"/>
                </SelectableList>
                

                </Drawer>
                <main>
                    {this.props.children}
                 </main>
            </div>
            
        )
    }
}

MainLayout.contextTypes = {
    router: React.PropTypes.object.isRequired
}

