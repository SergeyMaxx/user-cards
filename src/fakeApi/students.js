const students = [{
   firstName: "Андрей",
   lastName: "Родин",
   age: 35,
   info: "О себе",
   infoBefore: [],
   img: "",
   social: { tg: "", vk: "" },
   role: "",
   skills: [],
   hobby: []

}];

const fetchAllStudents = () =>
   new Promise((resolve) => {
      setTimeout(() => {
         resolve(students);
      }, 1000);
   });

export default fetchAllStudents;
