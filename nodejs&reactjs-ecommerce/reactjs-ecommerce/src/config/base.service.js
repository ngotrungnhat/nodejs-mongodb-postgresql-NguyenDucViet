import instance from './axios';

export default class BaseCallApi {
    constructor(path) {
        this.path = path;
    }
    get(params) {
        return instance.get(this.path, { params });
    }
    post(body) {
        return instance.post(this.path, body);
    }
    // put(id) {
    //     return instance.put(this.path + id);
    // }
    // patch(id, param) {
    //     return instance.patch(this.path + "/" + id, param);
    // }
    // delete(id) {
    //     return instance.delete(this.path + "/" + id);
    // }
}