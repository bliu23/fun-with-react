import { useEffect, useState } from 'react';

import './App.css';
import ArticleTable from './ArticleTable';
import Button from './Button';

function App()  {
    let header={'title': 'Title', 'upvotes': 'Upvotes', 'date': 'Date'}

    const [articles, setArticles] = useState([])

    function sortTitle() {
      const sorted = [...articles].sort((a, b) => a.title.localeCompare(b.title))
      setArticles(sorted)
    }
    function sortUpvotes() {
      const sorted = [...articles].sort((a, b) => a.upvotes.localeCompare(b.upvotes))
      setArticles(sorted)
    }

    useEffect(() => {
      fetchArticles();
    }, []);

    // Pretend function to fetch articles.
    async function fetchArticles() {
      const fetched = [
        {'title': 'Some Title', 'upvotes': '1', 'date': '05/20/23'},
        {'title': 'DDIA', 'upvotes': '420', 'date': '03/20/23'},
        {'title': 'Developing Developers', 'upvotes': '69', 'date': '01/01/22'},
        {'title': 'Last Title', 'upvotes': '50', 'date': '12/12/22'}
      ]
      setArticles(fetched)
    }

    return (
      <div className="App">
          <Button onClick={sortTitle}>
            Sort Title
          </Button>
          <Button onClick={sortUpvotes}>
            Sort Upvotes
          </Button>
          <ArticleTable articles={[header].concat(articles)}/>
      </div>
    );
  }


export default App;
