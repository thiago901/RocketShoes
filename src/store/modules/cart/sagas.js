import { call, select ,put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { addToCartSucess,updateAmount } from './actions';
import {formatPrice} from '../../../util/format';

function* addToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`);

  const productExist = yield select(state=> state.cart.find(p=>p.id===id));

  const stock = yield call(api.get,`/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExist?productExist.amount:0;

  const amount = currentAmount+1;



  if(currentAmount>stockAmount){
    console.tron.warn('erro');
  }
  console.log(currentAmount +' - '+stockAmount);
  console.log(currentAmount>stockAmount);

  if(productExist){

    yield put(updateAmount(id,amount));
  }else{
    const data = {
      ...response.data,
      amount:1,
      priceFormatted:formatPrice(response.data.price)

    }
    yield put(addToCartSucess(data));

  }

}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
