import { Header } from '../components/Header';
import { Input, Layout } from 'antd';
import { useState } from 'react';
import { validateHTMLColorRgb } from 'validate-color';
const { Content } = Layout;

var convert = require('color-convert');

export default function ColorConversion() {
  /*
{
rgb: "" 
hex: "" 

}
  */
  const [colors, setColors] = useState({
    hex: '#eeeee4',
    rgb: 'rgb(238, 238, 228)',
  });
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
            onChange={event => {
              const isValid = validateHTMLColorRgb(event.target.value);
              if (!isValid) {
                setColors(prevColors => {
                  return {
                    ...prevColors,
                    rgb: event.target.value,
                  };
                });

                return;
              }
              const [r, g, b] = event.target.value
                .replace('rgb(', '')
                .replace(')', '')
                .split(',');
              const hex = convert.rgb.hex(Number(r), Number(g), Number(b));
              setColors(() => {
                return {
                  rgb: event.target.value,
                  hex: `#${hex}`,
                };
              });
            }}
            style={{ marginBottom: '20px' }}
          />
          <Input addonBefore="HEX" value={colors.hex} size="large" />
        </div>
      </Content>
    </Layout>
  );
}
