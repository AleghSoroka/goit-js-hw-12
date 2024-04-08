import axios from "axios";
import { hitsPerPage } from "../main";

export async function getImages(userRequest, currentPage) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';

    const params = {
        key: '43216617-d9e2d51a1f64026c97bc97c8e',
        q: `${userRequest}`,
        page: currentPage,
        per_page: hitsPerPage,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    };
    
    const url = `${BASE_URL}${END_POINT}`;
    
    const res = await axios.get(url, { params });
    console.log("totalHits: ", res.data.totalHits);
      return res.data
};
 