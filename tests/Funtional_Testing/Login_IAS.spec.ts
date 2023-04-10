import { test, expect } from '@playwright/test';
import { SignInIdentityService } from 'builders/Sign_UpB';


test('Login with IAS service', async ({  }) => {
  const SignInIS = new SignInIdentityService();
  const clientID = await SignInIS.build();

});


