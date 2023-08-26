const students = [
  {
    id: '1',
    firstName: 'Андрей',
    lastName: 'Родин',
    age: 35,
    info: 'О себе',
    infoBefore: 'Чем занимался раньше',
    img: 'https://i.postimg.cc/x1NvgTd5/itsme.jpg',
    social: [{ type: "tg", to: "" }, { type: "vk", to: "https://vk.com" }],
    projectRole: 'что-то делал',
    role: 'студент',
    skills: [{ label: 'HTML', value: 50 }, { label: 'TypeScript', value: 80 }, { label: 'Css', value: 30 }],
    hobby: [],
    portfolio: ['https://i.postimg.cc/8C9FPdpR/2023-08-26-14-24-47.png', 'https://i.postimg.cc/wB88q7Kt/2023-08-26-14-26-13.png']

  },
  {
    id: "2",
    firstName: "Сергей",
    lastName: "Загорский",
    age: 25,
    info: "О себе",
    infoBefore: "Чем занимался раньше",
    img: "https://i.postimg.cc/jSN66fh5/500-500.jpg",
    social: [{ type: "tg", to: "@ZagSerSan" }, { type: "vk", to: "https://vk.com" }],
    projectRole: "что-то делал",
    role: "студент",
    skills: [{ label: "HTML", value: 50 }, { label: "TypeScript", value: 5 }, { label: "Css", value: 70 }],
    hobby: [],
    portfolio: ["https://i.postimg.cc/Kjw8cJ4D/weather-widget.png", "https://i.postimg.cc/KckKwM1D/tic-tac-toe.png"]
  },
  {
    id: '3',
    firstName: 'Сергей',
    lastName: 'Максимов',
    age: 39,
    info: 'Frontend разработчик',
    infoBefore: 'учился в Result School',
    img: 'https://i.postimg.cc/j5H8gPzQ/Smart-Select-Image-2020-01-14-20-48-50-1.png',
    social: [{ type: "tg", to: "" }, { type: "vk", to: "https://vk.com" }],
    projectRole: 'MainPage, Button',
    role: 'Team Lead',
    skills: [
      { label: 'HTML', value: 50 },
      { label: 'JavaScript', value: 80 },
      { label: 'React', value: 50 },
      { label: 'Redux', value: 50 },
      { label: 'CSS', value: 30 },
    ],
    hobby: [],
    portfolio: [
      'https://i.postimg.cc/vTyHLZD4/fast-company.png',
      'https://i.postimg.cc/768xwZ3K/notepad.png',
      'https://i.postimg.cc/wxk6YH7k/todos.png'
    ]
  }
];

const fetchAllStudents = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(students);
    }, 1000);
  });

export const toggleFavorite = (id) => {
   if (localStorage.getItem('favorite')) {
      let favoriteState = JSON.parse(localStorage.getItem('favorite'))

      const isContain = favoriteState.includes(id)

      isContain
         ? favoriteState = favoriteState.filter(thisId => thisId !== id)
         : favoriteState.push(id)

      favoriteState.length === 0
         ? localStorage.removeItem('favorite')
         : localStorage.setItem('favorite', JSON.stringify(favoriteState));

      return favoriteState
   } else {
      localStorage.setItem("favorite", JSON.stringify([id]))
      return JSON.parse(localStorage.getItem('favorite'))
   }
}

export default fetchAllStudents;
