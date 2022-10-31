import DashboardTemplate, { DashboardProps } from 'templates/Dashboard'

export default function Dashboard(props: DashboardProps) {
  return <DashboardTemplate {...props} />
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/users')
  const users = await res.json()
  console.log('data: ', users)

  return {
    props: {
      users
    }
  }
}
