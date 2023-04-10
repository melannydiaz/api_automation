import { SignInIS } from 'handlers/Sign_UpH';

export class SignInIdentityService {

    private userID: string;

    public withUserID( newUserID: string) { 
        this.userID = newUserID
    }

    public async build() { 
        const SignInservice = new SignInIS();
        const createSignInResponse = await SignInservice.sign_up_IAS();
        const userID = await createSignInResponse.rsJSON.data.user_id;
        return userID;
    }
    
}