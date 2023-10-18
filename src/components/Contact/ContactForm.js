import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const FORM_ENDPOINT =
    "https://public.herotofu.com/v1/84c1ead0-16ca-11ee-9e42-f75d394a54ad";

  const onSubmit = async (formData, { resetForm }) => {
    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("message", formData.message);

      fetch(FORM_ENDPOINT, {
        method: "POST",
        body: form,
      }).then((response) => {
        if (response.ok) {
          resetForm();
          console.log("Success");
        } else {
          console.error("Submission failed");
        }
      });
    } catch (error) {
      console.error("Error:", error);
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
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Input your name"
            />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Input a valid email"
            />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <Field
              as="textarea"
              id="message"
              name="message"
              placeholder="Drop your message here"
            />
            <ErrorMessage name="message" component="div" className="error" />
          </div>

          <div>
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
