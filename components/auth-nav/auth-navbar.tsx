import Link from "next/link";

interface AuthNavProps {
  cta: String;
  urlName: String;
  path: String;
}

const AuthNav = ({ cta, urlName, path }: AuthNavProps) => {
  return (
    <div className="text-white md:text-neutral-400">
      <div className="flex items-center justify-start md:justify-end text-sm font-main px-5 py-4">
        <p>{cta}</p>
        <Link href={`/auth/${path}`} className="mx-1 md:text-bg font-semibold">
          {urlName}
        </Link>
      </div>
    </div>
  );
};

export default AuthNav;
