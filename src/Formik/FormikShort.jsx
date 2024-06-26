import { Form, useFormik, } from "formik";
import React from "react";
import * as yup from "yup";

const initialValues = {
  FirstName: "",
  LastName: "",
  Email: "",
};

const onSubmit = (values) => {
  console.log("The values are", values);
};

const validationSchema = yup.object({
  FirstName: yup.string().required("Required"),
  LastName: yup.string().required("Required"),
  Email: yup.string().email("invalid email form").required("Required"),
});
export default function FormikShort() {
  const Formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    // validate
  });
  // console.log("Values of formik Forms are", Formik.errors);
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={Formik.handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            name="FirstName"
            type="text"
            placeholder="First Name"
            // onChange = {Formik.handleChange}
            // onBlur = {Formik.handleBlur}
            // value={Formik.values.FirstName}

            //Here istead of using above Two properties we just use the spread operator and this made the form short
            {...Formik.getFieldProps("FirstName")}  
          />
          {Formik.errors.FirstName && Formik.touched.FirstName ? (
            <div className="text-red-600">{Formik.errors.FirstName}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            name="LastName"
            type="text"
            placeholder="Last Name"
            {...Formik.getFieldProps("LastName")}
          />
          {Formik.errors.LastName && Formik.touched.LastName ? (
            <div className="text-red-600">{Formik.errors.LastName}</div>
          ) : null}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="Email"
            type="email"
            placeholder="Email"
            {...Formik.getFieldProps("Email")}
          />
          {Formik.errors.Email && Formik.touched.Email ? (
            <div className="text-red-600">{Formik.errors.Email}</div>
          ) : null}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
