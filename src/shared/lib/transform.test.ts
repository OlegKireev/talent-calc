import { snakeCaseToString } from './transform';

describe('shared/lib/transform/snakeCaseToString()', () => {
  it('should transform a common string', () => {
    expect(snakeCaseToString('the_hills_also_have_eyes')).toStrictEqual('the hills also have eyes');
  });
});
