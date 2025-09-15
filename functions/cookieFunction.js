import Cookies from "js-cookie"
const CookieFunction = (
    type,
    name,
    value,
    expires = 365,
    callback = () => { },
) => {
    console.log('nameeee', name);
    if (type == 'set') {
        Cookies.set(name, value, { expires: expires });
        callback();
    }
    if (type == 'remove') {
        Cookies.remove(name);
    }
    if (type == 'get') {
        return Cookies.get(name) ? Cookies.get(name) : undefined;
    }
};

export default CookieFunction;