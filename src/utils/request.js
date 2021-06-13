export const TOKEN_STORAGE_KEY = "token";
export const USER_ID_STORAGE_KEY = "userId";
export const IS_ENTERPRISE_STORAGE_KEY = "isEnterprise";


export default async function request(
  url,
  options = { method: "GET", data: null }
) {
  try {
    // Define basic fetch options (method & accept header)
    let queryOptions = {
      method: options.method,
      headers: {
        Accept: "application/json",
      },
    };

    // For POST, PATCH & PUT, add the content-type & body
    if (["POST", "PATCH", "PUT", "DELETE"].includes(options.method)) {
      queryOptions.headers["Content-Type"] = "application/json";
      if(options.data) {
        queryOptions.body = JSON.stringify(options.data)
      } else {
        queryOptions.body = ""
      }
    }

    // Get token from local storage
    let token = localStorage.getItem(TOKEN_STORAGE_KEY);

    // Add token to the headers
    if (token) queryOptions.headers["Authorization"] = `Bearer ${token}`;

    // Execute the request
    let response = await fetch(url, queryOptions);

    // Check if everything went well
    if (response.ok) {
      let json = await response.json();
      return json;
    } else {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
  } catch (e) {
    throw e; // Just throw for now, decide where you want to handle errors
  }
}
