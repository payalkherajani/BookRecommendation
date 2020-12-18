import React,{useState} from 'react';
import './App.css';

function App() {
  const bk = {
    NonFiction: [{name: "How to win friends and Influence People",rating:"5/5"},{name: "Sapiens",rating:"4/5"}],
    Fiction: [{name: "The Alchemist",rating:"5/5"},{name: "The Great Gatsby",rating:"5/5"}],
    Novel: [{name: "Invisible Man",rating:"3/5"},{name: "The Old man and sea",rating:"5/5"}]
  }
 const [recommendBook,setRecommendBook] = useState("NonFiction");

  const recommendBooks = (book) => {
  setRecommendBook(book);
  }

  return (
    <div className="App">
      <h1>📚 Book Recomendation App</h1>
      <p>Love Reading? Get started with some amazing Recomendation.
        Select any of the given Genre!
      </p>
      <div>
        {
          Object.keys(bk).map((type) => (
            <button onClick={() => recommendBooks(type)} key={type}>
              {type}
            </button>
          ))
        }
      </div>
      <hr></hr>
      <div>
        <ul>{
            bk[recommendBook].map((listOfBooks) => {
              return <li key={listOfBooks.name}>{listOfBooks.name} {listOfBooks.rating}</li>
            })
          }
        
        </ul>
      </div>

    </div>
  );
}

export default App;
