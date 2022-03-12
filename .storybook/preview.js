import themeDecorator from "./theme-decorator";
import routerDecorator from "./router-decorator";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  themeDecorator,
  routerDecorator
]
