import './Blog.css'

function Blog() {
    const posts = [
        { image: 'https://th.bing.com/th/id/R.51f144b41c898cb0ef9bc8386361dc11?rik=BA97k9dkAUHYzg&pid=ImgRaw&r=0',title: 'Learning coding', content: 'Coding in software engineering', author: 'John Doe' },
        { image: 'https://image.shutterstock.com/image-vector/concept-blogging-golden-blog-word-260nw-755744683.jpg',title: 'Cyber security', content: 'Cyber Security awereness month', author: 'John Doe' },
    ]
    return (
        <div className='blog'>
            <h1>CODDING BLOG</h1>
            <div className='grid'>
                {posts.map((post, index) => (
                    <div key={index} className='card'>
                        <img src={post.image} alt="" />
                        <h2>{post.title}</h2>
                        <p>This is a blog about coding</p>
                        <p><b>by Craig Macharia</b></p>
                        <p>Posted on 11th of November,2024 at 11:02 AM</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;