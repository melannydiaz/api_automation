import { APIRequestContext } from '@playwright/test';
import { BaseHandler } from '@BaseHandler';



export class LogInIAS extends BaseHandler {

    public apiContext: APIRequestContext;
    private UserEnvVars = this.envVars.identity_access_service;
    private Host = this.UserEnvVars[this.stage_selected].host;
    private singUpServiceRoutes = this.UserEnvVars;

    public async log_in_IAS(userInfo) {
        this.apiContext = await this.setUp(this.Host);
        let payload = {
            data: {
                email: userInfo.email,
                password: userInfo.password
            }
        };
        const response = await(this.apiContext).post(this.singUpServiceRoutes.route_log_in, payload);
        console.log(userInfo);
        return await this.responseDecorator(response, userInfo);
    }
}