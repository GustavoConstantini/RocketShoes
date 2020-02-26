import { all } from 'redux-saga/effects';

import cart from './cart/sagas';

export default function* rootsaga() {
  return yield all([cart]);
}
