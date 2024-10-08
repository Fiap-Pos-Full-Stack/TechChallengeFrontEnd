
import { SubSubSubTitle, SubSubTitle, SubTitle } from '../components/ui/Typography';
import { CardsWrapper } from '../components/CardsWrapper';
import { Form, useLoaderData } from 'react-router-dom';
import { IPost } from '../services/getPosts';
import { searchPosts } from '../services/searchPosts';
import Post from '../components/Post';
import useDebouncedInput from '../hooks/useDebouncedInput';
import { Field, Formik, FormikHelpers } from 'formik';
import { useCallback, useEffect, useState } from 'react';
import InlineFormWrapper from '../components/InlineFormWrapper';
interface Values {
  textField: string;
}

function Posts() {
  const [textInput, setTextInput, cancelAll] = useDebouncedInput("", 1000)
  const postsData = useLoaderData() as IPost[];
  const [posts, setPosts] = useState<IPost[]>()
  useEffect(() => {
    setPosts(postsData)
  }, [postsData])

  const searchPost = useCallback(async (searchTerm: string) => {
    const searchedPosts = await searchPosts(searchTerm) as unknown as IPost[]
    setPosts(searchedPosts)
  }, [textInput])
  useEffect(() => {
    if (true) {
      searchPost(textInput)
    }
  }, [textInput])
  return (
    <>
      <div className='w100 space-between mtb1 mobile-col'>
        <SubTitle className='color-black'>Posts</SubTitle>
        <InlineFormWrapper>
          <Formik onSubmit={() => { }} initialValues={{ textFied: "" }}>
            <Form className='flex-center-space-between flex-row'>
              <SubSubTitle>Pesquisar</SubSubTitle>
              <Field
                type="text"
                id="textField" name="textField"
                placeholder="Pesquisar post"
                onChange={(values: any) => {
                  setTextInput(values.target.value)
                }}
              />
            </Form>
          </Formik>
        </InlineFormWrapper>
      </div>
      {textInput ? <div><SubSubSubTitle>Resultados: {textInput}</SubSubSubTitle></div> : ""}
      <CardsWrapper>
        {
          posts && posts.length > 0 ? posts.map((post, id) => {
            return (
              <Post post={post} />
            )
          }) : "Não há nenhum post"
        }
      </CardsWrapper>
    </>
  );
}

export default Posts;
