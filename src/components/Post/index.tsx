import { PostThumb, PostWrapper ,PostInfo,PostTitle} from "./style"
import useMenu from "../../hooks/useMenu"
import OpenCloseIcon from "../../assets/openCloseIcon"
import Posts from "../../routes/posts";
import { IPost } from "../../services/getPosts";
import SmallLink from "../SmallLink";

type PostProps = {
    post : IPost | undefined
}
const parserDate = (date: string | undefined) :string =>{
    if(!date){
        return ""
    }
    const dateObj = new Date(date)
    return `${dateObj.getDay()}/${dateObj.getMonth()+1}/${dateObj.getFullYear()}`
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
                <div className="flex-end"><SmallLink>Leia mais</SmallLink></div>
              </article>
        </PostWrapper>
    );
}
export default Post;