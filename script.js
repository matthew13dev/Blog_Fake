const postsLink = "https://jsonplaceholder.typicode.com/posts";

async function read_Post() {

    let posts_Area = document.getElementById("postArea");
    posts_Area.innerHTML = "Loadding posts...";

    let response = await fetch(postsLink);
    let json = await response.json();

    if (json.length > 0) {

        posts_Area.innerHTML = "";

        for (let i = 0; i < 5; i++) {

            let text = "<h1>" + json[i].title + "</h1>" + "<p> " + json[i].body + "</p>";

            let newPost = document.createElement("div");
            newPost.setAttribute('class', "newPost")
            newPost.innerHTML= text + "</br>";

            posts_Area.append(newPost);

        }

    }
    else {
        posts_Area.innerHTML = "Nenhum post para ixibir."
    }
}

read_Post();