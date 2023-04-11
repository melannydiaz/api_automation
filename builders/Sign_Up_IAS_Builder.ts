import { SignInIS } from '@SignInIAShandlers';

export class SignInIdentityAccessService {

    private userID: string;

    public async build(userInfo, user_id) { 
        const SignInservice = new SignInIS();
        const createSignInResponse = await SignInservice.sign_up_IAS(userInfo, user_id);
        return createSignInResponse.rsJSON;
    }
    
}