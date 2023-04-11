import { APIRequestContext } from '@playwright/test';
import { BaseHandler } from '@BaseHandler';
import { NewUserBuilder } from 'builders/New_User_Builder';


export class SignInIS extends BaseHandler {

    public apiContext: APIRequestContext;
    private UserEnvVars = this.envVars.identity_service;
    private Host = this.UserEnvVars[this.stage_selected].host;
    private singUpServiceRoutes = this.UserEnvVars;

    public async sign_up_IS(userInfo) {
        this.apiContext = await this.setUp(this.Host);
        let payload = {
            data: {
                email: userInfo.email,
                password: userInfo.password,
            }
        };
        const response = await(this.apiContext).post(this.singUpServiceRoutes.route_sign_up, payload);
        return await this.responseDecorator(response, userInfo);
    }
}