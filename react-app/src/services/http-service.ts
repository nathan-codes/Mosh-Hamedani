import apiClient from "./api-client";




class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  // Get All Users
  getAll<T>() {
    const controller = new AbortController();

    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });

    const cancel = () => controller.abort();
    return { request, cancel };
  }
    // Delete a User
    delete(id: number) {
      return apiClient.delete(this.endpoint +"/"+ id);
    }

    // Add a User
    create<T>(entity: T) {
      return apiClient.post(this.endpoint, entity);
    }

    // Update a User
    update<T>(id: number, entity: T) {
      return apiClient.patch(`${this.endpoint}/${id}`, entity);
    }
}

const create = (endpoint:string) => new HttpService(endpoint)

export default create;