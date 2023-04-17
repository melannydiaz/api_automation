import { BaseBuilder } from '@BaseBuilder';
import { generateRandEmail} from '@utils';

export class NewUserBuilder extends BaseBuilder {
    public build() {
        return {
            email: generateRandEmail(),
            password: 'Test12345'
        }
    }
}