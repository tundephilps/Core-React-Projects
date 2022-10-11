import React from 'react'
import { BsTrashFill } from 'react-icons/bs'

export const View = ({books,deleteBook}) => {
    
    return books.map(book=>(
        
        <tr key={book.isbn}>
            <td>{book.isbn}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td className='delete-btn' onClick={()=>deleteBook(book.isbn)}>
                <BsTrashFill />
            </td>           
        </tr>            
    
))
}