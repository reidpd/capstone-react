import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import keyEventsReducer from './keyEvents_reducer';
import targetNoteReducer from './targetNote_reducer';
import targetNoteIndexReducer from './targetNoteIndex_reducer';
import sungNoteReducer from './sungNote_reducer';
import recordingStatusReducer from './recordingStatus_reducer';
import greenTimeReducer from './greenTime_reducer';
import scoreReducer from './score_reducer';
import exerciseScoresReducer from './exerciseScores_reducer';
import allPastExercisesReducer from './allPastExercises_reducer';
import { captureReducer, octaveReducer, currentNoteReducer } from './interface';
import signupReducer from './signUp';
import loginReducer from './login';

const rootReducer = combineReducers({
  form: formReducer,
  currentNoteReducer,
  captureReducer,
  octaveReducer,
  greenTimeReducer,
  scoreReducer,
  exerciseScoresReducer,
  allPastExercisesReducer,
  keyEventsReducer,
  targetNoteReducer,
  targetNoteIndexReducer,
  sungNoteReducer,
  recordingStatusReducer,
  signupReducer,
  loginReducer,
});


export default rootReducer;
