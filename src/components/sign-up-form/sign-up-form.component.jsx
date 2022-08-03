import { useState } from "react";
import "./sign-up-form.styles.scss";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const [formErrors, setFormErrors] = useState({});

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormErrors(validate(formFields));
    if (password !== confirmPassword) {
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      // catch error code
      switch (error.code) {
        case "email-already-in-use":
          setFormErrors({ ...formErrors, emailError: "Email already in use" });
          break;
        default:
          console.log(error);
      }
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.displayName) {
      errors.usernameError = "Username is required!";
    }
    if (!values.email) {
      errors.emailError = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.emailError = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.passwordError = "Password is required";
    } else if (values.password.length < 6) {
      errors.passwordError = "Password must be more than 6 characters";
    } else if (values.password.length > 20) {
      errors.passwordError = "Password cannot exceed more than 20 characters";
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPasswordError = "Password do not match";
    }
    return errors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-input-container">
          <FormInput
            label="Name"
            type="text"
            onChange={handleChange}
            name="displayName"
            value={displayName}
          />
          <p className="error-message">{formErrors.usernameError}</p>
        </div>
        <div className="form-input-container">
          <FormInput
            label="Email"
            type="text"
            onChange={handleChange}
            name="email"
            value={email}
          />
          <p className="error-message">{formErrors.emailError}</p>
        </div>

        <div className="form-input-container">
          <FormInput
            label="Password"
            type="password"
            onChange={handleChange}
            name="password"
            value={password}
          />
          <p className="error-message">{formErrors.passwordError}</p>
        </div>
        <div className="form-input-container">
          <FormInput
            label="Confirm Password"
            type="password"
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
          />
          <p className="error-message">{formErrors.confirmPasswordError}</p>
        </div>
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
