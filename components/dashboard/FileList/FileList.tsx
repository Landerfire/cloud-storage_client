import { FC } from 'react';
import Selecto from 'react-selecto';

import { IFileItem } from '@/api/dto/files.dto';
import FileCard from '../FileCard';
import styles from './FileList.module.scss';

export type FileSelectType = 'select' | 'unselect';

type FileListProps = {
  items: IFileItem[];
  onFileSelect: (id: number, type: FileSelectType) => void;
};

export const FileList: FC<FileListProps> = ({ items, onFileSelect }) => {
  return (
    <div className={styles.root}>
      {items.map((item) => (
        <div data-id={item.id} key={item.id} className="file">
          <FileCard filename={item.filename} originalName={item.originalName} />
        </div>
      ))}

      <Selecto
        //@ts-ignore
        container=".files"
        dragContainer=".files"
        selectableTargets={['.file']}
        selectByClick
        hitRate={10}
        selectFromInside
        toggleContinueSelect={['shift']}
        continueSelect={false}
        onSelect={(e) => {
          e.added.forEach((el) => {
            el.classList.add('active');
            onFileSelect(Number(el.dataset['id']), 'select');
          });
          e.removed.forEach((el) => {
            el.classList.remove('active');
            onFileSelect(Number(el.dataset['id']), 'unselect');
          });
        }}
      />
    </div>
  );
};
