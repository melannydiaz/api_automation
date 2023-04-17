import { test, expect } from '@playwright/test';
import { SignInIdentityAccessService } from '@SingInIASBuilder';
import { SignInIdentityService } from '@SignInISBuilder';
import { LogInIdentityAccessService } from '@LogInIASBuilder';
import { NewUserBuilder } from '@UserBuilder';
import { BaseTest } from '@BaseTest';

test('Login with IAS service', async ({  }) => {
  const BASE_TEST = new BaseTest();
  const userInfo = new NewUserBuilder().build();
  const SignInIAS = new SignInIdentityAccessService();
  const SignInIS = new SignInIdentityService();
  const LogInIAS = new LogInIdentityAccessService();
  const userID = await SignInIS.build(userInfo);
  await SignInIAS.build(userInfo, userID);
  const jsonResponse = await LogInIAS.build(userInfo);
  BASE_TEST.expectedHTTPCode(jsonResponse.rsCode, 200);
});


