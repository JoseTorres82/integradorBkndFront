import { useFormik } from "formik";
import * as Yup from "yup";
import '../../../Styles/GlobalStyles.css'
import styled from "styled-components";
import { PiIceCreamLight } from "react-icons/pi";
import {Link} from "react-router-dom";

const ContenedorPrincipal = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
`;

const CardTitleContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  margin-top:2rem; 

  h2{
    justify-content: center;
    align-items: center;
    
  }
`;

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
    <ContenedorPrincipal>
    <CardTitleContainer id="Entrar" className="titulos">
          <h2>
            <PiIceCreamLight /> Conectate para realizar tus pedidos <PiIceCreamLight />
          </h2>
        </CardTitleContainer>
    <div className="LoginFromContainer">
      <div className="boxLogin">
        <h1>Login</h1>
        <form onSubmit={formik.handleSubmit}>
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
            <label  htmlFor="password">Contraseña</label>
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
            <button type="submit">Ingresar</button>
            <Link to='/Registro'>
            <button onClick={() => console.log("Ir a página de registro")}>
              Crear Cuenta
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
    </ContenedorPrincipal>
  );
};

export default LoginPage;
