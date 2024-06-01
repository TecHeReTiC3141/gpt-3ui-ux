import "./article.css";

interface ArticleProps {
    imgUrl: string,
    date: string,
    title: string,
}

export default function Article({imgUrl, title, date}: ArticleProps) {
    return (
        <div className="gpt3__blog-container_article">
            <div className="gpt__blog-container_article-image">
                <img src={imgUrl} alt={title}/>
            </div>
            <div className="gpt3__blog-container_article-content">
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    );
}
