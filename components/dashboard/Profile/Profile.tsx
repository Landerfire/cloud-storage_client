import { Button } from 'antd';
import styles from './Profile.module.scss';

import { IUser } from '@/api/dto/auth.dto';

type Props = {
  userData: IUser;
  onClick: () => void;
};

export const Profile: React.FC<Props> = ({ userData, onClick }) => {
  const { id, fullName, email } = userData ?? '';
  return (
    <main>
      <div className={styles.root}>
        <h1>Мой профиль</h1>
        <br />
        <p>
          ID: <b>{id ?? 'id'}</b>
        </p>
        <p>
          Полное имя: <b>{fullName ?? 'fullName'}</b>
        </p>
        <p>
          E-Mail: <b>{email ?? 'email'}</b>
        </p>
        <br />
        <Button onClick={onClick} type="primary" danger>
          Выйти
        </Button>
      </div>
    </main>
  );
};
