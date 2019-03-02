import React from 'react';
import RegistrationStyle from './registration.scss'
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Form, FormGroup, Label, Input, FormFeedback, Button, FormText } from 'reactstrap';

class RegistrationForm extends React.Component {
    render() {
        return (
            <div className="signup-container">
                <AvForm onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
                    <AvField name="email" label="Email Address:" type="email" required />
                    <AvField name="password" label="Password:" type="password" required />
                      <AvField name="confirmpassword" label="Confirm Password" type="password" required
                        errorMessage="Please Enter Password"
                        validate={{
                            minLength: { value: 8, errorMessage: 'Passwords must match' },
                        }} />
                    <Button color="primary" className="btn_black" title="Create">Create</Button>
                </AvForm>
                <div className="text-info">
                    <p>
                        When you create an SYSTEMATIX account, we collect your email and personal data to enhance your shopping experience and, subject to your agreement, to provide you with exclusive email updates, promotions, and notifications.
                </p>
                    <p>You may unsubscribe at any time. To find out more, please visit our Privacy Policy.</p>
                </div>
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
        this.setState({ values });
    }

}
export default RegistrationForm;