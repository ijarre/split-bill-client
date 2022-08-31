import { Form, Formik } from "formik";
import { ChangeEventHandler, useEffect, useState } from "react";
import { Spinner } from "../../components";
import { useRegister } from "../../modules/user/userHooks";
import { registerUser } from "../../modules/user/userSevice";

interface Forms {
  username: string;
  email: string;
  password: string;
  balance?: number;
}
const labels = {
  title: "Sign up",
  loadingRegister: "Signing up",
  registerButton: "Sign me up",
};
export function RegisterContainer() {
  const formikInitialValue: Forms = { username: "", email: "", password: "", balance: 0 };
  const { mutate: register, isLoading: isSubmitting } = useRegister();

  const onSubmit = (value: Forms) => {
    register(value);
  };

  return (
    <Formik initialValues={formikInitialValue} onSubmit={onSubmit}>
      {({ values, handleChange }) => {
        return (
          <Form>
            <div className="flex  justify-center items-center  md:justify-end md:items-stretch min-h-screen w-screen from-green-30 to-green-40 bg-gradient-to-t ">
              <div className="flex flex-col gap-8 w-4/5 p-6 bg-white/80  rounded-lg max-w-sm justify-center">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-6xl font-bold  text-gray-900 ">{labels.title}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="">
                    <label htmlFor="email" className={`${values.email === "" && "invisible "} text-sm text-gray-600 font-thin`}>
                      Email
                    </label>
                    <input type="email" id="email" placeholder="Input email" onChange={handleChange} className="w-full  px-2 py-1 border-2 border-green-40 rounded-md" required />
                  </div>
                  <div className="">
                    <label htmlFor="username" className={`${values.username === "" && "invisible "} text-sm text-gray-600 font-thin`}>
                      Username
                    </label>
                    <input type="text" id="username" placeholder="Input username" onChange={handleChange} className="w-full  px-2 py-1 border-2 border-green-40 rounded-md" />
                  </div>

                  <div className="">
                    <label htmlFor="password" className={`${values.password === "" && "invisible "} text-sm text-gray-600 font-thin`}>
                      Password
                    </label>
                    <input type="password" id="password" placeholder="Input password" className="w-full  px-2 py-1 border-2 border-green-40 rounded-md" onChange={handleChange} />
                  </div>
                </div>
                <button
                  className={` flex ${
                    !isSubmitting && "justify-center"
                  } bg-cream-10 p-2 rounded-md enabled:hover:bg-green-40 enabled:hover:text-white text-gray-800  border-2 border-green-40 enabled:hover:border-cream-10 active:bg-green-40/75  disabled:cursor-not-allowed disabled:bg-green-40/75 disabled:text-white `}
                  disabled={isSubmitting}
                  type={"submit"}
                >
                  {isSubmitting && <Spinner />}
                  <span className={` font-semibold text-lg ${isSubmitting && "m-auto -translate-x-5"} `}>{isSubmitting ? labels.loadingRegister : labels.registerButton}</span>
                </button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
