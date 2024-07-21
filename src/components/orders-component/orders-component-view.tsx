"use client";
import Image from "next/image";
import React from "react";

const OrdersComponentView: React.FC<{ data: any }> = ({ data = [] }) => {
  return (
    <div className="flex justify-center p-4">
      <div className="md:w-4/5 flex flex-col gap-4">
        {data?.map((orders: any) => {
          return (
            <div key={orders?._id} className="flex flex-col gap-4">
              {orders.orderItems.map((order: any) => {
                return (
                  <div
                    key={order?._id}
                    className="p-2 rounded-md shadow-md flex"
                  >
                    <div className="rounded-md">
                      <Image
                        src={order.image}
                        alt=""
                        width={200}
                        height={200}
                        className="overflow-hidden rounded-md"
                      />
                    </div>
                    <div className="px-4 flex justify-between w-full">
                      <div className="flex flex-col gap-[2px] ">
                        <p className="text-[#8D2D2E] font-semibold text-md">
                          Order Id: <span>{order?._id}</span>
                        </p>
                        <h3 className="text-md text-black">
                          {order?.name || ""}
                        </h3>
                        <p className="text-md font-bold">
                          Price : <span>Rs. {order?.price}</span>
                        </p>
                      </div>
                      <div>
                        <div
                          className={`px-6 py-2 rounded-full ${
                            orders?.orderStatus !== "delivered"
                              ? "bg-[#FFF2E5]"
                              : "bg-[#E9F1DA]"
                          }`}
                        >
                          <p
                            className={`font-semibold ${
                              orders?.orderStatus !== "delivered"
                                ? "text-[#E49142]"
                                : "text-[#7C9E33]"
                            }`}
                          >
                            {orders?.orderStatus.charAt(0).toUpperCase() +
                              orders?.orderStatus.slice(1)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrdersComponentView;
