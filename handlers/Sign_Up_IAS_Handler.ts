import { APIRequestContext } from '@playwright/test';
import { BaseHandler } from '@BaseHandler';



export class SignInIS extends BaseHandler {

    public apiContext: APIRequestContext;
    private UserEnvVars = this.envVars.identity_access_service;
    private Host = this.UserEnvVars[this.stage_selected].host;
    private singUpServiceRoutes = this.UserEnvVars;

    public async signUpIAS(userInfo,user_id) {
        this.apiContext = await this.setUp(this.Host);
        let payload = {
            data: {
                email: userInfo.email,
                password: userInfo.password,
                user_id: user_id
            }
        };
        const RESPONSE = await(this.apiContext).post(this.singUpServiceRoutes.route_sign_up, payload);
        return await this.responseDecorator(RESPONSE, userInfo);
    }
}