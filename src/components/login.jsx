import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Page from "./page";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required."),
  password: Yup.string()
    .min(6, "Password should be more than 6 characters")
    .required("Password cannot be empty."),
  username: Yup.string().required("Username cannot be empty."),
  age: Yup.number().max("99").required("Age cannot be empty."),
});

class Login extends Component {
  render() {
    return (
      <div className="">
        <div className="">
          <Formik
            initialValues={{ email: "", password: "", username: "", age: "" }}
            validationSchema={LoginSchema}
            onSubmit={(values) => console.log(values)}
          >
            {({ isSubmitting }) =>
              !isSubmitting ? (
                <div className="flex justify-center items-center">
                  <div className="w-96 mt-32">
                    <Form>
                      <div class="mb-6">
                        <Field
                          type="text"
                          placeholder="username"
                          name="username"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />

                        <ErrorMessage
                          component="div"
                          name="username"
                          className="text-red-500"
                        />
                      </div>
                      <div class="mb-6">
                        <Field
                          type="email"
                          name="email"
                          placeholder="namheng@email.com"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />

                        <ErrorMessage
                          component="div"
                          name="email"
                          className="text-yellow"
                        />
                      </div>

                      <div class="mb-6">
                        <Field
                          type="number"
                          placeholder="age"
                          name="age"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />

                        <ErrorMessage
                          component="div"
                          name="age"
                          className="text-red-500"
                        />
                      </div>

                      <div class="mb-6">
                        <Field
                          type="password"
                          placeholder="password"
                          name="password"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />

                        <ErrorMessage
                          component="div"
                          name="password"
                          className="text-red-500"
                        />
                      </div>

                      <button
                        type="submit"
                        class="inline-block border w-full text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Sign Up
                      </button>
                    </Form>
                  </div>
                </div>
              ) : (
                <Page />
              )
            }
          </Formik>
        </div>
      </div>
    );
  }
}

export default Login;
