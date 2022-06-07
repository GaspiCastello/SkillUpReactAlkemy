import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { Button, Flex, FormLabel, Input } from '@chakra-ui/react';

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Input
        isInvalid={meta.touched && meta.error}
        errorBorderColor="crimson"
        variant="filled"
        className="text-input"
       focusBorderColor='white'
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const SimpleInputForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          movie: '',
        }}
        validationSchema={Yup.object({
          movie: Yup.string()
            .max(15, 'Must be 15 characters or less')
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <Flex w='auto'>
            <MyTextInput
              label="movie"
              name="movie"
              type="text"
              placeholder="Your favorite movie"
            />
            <Button color='red.600' variant="outline" type="submit">
              SEARCH
            </Button>
          </Flex>
        </Form>
      </Formik>
    </>
  );
};
export default SimpleInputForm;
