import { useState } from "react";

const Home = () => {
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('luigi')
        setAge(30); 
    }

    // const handleClick = (e) => {
    //     console.log("hello ninjas", e);
    // }

    // const handleClickAgain = (name) => {
    //     console.log("hello " + name)
    // }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick} >Click me</button>
            {/* <button onClick={() => handleClickAgain("William")}>Click me again</button> */}
        </div>
    );
}
 
export default Home;