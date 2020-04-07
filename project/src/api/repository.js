import { postJson} from './APIutils';

export function login(loginRequest) {
    return postJson("/api/login", loginRequest);
}