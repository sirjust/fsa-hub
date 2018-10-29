import React from 'react';
import { shallow, mount } from 'enzyme';

import RegistrationForm from '../RegistrationForm';

var sinon = require('sinon');

describe("RegistrationForm", () => {
  let props;
  let mountedRegistrationForm;
  let state = {
    username: '',
    email: '',
    password: ''
  };
  // this function allows us to reset
  // our component between each test case
  const registrationForm = () => {
    if (!mountedRegistrationForm) {
      mountedRegistrationForm = shallow(
        <RegistrationForm {...props} />
      );
      mountedRegistrationForm.setState(state);
    }
    return mountedRegistrationForm;
  };

  beforeEach(() => {
    // These are default props passed to RegistrationForm
    // userToken and object come from <App />
    // handleOnSubmit and errors come from <Signup />
    props = {
      userToken: null,
      object: {},
      handleOnSubmit: jest.fn(),
      errors: []
    };
    mountedRegistrationForm = undefined;
  });

  it("always renders an <h3>", () => {
    expect(registrationForm().find('h3').length).toBe(1);
  });

  it("always renders a form", () => {
    expect(registrationForm().find('form').length).toBe(1);
  });

  describe("the rendered form", () => {
    it("has a <p> with id 'formErrors'", () => {
      expect(registrationForm().find('p#formErrors').length).toBe(1);
    });

    describe("when errors are an empty array", () => {
      it("does not render any error message", () => {
        const errorTag = registrationForm().find('p#formErrors');
        expect(errorTag.text()).toBe("");
      });
    });

    describe("when errors are populated", () => {
      it("renders the error messages within #formErrors", () => {
        props.errors.push("Username cannot be blank");
        const errorTag = registrationForm().find('p#formErrors');
        expect(errorTag.text()).toBe("Username cannot be blank");
      });

      it("joins an array of errors with commas", () => {
        props.errors.push("Password cannot be blank");
        props.errors.push("Username cannot be blank");
        const errorTag = registrationForm().find('p#formErrors');
        expect(errorTag.text()).toBe("Password cannot be blank, Username cannot be blank");
      });
    });

    describe("filling in username field", () => {
      it("updates state.username", () => {
        const regForm = registrationForm()
        const usernameField = regForm.find('#username').first();
        usernameField.simulate('change', {target: {id: 'username', value: "aspenJames"}});
        expect(regForm.state('username')).toBe('aspenJames');
      });
    });
    
    describe("filling in email field", () => {
      it("updates state.email", () => {
        const regForm = registrationForm()
        const emailField = regForm.find('#email').first();
        emailField.simulate('change', {target: {id: 'email', value: "aspenJames@email.com"}});
        expect(regForm.state('email')).toBe('aspenJames@email.com');
      });
    });
    
    describe("filling in password field", () => {
      it("updates state.password", () => {
        const regForm = registrationForm()
        const passwordField = regForm.find('#password').first();
        passwordField.simulate('change', {target: {id: 'password', value: "s3cureP@ssw0rd!"}});
        expect(regForm.state('password')).toBe('s3cureP@ssw0rd!');
      });
    });

    describe("When the form is submitted", () => {
      it('calls the onSubmit function', () => {
        const submitSpy = sinon.spy(props, 'handleOnSubmit');
        const wrap = mount(<RegistrationForm {...props} />);
        wrap.find('form').first().simulate('submit', { preventDefault () {} });
        expect(submitSpy.calledOnce).toBe(true);
      });
    });

  });

});