import { useRouter } from 'next/router'
import { UserProps } from 'pages/api/users'
import useSwr from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function UserPage() {
  const router = useRouter()
  const { data, error } = useSwr<UserProps>(
    router.query.id ? `/api/user/${router.query.id}` : null,
    fetcher
  )

  if (error) return <div>Failed to load user</div>
  if (!data) return <div>Loading...</div>

  return <div>{data.name}</div>
}
