import axios from 'axios'
import useSWR from 'swr'

const fetcher = url => axios.get(url).then(res => res.data)

export default function Index() {
  const { data, error } = useSWR(
    "https://api.github.com/repos/vercel/swr",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <br/>
      <p>HomePage</p>
      <p>{data.homepage}</p>
      <br/>
      <strong>Watch: {data.subscribers_count}</strong>{" "}
      <strong>Star: {data.stargazers_count}</strong>{" "}
      <strong>Fork: {data.forks_count}</strong>
    </div>
  );
}
