import Typicode from 'sdk-demo'

const client = new Typicode({
    apiKey: "123",
})

client.getPosts().then((res) => { console.log(res) })
client.getPostById(2).then((res) => { console.log(res) })
client.createPost({
    title: "foo",
    body: "bar",
    userId: 1
}).then((res) => {
    console.log(res)
})