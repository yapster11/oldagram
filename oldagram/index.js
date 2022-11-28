const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const containerEl = document.getElementById("container")

function render(arr) {
    let imgsDOM = ""
    for (let i=0; i<arr.length; i++) {
        imgsDOM +=
            `<div class="poster">
            <div class="poster-avatar">
                <img id="post-avatar" src="${arr[i].avatar}">
            </div>
            <div class="poster-details">
                <p id="poster-id">${arr[i].name}</p>
                <p id="poster-loc">${arr[i].location}</p>
            </div>
            </div>
            <div>
                <img id="post" src="${arr[i].post}">
            </div>
            <div class="post-info">
                <img class="icon" id="heart" src="images/icon-heart.png">
                <img class="icon" src="images/icon-comment.png">
                <img class="icon" src="images/icon-dm.png">
                <p id="likes">${arr[i].likes} likes</p>
                <p id="caption"><span id="username">${arr[i].username}</span> ${arr[i].comment}</p>
            </div>`
    }
    containerEl.innerHTML = imgsDOM
}

render(posts)

// const postEl = document.getElementById("post")
// let likesEl = document.getElementById("likes")
// let counter = posts.likes

// postEl.addEventListener("dblclick", function () {
//     // counter += 1
//     // likesEl.innerHTML = `${counter} likes`
//     console.log("clicked")   
// })