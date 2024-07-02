const byPath = (path: string, obj: Object, separator = ".") => {
  const properties = path.split(separator);
  return properties.reduce((prev: any, curr: any) => prev?.[curr], obj);
};

const objectUtils = {
  byPath,
};

export default objectUtils;
