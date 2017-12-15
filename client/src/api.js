const APIURL = '/api/todos'

export async function getTodos() {
    return fetch(APIURL)
    .then(resp => {
        if(!resp.ok) {
            if(resp.status >= 400 && resp.status < 500) {
                return resp.json().then(data => {
                    let err = {errorMessage: data.message};
                    throw err;
                })
            } else {
                let err = {errorMessage: 'Try again later, server is not responding'};
                throw err;
            }
        }
        return resp.json();
    })
}

export async function createTodo(val) {
    return fetch(APIURL, {
        method: 'post',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify({ name: val })
    })
        .then(resp => {
            if(!resp.ok) {
                if(resp.status >= 400 && resp.status < 500) {
                    return resp.json().then(data => {
                        let err = {errorMessage: data.message};
                        throw err;
                    })
                } else {
                    let err = {errorMessage: 'Try again later, server is not responding'};
                    throw err;
                }
            }
            return resp.json();
        })
}

export async function removeTodo(id) {
    const deleteURL = APIURL + '/' + id;
    return fetch(deleteURL, {
        method: 'delete',
    })
        .then(resp => {
            if(!resp.ok) {
                if(resp.status >= 400 && resp.status < 500) {
                    return resp.json().then(data => {
                        let err = {errorMessage: data.message};
                        throw err;
                    })
                } else {
                    let err = {errorMessage: 'Try again later, server is not responding'};
                    throw err;
                }
            }
            return resp.json();
        })
}

export async function updateTodo(id, completed) {
    const updateURL = APIURL + '/' + id;
    return fetch(updateURL, {
        method: 'put',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({ completed: !completed })
    })
        .then(resp => {
            if(!resp.ok) {
                if(resp.status >= 400 && resp.status < 500) {
                    return resp.json().then(data => {
                        let err = {errorMessage: data.message};
                        throw err;
                    })
                } else {
                    let err = {errorMessage: 'Try again later, server is not responding'};
                    throw err;
                }
            }
            return resp.json();
        })
}