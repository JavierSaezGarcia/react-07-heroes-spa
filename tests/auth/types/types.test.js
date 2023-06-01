import { types } from "../../../src/auth";

describe('Testing Auth.Types', () => {

  test('It should contain the correct login type', () => {
    expect(types.login).toEqual('[Auth] Login');
  });

  test('It should contain the correct logout type', () => {
    expect(types.logout).toEqual('[Auth] Logout');
  });
  
});