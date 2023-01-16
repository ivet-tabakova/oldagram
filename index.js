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

const postEl = document.getElementById("post-container");


function renderPost(){
    for (let i = 0; i < posts.length; i++){
        postEl.innerHTML += `
        <div class="avatar-info">
                <img class="avatar" src=${posts[i].avatar}>
                <div class="info">
                    <div><span class="name">${posts[i].name}</span></div>
                    <span class="location">${posts[i].location}</span>
                </div>
            </div>
            
            <div class="post-img">
                <img id="post-img" class="img" src=${posts[i].post}>
            </div>
            
            <div class="user-interaction">
                <div class="icons">
                    <img src="images/icon-heart.png" class="icon heart" id="heart-icon">
                    <img src="images/icon-comment.png" class="icon comment">
                    <img src="images/icon-dm.png" class="icon dm">
                </div>
                <div class="likes-el">
                    <p class="likes" id="post-likes">${posts[i].likes} likes</p>
                </div>
                <div class="desc">
                    <p class="username">${posts[i].username}<span class="desc-com"> ${posts[i].comment}</span></p>
                </div>
            </div>
        `
    }
}
 
renderPost() 
 
 
const heartEl = document.getElementById("heart-icon");
const likesEl = document.getElementById("post-likes");

heartEl.addEventListener("click", function(){
    
    likesEl.innerHTML = parseInt(likesEl.innerHTML) + 1 + " likes"
    
})
