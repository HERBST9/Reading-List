import {db} from '../firebase/config'
import {doc, deleteDoc} from 'firebase/firestore'



export default function BookList({ books }) {

  const handleClick = async (id) => {
    await deleteDoc(doc(db, 'books',id))
  }

  return (
    <div className="book-list">
      <ul>
        {books.map(book => (
          <li key={book.id} onClick={() => handleClick(book.id)}>{book.title} - {book.author}</li>
        ))}
      </ul>
    </div>
  )
}