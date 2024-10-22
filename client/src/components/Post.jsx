import './Post.css'
export default function Post({title,summary,cover,username}) {
    return (
        <article className="blog-post">
        <img className="blog-image" src={cover} alt={title}/>
        <div className="blog-content">
            <span className="post-category">VIDEOS</span>
            <h2><a href="#" className="post-title">{title}</a></h2>
            <div className="post-meta">
                By <a href="#" className="post-author">{username}</a>
                <span className="post-time">12 hrs ago</span>
                </div>
                <div className='post-summary'>
                    {summary}
                </div>    
        </div>
    </article>
    )
}