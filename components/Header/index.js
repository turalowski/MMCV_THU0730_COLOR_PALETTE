import { Menu } from 'antd';
import { useRouter } from 'next/router';
import { Layout } from 'antd';
const { Header: AntdHeader } = Layout;

export function Header() {
  const router = useRouter();
  const items = [
    {
      label: 'Color palettes',
      onClick: () => {
        router.push('/color-palettes');
      },
      key: '1',
    },
    {
      label: 'Convert color formats',
      onClick: () => {
        router.push('/color-conversion');
      },
      key: '2',
    },
    {
      label: 'Color picker',
      onClick: () => {
        router.push('/color-picker');
      },
      key: '3',
    },
  ];
  return (
    <AntdHeader style={{ padding: 0, fontSize: '3rem' }}>
      <Menu
        style={{ backgroundColor: '#1C315E', fontSize: '1.5rem' }}
        theme="light"
        mode="horizontal"
        activeKey={'1'}
        items={items}
      />
    </AntdHeader>
  );
}
