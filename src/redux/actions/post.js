import axios from "axios";
import { toast } from "react-toastify";
import { setPostDetails, setPosts } from "../reducers/post";

export const apiKey = process.env.REACT_APP_APIKEY;
export const baseUrl = process.env.REACT_APP_BASEURL;

export const getPosts = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${baseUrl}/movie/popular?page=1&api_key=${apiKey}`
    );
    dispatch(setPosts(response.data.results));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};

export const getPostDetails = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${baseUrl}/movie/${id}?api_key=${apiKey}`
    );
    dispatch(setPostDetails(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};
