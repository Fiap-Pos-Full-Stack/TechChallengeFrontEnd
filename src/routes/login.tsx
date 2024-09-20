
import { Title } from '../components/Titles';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import FormWrapper from '../components/FormWrapper';
import { useCallback } from 'react';
import { doLogin } from '../services/login';
import { useNavigate } from "react-router-dom";
import useAuth from '../hooks/useAuth';
interface Values {
  user: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const {login} = useAuth();
  const doLoginCallback = useCallback(async (user: string, pass: string) => {
    const response = await doLogin(user, pass)
    if (response.token) {
      login(response.token)
      navigate('/admin')
    }
  }, [])
  return (
    <>
      <Title>Login</Title>
      <FormWrapper>
        <Formik initialValues={{user: '',password: '',}}
          onSubmit={(values: Values,{ setSubmitting }: FormikHelpers<Values>) => {
            doLoginCallback(values.user, values.password)
            setSubmitting(false);
          }}
        >

          <Form>
            <label htmlFor="user">Usuario</label>
            <Field id="user" name="user" placeholder="John" />

            <label htmlFor="password">Senha</label>
            <Field id="password" type="password" name="password" placeholder="Doe" />

            <button type="submit">Entrar</button>
          </Form>
        </Formik>
      </FormWrapper>
    </>
  );
}

export default Login;
