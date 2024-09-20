import { IComment, IPost } from "../../services/getPosts";
import { CommentWrapper,CommentTitle,CommentContent } from "./style";


type CommentProps = {
    comment: IComment | undefined
}

const Comment = ({ comment }: CommentProps) => {
    return (
        <CommentWrapper className="w100">
            <CommentTitle>{comment?.name}</CommentTitle>
            <CommentContent>
                {comment?.comentary}
            </CommentContent>
        </CommentWrapper>
    );
}
export default Comment;