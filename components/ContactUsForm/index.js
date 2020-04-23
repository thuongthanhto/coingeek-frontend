import React from "react";
import { Formik, Field } from "formik";
import _isEmpty from "lodash/isEmpty";
import { Form, Button, Col } from "react-bootstrap";
import Link from "next/link";
import styles from "./styles.scss";
import { toast } from "react-toastify";
import { postWithTokenPost } from "../../utils/request";

const ContactUsForm = ({ t }) => {
  return (
    <>
      <div className={styles.fullHeader} />
      <div className={styles.wrapper}>
        <div className="container">
          <div className="row align-items-start justify-content-between mb-5">
            <div className="col-12 col-md-12 entry-content">
              <p className={styles.titleContact}>{t("titleContact")}</p>
            </div>
          </div>

          <div className="row align-items-start justify-content-center mb-5">
            <div className="col-12 col-md-8">
              <Formik
                initialValues={{
                  first_name: "",
                  last_name: "",
                  email: "",
                  business: "Media Inquiries",
                  subject: "",
                  message: "",
                }}
                validate={(values) => {
                  let errors = {};
                  if (!values.first_name) {
                    errors.first_name = t("fieldRequired");
                  }

                  if (!values.last_name) {
                    errors.last_name = t("fieldRequired");
                  }

                  if (!values.email) {
                    errors.email = t("fieldRequired");
                  }

                  if (!values.business) {
                    errors.business = t("fieldRequired");
                  }

                  if (!values.subject) {
                    errors.subject = t("fieldRequired");
                  }

                  if (!values.message) {
                    errors.message = t("fieldRequired");
                  }

                  if (!values.check) {
                    errors.check = t("fieldRequired");
                  }

                  return errors;
                }}
                onSubmit={(values) => {
                  const params = {
                    data: {
                      ...values,
                    },
                  };
                  postWithTokenPost(
                    "/api/collections/save/contact_us",
                    params
                  ).then((res) => {
                    if (!_isEmpty(res)) {
                      toast.success("Thank you !");
                    }
                  });
                }}
                render={({
                  handleChange,
                  handleSubmit,
                  handleBlur,
                  values,
                  errors,
                  setFieldValue,
                  touched,
                }) => (
                  <Form>
                    <Field
                      name="first_name"
                      render={({ field, formProps }) => (
                        <Form.Group as={Col} md="6" controlId="first_name">
                          <Form.Label>{t("firstName")}*</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder={t("firstName")}
                            value={field.value}
                            onChange={field.onChange}
                            isInvalid={touched.first_name && errors.first_name}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.first_name}
                          </Form.Control.Feedback>
                        </Form.Group>
                      )}
                    />
                    <Field
                      name="last_name"
                      render={({ field, formProps }) => (
                        <Form.Group as={Col} md="6" controlId="last_name">
                          <Form.Label>{t("lastName")}*</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder={t("lastName")}
                            value={field.value}
                            onChange={field.onChange}
                            isInvalid={touched.last_name && errors.last_name}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.last_name}
                          </Form.Control.Feedback>
                        </Form.Group>
                      )}
                    />
                    <Field
                      name="email"
                      render={({ field, formProps }) => (
                        <Form.Group as={Col} md="6" controlId="email">
                          <Form.Label>{t("emailAddress")}*</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder={t("emailAddress")}
                            value={field.value}
                            onChange={field.onChange}
                            isInvalid={touched.email && errors.email}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.email}
                          </Form.Control.Feedback>
                        </Form.Group>
                      )}
                    />
                    <Field
                      name="business"
                      render={({ field, formProps }) => (
                        <Form.Group as={Col} md="6" controlId="business">
                          <Form.Label>{t("topic")}*</Form.Label>
                          <Form.Control
                            as="select"
                            value={field.value}
                            onChange={field.onChange}
                            isInvalid={touched.business && errors.business}
                          >
                            <option value="Media Inquiries">
                              Media Inquiries
                            </option>
                            <option value="General Inquiries">
                              General Inquiries
                            </option>
                            <option value="Breaking News">Breaking News</option>
                            <option value="Jobs">Jobs</option>
                            <option value="Advertise">Advertise</option>
                            <option value="Press Releases">
                              Press Releases
                            </option>
                            <option value="Editor">Editor</option>
                            <option value="Funding">Funding</option>
                            <option value="Mining">Mining</option>
                          </Form.Control>
                          <Form.Control.Feedback type="invalid">
                            {errors.business}
                          </Form.Control.Feedback>
                        </Form.Group>
                      )}
                    />
                    <Field
                      name="subject"
                      render={({ field, formProps }) => (
                        <Form.Group as={Col} md="6" controlId="subject">
                          <Form.Label>{t("subject")}*</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder={t("subject")}
                            value={field.value}
                            onChange={field.onChange}
                            isInvalid={touched.subject && errors.subject}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.subject}
                          </Form.Control.Feedback>
                        </Form.Group>
                      )}
                    />
                    <Field
                      name="message"
                      render={({ field, formProps }) => (
                        <Form.Group as={Col} md="12" controlId="message">
                          <Form.Label>{t("message")}*</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={6}
                            maxLength={4000}
                            placeholder={t("typeMessage")}
                            value={field.value}
                            onChange={field.onChange}
                            isInvalid={touched.message && errors.message}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      )}
                    />

                    <Field
                      name="check"
                      render={({ field, formProps }) => (
                        <Form.Group
                          as={Col}
                          md="12"
                          controlId="check"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",
                          }}
                        >
                          <Form.Control
                            style={{ width: "auto", boxShadow: "none" }}
                            type="checkbox"
                            placeholder="Last Name"
                            value={field.value}
                            onChange={field.onChange}
                            isInvalid={touched.last_name && errors.check}
                          />
                          <Form.Check.Label
                            className={styles.label}
                            style={{ marginLeft: 5 }}
                          >
                            <span>I agree to the by </span>
                            <Link href="/terms-of-use">
                              <span>Legal Disclaimer </span>
                            </Link>

                            <span>submitting this form</span>
                          </Form.Check.Label>
                          <Form.Control.Feedback type="invalid">
                            {errors.check}
                          </Form.Control.Feedback>
                        </Form.Group>
                      )}
                    />

                    <Form.Group>
                      <Button
                        variant="outline-dark"
                        className={styles.buttonSubmit}
                        onClick={handleSubmit}
                      >
                        {t("send")}
                      </Button>
                    </Form.Group>

                    {!_isEmpty(errors) && (
                      <div className={styles.errorContactForm}>
                        {t("errorMessage")}
                      </div>
                    )}
                  </Form>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(ContactUsForm);
