import { postJson} from './APIutils';

export function loginRequest(loginRequest) {
    return postJson("/api/login", loginRequest);
}

export function registerRequest(registerRequest) {
    return postJson("/api/register", registerRequest);
}

export function checkTokenRequest(checkTokenRequest) {
    return postJson("/api/check-token", checkTokenRequest);
}