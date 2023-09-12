import Link from "next/link";
import { usePathname } from "next/navigation";
import { FIRST_LINKS, SECOND_LINKS } from "../../../lib/side-nav-links";
import { clsx } from "clsx";

const Sidebar = () => {
  const pathname = usePathname();

  const boxClasses = (url: any) =>
    clsx({
      ["font-regular text-white flex gap-3 p-3 hover:text-button hover:bg-button/30 transition-all ease-in items-center"]:
        true,
      ["bg-button/30 w-full p-3 rounded font-medium "]: pathname === url,
    });

  const textClasses = (url: any) =>
    clsx({
      ["font-regular"]: true,
      ["font-medium text-button"]: pathname === url,
    });

  return (
    <div className="w-[260px] hidden md:block bg-bg h-full">
      {/* parent flex container */}
      <div className="flex flex-col justify-between gap-4 p-3">
        {/* first links flex container */}
        <div>
          {/* logo flex container */}
          <div className="mb-8 font-medium text-button uppercase underline tracking-widest text-xl ">
            VSAexchange
          </div>
          <div className="space-y-5">
            {FIRST_LINKS.map((link) => (
              <Link
                href={link.path}
                key={link.key}
                className={boxClasses(link.path)}
              >
                {/* flex item */}
                <div className={textClasses(link.path)}>{link.icon}</div>
                <div className={textClasses(link.path)}>{link.label}</div>
              </Link>
            ))}
            {SECOND_LINKS.map((link) => (
              <Link
                href={link.path}
                key={link.key}
                className={boxClasses(link.path)}
              >
                {/* flex item */}
                <div className={textClasses(link.path)}>{link.icon}</div>
                <div className={textClasses(link.path)}>{link.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
