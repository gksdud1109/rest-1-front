export function fetchApi(url: string){
    return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/posts`).then(res => res.json());
}