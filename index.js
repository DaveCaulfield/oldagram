
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
    },
    {
        name: "Bob  Marley",
        username: "B-Jammin",
        location: "Kingstown, Jamaica",
        avatar: "images/bob-marley.PNG",
        post: "images/bob-marley.PNG",
        comment: "I hope you lke jammin too!",
        likes: 220
    }
]


let i = 0

function render() {


    let avatar = document.getElementById("avatar");
    avatar.innerHTML = `<img class="avatar-img" src=${posts[i].avatar} alt="selfie portrait pic">`

    let nameEl = document.getElementById("name");
    nameEl.textContent = `${posts[i].name}`

    let locationEl = document.getElementById("location");
    locationEl.textContent = `${posts[i].location}`

    let selfPortrait = document.getElementById("self-portrait");
    selfPortrait.innerHTML = `<img class="selfie-img" src=${posts[i].post} alt="Vangogh selfie">`

    let likeCount = posts[i].likes
    let numlikesEl = document.getElementById("num-likes");
    numlikesEl.textContent = likeCount

    let heartIcon = document.getElementById("heart-icon");
    heartIcon.addEventListener("click", function () {
        numlikesEl.textContent = likeCount += 1
    })

    let usernameEl = document.getElementById("username");
    usernameEl.textContent = `${posts[i].username}`

    let commentEl = document.getElementById("comment");
    commentEl.textContent = ` ${posts[i].comment}`

}
render()


let swipeLeft = document.getElementById("swipe-left");
swipeLeft.addEventListener("click", function () {
    if (i > 0) {
        i = i -= 1;
        render();
    }
})

let swipeRight = document.getElementById("swipe-right");
swipeRight.addEventListener("click", function () {
    if (i < posts.length - 1) {
        i = i += 1;
        render()
    }
})