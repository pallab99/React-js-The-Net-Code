const BlogList = ({ blogs, handleDelete }) => {
  //   const blogs = props.blogs;
  //   const title = props.title;
  return (
    <div>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written By {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
