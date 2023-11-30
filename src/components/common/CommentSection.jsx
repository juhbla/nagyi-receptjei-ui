import { formatDate } from "../../util/dateUtil";

export const CommentSection = ({ comments }) => {
  return (
    <div className="comment">
      <h4>Hozzászólások</h4>
      <ul className="commentList">
        {comments.map((comment) => (
          <li key={comment.id} className="comment-item">
            <span className="username">{comment.user.username}</span>
            <br />
            <span className="content">{comment.content}</span>
            <span className="createdDateTime">
              {formatDate(comment.createdDateTime)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
