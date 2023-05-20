
import './Article.css';

function Article(props) {
  const headerClassName = props.isHeader ? "TableHeader" : ""
  return (
    <div className={"Article " + headerClassName}>
      <div className="column half">{props.title}</div>
      <div className="column quarter">{props.upvotes}</div>
      <div className="column quarter">{props.date}</div>
    </div>
  );
}

export default Article;
