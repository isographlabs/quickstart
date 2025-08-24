import { iso } from '@iso';

export const HomePage = iso(`
  field Root.HomePage @component {}
`)(function HomePageComponent({ data }) {
  return 'Hello from the home page!';
});
