
import { Title } from '../components/Titles';
import { useLoaderData } from 'react-router-dom';
import { IPost, IComment } from '../services/getPosts';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { postComment } from '../services/postComment';
import { useEffect, useState } from 'react';
import SinglePost from '../components/SinglePost';
import Comment from '../components/Comment';
import FormWrapper from '../components/FormWrapper';
import useAuth from '../hooks/useAuth';

interface Values {
  name: string;
  comentary: string;
}
function Post() {
  const {token, setToken} = useAuth();
  const postData = useLoaderData() as IPost;
  const [post, setPost] = useState<IPost>()
  const [comments, setComments] = useState<IComment[]>()
  useEffect(() => {
    setPost(postData)
    setComments(postData.comments)
  }, [postData])
  return (
    <>
      <SinglePost post={post} />
      <Title>Adicione um novo comentario</Title>
      <FormWrapper>
        <Formik
          initialValues={{name: '',comentary: '',}}
          onSubmit={async (values: Values,{ setSubmitting }: FormikHelpers<Values>) => {
            const newComment = await (await postComment(post?.id || 0, values.name, values.comentary)).json()
            if (comments) {
              setComments([ { id: newComment.id, name: newComment.name, comentary: newComment.comentary },...comments]);
            }
            setSubmitting(false);
          }}
        >

          <Form>
            <label htmlFor="name">Nome</label>
            <Field id="name" name="name" placeholder="" />

            <label htmlFor="comentary">Comentario</label>
            <Field as="textarea" id="comentary" name="comentary" placeholder="" />

            <div className="flex-end"><button type="submit">Enviar</button></div>
          </Form>
        </Formik>
      </FormWrapper>
      <Title>Comentarios ({comments?.length || 0})</Title>
      {
        comments && comments.length >0 ? comments?.map((comment, index) => <>
          <Comment comment={comment}/> 
        </>) : "Não há nenhum comentario"
      }
    </>
  );
}

export default Post;
