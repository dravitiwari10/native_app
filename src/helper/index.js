getCommonHeaders = () => {
  const token='';
    let commonHeaders = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    };
    if (token) {
      commonHeaders = {...commonHeaders, 
        "authkey": token
     };
    }
    return commonHeaders;
  };
  
  
  export async function ApiRequest(endUrl, method, headers, body){
    try{ 
          let requestHeaders = getCommonHeaders();
          if (headers) {
            requestHeaders = {...requestHeaders, ...headers};
          }
          const options = {
          method: method,
          headers: requestHeaders,
          body: body
        };
        console.log("options",options)
        console.log("url",endUrl)
          try{
            return fetch(endUrl, options)
            .then((response) => response.json())
            .then((responseJson) => {
              console.log('response',responseJson)
                return responseJson;
                    })
          }catch (e) {
             console.log('error',e) 
          }
      } catch (e) {
      console.log('eee',e)
      }
  }