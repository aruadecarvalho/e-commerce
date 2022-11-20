import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
import {} from "./sign-up-form.styles.jsx";
import {
  FormInputContainer,
  ErrorMessage,
  SignFormTitle,
  SignFormSpan,
  SignFormContainer,
} from "../sign-in-form/sign-in-form.styles.jsx";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { ComponentAnimation } from "../../components/animations/animations.component";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const dispatch = useDispatch();
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
      dispatch(signUpStart(email, password, displayName));
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
    <ComponentAnimation>
      <SignFormContainer>
        <SignFormTitle>Don't have an account?</SignFormTitle>
        <SignFormSpan>Sign up with your email and password</SignFormSpan>
        <form onSubmit={handleSubmit}>
          <FormInputContainer>
            <FormInput
              label="Name"
              type="text"
              onChange={handleChange}
              name="displayName"
              value={displayName}
            />
            <ErrorMessage>{formErrors.usernameError}</ErrorMessage>
          </FormInputContainer>
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
          <FormInputContainer>
            <FormInput
              label="Confirm Password"
              type="password"
              onChange={handleChange}
              name="confirmPassword"
              value={confirmPassword}
            />
            <ErrorMessage>{formErrors.confirmPasswordError}</ErrorMessage>
          </FormInputContainer>
          <Button type="submit">Sign up</Button>
        </form>
      </SignFormContainer>
    </ComponentAnimation>
  );
};

export default SignUpForm;
