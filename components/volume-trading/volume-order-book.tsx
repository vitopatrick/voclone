import { AnimatePresence, motion } from "framer-motion";
import { useOrders } from "../../hooks/useOrders";
import Loading from "../../shared/loading/Loading";
import { formatCurrency } from "../../utils/formatCurrency";
import { useState } from "react";
import * as Md from "react-icons/md";

const VolumeOrderBook = () => {
  const { orders } = useOrders();

  return (
    <div>
      <h1 className="text-xl font-sec py-4 font-bold text-paper">Order book</h1>

      {orders.length > 0 ? (
        <VolumeTable />
      ) : (
        <div className="font-semibold flex items-center justify-center my-8 text-base text-gray_bg">
          Opps Nothing here
        </div>
      )}
    </div>
  );
};

const VolumeTable = () => {
  const { orders, loading } = useOrders();

  return (
    <>
      {loading && <Loading />}
      {!loading &&
        orders.map((order: any) => (
          <VolumeOrderTableItem
            coin={order.coin}
            amount={order.amount}
            end={order.end}
            profit={order.profit}
            start={order.date}
            loading={loading}
            status={order.status}
            key={order.amount + Math.random()}
          />
        ))}
    </>
  );
};

const VolumeOrderTableItem = ({
  coin,
  amount,
  end,
  profit,
  start,
  loading,
  status,
}: any) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        className="flex items-center justify-between p-3 rounded hover:bg-neutral-100 transition ease-in"
        onClick={() => setShowModal(true)}
      >
        <div className="space-y-2 flex flex-col items-start">
          <p className="text-neutral-400">Coin</p>
          <p className="font-bold">{coin}</p>
        </div>
        <div className="space-y-2 flex flex-col items-start">
          <p className="text-neutral-400">Entry Price</p>
          <p className="font-bold">{formatCurrency(amount)}</p>
        </div>
        <div className="space-y-2 flex flex-col items-start">
          <p className="text-neutral-400">Profit</p>
          <p className="font-bold">{formatCurrency(profit)}</p>
        </div>
      </div>
      <OrdersModal
        show={showModal}
        close={setShowModal}
        amount={amount}
        coin={coin}
        end={end}
        start={start}
        profit={profit}
        loading={loading}
        status={status}
      />
    </>
  );
};

const OrdersModal = ({
  show,
  close,
  loading,
  amount,
  coin,
  end,
  start,
  profit,
  status,
}: any | unknown) => {
  return (
    <AnimatePresence>
      <motion.section
        key={show}
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        exit={{
          opacity: 0,
          scale: 0,
        }}
        className={
          show
            ? "fixed top-0 left-0 bottom-0 right-0 w-full h-[700px] md:h-full overflow-scroll bg-card/30 backdrop-blur-sm"
            : "hidden"
        }
      >
        <div className="md:w-[50%] w-[80%] mx-auto md:mt-14 bg-bg p-4">
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-base underline">
              Trading Information
            </h4>
            <Md.MdClose
              className="cursor-pointer"
              onClick={() => close(false)}
            />
          </div>
          {/* details */}
          {loading ? (
            <Loading />
          ) : (
            <div className="my-8 md:space-y-4 text-xs md:text-base">
              <div>
                <h4 className="text-neutral-400 font-semibold">Start Date</h4>
                <h4 className="font-semibold">{start}</h4>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold my-2 text-neutral-400 capitalize">
                    Coin
                  </h4>
                  <p className="font-semibold uppercase">{coin}</p>
                </div>
                <div>
                  <h4 className="font-semibold my-2 text-neutral-400 capitalize">
                    End Date
                  </h4>
                  <p className="font-semibold">{end}</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold my-2 text-neutral-400 capitalize">
                  Entry Price
                </h4>
                <p className="font-semibold">{formatCurrency(amount)}</p>
              </div>
              <div>
                <h4 className="font-semibold my-2 text-neutral-400 capitalize">
                  Status
                </h4>
                {status ? (
                  <p className="font-bold text-teal-400">Trade Completed</p>
                ) : (
                  <p className="font-bold text-red-400">Trade in progress</p>
                )}
              </div>
              <div>
                <h4 className="font-semibold my-2 text-neutral-400 capitalize">
                  Profit
                </h4>
                <p className="font-semibold">{formatCurrency(profit)}</p>
              </div>

              <div>
                <h4 className="font-semibold my-2 text-neutral-400 capitalize">
                  Remarks
                </h4>
                <p className="font-semibold ">Volume Trading</p>
              </div>
            </div>
          )}
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default VolumeOrderBook;
