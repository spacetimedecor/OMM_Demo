import { MemoryRouter } from "react-router-dom";

const routerDecorator = (storyFn) => (
  <MemoryRouter initialEntries={['/']}>
    {storyFn()}
  </MemoryRouter>
)

export default routerDecorator;
