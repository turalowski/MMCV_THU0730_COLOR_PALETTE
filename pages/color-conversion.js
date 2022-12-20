import { Header } from '../components/Header';
import { Input, Layout } from 'antd';
import { useState } from 'react';

const { Content } = Layout;

export default function ColorConversion() {
  /*
{
rgb: "" 
hex: "" 

}
  */
  const [colors, setColors] = useState({ hex: '#fff' });
  return (
    <Layout style={{ height: '100vh' }}>
      <Header />
      <Content
        style={{
          padding: '0 50px',
          backgroundColor: colors.hex,
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '500px',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Input
            addonBefore="RGB"
            value={colors.rgb}
            size="large"
            style={{ color: 'black' }}
          />
          <Input addonBefore="HEX" value={colors.hex} size="large" />
        </div>
      </Content>
    </Layout>
  );
}
