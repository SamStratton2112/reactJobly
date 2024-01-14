import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

    /** Get details on a company by handle. */
  static async getCompanyJobs(handle) {
    let res = await this.request(`companies/${handle}`);
    console.log(res)
    return res.company.jobs;
    }

  /** Get list of all companies */
  static async getCompanies() {
    let res = await this.request(`companies`);
    return res.companies;
  }

  /** Get list of all jobs */
  static async getJobs() {
    let res = await this.request(`jobs`);
    return res.jobs;
  }

  /** Get list of all users */
  static async getUsers() {
    let res = await this.request(`users`);
    return res.users;
  }

  /** Get a users details by username*/
  // static async getUser(username) {
  //   let res = await this.request(`users/${username}`);
  //   return res.user;
  // }
  
  // static async updateUser(username, data, method="patch"){
  //   let res = await this.request(`users/${username}`);
  //   return res.user;
  // }
}

// for now, put token ("testuser" / "password" on class)
JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RhZG1pbiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNTA5MTU3NX0.RLe5rxTtqMEnmv9aE9KxAWhXTSiL4QWeFr_ly5sTuS0";

export default JoblyApi;