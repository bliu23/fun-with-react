
import './Article.css';

function Article(props) {
  return (
    <div className="Article">
      <div className="column half">{props.title}</div>
      <div className="column quarter">{props.upvotes}</div>
      <div className="column quarter">{props.date}</div>
    </div>
  );
}

export default Article;
