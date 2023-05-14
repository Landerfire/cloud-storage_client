import { Button, Popconfirm } from 'antd';
import { FC } from 'react';
import styles from './FileActons.module.scss';

type FileActionsProps = {
  onClickRemove: VoidFunction;
  onClickShare: VoidFunction;
  isActive?: boolean;
};

export const FileActions: FC<FileActionsProps> = ({
  isActive = false,
  onClickRemove,
  onClickShare,
}) => {
  return (
    <div className={styles.root}>
      <Button onClick={onClickShare} disabled={!isActive}>
        Поделиться
      </Button>

      <Popconfirm
        title="Удалить файл(ы)?"
        description="Все файлы будут перемещены в корзину"
        okText="Да"
        cancelText="Нет"
        disabled={!isActive}
        onConfirm={onClickRemove}
      >
        <Button disabled={!isActive} type="primary" danger>
          Удалить
        </Button>
      </Popconfirm>
    </div>
  );
};
