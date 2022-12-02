import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { Layout, Menu, message } from 'antd';
import { materialColor } from '../utils/constant';

const { Header, Content } = Layout;
const items = [
  {
    label: 'Color palettes',
    key: '1',
  },
  {
    label: 'Convert color formats',
    key: '2',
  },
  {
    label: 'Pick color',
    key: '3',
  },
];
export default function Home() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const colorItems = Array(50)
      .fill()
      .map((item, index) => {
        return (
          <div key={index} className={styles.colorsContainer}>
            {[0, 1, 2, 3].map((_, index) => {
              const color = materialColor();
              return (
                <div
                  key={index}
                  className={styles.colorContainer}
                  style={{
                    height:
                      index === 0
                        ? '150px'
                        : index === 1
                        ? '120px'
                        : index === 2
                        ? '100px'
                        : '70px',
                    backgroundColor: color,
                  }}
                >
                  <div
                    className={styles.colorLabel}
                    onClick={() => {
                      navigator.clipboard.writeText(color);
                      message.success('Color copied to clipboard');
                    }}
                  >
                    {color}
                  </div>
                </div>
              );
            })}
          </div>
        );
      });

    setColors(colorItems);
  }, []);
  return (
    <div className={styles.container}>
      <Layout style={{ backgroundColor: '#7f669d' }}>
        <Header style={{ backgroundColor: '#7f669d', marginLeft: 'auto' }}>
          <div className="logo" />
          <Menu
            style={{ backgroundColor: '#7f669d' }}
            theme="light"
            mode="horizontal"
            activeKey={'1'}
            items={items}
          />
        </Header>
        <Content
          style={{
            padding: '0 50px',
            backgroundColor: '#F7F7F7',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {colors}
          </div>
        </Content>
      </Layout>
    </div>
  );
}
