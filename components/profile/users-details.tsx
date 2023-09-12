import { TfiEmail } from "react-icons/tfi";
import { MdOutlineVerified, MdPublishedWithChanges } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { UserType } from "../../hooks/useFetchUser";
import { SkeletonCircle, SkeletonText } from "../../shared/skeleton/Skeleton";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { formatCurrency } from "../../utils/formatCurrency";

const UsersDetails = ({
  user,
  loading,
}: UserType | null | {} | undefined | any) => {
  const [isShow, setIsShow] = useState(false);

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      {/* parent grid container */}
      <div className="md:w-[60%] mx-auto  md:grid grid-cols-2 gap-4 px-2">
        {/* grid children */}
        <div className="my-2 p-4 flex items-center gap-6 bg-white rounded shadow">
          {loading && <SkeletonCircle width={50} height={50} />}
          {!loading && (
            <div className="bg-white/30 p-3 md:p-5 rounded-full">
              <TfiEmail color="#4ade80" className="text-base md:text-2xl" />
            </div>
          )}
          <div className="space-y-3 font-medium">
            <h2 className="text-neutral-400 text-sm md:text-base">Email</h2>
            {loading && <SkeletonText height={5} width={200} />}
            {!loading && (
              <h1 className="font-medium text-sm md:text-base">{user.Email}</h1>
            )}
          </div>
        </div>
        {/* grid child 2 */}
        <div className="my-2 p-4 flex items-center gap-6 bg-white rounded shadow">
          {loading && <SkeletonCircle width={50} height={50} />}
          {!loading && (
            <div className="bg-white/30 p-3 md:p-5 rounded-full">
              <MdOutlineVerified className="text-[#dc2626] text-base md:text-2xl" />
            </div>
          )}
          <div className="space-y-3 font-medium">
            <h2 className="text-neutral-400 text-sm md:text-base">
              Account Status
            </h2>
            {loading && <SkeletonText height={5} width={200} />}
            {!loading && (
              <h1 className="font-medium text-sm md:text-base text-paper">
                {user.verfied ? "Verified" : "Not Verified"}
              </h1>
            )}
          </div>
        </div>
        {/* grid child 3 */}
        <div className="my-2 p-4 font-sec flex items-center gap-6 bg-white rounded shadow">
          {loading && <SkeletonCircle width={50} height={50} />}
          {!loading && (
            <div className="bg-white/30 p-3 md:p-5 rounded-full">
              <MdPublishedWithChanges className="text-[#fbbf24] text-base md:text-2xl" />
            </div>
          )}
          <div className="space-y-3 font-medium">
            <h2 className="text-neutral-400 text-sm md:text-base">
              Daily Withdrawal Limit
            </h2>
            {loading && <SkeletonText height={5} width={200} />}
            {!loading && (
              <h1 className="font-medium text-sm md:text-base">
                {user.verfied ? "25 BTC" : "Please Verify account"}
              </h1>
            )}
          </div>
        </div>
        {/* grid child 4 */}
        <div className="my-2 p-4 font-sec flex items-center gap-6 bg-white rounded shadow">
          {loading && <SkeletonCircle width={50} height={50} />}
          {!loading && (
            <div className="bg-white/30 p-3 md:p-5 rounded-full">
              <RiLockPasswordLine className="text-[#ea580c] text-base md:text-2xl" />
            </div>
          )}
          <div className="space-y-3 font-medium">
            <h2 className="text-neutral-400 text-sm md:text-base">
              Trading Password
            </h2>
            {loading && <SkeletonText width={200} height={5} />}
            {!loading && (
              <div className="flex items-center gap-3">
                <h1 className="font-bold text-base md:text-lg text-paper">
                  {user.tradingPassword
                    ? isShow
                      ? user.tradingPassword
                      : "xxxxx"
                    : "N/A"}
                </h1>
                <button onClick={toggleShow}>
                  {isShow ? <BsEye /> : <BsEyeSlash />}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersDetails;
