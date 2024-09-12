import require from '../utils/require';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const getUser = (data: any) => {
    return require({
        url: 'user/list',
        method: 'get',
        params: data
    })
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const editUser = (data: any) => {
    return require({
        url: 'user/edit',
        method: 'post',
        data
    })
}