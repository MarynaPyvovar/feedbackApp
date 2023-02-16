import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Button } from '../Button';
import { useDispatch } from 'react-redux';
import { sendUserFeedback } from '../../redux/feedback/feedbackOperations';
import { StyledForm, ErrorText, Wrapper, StyledInput, StyledMessage } from './FeedbackForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .required(),
  email: yup
    .string()
    .email()
    .required(),
    message: yup
    .string()
    .required(),
});

const initialValues = {
  name: '',
  email: '',
  message: '',
};

const FeedbackForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(sendUserFeedback(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form as={StyledForm}>
        <Wrapper>
        <Field
            type="name"
            name="name"
            placeholder='Your name*'
          as={StyledInput}
          />
          <ErrorMessage name="name">
            {msg => <ErrorText>*{msg}</ErrorText>}
          </ErrorMessage>
        </Wrapper>
        <Wrapper>
          <Field
            type="email"
            name="email"
            placeholder='Your email*'
          as={StyledInput}
          />
          <ErrorMessage name="email">
            {msg => <ErrorText>*{msg}</ErrorText>}
          </ErrorMessage>
        </Wrapper>
        <Wrapper>
          <Field
            type='text'
            name="message"
          placeholder='Your message*'
          as={StyledMessage}
          />
          <ErrorMessage name="message">
            {msg => <ErrorText>*{msg}</ErrorText>}
          </ErrorMessage>
        </Wrapper>
        <Button type={'submit'}>Send message</Button>
      </Form>
    </Formik>
  )
}

export default FeedbackForm;
