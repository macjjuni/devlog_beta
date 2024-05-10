import NextTopLoader, { NextTopLoaderProps } from 'nextjs-toploader';

const loaderProps: NextTopLoaderProps = {
  height: 4,
  color: 'red',
  speed: 240,
  showSpinner: false,
  shadow: '',
  crawl: false,
  showAtBottom: false,
};

function PageLoader() {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <NextTopLoader {...loaderProps} />;
}

export default PageLoader;
