import { PostThumb, PostWrapper ,PostInfo,PostTitle, PostDescription,PostReadMore} from "./style"
import { IPost } from "../../services/getPosts";
import { SmallLink } from "../ui/Links";
import { parserDate } from "../../utils/parser";

type PostProps = {
    post : IPost | undefined
}

const Post =({ post}: PostProps) =>{
    return (
        <PostWrapper href={"/post/" + post?.id}>
             <article className="w100" key={"post-" + post?.id}>
                <PostThumb>
                    <img src={post?.thumb || "https://blog.megajogos.com.br/wp-content/uploads/2018/07/no-image.jpg"} />
                    <time>{parserDate(post?.created)}</time>
                </PostThumb>
                <PostInfo className="w100 space-between">
                    <div>Postado por: {post?.teacher?.username}</div>
                    <div>Autor: {post?.author}</div>
                </PostInfo>
                <PostTitle>{post?.title}</PostTitle>
                <PostDescription>{post?.description.substring(0,80)} [...]</PostDescription>
                <PostReadMore><div className="flex-end"><SmallLink>Leia mais</SmallLink></div></PostReadMore>
              </article>
        </PostWrapper>
    );
}
export default Post;