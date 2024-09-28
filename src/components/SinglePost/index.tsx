import { PostThumb, PostWrapper, PostInfo, PostTitle, PostContent, PostOperations } from "./style"
import { IPost } from "../../services/getPosts";
import { parserDate } from "../../utils/parser";
import { SmallLink, SmallLinkEdit, SmallLinkDel } from "../ui/Links";
import useAlert from "../../hooks/useAlert";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { AlertType } from "../../context/alertContext";
import { deletePost } from "../../services/deletePost";

type PostProps = {
    post: IPost | undefined
    isTeacherPublishier?: boolean
}

const SinglePost = ({ post, isTeacherPublishier = false }: PostProps) => {
    const { dispatchAlert } = useAlert()
    const navigate = useNavigate();
    const onDeletePost = useCallback((postId: number) => {
        dispatchAlert("Você deseja mesmo deletar o post?", AlertType.YES_NO, async () => { await deletePost(postId); navigate("/admin") }, () => { })
    }, [])
    return (
        <PostWrapper>
            <article className="w100" key={"post-" + post?.id}>
                {
                    isTeacherPublishier && <PostOperations>
                        <SmallLinkDel onClick={() => onDeletePost(post?.id || 0)}>Deletar</SmallLinkDel>
                        <SmallLinkEdit href={"../../admin/post/edit/" + post?.id}>Editar</SmallLinkEdit>
                    </PostOperations>
                }
                <PostTitle>{post?.title}</PostTitle>
                <PostThumb>
                    <time>{parserDate(post?.created)}</time>
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