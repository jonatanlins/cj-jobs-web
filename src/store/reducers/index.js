import { combineReducers } from 'redux';

import jobs from './jobs';
import candidato from './candidato';
import contratantes from './contratantes';
import candidatos from './candidatos';

export default combineReducers({ jobs, candidato, contratantes, candidatos });
