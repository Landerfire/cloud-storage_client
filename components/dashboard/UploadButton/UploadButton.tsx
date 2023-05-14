import styles from '@/styles/Home.module.scss';
import { CloudUploadOutlined } from '@ant-design/icons';
import { Button, Upload, UploadFile, notification } from 'antd';
import { FC, useState } from 'react';

import * as Api from '@/api';

type UploadButtonProps = {};

export const UploadButton: FC<UploadButtonProps> = (props) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onUploadSuccess = async (options: any) => {
    try {
      const file = await Api.files.uploadFile(options);

      setFileList([]);
      location.reload();
    } catch (err: unknown | Error) {
      notification.error({
        message: 'Ошибка!',
        description: 'Не удалось загрузить файл',
        duration: 2,
      });
    }
  };

  return (
    <Upload
      customRequest={onUploadSuccess}
      fileList={fileList}
      onChange={({ fileList }) => setFileList(fileList)}
      className={styles.upload}
    >
      <Button type="primary" icon={<CloudUploadOutlined />} size="large">
        Загрузить файл
      </Button>
    </Upload>
  );
};
