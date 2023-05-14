export const isImage = (ext: string): boolean => {
  return ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'ico', 'tiff'].includes(ext);
};
