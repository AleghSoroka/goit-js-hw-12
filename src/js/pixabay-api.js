export function getImages(userRequest) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';

    const params = new URLSearchParams({
        key: '43216617-d9e2d51a1f64026c97bc97c8e',
        q: `${userRequest}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    });
    
    const url = `${BASE_URL}${END_POINT}?${params}`;

    return fetch(url).then(res => res.json()).catch(error => console.error("Error while fetching: ", error));
    throw error;
};
 

