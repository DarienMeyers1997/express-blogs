const { error } = require("console");
const express = require("express");
const router = express.Router();
const { uuidv4 } = require("uuidv4");

const allBlogs = [
  {
    id: "blog1",
    title: "Introduction to JavaScript",
    description: "Learn the basics of JavaScript programming language.",
    author: "Michael Johnson",
    createdAt: "2023-05-22T19:16:00.821Z",
    lastModified: "2023-05-22T19:16:00.821Z",
  },
  {
    id: "blog2",
    title: "Mastering React Framework",
    description: "Become proficient in building web applications using React.",
    author: "Jane Smith",
    createdAt: "2023-05-22T19:16:00.821Z",
    lastModified: "2023-05-22T19:16:00.821Z",
  },
  {
    id: "blog3",
    title: "Deep Dive into Node.js",
    description:
      "Explore the advanced concepts of Node.js and server-side development.",
    author: "Michael Johnson",
    createdAt: "2023-05-22T19:16:00.821Z",
    lastModified: "2023-05-22T19:16:00.821Z",
  },
  {
    id: "blog4",
    title: "CSS Tricks for Web Designers",
    description: "Discover useful CSS techniques to enhance your web designs.",
    author: "Emily Davis",
    createdAt: "2023-05-22T19:16:00.821Z",
    lastModified: "2023-05-22T19:16:00.821Z",
  },
  {
    id: "blog5",
    title: "Effective Database Management",
    description:
      "Learn best practices for managing databases and optimizing performance.",
    author: "Robert Johnson",
    createdAt: "2023-05-22T19:16:00.821Z",
    lastModified: "2023-05-22T19:16:00.821Z",
  },
];

//GET HOME PAGE
router.get("/", (req, res) => {
  res.json({ message: "hello from blog route" });
});

router.get("/all-blogs", (req, res) => {
  res.json({ data: allBlogs });
});

router.delete("/delete-blog/:id", (req, res) => {
  const deleteBlog = req.params.id;
  const findBlogIndex = allBlogs.findIndex(
    (blog) => blog.id.toString() === deleteBlog
  );
  if (findBlogIndex === -1) {
    return res.status(400).json({ success: false, message: "blog not found" });
  }
  allBlogs.splice(findBlogIndex, 1);
  res.status(200).json({ success: true, data: "id deleted" });
});

router.get("/blog-by-id/:blog", (req, res) => {
  const compareMe = req.params.blog;
  let result = allBlogs.find(findBlogById);
  function findBlogById(blog) {
    return blog.id === compareMe;
  }
  res.status(200).json({ data: result });
});

// let names= ["Style","List","Raw"];
// let results= names.filter(x => x.includes("s"));
// console.log(results);

router.get("/blogs-by-author", (req, res) => {
  const author = req.params.authorNname;
  const findBlog = allBlogs.filter((blog) => blog.author === author);
  res.status(200).json({ data: findBlog });
});

router.post("/create-blog", (req, res) => {
  const errArray = [];
  const newID = `blogs${blogs.length + 1}`;
  let newBlog = {
    id: newID,
    title: req.body.title,
    description: req.body.description,
    author: req.body.author,
    createdAt: new Date().toISOString(), // class called Date and create a time then it cl=alls the method .toISOString()
    lastModified: new Date().toISOString(),
  };
  allBlogs.push(newBlog);
  console.log(allBlogs);
  for (let key in newBlog) {
    if (newBlog[key] === "" || newBlog[key] === undefined) {
      errArray.push(`${key} cannot be empty`);
    }
    if (errArray.length > 0) {
      return res.status(400).json({ success: false, data: newBlog });
    }
  }
  res.status(200).json({ message: "success" });
});

//update(put) one blog by if route
//http://localhost:3000
router.put("/update-blog/:updateId", (req, res) => {
  const { title, description, author } = req.body;
  if (title !== "") {
    blog.title ? title : blog.title;
    blog.description ? description : blog.description;
    blog.author ? author : blog.author;
  }
  res.status(200).json({ success: true });
});

module.exports = router;
