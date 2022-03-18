import type { NextPage,GetStaticProps } from 'next'
import { Card } from 'primereact/card';
import { Layout } from '../components/layouts/Layout';
const Home: NextPage = (props) => {
  console.log(props)
  return <Layout title='Pokemon App'>
    <Card title="Title" subTitle="SubTitle">
      Content
    </Card>

  </Layout>
}


export const getStaticProps: GetStaticProps = async (ctx) => {

  console.log('hello')
    return {
    props: {
      name:'fenrando'

    }
  }

}

export default Home
