import React from 'react'
import { useStudents } from '../hooks/useStudents'

const Favorite = () => {
  const { students, favorite, getFavorite } = useStudents()

  console.log('students', students)
  console.log('favorite', favorite)

  const toggleBookmark = (userId) => {
    getFavorite(userId)
  }

  return (<>
    <div>all students</div>
    <div className='flex'>
      {students && students.map(item => (
        <div key={item.id} className='bg-[#cccccc] m-[5px]'>
          <div>{item.firstName}</div>
          <button onClick={() => toggleBookmark(item.id)} className='ml-[10px] bg-[green] p-[5px] text-[#fff]'>add</button>
        </div>
      ))}
    </div>

    <hr className='my-[15px]'/>

    <div>favorite students</div>
    <div className='flex'>
      {students.length !== 0 && favorite.map(favId => (
        <div key={students[favId-1].id} className='bg-[#cccccc] m-[5px]'>
          <div>{students[favId-1].firstName}</div>
          <button onClick={() => toggleBookmark(students[favId-1].id)} className='ml-[10px] bg-[green] p-[5px] text-[#fff]'>add</button>
        </div>
      ))}
    </div>
  </>
  )
}

export default Favorite
