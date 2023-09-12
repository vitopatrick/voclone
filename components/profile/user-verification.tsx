import { useState } from "react";
import UserModal from "./user-verification-modal";
import UserTradingModal from "./user-trading-password-modal";
import * as Md from "react-icons/md";

const UserVerification = ({ user, loading }: any) => {
  const [hide, setHide] = useState(false);
  const [secondModal, setSecondModal] = useState(false);

  const isTradingPassword = user?.tradingPassword ? true : false;

  return (
    <>
      <div className="flex items-center my-4 justify-center gap-5 px-3 font-medium">
        <div className="flex items-center gap-2 text-green-400">
          <Md.MdVerifiedUser />
          <button onClick={() => setHide(true)}>Start verification</button>
        </div>
        {!isTradingPassword ? (
          <div className="flex items-center gap-2 text-red-400">
            <Md.MdPassword />
            <button onClick={() => setSecondModal(true)}>
              Add Trading Password
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-red-400">
            <Md.MdOutlinePassword />
            <button onClick={() => setSecondModal(true)}>
              Change Trading Password
            </button>
          </div>
        )}
      </div>
      <UserModal hide={hide} setHide={setHide} />
      <UserTradingModal
        hide={secondModal}
        setHide={setSecondModal}
        heading={isTradingPassword}
      />
    </>
  );
};

export default UserVerification;
