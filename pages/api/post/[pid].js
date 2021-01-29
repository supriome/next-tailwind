export default function hander(req, res) {
    const { query: { pid }} = req

    res.send(`Post: ${pid}`)
}