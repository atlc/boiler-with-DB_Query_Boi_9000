const fetchr = (path: string, method: string = "GET", body?: BodyInit | undefined) => {
    const token = localStorage.getItem("token");
    const headers: HeaderParams = {};

    if (token) headers['Authorization'] = `Bearer ${token}`;
    headers['Content-type'] = 'application/json';

    if (method === 'GET') {
        delete headers['Content-type'];
    }

    if (body) {
        body = JSON.stringify(body);
    }

    return fetch(path, { method, headers, body })
    .then(res => {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error ('Fetch error YO')
        }
    })
    .catch(e => alert(e));
}

export const GET = (path: string) => fetchr(path);
export const POST = (path: string, data: BodyInit | any) => fetchr(path, "POST", data);
export const PUT = (path: string, data: BodyInit | any) => fetchr(path, "PUT", data);
export const DELETE = (path: string, data: BodyInit | any) => fetchr(path, "DELETE", data);

interface HeaderParams {
    [key: string]: string;
}