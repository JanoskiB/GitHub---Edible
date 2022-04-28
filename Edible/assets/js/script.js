


fetch('https://baljan.dk/wp-json/wp/v2/posts')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        myH1 = document.querySelector('#message');
        myH1.innerHTML = `Post id: ${data[0].id}, Title: ${data[0].title.rendered}`;
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
    .then(response => response.json())
    .then(tokenData => {
        console.log(tokenData);
        token = tokenData.data.token;
    })
    .then(() => {
        fetch('https://baljan.dk/wp-json/wp/v2/posts?status=private', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data2 => {
                console.log(data2);
                myRecipeName = document.querySelector('#recipeName');
                myRecipeName.innerHTML = `${data2[8].acf.name}`;

                myPreptime = document.querySelector(`#Preptime`);
                myPreptime.innerHTML = `${data2[8].acf.total_preparation_time}`;

                myServingsNumber = document.querySelector(`#servingsNumber`);
                myServingsNumber.innerHTML = `${data2[8].acf.servings + ' ' + '' + ''}`;

                myIngredients = document.querySelector(`#ingredients`);
                myIngredients.innerHTML = `${data2[8].acf.ingredients}`;

                mySteps = document.querySelector(`#Steps`);
                mySteps.innerHTML = `${data2[8].acf.preparation}`;

                myDescription = document.querySelector(`#RecipeDesc`);
                myDescription.innerHTML = `${data2[8].acf.about}`;

               
                
            });
    })

