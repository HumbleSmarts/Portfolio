import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, "Name must be at least 4 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  // const validationSchema = Yup.object({
  //   name: Yup.string()
  //     .required("Name is required"),
  //     .min(4, "Name must be at least 4 characters")
  //   email: Yup.string()
  //     .email("Invalid email address")
  //     .required("Email is required"),
  //   message: Yup.string().required("Message is required"),
  // });

  const FORM_ENDPOINT =
    "https://public.herotofu.com/v1/84c1ead0-16ca-11ee-9e42-f75d394a54ad";

  const onSubmit = async (formData, { resetForm, setStatus }) => {
    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("message", formData.message);

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        resetForm();
        setStatus("success");
        console.log("Success");
      } else {
        setStatus("error");
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, status }) => (
        <Form>
          {status === "success" && (
            <div className="success-message">Submission successful!</div>
          )}
          {status === "error" && (
            <div className="error-message">
              Submission failed. Please try again.
            </div>
          )}

          <div>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Input your name"
            />
            <ErrorMessage name="name" component="div" className="error" />

            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Input a valid email"
            />
            <ErrorMessage name="email" component="div" className="error" />

            <Field
              as="textarea"
              id="message"
              name="message"
              placeholder="Drop your message here"
            />
            <ErrorMessage name="message" component="div" className="error" />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
