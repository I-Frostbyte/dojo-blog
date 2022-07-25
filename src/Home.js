import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs")

    
    

    return (
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
            
        </div>
    );
}
 
export default Home;




















// const [name, setName] = useState('mario');
//     const [age, setAge] = useState(25);

//     const handleClick = () => {
//         setName('luigi')
//         setAge(30); 
//     }

//     // const handleClick = (e) => {
//     //     console.log("hello ninjas", e);
//     // }

//     // const handleClickAgain = (name) => {
//     //     console.log("hello " + name)
//     // }
/*
{ <p>{ name } is { age } years old</p>
            <button onClick={handleClick} >Click me</button>
            <button onClick={() => handleClickAgain("William")}>Click me again</button> }
*/
/*
[
    { title: "My new website", body: "lorem ipsum...", author: 'mario', id: 1},
    { title: "Welcome party!", body: "lorem ipsum...", author: 'yoshi', id: 2},
    { title: "Web dev top tips", body: "lorem ipsum...", author: 'mario', id: 3}
]
*/

{/* <button onClick={() => setName('luigi')}>Change Name</button>
<p>{ name }</p> */}
{/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs!" /> */}

// const [name, setName] = useState('mario');


/*
const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
}
*/

// handleDelete={ handleDelete }