import {leftPad} from '../src/left-pad';
import {equal} from 'assert';

describe('Left-pad', () => {
  it('should return "****1"', () => {
    const res = leftPad('1', 4, '*');
    equal(res, '****1');
  });
});
