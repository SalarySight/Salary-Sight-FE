import { postData } from './utils';
import * as gql from '../queries/queries';

export const postForm = (formData) => {
      const formQuery = gql.postQuery(formData);
      const formInfo = postData(formQuery);
      console.log(formInfo)
  return formInfo
};