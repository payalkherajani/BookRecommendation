import React,{useState} from 'react';
import './App.css';

function App() {
  const bk = {
    NonFiction: [{name: "How to win friends and Influence People",rating:"5/5"},{name: "Sapiens: A Brief History of HumanKind",rating:"4/5"}],
    Fiction: [{name: "The Alchemist",rating:"5/5"},{name: "The Great Gatsby",rating:"5/5"}],
    Novel: [{name: "Invisible Man",rating:"3/5"},{name: "The Old man and sea",rating:"5/5"}]
  }
 const [recommendBook,setRecommendBook] = useState("NonFiction");

  const recommendBooks = (book) => {
  setRecommendBook(book);
  }

  return (
    <div className="App">
      <h1 className="heading">📚 Book Recomendation App</h1>
      <p className="para">Love Reading? Get started with some amazing Recomendation.Select any of the given Genre!
      </p>
      <div className="button-div">
        {
          Object.keys(bk).map((type) => (
            <button onClick={() => recommendBooks(type)} key={type} className="button">
              {type}
            </button>
          ))
        }
      </div>
      <div className="ul-div">
        <ul className="unordered-list">{
            bk[recommendBook].map((listOfBooks) => {
              return <li key={listOfBooks.name} className="list-item"><div><strong>Name:</strong> {listOfBooks.name}</div> <div><strong>Rating: </strong>{listOfBooks.rating}</div> </li>
            })
          }
        
        </ul>
      </div>

    </div>
  );
}

export default App;
