import { postJson} from './APIutils';

export function login(loginRequest) {
    return postJson("/api/login", loginRequest);
}

export function register(registerRequest) {
    return postJson("/api/register", registerRequest);
}