import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  signInWithGooglePopUp,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import {
  SignFormContainer,
  ButtonContainer,
  GoogleLogo,
  SignFormTitle,
  SignFormSpan,
  FormInputContainer,
  ErrorMessage,
} from "./sign-in-form.styles.jsx";

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
    <SignFormContainer>
      <SignFormTitle>Already have an account?</SignFormTitle>
      <SignFormSpan>Sign in with your email and password</SignFormSpan>
      <form onSubmit={handleSubmit}>
        <FormInputContainer>
          <FormInput
            label="Email"
            type="text"
            onChange={handleChange}
            name="email"
            value={email}
          />
          <ErrorMessage>{formErrors.emailError}</ErrorMessage>
        </FormInputContainer>

        <FormInputContainer>
          <FormInput
            label="Password"
            type="password"
            onChange={handleChange}
            name="password"
            value={password}
          />
          <ErrorMessage>{formErrors.passwordError}</ErrorMessage>
        </FormInputContainer>
        <ButtonContainer>
          <Button type="submit">Sign in</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            <GoogleLogo></GoogleLogo>Sign in with Google
          </Button>
        </ButtonContainer>
      </form>
    </SignFormContainer>
  );
};

export default SignInForm;
