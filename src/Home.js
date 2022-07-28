import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "./config/firebase";

const Home = () => {
    // const { data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs")
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

        const getDocuments = async () => {
            const querySnapshot = await getDocs(collection(database, "dojo-blogs")).then((res) => {
                res.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    // console.log(doc.id, " => ", doc.data());
                    setData([doc.data()]);
                    // console.log(data)
                    }); 
            });
        }
        getDocuments();
    
    

    return (
        <div className="home">
            <h1>Home</h1>
            {/* { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div>} */}
            {data && <BlogList blogs={data} title="All Blogs!" />}
            
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