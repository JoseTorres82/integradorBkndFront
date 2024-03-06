/* import React from "react"; */
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { PiIceCreamLight } from "react-icons/pi";
import '../../../Styles/GlobalStyles.css'
import { Link } from 'react-router-dom';

const ContenedorPrincipal = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  margin-top:5.5rem;
  margin-bottom:2rem;
`;
const CardTitleContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;

  h2{
    justify-content: center;
    align-items: center;
    
  }`;


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
    <ContenedorPrincipal>
      <CardTitleContainer id="Entrar" className="titulos">
        <h2>
          <PiIceCreamLight /> Crea una cuenta  <PiIceCreamLight />
        </h2>
      </CardTitleContainer>
      <div className="LoginFromContainer">
        <div className="boxLogin">
          <h1>Registro</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="lblsesion">
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

            <div className="lblsesion">
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

            <div className="lblsesion">
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

            <div className="lblsesion">
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

            <div className="lblsesion">
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

            <div className="btnsForm">
              <button type="submit">Registrar</button>
              <Link to='/login'>
                <button onClick={() => console.log("Ir a página de login")}>
                  Ingresar
                </button>
              </Link>
            </div>
          </form>
        </div>


      </div >
    </ContenedorPrincipal>
  );
};

export default RegisterPage;
