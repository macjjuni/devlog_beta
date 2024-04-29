import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'style')],
    prependData: `@import 'index';`,
  },
};

export default nextConfig;
