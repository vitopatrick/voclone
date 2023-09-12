import Link from "next/link";
import { usePathname } from "next/navigation";
import { FIRST_LINKS, SECOND_LINKS } from "../../../lib/side-nav-links";
import { clsx } from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const MobileSideNav = ({ hide, setHide }: any) => {
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
    <AnimatePresence>
      <motion.div
        key={hide}
        variants={{
          start: {
            x: "-999px",
          },
          end: {
            x: 0,
          },
          exit: {
            translateX: "-999px",
          },
        }}
        initial="start"
        animate="end"
        exit="exit"
        transition={{
          duration: 0.5,
        }}
        onClick={() => setHide(true)}
        className={
          hide
            ? "hidden"
            : "absolute top-0 left-0 backdrop-blur-md bg-neutral-300/40 w-screen h-screen z-50"
        }
      >
        <div className="w-[260px] md:block bg-bg h-full">
          {/* parent flex container */}
          <div className="flex flex-col justify-between gap-4 p-3">
            {/* first links flex container */}
            <div>
              {/* logo flex container */}
              <div className="mb-8  font-bold text-button uppercase tracking-widest underline text-xl">
                VSAexchange
              </div>
              <div className="space-y-4">
                {FIRST_LINKS.map((link) => (
                  <Link
                    href={link.path}
                    key={link.key}
                    className={boxClasses(link.path)}
                  >
                    {/* flex item */}
                    <div className={textClasses(link.path)}>{link.icon}</div>
                    <div
                      className={textClasses(link.path)}
                      onClick={() => setHide(false)}
                    >
                      {link.label}
                    </div>
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
                    <div
                      className={textClasses(link.path)}
                      onClick={() => setHide(false)}
                    >
                      {link.label}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileSideNav;
