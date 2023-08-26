export const transformAge = (age) => {
   if (age < 0) {
      return (
         " Ты еще не родился"
      );
   }
   let word;
   if (age >= 5 && age <= 20) {
      word = age + " лет"
   } else {
      const rule = ["2", "3", "4"];
      const ageArr = age.toString().split("").reverse();
      if (ageArr[0] === "1") return age + " год"
      if (rule.includes(ageArr[0])) {
         word = age + " года"
      } else {
         word = age + " лет"
      }
   }
   return (
      word
   );
};