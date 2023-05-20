import './ArticleTable.css';
import Article from './Article';



function ArticleTable ({articles}) {
    return (
        <div className="ArticleTable">
            {articles.map(article => <Article title={article.title} upvotes={article.upvotes} date={article.date}></Article>)}
        </div>
    );
  
}

export default ArticleTable;
