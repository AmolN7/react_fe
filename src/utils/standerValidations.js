import * as Yup from 'yup'

const usernameValidations = Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .max(15, 'Username must be 15 characters or less')
    .required("User name is require");

const paswordValidation = Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
    .required("Password is require");

const emailValidations = Yup.string()
    .required('Email is required')
    .email('Invalid email format');

const confirmpasswordValidation = Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password')], 'Passwords must match');

const loginUserValidation = Yup.string()
    .required("User name is require");

const loginPasswordValidation = Yup.string()
    .required("Password is require");

export {
    usernameValidations,
    paswordValidation,
    emailValidations,
    confirmpasswordValidation,
    loginUserValidation,
    loginPasswordValidation
}