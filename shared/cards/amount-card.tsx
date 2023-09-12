import { formatCurrency } from "../../utils/formatCurrency";
import { SkeletonText } from "../skeleton/Skeleton";
interface AmountCardType {
  accountType: String;
  amount: Number | any;
  loading: boolean;
  color: string;
}

const AmountCard = ({
  accountType,
  amount,
  loading,
  color,
}: AmountCardType) => {
  return (
    <div
      className={
        color == "blue"
          ? `bg-whites font-main rounded font-sec w-full p-3 shadow-md cursor-pointer border-blue-400 border-t-[2px]`
          : color == "green"
          ? `bg-whites font-main  rounded font-sec w-full p-3 shadow-md cursor-pointer border-green-400 border-t-[2px]`
          : `bg-whites font-main  rounded font-sec w-full p-3 shadow-md cursor-pointer border-red-400 border-t-[2px]`
      }
    >
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="font-semibold text-neutral-400 text-sm">
            {accountType}
          </h1>
        </div>
        <div>
          {loading && <SkeletonText height={10} width={200} />}
          {!loading && (
            <h1 className="font-bold md:text-lg text-sm">
              {formatCurrency(amount)}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default AmountCard;
