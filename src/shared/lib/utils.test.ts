import { getDuration } from './utils';

describe('shared/lib/transform/getDuration()', () => {
  it('should return the same string with a string input', () => {
    expect(getDuration('instant')).toEqual('instant');
    expect(getDuration('chanelled')).toEqual('chanelled');
  });

  it('should return only minutes if input is multiple of 60', () => {
    expect(getDuration(60)).toEqual('1 min');
    expect(getDuration(120)).toEqual('2 min');
    expect(getDuration(180)).toEqual('3 min');
    expect(getDuration(300)).toEqual('5 min');
  });

  it('should return only seconds if input is smaller than 60', () => {
    expect(getDuration(59)).toEqual('59 sec');
    expect(getDuration(40)).toEqual('40 sec');
    expect(getDuration(1)).toEqual('1 sec');
  });

  it('should return only minutes if input is not multiple of 60', () => {
    expect(getDuration(61)).toEqual('1 min 1 sec');
    expect(getDuration(90)).toEqual('1 min 30 sec');
    expect(getDuration(123)).toEqual('2 min 3 sec');
  });

  it('should return "instant" if input is 0', () => {
    expect(getDuration(0)).toEqual('instant');
    expect(getDuration(-0)).toEqual('instant');
  });

  it('should works with a decimal input', () => {
    expect(getDuration(0.5)).toEqual('0.5 sec');
    expect(getDuration(4.5)).toEqual('4.5 sec');
    expect(getDuration(60.5)).toEqual('1 min 0.5 sec');
  });
});
