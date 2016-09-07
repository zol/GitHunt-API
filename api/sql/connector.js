import knex from 'knex';
import {
  development,
  production,
} from '../../knexfile';

// Eventually we want to wrap Knex to do some batching and caching, but for
// now this will do since we know none of our queries need it

let knexInstance;
if (process.env.NODE_ENV === 'production') {
  knexInstance = knex(production);
} else {
  knexInstance = knex(development);
}

export default knexInstance;
