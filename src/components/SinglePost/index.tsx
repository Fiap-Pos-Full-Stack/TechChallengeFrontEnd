import { PostThumb, PostWrapper ,PostInfo,PostTitle,PostContent} from "./style"
import { IPost } from "../../services/getPosts";

type PostProps = {
    post : IPost | undefined
    isTeacherPublishier?: boolean
}

const SinglePost =({ post,isTeacherPublishier=false}: PostProps) =>{
    return (
        <PostWrapper>
             <article className="w100" key={"post-" + post?.id}>
                <PostTitle>{post?.title}</PostTitle>
                <PostThumb>
                    <img src={post?.thumb || "https://blog.megajogos.com.br/wp-content/uploads/2018/07/no-image.jpg"} />
                </PostThumb>
                <PostInfo className="w100 space-between">
                    <div>Postado por: {post?.teacher?.username}</div>
                    <div>Autor: {post?.author}</div>
                </PostInfo>
                <PostContent>{post?.description}</PostContent>
              </article>
        </PostWrapper>
    );
}
export default SinglePost;