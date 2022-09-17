const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '05798667d8c2df6f0078bf3c7311b448',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;