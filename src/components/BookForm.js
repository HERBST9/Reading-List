import { useState } from 'react'
import {db} from '../firebase/config'
import {collection, addDoc} from 'firebase/firestore'
import { useAuthContext } from '../hooks/useAuthContext'





export default function BookForm() {
  const [newBook, setNewBook] = useState('')
  const [author, setAuthor] = useState('')
  const { user } = useAuthContext()


  const handleSubmit = async (e) => {
    e.preventDefault()
    await addDoc(collection(db,'books'), {
      title:newBook,
      author:author,
      uid: user.uid
    })
    

    setNewBook('')
    setAuthor('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Book title:</span>
        <input 
          required
          type="text"
          onChange={(e) => setNewBook(e.target.value)}
          value={newBook}
        />
      </label>
      <label>
        <span>Book Author:</span>
        <input 
          required
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
      </label>
      <button>Add</button>
    </form>
  )
}
