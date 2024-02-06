import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Correo electrónico no válido").required("Campo requerido"),
      password: Yup.string().required("Campo requerido"),
    }),
    onSubmit: (values) => {
      //Aca codigo de la api
      console.log("Ingresar:", values);
    },
  });

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div>{formik.errors.email}</div>
          )}
        </div>

        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div>{formik.errors.password}</div>
          )}
        </div>

        <div>
          <button type="submit">Ingresar</button>
          <button onClick={() => console.log("Ir a página de registro")}>
            Crear Cuenta
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
