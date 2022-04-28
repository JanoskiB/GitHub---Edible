


fetch('https://baljan.dk/wp-json/wp/v2/posts')
.then(response =>response.json())
.then(data => {
console.log(data);
myH1 = document.querySelector('#message');
myH1.innerHTML = `Post id: ${data[0].id}, Title: ${data[0].title.rendered}`;
 title.rendered;
});

let token;
fetch('https://baljan.dk/wp-json/jwt-auth/v1/token', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "username": "api.user",
        "password": "APIpass12345"
    })
})
.then(response =>response.json())
.then(data => {
token = data.data.token;
})
.then(() => {
    fetch('https://baljan.dk/wp-json/wp/v2/posts?status=private',{
        method:'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        myH2 = document.querySelector('#privateMessage');
        myH2.innerHTML = `Post id: ${data[0].id}, Title: ${data[0].title.rendered}`;
    });
})

