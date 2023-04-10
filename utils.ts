import {v4 as uuidv4} from 'uuid';
import * as randomEmail from 'random-email';

export function getCustomUUID(length = 19) {
    return (uuidv4().replaceAll('-','')).substr(0,length);
}

export function generateRandNumber(length = 10) {
    return String(Math.floor(new Date().getTime() / 1000)).substring(0, length);
}

export function replacePathParam(originalString: string, pathParam: string, valuePathParam: string) {
    return originalString.replace(pathParam, valuePathParam);
}

export function generateRandEmail() {
    return String("melanny100@kueski.com");
}