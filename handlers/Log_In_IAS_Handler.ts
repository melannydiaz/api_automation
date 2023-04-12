import { APIRequestContext } from '@playwright/test';
import { BaseHandler } from '@BaseHandler';



export class LogInIAS extends BaseHandler {

    public apiContext: APIRequestContext;
    private UserEnvVars = this.envVars.identity_access_service;
    private Host = this.UserEnvVars[this.stage_selected].host;
    private singUpServiceRoutes = this.UserEnvVars;

    public async logInIAS(userInfo) {
        this.apiContext = await this.setUp(this.Host);
        let payload = {
            data: {
                email: userInfo.email,
                password: userInfo.password
            }
        };
        const RESPONSE = await(this.apiContext).post(this.singUpServiceRoutes.route_log_in, payload);
        return await this.responseDecorator(RESPONSE);
    }
}