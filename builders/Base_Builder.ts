export class BaseBuilder {
    public overrideData (defaultData: object, newData: object) {
        return Object.assign(defaultData, newData);
    }
}
