import useSWR from 'swr'
import Link from 'next/link'

const fetcher = (url) => fetch(url).then((res) => res.json())

const Person =  ({ person }) => {
  return (
    <li className="ml-2 mr-2">
      <Link href="/person/[id]" as={`/person/${person.id}`}>
        <a>{person.name.toUpperCase()}</a>
      </Link>
    </li>
  )
}

export default function Index() {
  const { data, error } = useSWR('/api/people', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul className="md:flex">
      {data.map((p, i) => (
        <Person key={i} person={p} />
      ))}
    </ul>
  )
}