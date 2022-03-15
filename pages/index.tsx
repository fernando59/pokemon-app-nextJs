import type { NextPage } from 'next'
import { Card } from 'primereact/card';
import { Layout } from '../components/layouts/Layout';
const Home: NextPage = () => {
  return <Layout title='Pokemon App'>
    <Card title="Title" subTitle="SubTitle">
      Content
    </Card>

  </Layout>
}

export default Home
