import http from "./httpService";
import { getHeaders } from "./authService";

const apiEndpoint = "/products";

const headers = getHeaders();

export function getProducts(category?: string | undefined) {
  if (!category) return http.get<ProductTypes[]>(apiEndpoint);
  else return http.get<ProductTypes[]>(`${apiEndpoint}?category=${category}`);
}

export function getProduct(id: string | undefined) {
  return http.get<ProductTypes>(`${apiEndpoint}/${id}`);
}

export function saveProduct(request: SaveProductTypes, productId?: string) {
  if (productId)
    return http.put(`${apiEndpoint}/${productId}`, request, headers);

  return http.post(apiEndpoint, request, headers);
}

export function deleteProduct(id: string) {
  return http.delete(`${apiEndpoint}/${id}`, headers);
}

export function demo(request: SaveProductTypes) {
  return http.post(`${apiEndpoint}/demo`, request, headers);
}
