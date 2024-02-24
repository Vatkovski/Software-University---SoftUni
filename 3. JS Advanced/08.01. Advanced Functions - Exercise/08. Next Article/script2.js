function getArticleGenerator(articles) {
    return function () {
        if (articles.length > 0) {
            let article = articles.shift();
            let contentDiv = document.getElementById('content');
            let articleElement = document.createElement('article');
            articleElement.textContent = article;
            contentDiv.appendChild(articleElement);
        }
    };
}