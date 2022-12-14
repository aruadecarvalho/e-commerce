import { useState, FormEvent, ChangeEvent } from "react";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import { useDispatch } from "react-redux";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

import {
  SignFormContainer,
  ButtonContainer,
  GoogleLogo,
  SignFormTitle,
  SignFormSpan,
  FormInputContainer,
  ErrorMessage,
} from "./sign-in-form.styles";
import { ComponentAnimation } from "../animations/animations.component";

export type FormFieldsSignIn = {
  email: string;
  password: string;
};

export type ErrorsSignIn = {
  emailError?: string;
  passwordError?: string;
};
const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] =
    useState<FormFieldsSignIn>(defaultFormFields);
  const { email, password } = formFields;
  const [formErrors, setFormErrors] = useState<ErrorsSignIn>({});
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    resetFormFields();
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormErrors(validate(formFields));
    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      // catch error code
      const errorCode = (error as AuthError).code;
      switch (errorCode) {
        case AuthErrorCodes.INVALID_PASSWORD:
          setFormErrors({ ...formErrors, passwordError: "Incorrect password" });
          break;
        case AuthErrorCodes.USER_DELETED:
          setFormErrors({ ...formErrors, emailError: "User not found" });
          break;
        default:
          console.log(error);
      }
    }
  };

  const validate = (values: FormFieldsSignIn) => {
    const errors: ErrorsSignIn = {};
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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <ComponentAnimation>
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
    </ComponentAnimation>
  );
};

export default SignInForm;
