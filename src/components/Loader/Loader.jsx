import { ColorRing } from 'react-loader-spinner';

export default function Loader() {
  return (
    <ColorRing
      visible={true}
      height="180"
      width="180"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        display: 'block',
        margin: 'auto',
      }}
      colors={['#ccd5ae', '#ffc8dd', '#ffafcc', '#bde0fe', '#a2d2ff']}
    />
  );
}
