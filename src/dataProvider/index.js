import adminInstance from "./axios";

const InstanceTypeMapping = {
  adminInstance,
};

const fetcher = (instanceType) => {
  let axios = InstanceTypeMapping[instanceType];

  return {
    get: async (url, params = {}) => {
      return axios
        .request({
          url,
          method: "GET",
          params,
        })
        .then((response) => {
          return response;
        })
        .catch((err) => {
          throw err;
        });
    },
    /**
     * @function post To create a resource
     * @returns Promise
     */
    post: async (url, data, params = {}) => {
      return axios
        .request({
          url,
          method: "POST",
          data,
          params,
        })
        .then((response) => {
          return response;
        })
        .catch((err) => {
          throw err;
        });
    },
    /**
     * @function put To update a full data of resource
     * @returns Promise
     */
    put: async (url, data, params = {}) => {
      return axios
        .request({
          url,
          method: "PUT",
          data,
          params,
        })
        .then((response) => {
          return response;
        })
        .catch((err) => {
          throw err;
        });
    },
    /**
     * @function patch To update partial data of a resource
     * @returns Promise
     */
    patch: async (url, data, params = {}) => {
      return axios
        .request({
          url,
          method: "PATCH",
          data,
          params,
        })
        .then((response) => {
          return response;
        })
        .catch((err) => {
          throw err;
        });
    },
    /**
     *@function delete To delete the resource
     * @returns Promise
     */
    delete: async (url, params = {}, data = {}) => {
      return axios
        .request({
          url,
          method: "DELETE",
          params: params,
          data,
        })
        .then((response) => {
          return response;
        })
        .catch((err) => {
          throw err;
        });
    },
  };
};

export default fetcher;
