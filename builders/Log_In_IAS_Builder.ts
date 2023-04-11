import { LogInIAS } from '@LogInIAShandlers';

export class LogInIdentityAccessService {

    private userID: string;


    public async build(userInfo) { 
        const LogInservice = new LogInIAS();
        const createLogInResponse = await LogInservice.log_in_IAS(userInfo);
        return createLogInResponse.rsJSON;
    }
    
}