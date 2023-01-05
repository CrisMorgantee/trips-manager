import DashboardTemplate, { DashboardProps } from 'templates/Dashboard'

export default function Dashboard(props: DashboardProps) {
  return <DashboardTemplate {...props} />
}

export async function getServerSideProps() {
  const user_id = 1
  const res = await fetch(`http://localhost:3000/api/user/${user_id}`)
  const user = await res.json()
  console.log('data: ', user)

  return {
    props: {
      user
    }
  }
}
