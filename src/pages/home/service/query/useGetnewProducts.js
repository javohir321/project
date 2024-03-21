import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetnewProducts = (slug) => {
  return useQuery({
    queryKey: ["newProduct", slug],
    queryFn: () =>
      request
        .get(`/${slug}`, { params: { _limit: 8 } })
        .then((res) => res.data),
  });
};
