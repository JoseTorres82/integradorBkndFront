/* import React from "react"; */
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import '../../Styles/GlobalStyles.css';
import { PiIceCreamLight } from "react-icons/pi";

const ContenedorPrincipal = styled.div`
max-width:1280px;
margin:0 auto;
width:100%;
display:block;
`

const H2Container = styled.div`
    font-family: 'Dancing Script', cursive;
    font-size: 1.5rem;
    font-width: 700;
    background-color:#a2c8cc;
    text-align:center;
    margin-top:15px;
    margin-bottom:15px;
  
`
const FormContainer = styled.div`
  background-image: url("/img/bghelados.webp");
  background-size: cover;
  padding: 30px;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 13px;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  font-family: 'Cabin', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 10);

 
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FormField = styled.div`
  width: 48%;
  margin-bottom: 10px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Label = styled.label`
  display: block;
  color: white;
  margin-bottom: 5px;
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid white;
  border-radius: 5px;
`;

const MessageInput = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid white;
  border-radius: 5px;
  font-family: 'Cabin', sans-serif;
`;

const SubmitButton = styled.button`
  width: 250px;
  height: 50px;
  background-color: var(--main-color-1);
  color: #333;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top:20px;
  font-size:1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  font-family: "cabin", sans-serif;

  &:hover {
    background-color:#a2c8cc;
    color:#f5f5f5;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
    transform: scale(1.1);
  }
  
`;

//  validación con Yup
const validationSchema = Yup.object({
    name: Yup.string().required("El nombre es obligatorio"),
    address: Yup.string().required("La dirección es obligatoria"),
    phone: Yup.number().required("El teléfono es obligatorio"),
    email: Yup.string().email("Ingrese un correo electrónico válido").required("El correo electrónico es obligatorio"),
    message: Yup.string().required("El mensaje es obligatorio"),
});

// Componente principal (Esta es la estructura de los datos, No Borrar ya funcionan)
const ContactForm: React.FC = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            address: "",
            phone: "",
            email: "",
            message: "",
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            // Acá Me falta la Lógica para guardar los msjs en la BdD
            console.log("Formulario enviado:", values);

            // 
            resetForm();
        },
    });

    return (
        <ContenedorPrincipal>
            < H2Container className="titulos" id="contacto">
            <h2><PiIceCreamLight /> Hablamos? <PiIceCreamLight /></h2>
            </H2Container >
            <FormContainer >
                <Form onSubmit={formik.handleSubmit}>
                    <FormField>
                        <Label htmlFor="name">Nombre</Label>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Nombre completo"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>}
                    </FormField>
                    <FormField>
                        <Label htmlFor="address">Dirección</Label>
                        <Input
                            type="text"
                            id="address"
                            name="address"
                            placeholder="Dirección"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.address && formik.errors.address && <div>{formik.errors.address}</div>}
                    </FormField>
                    <FormField>
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Teléfono"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.phone && formik.errors.phone && <div>{formik.errors.phone}</div>}
                    </FormField>
                    <FormField>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Correo electrónico"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
                    </FormField>
                    <FormField>
                        <Label htmlFor="message">Mensaje</Label>
                        <MessageInput
                            id="message"
                            name="message"
                            placeholder="Escribe tu mensaje aquí"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.message && formik.errors.message && <div>{formik.errors.message}</div>}
                    </FormField>
                    <SubmitButton type="submit">Enviar</SubmitButton>
                </Form>
            </FormContainer>
        </ContenedorPrincipal>
    );
};

export default ContactForm;
