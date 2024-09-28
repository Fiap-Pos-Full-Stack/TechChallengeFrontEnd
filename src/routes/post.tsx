
import { Title,SubTitle } from '../components/ui/Typography';
import { useLoaderData } from 'react-router-dom';
import { IPost, IComment } from '../services/getPosts';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { postComment } from '../services/postComment';
import { useEffect, useState } from 'react';
import SinglePost from '../components/SinglePost';
import Comment from '../components/Comment';
import FormWrapper from '../components/FormWrapper';
import useAuth from '../hooks/useAuth';
import useAlert from '../hooks/useAlert';
import { AlertType } from '../context/alertContext';

interface Values {
  name: string;
  comentary: string;
}
function Post() {
  const {authorId} = useAuth();
  const { dispatchAlert } = useAlert()
  const postData = useLoaderData() as IPost;
  const [post, setPost] = useState<IPost>()
  const [comments, setComments] = useState<IComment[]>()
  useEffect(() => {
    setPost(postData)
    setComments(postData.comments)
  }, [postData])
  return (
    <>
      <SinglePost post={post} isTeacherPublishier={authorId === post?.teacher.id} />
      <SubTitle>Adicione um novo comentário</SubTitle>
      <FormWrapper>
        <Formik
          initialValues={{name: '',comentary: '',}}
          onSubmit={async (values: Values,{ setSubmitting }: FormikHelpers<Values>) => {
            try{
              const newComment = await (await postComment(post?.id || 0, values.name, values.comentary)).json()
              if (comments) {
                setComments([ { id: newComment.id, name: newComment.name, comentary: newComment.comentary, created: new Date().toISOString()},...comments]);
              }
              setSubmitting(false);
              dispatchAlert("Comentário postado", AlertType.SUCESS)

            }catch {
              dispatchAlert("Error enviar comentário", AlertType.ERROR)
            }
          }}
        >

          <Form>
            <label htmlFor="name">Nome</label>
            <Field id="name" name="name" placeholder="" />

            <label htmlFor="comentary">Comentário</label>
            <Field as="textarea" id="comentary" name="comentary" placeholder="" />

            <div className="flex-end"><button type="submit">Enviar</button></div>
          </Form>
        </Formik>
      </FormWrapper>
      <SubTitle>Comentários ({comments?.length || 0})</SubTitle>
      {
        comments && comments.length >0 ? comments?.map((comment, index) => <>
          <Comment comment={comment}/> 
        </>) : "Não há nenhum comentário"
      }
    </>
  );
}

export default Post;
