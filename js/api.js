const API_REST = 'https://jsonplaceholder.typicode.com';
fetch(`${API_REST}/users`).then(res => 
    res.json()
).then(book => {
    console.log(book);
})
