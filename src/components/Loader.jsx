import { Circles } from 'react-loader-spinner';
export const Loader = () => {
  return (
    <Circles
      height="80"
      width="80"
      color="#f8a100"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
