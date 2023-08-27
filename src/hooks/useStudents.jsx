import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import fetchAllStudents, { toggleFavorite } from "../fakeApi/students";
import Loader from "../components/loader";

const StudentsContext = React.createContext();

export const useStudents = () => {
  return useContext(StudentsContext);
};

const StudentsProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [favorite, setFavorite] = useState(JSON.parse(localStorage.getItem("favorite")));
  const [darkmode, setDarkmode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllStudents();
    // darkmode
    setTheme()
  }, []);

  useEffect(() => {
    if (error !== null) {
      toast.error(error);
      setError(null);
    }
  }, [error]);

  const getFavorite = (id) => {
    setFavorite(toggleFavorite(id));
  };

  async function getAllStudents() {
    try {
      const content = await fetchAllStudents();
      setStudents(content);
      setIsLoading(false);
      return content;
    } catch (error) {
      errorCatcher(error);
    }
  }

  function getStudentById(id) {
    return students.find((u) => u.id === id);
  }

  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
  }

  const setTheme = () => {
    let darkmodeType = localStorage.getItem('darkmode')

    if (darkmodeType && darkmodeType === 'dark') {
      document.body.classList.add('dark')
      setDarkmode(true)
    } else {
      localStorage.setItem('darkmode', 'light')
      document.body.classList.remove('dark')
    }
  }

  return (
    <StudentsContext.Provider
      value={{ students, getStudentById, favorite, getFavorite, isLoading, darkmode, setDarkmode }}
    >
      <div className="relative">
        {children}
        {isLoading && <Loader />}
      </div>
    </StudentsContext.Provider>
  );
};

StudentsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default StudentsProvider;
