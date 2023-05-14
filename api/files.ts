import axios from 'axios';
import { IFileItem } from './dto/files.dto';
import { AxiosRequestConfig, AxiosProgressEvent } from 'axios';

type FileType = 'all' | 'images' | 'trash';

export const getAllFiles = async (type: FileType = 'all'): Promise<IFileItem[]> => {
  return (await axios.get('/files?type=' + type)).data;
};

export const removeFiles = async (ids: number[]): Promise<void> => {
  return axios.delete('files?ids=' + ids);
};

export const uploadFile = async (options: any) => {
  const { onSuccess, onError, file, onProgress } = options;

  const formData = new FormData();
  formData.append('file', file);

  // const config: AxiosRequestConfig = {
  //     headers: { 'Content-Type': 'multipart/form-data'},
  //     onUploadProgress: (event: AxiosProgressEvent) => {
  //         onProgress({percent: (event.loaded / event.total!) * 100})
  //     }
  // }
  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
    onProgress: (event: ProgressEvent) => {
      onProgress({ percent: (event.loaded / event.total) * 100 });
    },
  };

  try {
    const { data } = await axios.post('files', formData, config);

    onSuccess();

    return data;
  } catch (err) {
    onError({ err });
  }
};
