import Loading from "../loading/Loading";
import TableItem from "./TableItem";

interface TableProps {
  coins: any[];
  error: any;
  loading: Boolean;
}

const Table = ({ coins, loading }: TableProps) => {
  return (
    <div>
      {/* table Header */}
      <div className="grid grid-cols-3 md:grid-cols-5 font-bold font-sec text-white font-main bg-bg my-2 mx-2 p-3 rounded-t-lg">
        <div className="col-span-2">Coin</div>
        <div className="text-left hidden md:block">Sym</div>

        <div className="text-left">Price</div>
      </div>
      {/* table Body */}
      {loading && <Loading />}
      {/* {coins.map((coin: DataType) => (
        <TableItem
          key={coin.id}
          name={coin.name}
          price={coin.currentPrice}
          change={coin.percentageChange}
          img={coin.img}
          symbol={coin.symbol}
        />
      ))} */}
    </div>
  );
};

export default Table;
