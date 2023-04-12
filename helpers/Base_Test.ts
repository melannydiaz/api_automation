import { expect } from '@playwright/test';
import { CONSTANTS } from '@constants';

// TODO: Consider move to models
interface responseSuccessJSONFormat {
    status: string,
    code: string,
    message: string
}


export class BaseTest {
    
    public expectedHTTPCode(actual_code: number, expected_code: number) {
        expect(actual_code, `HTTP Code should be ${expected_code}`).toEqual(expected_code)
    }

    public expectedSuccessJSONFormat(actual_response: responseSuccessJSONFormat, override_values?: responseSuccessJSONFormat,) {
        let expected_values: responseSuccessJSONFormat = override_values || {
                                                            status: CONSTANTS.successResponseJSONFormat.STATUS,
                                                            code: CONSTANTS.successResponseJSONFormat.CODE,
                                                            message: CONSTANTS.successResponseJSONFormat.MESSAGE
                                                         };

        expect(expected_values.code, `Code should be ${expected_values.code}`).toEqual(actual_response.code);
        expect(expected_values.status, `Status should be ${expected_values.status}`).toEqual(actual_response.status);
        expect(expected_values.message, `Message should be ${expected_values.message}`).toEqual(actual_response.message);
    }

}
