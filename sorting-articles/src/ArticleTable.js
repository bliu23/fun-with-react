import './ArticleTable.css';
import Article from './Article';



function ArticleTable ({articles}) {
    let header = articles[0]

    const header_row = <Article isHeader={true} title={header.title} upvotes={header.upvotes} date={header.date}></Article>
    return (
        <div className="ArticleTable">
            {header_row}
            {articles.slice(1).map(article => <Article title={article.title} upvotes={article.upvotes} date={article.date}></Article>)}
        </div>
    );
  
}

export default ArticleTable;
