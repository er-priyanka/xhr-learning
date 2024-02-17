
const url = "https://jsonplaceholder.typicode.com/posts";


let getPosts = () =>{

    let xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.onload = function (){
        if(xhr.status >= 200 && xhr.status < 300){
            // console.log("Response:", JSON.parse(xhr.response));
            displayPosts(JSON.parse(xhr.response));
        }
    }

    xhr.send();
}

getPosts();


const displayPosts = (arr=[]) =>{
    let container = document.querySelector("#container");
    container.innerHTML = null;

    arr.map((item) =>{
        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        h3.innerText = item.title;

        div.append(h3);
        container.append(div);
    })

    
}
