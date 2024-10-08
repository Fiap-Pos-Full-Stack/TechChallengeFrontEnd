import { PostWrapper ,PostOperations,PostTitle} from "./style"
import { IPost } from "../../services/getPosts";
import { deletePost } from "../../services/deletePost";
import { SmallLink, SmallLinkEdit, SmallLinkDel } from "../ui/Links";
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
        dispatchAlert("Você deseja mesmo deletar o post?",AlertType.YES_NO,async ()=>{await deletePost(postId);navigate("/admin") }, ()=>{} )
    },[])
    return (
        <PostWrapper className="w100" key={"post-" + post?.id}>
                <a href={"/post/" + post?.id}><PostTitle>{post?.title}</PostTitle></a>
                <PostOperations>
                    <SmallLinkDel onClick={()=>onDeletePost(post?.id || 0)}>Deletar</SmallLinkDel>
                    <SmallLinkEdit href={"admin/post/edit/"+post?.id}>Editar</SmallLinkEdit>
                </PostOperations>

        </PostWrapper>
    );
}
export default AdminPost;