import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import {
  Button,
  ButtonLink,
  ErrorMessage,
  Form,
  Input,
  Link,
  PasswordContainer,
  Text,
  Title,
} from './RegisterForm.styled';
import { FiEyeOff } from 'react-icons/fi';
import { FiEye } from 'react-icons/fi';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/authSlice/authOperations';

const nameRegex = /[a-zA-Zа-яА-Я]+(([' ][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const passwordRegex = /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/;

const formSchema = Yup.object().shape({
  name: Yup.string()
    .matches(nameRegex, {
      message: `Name may contain only letters, apostrophe, dash and spaces.`,
    })
    .required('Name is required'),
  email: Yup.string()
    .matches(emailRegex, {
      message: `Please enter a valid email address. It should follow the format 'example@example.com`,
    })
    .required('Email is required'),
  password: Yup.string()
    .matches(passwordRegex, {
      message: `Password must contain at least 6 letters and 1 digit, and be at least 7 characters long.`,
    })
    .required('Password is required'),
});

export const RegisterForm = ({ isClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: formSchema,
    onSubmit: async (values, actions) => {
      await dispatch(register(values))
        .unwrap()
        .catch(error => {
          toast.error(error);
        });
      actions.resetForm();
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Title>Register</Title>
        <Text>
          To start using our services, please fill out the registration form
          below. All fields are mandatory:
        </Text>
        <Input
          id="nameame"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          placeholder="Name"
          autoComplete="off"
        />
        {formik.touched.name && formik.errors.name ? (
          <ErrorMessage>{formik.errors.name}</ErrorMessage>
        ) : null}
        <Input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Email"
          autoComplete="off"
        />
        {formik.touched.email && formik.errors.email && (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        )}
        <PasswordContainer>
          <Input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Password"
            autoComplete="off"
          />
          {showPassword ? (
            <FiEye
              style={{
                cursor: 'pointer',
                position: 'absolute',
                top: '18px',
                right: '18px',
              }}
              size="20px"
              color="black"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <FiEyeOff
              style={{
                cursor: 'pointer',
                position: 'absolute',
                top: '18px',
                right: '18px',
              }}
              size="20px"
              color="black"
              onClick={togglePasswordVisibility}
            />
          )}
        </PasswordContainer>
        {formik.touched.password && formik.errors.password ? (
          <ErrorMessage>{formik.errors.password}</ErrorMessage>
        ) : null}
        <Button type="submit">Register</Button>
        <ButtonLink>
          {/* <Link to="/login">Login</Link> */}
          <Link href="/vocabBuilder/login">Login</Link>
        </ButtonLink>
      </Form>
    </>
  );
};
