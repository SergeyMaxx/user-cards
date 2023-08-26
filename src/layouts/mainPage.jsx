import React, { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import User from '../components/user';
import api from '../fakeApi';

function MainPage() {
  const { id } = useParams();
  const [students, setStudents] = useState(null);

  useEffect(() => {
    api.students().then(data => setStudents(data));
  }, []);

  return id ? (
    <Outlet />
  ) : (
    <section className="flex flex-col justify-between gap-2 items-center my-20">
      <h1 className=" uppercase text-3xl text-gray-900 ">
        Наша команда
      </h1>
      <div className=" w-1/3 h-1 bg-black bg-gradient-to-r from-cyan-500 to-blue-500" />
      <div className="">
        {students &&
          <ul className="flex flex-wrap gap-10">
            {students.map(u => <User key={u.id} userData={u} />)}
          </ul>
        }
      </div>
    </section>
  );
}

export default MainPage;
