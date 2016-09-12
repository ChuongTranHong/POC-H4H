import React from 'react';
import {List, ListItem} from 'material-ui/List';
import {Card, CardHeader, CardActions} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import {fetchAllDisaster, deleteDisaster} from '../util/serverQuery';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ContentCreate from 'material-ui/svg-icons/content/create'


class DisasterLists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disasters: [
            ]
        }
    }
    componentWillMount(){
        console.log("Fetch events");
        this.refreshData();
    }

    refreshData(){
        fetchAllDisaster().done((response) =>{
            this.setState({disasters: response})
        }).fail(()=>{
            console.log("Fail");
        })
    }

    itemClick(eventName) {
        console.log("click on event " + eventName);
    }

    deleteItem(id){
        console.log("Delete item with id "+id);
        deleteDisaster(id).done(()=>{
            console.log("Deleted");
            this.refreshData();
        }).fail((event, msg)=>{
            console.log("Fail due to "+msg);
        })
    }

    editItem(id){
       console.log("Edit item with id "+id); 
    }

    paperStyle() {
        return {
            width: "85%",
            margin: "0px 0px 15px 15px",
            display: 'inline-block',
            padding: "0px 0px 15px 25px"
        }
    }

    render() {
        var listContent = []
        if (this.state.disasters && this.state.disasters.length > 0) {
            this.state.disasters.map((event, id) => {
                var deleteButton = (<IconButton onClick={this.deleteItem.bind(this, event.uid)}>
                                             <ActionDelete />
                                     </IconButton>);
                var editButton = (<IconButton onClick={this.editItem.bind(this, event.uid)}>
                                             <ContentCreate />
                                     </IconButton>);
                
                listContent.push(<ListItem primaryText={event.name} id={event.uid}
                    secondaryText={`Location: ${event.location}  When: ${event.time.toString()}`}
                    onClick={this.itemClick.bind(this, event.name) }
                    rightIconButton={<div>
                                        {editButton}
                                        {deleteButton}
                                    </div>}/>)
            });
        } else {
            listContent.push(<div>No event yet</div>)
        }

        return (
            <div>
                <Card>
                    <CardHeader title="Disaster Lists"/>
                    <Paper style={this.paperStyle() } zDepth={3}>
                        {listContent}
                    </Paper>
                </Card>
            </div>
        )
    }
}


export default DisasterLists;