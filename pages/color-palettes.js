import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { Layout, message } from 'antd';
import { materialColor } from '../utils/constant';
import { Header } from '../components/Header';

const { Content } = Layout;
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
      <Layout>
        <Header />
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
              padding: '0 100px',
              gap: '20px',
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
