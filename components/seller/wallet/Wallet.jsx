import React, { useState } from "react";
import { Drawer } from "antd";
import WithdrawFunds from "./WithdrawFunds";
import WalletHeader from "./WalletHeader";
import WalletCard from "./WalletCard";
import WalletContent from "./WalletContent";

export default function Wallet() {
  const [visible, setVisible] = useState(false);

  return (
    <section className="tw-mt-4 tw-p-4 tw-shadow-sm">
      <Drawer
        title="Withdraw Funds"
        placement={"right"}
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
        key={"right"}
        closable={true}
        size="large"
        width="75%"
        className="tw-w-3/4 lg:tw-w-1/2"
      >
        <WithdrawFunds />
      </Drawer>
      <WalletHeader setVisible={setVisible} />
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-5 tw-mt-4">
        <WalletCard
          name="Balance"
          num="0"
          imgSrc="/svg/wallet.svg"
          imgAlt="wallet"
        />
        <WalletCard
          name="Invoice"
          content="0"
          num="0"
          imgSrc="/svg/invoice.svg"
          imgAlt="invoice"
        />
        <WalletCard
          name="Balance"
          content="0"
          num="0"
          imgSrc="/svg/income.svg"
          imgAlt="income"
        />
      </div>
      <WalletContent />
    </section>
  );
}
