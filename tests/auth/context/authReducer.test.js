
import { authReducer, types } from '../../../src/auth';

describe('Test in authReducer', () => {

  const initialState = {
    logged: false,
    user: null
  };

  test('it should return the initial state', () => {
    const state = authReducer(initialState, {});
    expect(state).toEqual(initialState);
  });

  test('should return the user logged and the state', () => {
    const action = {
      type: types.login,
      payload: {
        id: 'ABC',
        name: 'Javier Sáez'
      }
    };

    const state = authReducer(initialState, action);
    expect(state).toEqual({
      logged: true,
      user: action.payload
    });
  });

  test('should logout the user and the state', () => {

    const initialState = {
        logged: true,
        user: {
          id: 'ABC',
          name: 'Javier Sáez'
        }
      };
    
    const action = {
      type: types.logout
    };

    const state = authReducer(initialState, action);
    expect(state).toEqual({ logged: false});    
    expect(state.name).toBeUndefined();
    expect(state.logged).toBeFalsy();
  });
});
