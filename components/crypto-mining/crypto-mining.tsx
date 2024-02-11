import React from "react";
import list from "./list";

type Props = {};

const CryptoMiningBody = (props: Props) => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="my-3">
        Cryptocurrency Mining Agreement Before purchasing any Financial
        Products, users are required to carefully read all the terms of the
        Crypto Mining Agreement (hereinafter the “Agreement”) and fully
        understand the Agreement and its terms. If users have any reservations
        about the content of this Agreement, they should not proceed to the next
        step. When the user makes use of Volume Options platform
        (“our/platform/Volume Options”) services, provide a confirmation through
        a webpage, or accept this Agreement in any other way, it will be deemed
        that they have fully understood all the terms of this Agreement and
        agreed to enter into it with us. Note: If a user has any concerns or
        reservations with regard to the content of this Agreement, they may
        contact us so that we may better help them understand and decide whether
        they wish to accept its terms and make use of our services. Disclaimer
      </div>
      {list.map((item) => (
        <div className="my-3">
          <h4 className="font-semibold">{item.header}</h4>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default CryptoMiningBody;
