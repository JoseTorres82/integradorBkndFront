import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const RegisterPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      address: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Campo requerido"),
      lastName: Yup.string().required("Campo requerido"),
      address: Yup.string().required("Campo requerido"),
      email: Yup.string().email("Correo electrónico no válido").required("Campo requerido"),
      password: Yup.string().required("Campo requerido"),
    }),
    onSubmit: (values) => {
      // Aca logica de la api
      console.log("Registrar:", values);
    },
  });

  return (
    <div>
      <h1>Registro</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <div>{formik.errors.name}</div>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Apellido</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div>{formik.errors.lastName}</div>
          )}
        </div>

        <div>
          <label htmlFor="address">Dirección</label>
          <input
            type="text"
            id="address"
            name="address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address && (
            <div>{formik.errors.address}</div>
          )}
        </div>

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
          <button type="submit">Registrar</button>
          <button onClick={() => console.log("Ir a página de login")}>
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
