
    // KEY: `21647427-119fc9e63c06e8167cfe2cce4`,
    // HTTP: `https://pixabay.com/api/?`,
function data(query, page) {
    return fetch(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=21647427-119fc9e63c06e8167cfe2cce4&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
                
            return Promise.reject(new Error(`Ничего не найдено по вашему запросу `));
        });
}

const api = {data};

export default api;