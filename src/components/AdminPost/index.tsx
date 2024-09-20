import { PostWrapper ,PostOperations,PostTitle} from "./style"
import useMenu from "../../hooks/useMenu"
import OpenCloseIcon from "../../assets/openCloseIcon"
import Posts from "../../routes/posts";
import { IPost } from "../../services/getPosts";
import SmallLink from "../SmallLink";
import { deletePost } from "../../services/deletePost";

type AdminPostProps = {
    post : IPost | undefined
}

const AdminPost =({ post}: AdminPostProps) =>{
    return (
        <PostWrapper className="w100" key={"post-" + post?.id}>
                <a href={"/post/" + post?.id}><PostTitle>{post?.title}</PostTitle></a>
                <PostOperations>
                    <SmallLink onClick={()=>deletePost(post?.id || 0)}>Deletar</SmallLink>
                    <SmallLink href={"admin/post/edit/"+post?.id}>Editar</SmallLink>
                </PostOperations>

        </PostWrapper>
    );
}
export default AdminPost;