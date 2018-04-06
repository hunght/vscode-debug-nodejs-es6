import R from 'ramda';

const filters = {
  country: {
    Croatia: false,
    Cyprus: true,
    Greece: false,
  },
  price: {
    '<1000': true,
    '<200': false,
    '<50': false,
    '<500': false,
    '>=1000': false,
  },
  type: {
    culture: true,
    food: false,
    nature: true,
    service: false,
    sports: true,
    water: true,
    wellness: false,
  },
};

const valueIsTrue = R.compose(R.keys, R.pickBy(val => val === true));
const result = R.compose(
  R.flatten,
  R.values,
  R.mapObjIndexed((val, key) => valueIsTrue(val).map(val => key + ':' + val))
)(filters);

console.log('result', result);
