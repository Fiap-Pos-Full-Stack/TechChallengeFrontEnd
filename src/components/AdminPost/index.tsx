import { PostWrapper ,PostOperations,PostTitle} from "./style"
import { IPost } from "../../services/getPosts";
import { deletePost } from "../../services/deletePost";
import { SmallLink } from "../ui/Links";
import { useCallback } from "react";
import useAlert from "../../hooks/useAlert";
import { AlertType } from "../../context/alertContext";
import { useNavigate } from "react-router-dom";

type AdminPostProps = {
    post : IPost | undefined
}

const AdminPost =({ post}: AdminPostProps) =>{
    const { dispatchAlert } = useAlert()
    const navigate = useNavigate();
    const onDeletePost = useCallback((postId: number)=>{
        dispatchAlert("Você deseja mesmo deletar o post?",AlertType.YES_NO,()=>{deletePost(postId);navigate("/admin") }, ()=>{} )
    },[])
    return (
        <PostWrapper className="w100" key={"post-" + post?.id}>
                <a href={"/post/" + post?.id}><PostTitle>{post?.title}</PostTitle></a>
                <PostOperations>
                    <SmallLink onClick={()=>onDeletePost(post?.id || 0)}>Deletar</SmallLink>
                    <SmallLink href={"admin/post/edit/"+post?.id}>Editar</SmallLink>
                </PostOperations>

        </PostWrapper>
    );
}
export default AdminPost;