function notEmpty(string) {
    return string.trim() !== '';
}

function addLike(likeButton) {
    likeButton.innerText = `${parseInt(likeButton.innerText, 10) + 1} likes`;
}

function reply(replyButton) {
    const replayMessage = prompt('What do you want to reply?');

    if (notEmpty(replayMessage)) {
        const messageDiv = document.createElement('div');
        messageDiv.innerHTML = replayMessage;
        replyButton.parentNode.querySelector('.replies').append(messageDiv);
    }
}

function createPostHTML(post) {
    const newPostDiv = document.createElement('div');
    newPostDiv.className = 'post';
    newPostDiv.innerHTML =
        `<hr>
                ${post.text}
                <br>
                <button onclick="addLike(this)">${post.likes} likes</button>
                <br>
                <div class="replies"></div>
                <br>
                <button onclick="reply(this)">reply</button>`;

    return newPostDiv;
}

function prependPost(post) {
    postsDiv.prepend(createPostHTML(post));
}


const newPostTextArea = document.querySelector('#add-post-text');
const postsDiv = document.querySelector('.posts');

document.querySelector('button').onclick = function addPost(event) {
    event.preventDefault();

    const newPostText = newPostTextArea.value.replace(/\r?\n/g, '<br>');

    if (notEmpty(newPostText)) {
        const newPost = { text: newPostText, likes: 0 };
        prependPost(newPost);
        newPostTextArea.value = '';
    }
};



