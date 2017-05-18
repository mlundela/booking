import {repeat} from 'lodash/string';

export function leftPad(str, len, ch) {
  return repeat(ch, len) + str;
}
