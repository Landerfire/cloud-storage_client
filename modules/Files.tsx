import { IFileItem } from '@/api/dto/files.dto';
import FileActions from '@/components/FileActions';
import FileList from '@/components/dashboard/FileList';
import { FileSelectType } from '@/components/dashboard/FileList/FileList';
import { Empty } from 'antd';
import { FC, useState } from 'react';

import * as Api from '@/api';

type FilesProps = {
  items: IFileItem[];
  withActions?: boolean;
};

export const Files: FC<FilesProps> = ({ items, withActions }) => {
  const [files, setFiles] = useState(items || []);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const onClickRemove = () => {
    setSelectedIds([]);
    setFiles((prev) => prev.filter((file) => !selectedIds.includes(file.id)));
    Api.files.removeFiles(selectedIds);
  };

  const onClickShare = () => {
    alert('share');
  };

  const onFileSelect = (id: number, type: FileSelectType) => {
    if (type === 'select') {
      setSelectedIds((prev) => [...prev, id]);
    } else {
      setSelectedIds((prev) => prev.filter((_id) => _id !== id));
    }
  };

  return (
    <div>
      {files.length ? (
        <>
          {withActions && (
            <FileActions
              onClickRemove={onClickRemove}
              onClickShare={onClickShare}
              isActive={selectedIds.length > 0}
            />
          )}
          <div style={{ width: '100%', height: '100%' }} className="files">
            <FileList items={files} onFileSelect={onFileSelect} />
          </div>
        </>
      ) : (
        <Empty className="empty-block" description="Список файлов пуст" />
      )}
    </div>
  );
};
