import UploadButton from '@/components/dashboard/UploadButton';
import styles from '@/styles/Home.module.scss';
import { DeleteOutlined, FileImageOutlined, FileOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useRouter } from 'next/router';

type Props = {};

export const Sidebar: React.FC<Props> = (props) => {
  const router = useRouter();
  const selectedMenu = router.pathname;

  return (
    <div className={styles.sidebar}>
      <UploadButton />
      <Menu
        className={styles.menu}
        mode="inline"
        selectedKeys={[selectedMenu]}
        items={[
          {
            key: '/dashboard/files',
            icon: <FileOutlined />,
            label: 'Файлы',
            onClick: () => router.push('/dashboard/files'),
          },
          {
            key: '/dashboard/images',
            icon: <FileImageOutlined />,
            label: 'Картинки',
            onClick: () => router.push('/dashboard/images'),
          },
          {
            key: '/dashboard/trash',
            icon: <DeleteOutlined />,
            label: 'Корзина',
            onClick: () => router.push('/dashboard/trash'),
          },
        ]}
      />
    </div>
  );
};
