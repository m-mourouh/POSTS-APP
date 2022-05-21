import {Link} from "react-router-dom";
import { BiTrash } from "react-icons/bi";
import { BiPencil } from "react-icons/bi";
const Post = ({title,desc,posted,postID ,deletePost}) => {
  return (
    <div className="post">
      <h4 className="post-title">{title}</h4>
      <p className="post-body">{desc}</p>
      <p className="post-footer">
      <small className="poste-date">{posted}</small>
      <p className="post-actions action">
        <span className="delete action">
          <BiTrash onClick={() => deletePost(postID) } />
        </span>
        <span className="edit">
          <Link to={`/edit/${postID}`}><BiPencil /></Link>
        </span>
      </p>
      </p>
    </div>
  );
};

export default Post;
