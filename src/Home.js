import { useState } from "react";
import BlogList from "./Blog_list";
const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Flood Halo",
      body: "Battle of Installation 04",
      author: "John 117",
      id: 1,
    },
    {
      title: "Forerunner Flood War",
      body: "Battle between forerunners and the flood",
      author: "Iso Diadact",
      id: 2,
    },
  ]);
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
