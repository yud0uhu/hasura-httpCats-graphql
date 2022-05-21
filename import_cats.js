const {Client}  = require('graphqurl');

const client = new Client({
    endpoint: 'http://localhost:8080/v1/graphql',
    headers: {
        'Content-Type': 'application/json',
        'X-Hasura-Access-Key':'httpCat',
    }
})
const statuses = [
    { code: 100, message: 'Continue' },
    { code: 101, message: 'Switching Protocols' },
    { code: 102, message: 'Processing' },
    { code: 200, message: 'OK' },
    { code: 201, message: 'Created' },
    { code: 202, message: 'Accepted' },
    { code: 203, message: 'Non-Authoritative Information' },
    { code: 204, message: 'No Content' },
    { code: 206, message: 'Partial Content' },
    { code: 207, message: 'Multi-Status' },
    { code: 300, message: 'Multiple Choices' },
    { code: 301, message: 'Moved Permanently' },
    { code: 302, message: 'Found' },
    { code: 303, message: 'See Other' },
    { code: 304, message: 'Not Modified' },
    { code: 305, message: 'Use Proxy' },
    { code: 307, message: 'Temporary Redirect' },
    { code: 308, message: 'Permanent Redirect' },
    { code: 400, message: 'Bad Request' },
    { code: 401, message: 'Unauthorized' },
    { code: 402, message: 'Payment Required' },
    { code: 403, message: 'Forbidden' },
    { code: 404, message: 'Not Found' },
    { code: 405, message: 'Method Not Allowed' },
    { code: 406, message: 'Not Acceptable' },
    { code: 407, message: 'Proxy Authentication Required' },
    { code: 408, message: 'Request Timeout' },
    { code: 409, message: 'Conflict' },
    { code: 410, message: 'Gone' },
    { code: 411, message: 'Length Required' },
    { code: 412, message: 'Precondition Failed' },
    { code: 413, message: 'Payload Too Large' },
    { code: 414, message: 'Request-URI Too Long' },
    { code: 415, message: 'Unsupported Media Type' },
    { code: 416, message: 'Request Range Not Satisfiable' },
    { code: 417, message: 'Expectation Failed' },
    { code: 418, message: 'I’m a teapot' },
    { code: 420, message: 'Enhance Your Calm' },
    { code: 421, message: 'Misdirected Request' },
    { code: 422, message: 'Unprocessable Entity' },
    { code: 423, message: 'Locked' },
    { code: 424, message: 'Failed Dependency' },
    { code: 425, message: 'Too Early' },
    { code: 426, message: 'Upgrade Required' },
    { code: 429, message: 'Too Many Requests' },
    { code: 431, message: 'Request Header Fields Too Large' },
    { code: 444, message: 'No Response' },
    { code: 450, message: 'Blocked by Windows Parental Controls' },
    { code: 451, message: 'Unavailable For Legal Reasons' },
    { code: 497, message: 'HTTP Request Sent to HTTPS Port' },
    { code: 498, message: 'Token expired/invalid' },
    { code: 499, message: 'Client Closed Request' },
    { code: 500, message: 'Internal Server Error' },
    { code: 501, message: 'Not Implemented' },
    { code: 502, message: 'Bad Gateway' },
    { code: 503, message: 'Service Unavailable' },
    { code: 504, message: 'Gateway Timeout' },
    { code: 506, message: 'Variant Also Negotiates' },
    { code: 507, message: 'Insufficient Storage' },
    { code: 508, message: 'Loop Detected' },
    { code: 509, message: 'Bandwidth Limit Exceeded' },
    { code: 510, message: 'Not Extended' },
    { code: 511, message: 'Network Authentication Required' },
    { code: 521, message: 'Web Server Is Down' },
    { code: 522, message: 'Connection Timed Out' },
    { code: 523, message: 'Origin Is Unreachable' },
    { code: 525, message: 'SSL Handshake Failed' },
    { code: 599, message: 'Network Connect Timeout Error' },
]
const createCats = 
  `mutation ($id: Int, $status_code: Int) {
    insert_cats (objects: [
        {
          id: $id,
          status_code: $status_code
        }
      ]) {
      affected_rows
      returning {
        id
        status_code
      }
    }
  }`

statuses.forEach(async value=>{
    const catsDatails = {
        id: value.code,
        status_code: value.code,
    }

    await client.query(createCats, catsDatails).catch(error =>{
        console.log(error)
    })
    StatusDescription
})