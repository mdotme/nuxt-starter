/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FetchRequest, FetchOptions } from "ofetch";

export function useApi() {
  const { $api } = useNuxtApp();

  function get<T = any>(
    url: FetchRequest,
    options?: Omit<FetchOptions<"json">, "method">,
  ) {
    return $api<T>(url, { ...options, method: "GET" });
  }

  function post<T = any, D = any>(
    url: FetchRequest,
    data?: D,
    options?: Omit<FetchOptions<"json">, "body" | "method">,
  ) {
    return $api<T>(url, {
      ...options,
      method: "POST",
      body: data ?? undefined,
    });
  }

  function put<T = any, D = any>(
    url: FetchRequest,
    data?: D,
    options?: Omit<FetchOptions<"json">, "body" | "method">,
  ) {
    return $api<T>(url, {
      ...options,
      method: "PUT",
      body: data ?? undefined,
    });
  }

  function patch<T = any, D = any>(
    url: FetchRequest,
    data?: D,
    options?: Omit<FetchOptions<"json">, "body" | "method">,
  ) {
    return $api<T>(url, {
      ...options,
      method: "PATCH",
      body: data ?? undefined,
    });
  }

  function $delete<T = any>(
    url: FetchRequest,
    options?: Omit<FetchOptions<"json">, "method">,
  ) {
    return $api<T>(url, { ...options, method: "DELETE" });
  }

  return { get, post, put, patch, delete: $delete, $api };
}
