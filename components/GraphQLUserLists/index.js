import useSWR from "swr";

const fetcher = (query) => 
    fetch('/api/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query })
    })
    .then(res => res.json())
    .then((json) => json.data)


export default function GraphQLUserLists() {
    const { data, error } = useSWR('{users { name }}', fetcher)

    if(error) return <div>Failed to load</div>
    if(!data) return <div>Loading...</div>


    const { users } = data

    return (
        <div>
            {users.map((user, i)=> (
                <div key={i}>{user.name.toUpperCase()}</div>
            ))}
        </div>
    )
}