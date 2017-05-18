import {leftPad} from './left-pad';

/**
 * Lambda function
 *
 * @param event
 * @param context
 * @param cb Callback when invoked as RequestResponse
 */
export function handle(event, context, cb) {

  const {str, len, ch} = event;

  if (len < 0) {
    cb('Variable "len" must be a positive number')
  } else if (!ch) {
    cb('Missing variable "ch"')
  } else {
    cb(null, leftPad(str.toString(), len, ch));
  }
}

