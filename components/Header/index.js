import { Menu } from 'antd';
import { useRouter } from 'next/router';
import { Layout } from 'antd';
const { Header: AntdHeader } = Layout;

export function Header() {
  const router = useRouter();
  console.log(router);
  const items = [
    {
      label: 'Color palettes',
      onClick: () => {
        router.push('/color-palettes');
      },
      key: '1',
      pathName: '/color-palettes',
    },
    {
      label: 'Convert color formats',
      onClick: () => {
        router.push('/color-conversion');
      },
      key: '2',
      pathName: '/color-conversion',
    },
    {
      label: 'Color picker',
      pathName: '/color-picker',
      onClick: () => {
        router.push('/color-picker');
      },
      key: '3',
    },
  ];
  return (
    <AntdHeader style={{ padding: 0, fontSize: '3rem' }}>
      <Menu
        style={{
          backgroundColor: '#1C315E',
          color: 'white',
          fontSize: '1.5rem',
        }}
        theme="light"
        mode="horizontal"
        activeKey={items.find(item => item.pathName === router.pathname)?.key}
        items={items}
      />
    </AntdHeader>
  );
}
