import { userFetcherWithAuth } from "@/helpers";
import { TRACK_ORDER } from "@/store/billing/order.queries";
import { useMutation } from "react-query";
import { message } from "antd";

function useTrackOrder() {
  return useMutation(
    (orderId: string) => userFetcherWithAuth(TRACK_ORDER, { orderId }, orderId),
    {
      onSuccess: (data) => {
        message.success(data.trackOrder.message);
      },
      onError: (err) => {
        message.error((err as { message: string }).message);
      },
    }
  );
}

export default useTrackOrder;
