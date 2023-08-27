import httpService from "./http.service";

const commentsEndpoint = "students/";

const studentsService = {
   getStudents: async () => {
      const { data } = await httpService.get(commentsEndpoint + ".json", {
      });
      return data;
   },
};
export default studentsService;
