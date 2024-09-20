
import { Title } from '../components/Titles';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import FormWrapper from '../components/FormWrapper';
import { useCallback } from 'react';
import { doLogin } from '../services/login';
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from '../hooks/useAuth';
import { IPost } from '../services/getPosts';
import { updatePost } from '../services/updatePost';

interface Values {
  title: string;
  content: string;
  author: string;
}


function AdminPostEdit() {
  const postData = useLoaderData() as IPost;
  return (
    <>
      <Title>Editar Post</Title>
      <FormWrapper>
        <Formik initialValues={{title: postData.title,content: postData.description, author: postData.author}}
          onSubmit={(values: Values,{ setSubmitting }: FormikHelpers<Values>) => {
            updatePost(postData.id,values.title, values.author,values.content)
            setSubmitting(false);
          }}
        >
          <Form>
            <label htmlFor="title">Titulo</label>
            <Field id="title" name="title" placeholder="John" />

            <label htmlFor="author">Autor</label>
            <Field id="author" name="author" placeholder="Doe" />

            <label htmlFor="content">Conteudo</label>
            <Field as="textarea" id="content" name="content" placeholder="" />

            <button type="submit">Atualizar</button>
          </Form>
        </Formik>
      </FormWrapper>
    </>
  );
}

export default AdminPostEdit;
