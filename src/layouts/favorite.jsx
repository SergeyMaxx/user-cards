import React from 'react'
import { useStudents } from '../hooks/useStudents'
import User from '../components/user'

const Favorite = () => {
  const { students, favorite } = useStudents()

  return (<>
    <section className="flex flex-col justify-between gap-2 items-center my-20">
      <h1 className=" uppercase text-3xl text-gray-900 ">
        Избранное
      </h1>
      <div className="w-1/3 h-1 bg-black bg-gradient-to-r from-cyan-500 to-blue-500" />
      <ul className="flex flex-wrap gap-10">
        {students.length !== 0 && favorite && favorite.map(favId => (
          <User key={students[favId-1].id} userData={students[favId-1]} />
          ))
        }
      </ul>
    </section>

  </>
  )
}

export default Favorite
