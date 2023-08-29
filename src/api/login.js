export function login(data) {
    const token = data.token;
    delete data.token;
    return {token,user: {...data}};
}
