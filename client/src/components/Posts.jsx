import './Posts.css'
export default function Posts() {

    return (
        <div className="blog-container">
    <article className="blog-post">
        <img className="blog-image" src="path-to-image1.jpg" alt="Eslabon Armado & Yahritza y Su Esencia"/>
        <div className="blog-content">
            <span className="post-category">VIDEOS</span>
            <h2><a href="#" className="post-title">All in the Family Featuring Eslabon Armado & Yahritza y Su Esencia | Latin Music Week 2024</a></h2>
            <div className="post-meta">
                By <a href="#" className="post-author">Stefanie Tanaka</a>
                <span className="post-time">12 hrs ago</span>
            </div>
        </div>
    </article>

    <article className="blog-post">
        <img className="blog-image" src="path-to-image2.jpg" alt="J Balvin Interview"/>
        <div className="blog-content">
            <span className="post-category">VIDEOS</span>
            <h2><a href="#" className="post-title">The Superstar Q&A With J Balvin | Billboard Latin Music Week 2024</a></h2>
            <div className="post-meta">
                By <a href="#" className="post-author">Stefanie Tanaka</a>
                <span className="post-time">12 hrs ago</span>
            </div>
        </div>
    </article>

    <article className="blog-post">
        <img className="blog-image" src="path-to-image3.jpg" alt="Product Recommendations"/>
        <div className="blog-content">
            <span className="post-category">PRODUCT RECOMMENDATIONS</span>
            <h2><a href="#" className="post-title">Product Recommendations</a></h2>
            <div className="post-meta">
                By <a href="#" className="post-author">Editorial Team</a>
                <span className="post-time">1 day ago</span>
            </div>
        </div>
    </article>
</div>
    )    
}