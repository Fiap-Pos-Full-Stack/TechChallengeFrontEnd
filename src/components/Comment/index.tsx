import { IComment, IPost } from "../../services/getPosts";
import { parserDateWithHours } from "../../utils/parser";
import { CommentWrapper,CommentTitle,CommentContent,CommentHeader } from "./style";


type CommentProps = {
    comment: IComment | undefined
}

const Comment = ({ comment }: CommentProps) => {
    return (
        <CommentWrapper className="w100">
            <CommentHeader>
                <CommentTitle>{comment?.name}</CommentTitle>
                <time>{parserDateWithHours(comment?.created)}</time>
            </CommentHeader>
            
            <CommentContent>
                {comment?.comentary}
            </CommentContent>
        </CommentWrapper>
    );
}
export default Comment;