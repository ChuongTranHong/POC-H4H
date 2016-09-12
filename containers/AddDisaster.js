import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Divider from 'material-ui/Divider';
import {Card, CardHeader, CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {addDisaster} from '../util/serverQuery'

class AddDisaster extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name :"",
            location : "",
            time: undefined,
            description:""
        }
    }

     paperStyle(){
      return {
          width: "85%",
          margin: "0px 0px 15px 15px",
          display: 'inline-block',
          padding: "0px 0px 15px 25px"
      }
    }

    submit(){
        addDisaster(this.state).done(()=>{
            console.log("Done");
            this.context.router.push("/");
        }).fail((jqXHR, textStatus)=>{
            console.log("Fail");
            console.log(textStatus);
        })

    }

    cancel(){

    }

    handleChange(event){
        var dataTag = event.target.attributes.getNamedItem('data-tag').value;
        var value = event.target.value;
        this.setState(Object.assign({}, this.state, {[dataTag]:value}));
    }

    handleDateChange(event, value){
        console.log(value);
        this.setState(Object.assign({}, this.state, {time:value}));
    }

    render() {
        return (
            <div>
                <Card>
                    <CardHeader title="Adding Disaster"/>
                    <Paper style={this.paperStyle() } zDepth={3}>
                        <TextField hintText="Disaster Name" value={this.state.name} onChange={this.handleChange.bind(this)} floatingLabelText="Name" data-tag="name"/>
                        <Divider />
                        <TextField hintText="Location" value={this.state.location} onChange={this.handleChange.bind(this)} floatingLabelText="Location" data-tag="location"/>
                        <Divider />
                        <DatePicker hintText="Date" value={this.state.time} onChange={this.handleDateChange.bind(this)} floatingLabelText="Date" data-tag="time"/>
                        <Divider />
                        <TextField hintText="Description" value={this.state.description} onChange={this.handleChange.bind(this)} multiLine={true}  rows={2}   rowsMax={6} fullWidth={true} floatingLabelText="Description" data-tag="description"/>
                    </Paper>
                    <CardActions>
                        <RaisedButton label="Submit" primary={true} onClick={this.submit.bind(this)}></RaisedButton>
                        <RaisedButton label="Cancel"onClick={this.cancel.bind(this)}></RaisedButton>
                    </CardActions>
                </Card>


            </div>
        )
    }
}

AddDisaster.contextTypes = {
    router: React.PropTypes.object.isRequired
}


export default AddDisaster;