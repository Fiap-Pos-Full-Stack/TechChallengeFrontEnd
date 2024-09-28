
import { SubTitle } from '../components/ui/Typography';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import FormWrapper from '../components/FormWrapper';
import { useCallback } from 'react';
import { doLogin } from '../services/login';
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from '../hooks/useAuth';
import { IPost } from '../services/getPosts';
import { updatePost } from '../services/updatePost';
import { createPost } from '../services/createPost';
import useAlert from '../hooks/useAlert';
import { AlertType } from '../context/alertContext';
import { SmallLinkEdit } from '../components/ui/Links';
interface Values {
  title: string;
  content: string;
  author: string;
}


function AdminPostNew() {
  const navigate = useNavigate();
  const { dispatchAlert } = useAlert()
  return (
    <>
      <div className='w100 space-between mtb1 mobile-col'>
        <SubTitle>Criar Post</SubTitle>
        <div className="flex-center-space-between"><SmallLinkEdit onClick={() => navigate(-1)}>Voltar</SmallLinkEdit></div>
      </div>
      <FormWrapper>
        <Formik initialValues={{ title: "", content: "", author: "" }}
          onSubmit={async (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
            try {
              const response = await createPost(values.title, values.author, values.content)
              setSubmitting(false);
              dispatchAlert("Criado com sucesso", AlertType.SUCESS)
              navigate('/admin')
            }
            catch {
              dispatchAlert("Error ao criar post", AlertType.ERROR)
            }

          }}
        >
          <Form>
            <label htmlFor="title">Titulo</label>
            <Field required id="title" name="title" placeholder="Titulo" />

            <label htmlFor="author">Autor</label>
            <Field required id="author" name="author" placeholder="Autor" />

            <label htmlFor="content">Conteudo</label>
            <Field required as="textarea" id="content" name="content" placeholder="Conteudo" />

            <button className='buttonCriar' type="submit">Criar</button>
          </Form>
        </Formik>
      </FormWrapper>
    </>
  );
}

export default AdminPostNew;
