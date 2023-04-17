import { SignInIS } from '@SignInIShandlers';

export class SignInIdentityService {

    private userID: string;

    public withUserID( newUserID: string) { 
        this.userID = newUserID
    }

    public async build(userInfo) { 
        const SignInservice = new SignInIS();
        const createSignInResponse = await SignInservice.signUpIS(userInfo);
        const USERID = await createSignInResponse.rsJSON.data.user_id;
        return USERID;
    }
    
}