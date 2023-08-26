const students = [{
   id: "1",
   firstName: "Андрей",
   lastName: "Родин",
   age: 35,
   info: "О себе",
   infoBefore: "Чем занимался раньше",
   img: "https://i.postimg.cc/x1NvgTd5/itsme.jpg",
   social: { tg: "", vk: "" },
   role: "студент",
   skills: [{ label: "HTML", value: 50 }, { label: "TypeScript", value: 80 }, { label: "Css", value: 30 }],
   hobby: []

}];

const fetchAllStudents = () =>
   new Promise((resolve) => {
      setTimeout(() => {
         resolve(students);
      }, 1000);
   });

export default fetchAllStudents;
