import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Layout, Breadcrumb, Menu } from 'antd';

const { Header, Content, Footer } = Layout;
const items = [
  {
    label: 'Color palettes',
  },
  {
    label: 'Convert color formats',
  },
  {
    label: 'Pick color',
  },
];
export default function Home() {
  return (
    <div className={styles.container}>
      <Layout style={{ height: '100vh' }}>
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={items}
          />
        </Header>
        <Content style={{ padding: '0 50px' }}>Content</Content>
        <Footer style={{ textAlign: 'center' }}>Footer</Footer>
      </Layout>
    </div>
  );
}
