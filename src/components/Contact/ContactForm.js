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

  /* --------- */
  /* To use Api  */
  /* --------- */

  const onSubmit = async (formData, { resetForm, setFieldValue }) => {
    try {
        const form = new FormData();
        form.append("name", formData.name);
        form.append("email", formData.email);
        form.append("message", formData.message);


      fetch("http://localhost:3001/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((response) => {
        if (response.ok) {
          // Handle success
          // Successful submission, reset the form
          resetForm();
          // Clear the uploaded file by resetting the file input
          setFieldValue("file", null);
          console.log("success");
        } else {
          // Handle errors
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
      {({ isSubmitting, status, fileInputKey, setFieldValue, resetForm }) => (
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
            <label htmlFor="name"></label>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Input your name"
            />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="email"></label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Input a valid email"
            />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="message"></label>
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
              Submit{" "}
            </button>
            
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
