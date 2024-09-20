
import { Title } from '../components/Titles';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import FormWrapper from '../components/FormWrapper';
import { useCallback } from 'react';
import { doLogin } from '../services/login';
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from '../hooks/useAuth';
import { IPost } from '../services/getPosts';
import { updatePost } from '../services/updatePost';
import { createPost } from '../services/createPost';

interface Values {
  title: string;
  content: string;
  author: string;
}


function AdminPostNew() {
  return (
    <>
      <Title>Criar Post</Title>
      <FormWrapper>
        <Formik initialValues={{title: "",content: "", author: ""}}
          onSubmit={(values: Values,{ setSubmitting }: FormikHelpers<Values>) => {
            createPost(values.title, values.author,values.content)
            setSubmitting(false);
          }}
        >
          <Form>
            <label htmlFor="title">Titulo</label>
            <Field id="title" name="title" placeholder="Titulo" />

            <label htmlFor="author">Autor</label>
            <Field id="author" name="author" placeholder="Autor" />

            <label htmlFor="content">Conteudo</label>
            <Field as="textarea" id="content" name="content" placeholder="Conteudo" />

            <button type="submit">Criar</button>
          </Form>
        </Formik>
      </FormWrapper>
    </>
  );
}

export default AdminPostNew;
