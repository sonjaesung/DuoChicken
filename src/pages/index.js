import withSplitting from "../routes/withSplitting";

export const Home = withSplitting(() => import('../pages/Home'));
export const Company = withSplitting(() => import('../pages/Company'));

