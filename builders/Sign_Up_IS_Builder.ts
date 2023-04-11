import { SignInIS } from '@SignInIShandlers';

export class SignInIdentityService {

    private userID: string;

    public withUserID( newUserID: string) { 
        this.userID = newUserID
    }

    public async build(userInfo) { 
        const SignInservice = new SignInIS();
        const createSignInResponse = await SignInservice.sign_up_IS(userInfo);
        console.log(createSignInResponse);
        console.log(createSignInResponse.rsJSON.data);
        const userID = await createSignInResponse.rsJSON.data.user_id;
        return userID;
    }
    
}