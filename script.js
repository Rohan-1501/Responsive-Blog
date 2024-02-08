document.addEventListener('DOMContentLoaded', function () {
    const commentForm = document.getElementById('comment-form');
    const commentList = document.getElementById('comment-list');

    commentForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const commentInput = document.getElementById('comment');
        const commentText = commentInput.value;

        if (commentText.trim() !== '') {
            const newComment = document.createElement('li');
            newComment.textContent = commentText;
            commentList.appendChild(newComment);

            commentInput.value = '';

            
            updateCommentCount();
        }
    });

    
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    
    updateCommentCount();
});

function updateCommentCount() {
    const commentCount = document.getElementById('comment-list').children.length;
    const commentCountElement = document.getElementById('comment-count');

    if (commentCountElement) {
        commentCountElement.textContent = `(${commentCount})`;
    }
}
