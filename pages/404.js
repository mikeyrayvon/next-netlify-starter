import Layout from '../components/Layout'

const NotFound = () => {
  const title = '404'
  return (
    <Layout pageTitle={title}>
      <h1 className="title">404</h1>
      <main>
        Not Found
      </main>
    </Layout>
  )
}

export default NotFound
