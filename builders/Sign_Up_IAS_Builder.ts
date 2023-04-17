import { SignInIS } from '@SignInIAShandlers';

export class SignInIdentityAccessService {

    private userID: string;

    public async build(userInfo, user_id) { 
        const SignInservice = new SignInIS();
        const createSignInResponse = await SignInservice.signUpIAS(userInfo, user_id);
        return createSignInResponse.rsJSON;
    }
    
}