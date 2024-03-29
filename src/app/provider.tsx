"use client";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClientProvider } from "@tanstack/react-query";
import type { FC, PropsWithChildren } from "react";
import { WagmiProvider } from "wagmi";

import { queryClient } from "@acne-shop/configs/query";
import { web3Config } from "@acne-shop/configs/web3";
import { useInitIsMounted } from "@acne-shop/shared/hooks";

const RootProvider: FC<PropsWithChildren> = ({ children }) => {
  useInitIsMounted();

  return (
    <WagmiProvider config={web3Config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact">
          <AntdRegistry>{children}/</AntdRegistry>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export { RootProvider };
