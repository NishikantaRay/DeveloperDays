const fetchPromise = fetch("https://api.openweathermap.org/data/2.5/weather?q=Dhenkanal&appid=3f26b441896e4aca52b12e3cc4ce4ad6");
fetchPromise.then(response => {
    return response.json();
}).then(people => {
    console.log(people);
});