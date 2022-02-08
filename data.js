import axios from "axios";

const getData = async(Number) => {
    const {data: users} = await axios(`https://jsonplaceholder.typicode.com/users/${Number}`);
    const {data: posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${Number}`);

    return {"users": users, "posts": posts}
}
console.log(getData)

export default getData