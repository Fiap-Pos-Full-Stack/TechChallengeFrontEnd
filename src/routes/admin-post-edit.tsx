
import { SubTitle } from '../components/ui/Typography';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import FormWrapper from '../components/FormWrapper';
import { useCallback } from 'react';
import { doLogin } from '../services/login';
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from '../hooks/useAuth';
import { IPost } from '../services/getPosts';
import { updatePost } from '../services/updatePost';
import useAlert from '../hooks/useAlert';
import { AlertType } from '../context/alertContext';

interface Values {
  title: string;
  content: string;
  author: string;
}


function AdminPostEdit() {
  const navigate = useNavigate();
  const { dispatchAlert } = useAlert()
  const postData = useLoaderData() as IPost;
  return (
    <>
      <SubTitle>Editar Post</SubTitle>
      <FormWrapper>
        <Formik initialValues={{title: postData.title,content: postData.description, author: postData.author}}
          onSubmit={async (values: Values,{ setSubmitting }: FormikHelpers<Values>) => {
            try{
              await updatePost(postData.id,values.title, values.author,values.content)
              setSubmitting(false);
              dispatchAlert("Atualizado com sucesso", AlertType.SUCESS)
              navigate('/admin')
            }
            catch{
              dispatchAlert("Error ao atualizar post", AlertType.ERROR)
            }
          }}
        >
          <Form>
            <label htmlFor="title">Titulo</label>
            <Field required id="title" name="title" placeholder="Titulo" />

            <label htmlFor="author">Autor</label>
            <Field required id="author" name="author" placeholder="Autor" />

            <label htmlFor="content">Conteudo</label>
            <Field required as="textarea" id="content" name="content" placeholder="" />

            <button type="submit">Atualizar</button>
          </Form>
        </Formik>
      </FormWrapper>
    </>
  );
}

export default AdminPostEdit;
