import * as jest from "jest-mock";
import { addDecorator } from "@storybook/react";
import {
  createMemoryHistory,
  ReactLocation,
  Router,
} from "@tanstack/react-location";
import { RecoilRoot } from "recoil";

window.jest = jest;

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// react-location
const memoryHistory = createMemoryHistory({
  initialEntries: ["/"],
});

const location = new ReactLocation({
  history: memoryHistory,
});

export const InMemoryRouter = ({ children }) => {
  return (
    <Router routes={[]} location={location}>
      {children}
    </Router>
  );
};

addDecorator((story) => (
  <InMemoryRouter>
    <RecoilRoot>{story()}</RecoilRoot>
  </InMemoryRouter>
));
