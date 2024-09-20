
import { Title } from '../components/Titles';
import { CardsWrapper } from '../components/CardsWrapper';
import { IPost } from '../services/getPosts';
import { useLoaderData } from 'react-router-dom';
import AdminPost from '../components/AdminPost';
import BigLink from '../components/BigLink';


function AdminPosts() {
  const posts = useLoaderData() as IPost[];
  console.log("posts",posts)
  return (
    <>
          
            <div className="w100 flex-center-space-between">
            <Title>Posts admin</Title>
            <div><BigLink href='/admin/post/new'>Criar novo</BigLink></div>
                </div>
          
                {posts && posts.length >0  ? <>
            {
              posts.map((post, id) => {
                return (
                  <AdminPost post={post}/>
                )
              })
            }
          </> : "Nenhum post encontrado"}
    </>
  );
}

export default AdminPosts;
