const postsLink = "https://jsonplaceholder.typicode.com/posts";

buttonInsert();
read_Post();


async function read_Post() {

    let posts_Area = document.getElementById("postArea");
    posts_Area.innerHTML = "Loadding posts...";

    let response = await fetch(postsLink);
    let json = await response.json();

    if (json.length > 0) {

        posts_Area.innerHTML = "";

        for (let i = 0; i < json.length; i++) {

            let text = "<h1>" + json[i].title + "</h1>" + "<p> " + json[i].body + "</p>";

            let newPost = document.createElement("div");
            newPost.setAttribute('class', "newPost")
            newPost.innerHTML = text + "</br>";

            posts_Area.append(newPost);

        }

    }
    else {
        posts_Area.innerHTML = "Nenhum post para ixibir."
    }
}

async function add_New_Post(title, body) {

    let json = {
        method: "POST",
        headers: {
            "Conten-Type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            body: body,
            userId: 2
        })
    }

    await fetch(postsLink, json)

    document.getElementById("titleField").value = "";
    document.getElementById("bodyField").value = "";

    read_Post();
}

function buttonInsert() {

    document.getElementById("insetButton").addEventListener("click", function () {

        let title = document.getElementById("titleField").value
        let body = document.getElementById("bodyField").value;

        if (title && body) {
            add_New_Post(title, body);
        }
        else {
            alert("Preencha os camppos obrigatórios.");
        }

    })


}
