import { formatDate } from "../../util/dateUtil";

const CommentSection = ({ comments }) => {
  return (
    <div className="comment">
      <h4>Hozzászólások</h4>
      <ul className="commentList">
        {comments.map((comment) => (
          <li key={comment.id} className="comment-item">
            <span className="username">{comment.user.username}</span>
            <p className="content">{comment.content}</p>
            <span className="createdDateTime">
              {formatDate(comment.createdDateTime)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
