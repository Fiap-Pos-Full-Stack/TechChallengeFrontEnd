
import { SubTitle } from '../components/ui/Typography';
import { IPost } from '../services/getPosts';
import { useLoaderData } from 'react-router-dom';
import AdminPost from '../components/AdminPost';
import BigLink from '../components/ui/Links';



function AdminPosts() {
  const posts = useLoaderData() as IPost[];
  return (
    <>
          
            <div className="w100 flex-center-space-between">
              <SubTitle>Posts admin</SubTitle>
              <div><BigLink href='/admin/post/new'>Criar novo</BigLink></div>
            </div>
          
                {posts && posts.length >0  ? <>
            {
              posts.map((post, id) => {
                return (
                  <AdminPost key={id} post={post}/>
                )
              })
            }
          </> : "Nenhum post encontrado"}
    </>
  );
}

export default AdminPosts;
