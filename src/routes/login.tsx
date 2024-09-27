
import { SubTitle } from '../components/ui/Typography';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import FormWrapper from '../components/FormWrapper';
import { useCallback } from 'react';
import { doLogin } from '../services/login';
import { useNavigate } from "react-router-dom";
import useAuth from '../hooks/useAuth';
import useAlert from '../hooks/useAlert';
import { AlertType } from '../context/alertContext';
interface Values {
  user: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const {login} = useAuth();
  const { dispatchAlert } = useAlert()
  const doLoginCallback = useCallback(async (user: string, pass: string) => {
    try{
      const response = await doLogin(user, pass)
      if (response.token) {
        login(response.token)
        navigate('/admin')
        dispatchAlert("Logado com sucesso", AlertType.SUCESS)
      }
    }
    catch{
      dispatchAlert("Usuario ou senha invalidos", AlertType.ERROR)
    }

  }, [])
  return (
    <>
      <SubTitle>Login</SubTitle>
      <FormWrapper>
        <Formik initialValues={{user: '',password: '',}}
          onSubmit={(values: Values,{ setSubmitting }: FormikHelpers<Values>) => {
            doLoginCallback(values.user, values.password)
            setSubmitting(false);
          }}
        >

          <Form>
            <label htmlFor="user">Usuario</label>
            <Field required id="user" name="user" placeholder="Usuario" />

            <label htmlFor="password">Senha</label>
            <Field required id="password" type="password" name="password" placeholder="Senha" />

            <button type="submit">Entrar</button>
          </Form>
        </Formik>
      </FormWrapper>
    </>
  );
}

export default Login;
