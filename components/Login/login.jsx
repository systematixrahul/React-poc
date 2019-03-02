import React from 'react';
import LoginStyle from './login.scss'
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Form, FormGroup, Label, Input, FormFeedback, Button, FormText } from 'reactstrap';

class LoginForm extends React.Component {
    render() {
        return (
            <div className="login-container">
                <AvForm onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
                    <AvField name="email" label="Email Address:" type="email" required />
                    <AvField name="password" label="Password:" type="password" required />
                    <Button color="primary"  className="btn_black" title="Submit">Submit</Button>
                </AvForm>
            </div>
        );
    }

    constructor(props) {
        super(props);
        this.handleValidSubmit = this.handleValidSubmit.bind(this);
        this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.state = {};
    }

    handleValidSubmit(event, values) {
        this.setState({values});
      }
    
}
export default LoginForm;