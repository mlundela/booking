import {repeat} from 'lodash/string';

export function leftPad(str, length, ch) {
  return repeat(ch, length) + str;
}
