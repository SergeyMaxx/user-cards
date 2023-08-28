import httpService from './http.service';

const commentsEndpoint = 'comments/';

const commentsService = {
  createComment: async content => {
    const { data } = await httpService.put(commentsEndpoint + content._id + '.json', content);
    return data;
  },
  deleteComment: async (id) => {
    const { data } = await httpService.delete(commentsEndpoint + id + '.json');
    return data;
  },
  getComments: async () => {
    const { data } = await httpService.get(commentsEndpoint + '.json');
    return data;
  }
};

export default commentsService;