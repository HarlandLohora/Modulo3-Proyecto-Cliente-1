import './index.css'

function Comments(props) {
  return (
    <div className="comment-card"> <h3><strong><em>{props.name}</em></strong>: </h3><p className='p-comments'> {props.comment}</p></div>
  );
}

export default Comments;
