import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My new website", body: "lorem ipsum...", author: 'mario', id: 1},
        { title: "Welcome party!", body: "lorem ipsum...", author: 'yoshi', id: 2},
        { title: "Web dev top tips", body: "lorem ipsum...", author: 'mario', id: 3}
    ])
    

    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
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
