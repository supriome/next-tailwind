//Helper method to wait for a middlewware to execute before continuiing 
//And to throw an error whien an error happens in a middleware

export default function initMiddleware(middleware) {
    return (req, res) => 
        new Promise((resolve, reject) => {
            middleware(req, res, (result) => {
                if(result instanceof Error) {
                    return reject(result)
                }
                return resolve(result)
            })
        })   
}