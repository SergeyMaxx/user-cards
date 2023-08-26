const students = [
   {
      id: "1",
      firstName: "Андрей",
      lastName: "Родин",
      age: 35,
      info: "О себе",
      infoBefore: "Чем занимался раньше",
      img: "https://i.postimg.cc/x1NvgTd5/itsme.jpg",
      social: [{ type: "tg", to: "link" }, { type: "vk", to: "link" }],
      projectRole: "что-то делал",
      role: "студент",
      skills: [{ label: "HTML", value: 50 }, { label: "TypeScript", value: 80 }, { label: "Css", value: 30 }],
      hobby: [],
      portfolio: ["https://i.postimg.cc/8C9FPdpR/2023-08-26-14-24-47.png", "https://i.postimg.cc/wB88q7Kt/2023-08-26-14-26-13.png"]
   },
   {
      id: "2",
      firstName: "Сергей",
      lastName: "Загорский",
      age: 25,
      info: "О себе",
      infoBefore: "Чем занимался раньше",
      img: "https://i.postimg.cc/jSN66fh5/500-500.jpg",
      social: [{ type: "tg", to: "link" }, { type: "vk", to: "link" }],
      projectRole: "что-то делал",
      role: "студент",
      skills: [{ label: "HTML", value: 50 }, { label: "TypeScript", value: 5 }, { label: "Css", value: 70 }],
      hobby: [],
      portfolio: ["https://i.postimg.cc/Kjw8cJ4D/weather-widget.png", "https://i.postimg.cc/KckKwM1D/tic-tac-toe.png"]
   }
];

const fetchAllStudents = () =>
   new Promise((resolve) => {
      setTimeout(() => {
         resolve(students);
      }, 1000);
   });

export default fetchAllStudents;
