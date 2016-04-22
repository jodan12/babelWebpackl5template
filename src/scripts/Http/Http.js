import {get, post, put, patch, remove} from './Methods';

const Http = {
    get,
    post,
    put,
    patch,
    delete: remove
};

export default Http;
