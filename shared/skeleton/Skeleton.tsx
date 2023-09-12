import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonText = ({
  height,
  width,
}: {
  height: number;
  width: number;
}) => {
  return <Skeleton enableAnimation height={height} width={width} />;
};

export const SkeletonChart = () => {
  return <div>Skeleton</div>;
};

export const SkeletonCircle = ({
  height,
  width,
}: {
  height: number;
  width: number;
}) => {
  return <Skeleton circle enableAnimation height={height} width={width} />;
};
