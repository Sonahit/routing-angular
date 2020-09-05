import { Route, ComponentRouterModule } from '../index';

@Route()
export class Test {}

describe('build', () => {
  it('should build files', () => {
    expect(Route()).toBeDefined();
    expect(
      ComponentRouterModule.forFeature({ root: { path: '' }, components: [] })
    ).toBeDefined();
  });
});
