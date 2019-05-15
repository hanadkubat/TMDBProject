export default class Request {
    execute = () =>
        fetch(this.params.url, {
            method: this.params.method,
            headers: { ...this.params.headers }
        }).then(async (res) => {
            if (res.ok) return res
            else {
                let toThrow = {
                    code: res.status,
                    ...(await res.json()),
                }
                throw toThrow
            }
        })
    constructor(method, url, body, headers) {
        this.params = { method, url, body, headers }
    }
}