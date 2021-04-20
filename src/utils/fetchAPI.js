export const fetchAPI = (url, options) => {

    let headers;
    headers = {
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Credentials': 'true',
        // 'Access-Control-Allow-Methods': '*',
        // 'Access-Control-Allow-Headers': 'Content-Type',
        // 'Access-Control-Expose-Headers': '*',
        // 'Content-Type': 'application/json; charset=utf-8',
    }
    // options = {...options, headers, mode:'no-cors', method:'GET',}
    options = {...options, headers }
    let API;
    API = `https://www.metaweather.com/api/${url}`;

    return fetch(API, options)
        .then(checkStatus)
        .then(convertRes)
}

const checkStatus = response => {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        return convertRes(response).then((res) => {
            throw res
        })
    }
}

const convertRes = res => {
    const contentType = res.headers.get('Content-Type');
    let resParse
    if(contentType != null) {
        if(contentType.indexOf('text') > -1) {
            resParse = res.text()
        }
        if(contentType.indexOf('form') > -1) {
            resParse = res.formData();
        }
        if(contentType.indexOf('video') > -1) {
            resParse = res.blob();
        }
        if(contentType.indexOf('json') > -1) {
            resParse = res.json();
        }
    }
    return resParse
}