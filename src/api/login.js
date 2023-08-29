export function login(response) {
    const token = response.data.token;
    delete response.data.token;
    return {token,user: {...response.data}};
}
