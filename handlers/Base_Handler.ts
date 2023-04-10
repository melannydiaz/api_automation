import { request } from '@playwright/test';
import * as YAML from 'js-yaml'
import * as fs from 'fs'

export class BaseHandler {

    public pathEnvironments = './environments.yaml';  
    public envVars =  YAML.load(fs.readFileSync(this.pathEnvironments, 'utf8'));
    public stage_selected = process.env.STAGE_SELECTED || 'local';

    public async setUp(host: string, headers = { contentType: 'application/json'} ) {
        return await request.newContext({
          baseURL: host,
          extraHTTPHeaders: {
            Accept: 'application/json',
          },
        });
    }

    public async responseDecorator(response: any, requestData: object = { }) {
      return {
        rsJSON: await response.json(),
        rsCode: await response.status(),
        rsHeaders: await response.headers(),
        rsRequestData: requestData
      };
    }
}
