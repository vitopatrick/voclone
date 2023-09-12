import { UserType } from "../../hooks/useFetchUser";
import { SkeletonCircle, SkeletonText } from "../../shared/skeleton/Skeleton";
import * as Md from "react-icons/md";

const UsersName = ({
  user,
  loading,
}: UserType | null | {} | undefined | any) => {
  return (
    // container
    <div className="mt-4 mb-10 px-3">
      {/* parent flex container */}
      <div className="flex gap-4 flex-col items-center">
        {loading && <SkeletonCircle height={60} width={60} />}
        {!loading && (
          <div className="h-[100px] w-[100px] md:h-[200px] md:w-[200px] font-medium uppercase bg-neutral-400 p-4 rounded-full flex items-center justify-center text-4xl md:text-8xl text-black">
            {user.Name.slice(0, 2)}
          </div>
        )}

        <div>
          {loading && <SkeletonText height={5} width={200} />}
          {!loading && (
            <h1 className="font-bold md:text-xl text-base text-center text-white uppercase">
              {user.Name}
            </h1>
          )}
        </div>
      </div>
    </div>
    // end of container
  );
};

export default UsersName;
