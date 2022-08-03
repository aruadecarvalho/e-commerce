import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { ReactComponent as GoogleLogo } from "../../assets/googleLogo.svg";
import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const [formErrors, setFormErrors] = useState({});

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopUp();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setFormErrors(validate(formFields));
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      // catch error code
      switch (error.code) {
        case "auth/wrong-password":
          setFormErrors({ ...formErrors, passwordError: "Incorrect password" });
          break;
        case "auth/user-not-found":
          setFormErrors({ ...formErrors, emailError: "User not found" });
          break;
        default:
          console.log(error);
      }
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.emailError = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.emailError = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.passwordError = "Password is required";
    }
    return errors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form className="form-container" onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            <GoogleLogo className="google-logo"></GoogleLogo>Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
