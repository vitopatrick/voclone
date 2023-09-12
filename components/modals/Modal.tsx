import { useState } from "react";
import { VscError } from "react-icons/vsc";
import { GrStatusGood } from "react-icons/gr";

const Modal = () => {
  const [isGood, setIsGood] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const modalControl = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* parent div positioned absolute */}
      <div
        onClick={modalControl}
        className={
          isOpen
            ? "absolute top-0 left-0 backdrop-blur-sm bg-black/25 w-full h-full"
            : "hidden"
        }
      >
        {/* main div that will be center */}
        <div className="w-[80%] md:w-[40%] mx-auto my-12 bg-white rounded-md shadow-md p-4">
          {/* parent flex div */}
          <div className="flex flex-col justify-center items-center">
            {/* icon div */}
            <div>
              {!isGood && <VscError className="text-9xl fill-red-600" />}
              {isGood && <GrStatusGood className="text-9xl fill-green" />}
            </div>
            {/* error message */}
            <div className="mt-6">
              <h4 className="py-6 font-main font-semibold text-xl">
                {!isGood && "Sorry but your request could not be processed"}
                {isGood && "Request Successful"}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
