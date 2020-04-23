import React from "react";
import styles from "./styles.scss";
import _isEmpty from "lodash/isEmpty";
import { Form, Col } from "react-bootstrap";
import { Formik, Field } from "formik";
import { toast } from "react-toastify";
import { postUpload, postWithTokenPost } from "../../utils/request";

const InfoForm = ({ t }) => {
  return (
    <div>
      <div className="row align-items-start justify-content-center mb-5">
        <div className="col-12 col-md-8">
          <div className={styles.formWrap}>
            <div className="row justify-content-center align-items-start">
              <Formik
                initialValues={{
                  first_name: "",
                  last_name: "",
                  email: "",
                  company: "",
                  region: "Afica",
                  purpose: "Looking for Investor",
                  nature_of_product: "Service",
                  file: null,
                  project_description: "",
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

                  if (!values.company) {
                    errors.company = t("fieldRequired");
                  }

                  if (!values.region) {
                    errors.reason = t("fieldRequired");
                  }

                  if (!values.purpose) {
                    errors.purpose = t("fieldRequired");
                  }

                  if (!values.nature_of_product) {
                    errors.natural_of_product = t("fieldRequired");
                  }

                  if (!values.project_description) {
                    errors.project_description = t("fieldRequired");
                  }

                  return errors;
                }}
                onSubmit={(values) => {
                  const formData = new FormData();
                  formData.append("files[0]", values.file);
                  postUpload("/api/cockpit/addAssets", formData).then(
                    (response) => {
                      if (!_isEmpty(response.assets)) {
                        const params = {
                          data: {
                            ...values,
                            file: response.assets[0],
                          },
                        };

                        postWithTokenPost(
                          "/api/collections/save/venture",
                          params
                        ).then((res) => {
                          if (!_isEmpty(res)) {
                            toast.success("Thank you !");
                          }
                        });
                      }
                    }
                  );
                }}
                render={({ handleSubmit, errors, setFieldValue, touched }) => (
                  <Form style={{ width: "100%" }}>
                    <Form.Row>
                      <Field
                        name="first_name"
                        render={({ field }) => (
                          <Form.Group as={Col} md="6" controlId="first_name">
                            <Form.Label>{t("firstName")}*</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder={t("firstName")}
                              value={field.value}
                              onChange={field.onChange}
                              isInvalid={
                                touched.first_name && errors.first_name
                              }
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.first_name}
                            </Form.Control.Feedback>
                          </Form.Group>
                        )}
                      />
                      <Field
                        name="last_name"
                        render={({ field }) => (
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
                    </Form.Row>
                    <Form.Row>
                      <Field
                        name="email"
                        render={({ field }) => (
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
                        name="company"
                        render={({ field }) => (
                          <Form.Group as={Col} md="6" controlId="company">
                            <Form.Label>{t("company")}*</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder={t("company")}
                              value={field.value}
                              onChange={field.onChange}
                              isInvalid={touched.company && errors.company}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.company}
                            </Form.Control.Feedback>
                          </Form.Group>
                        )}
                      />
                    </Form.Row>
                    <Form.Row>
                      <Field
                        name="region"
                        render={({ field }) => (
                          <Form.Group as={Col} md="12" controlId="region">
                            <Form.Label>{t("region")}*</Form.Label>
                            <Form.Control
                              as="select"
                              value={field.value}
                              onChange={field.onChange}
                              isInvalid={touched.region && errors.region}
                            >
                              <option value="Africa">Africa</option>
                              <option value="Asia Pacific">Asia Pacific</option>
                              <option value="Europe">Europe</option>
                              <option value="Latin America">
                                Latin America
                              </option>
                              <option value="Middle East">Middle East</option>
                              <option value="North America">
                                North America
                              </option>
                              <option value="South America">
                                South America
                              </option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                              {errors.region}
                            </Form.Control.Feedback>
                          </Form.Group>
                        )}
                      />
                    </Form.Row>
                    <Form.Row>
                      <Field
                        name="purpose"
                        render={({ field }) => (
                          <Form.Group as={Col} md="6" controlId="purpose">
                            <Form.Label>{t("purpose")}*</Form.Label>
                            <Form.Control
                              as="select"
                              value={field.value}
                              onChange={field.onChange}
                              isInvalid={touched.purpose && errors.purpose}
                            >
                              <option value="Looking for Investor">
                                Looking for Investor
                              </option>
                              <option value="Willing to Invest">
                                Willing to Invest
                              </option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                              {errors.purpose}
                            </Form.Control.Feedback>
                          </Form.Group>
                        )}
                      />
                      <Field
                        name="nature_of_product"
                        render={({ field }) => (
                          <Form.Group
                            as={Col}
                            md="6"
                            controlId="nature_of_product"
                          >
                            <Form.Label>{t("natureOfProduct")}*</Form.Label>
                            <Form.Control
                              as="select"
                              value={field.value}
                              onChange={field.onChange}
                              isInvalid={
                                touched.nature_of_product &&
                                errors.nature_of_product
                              }
                            >
                              <option value="Service">Service</option>
                              <option value="Software">Software</option>
                              <option value="Tangible Product">
                                Tangible Product
                              </option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                              {errors.nature_of_product}
                            </Form.Control.Feedback>
                          </Form.Group>
                        )}
                      />
                    </Form.Row>
                    <Form.Row>
                      <Field
                        name="file"
                        render={() => (
                          <Form.Group as={Col} md="12" controlId="file">
                            <Form.Label>{t("sizeUpload")}</Form.Label>
                            <input
                              id="file"
                              name="file"
                              type="file"
                              onChange={(event) => {
                                setFieldValue(
                                  "file",
                                  event.currentTarget.files[0]
                                );
                              }}
                              className="form-control"
                              accept=" .jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.ppt,.pptx,.odt,.avi,.ogg,.m4a,.mov,.mp3,.mp4,.mpg,.wav,.wmv"
                            />
                          </Form.Group>
                        )}
                      />
                    </Form.Row>
                    <Form.Row>
                      <Field
                        name="project_description"
                        render={({ field }) => (
                          <Form.Group
                            as={Col}
                            md="12"
                            controlId="project_description"
                          >
                            <Form.Label>{t("projectDescription")}*</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={6}
                              maxLength={4000}
                              placeholder={t("projectDescription")}
                              value={field.value}
                              onChange={field.onChange}
                              isInvalid={
                                touched.project_description &&
                                errors.project_description
                              }
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.project_description}
                            </Form.Control.Feedback>
                          </Form.Group>
                        )}
                      />
                    </Form.Row>
                    <div className="row justify-content-center align-items-start">
                      <div className="col-12 col-md-5">
                        <div className="button-submit">
                          <div
                            onClick={handleSubmit}
                            className={styles.buttonSubmit}
                          >
                            {t("submit")}
                          </div>
                        </div>
                        <p></p>
                      </div>
                      <p></p>
                      {!_isEmpty(errors) && (
                        <div className={styles.error}>{t("errorMessage")}</div>
                      )}
                    </div>
                  </Form>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoForm;
