'use client';
import { BiMailSend } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";
import toast from 'react-hot-toast';

type InputType = 'goto' | 'download' | 'mail';

interface ButtonProps {
  type: 'submit' | 'button';
  label: string;
  padding_x?: string;
  padding_y?: string;
  large?: boolean;
  icon: InputType;
}

function Button({type, label, padding_x = "px-8", padding_y = "py-4", large = false, icon,}: ButtonProps) {
    const iconElement = icon === "mail" ? ( <BiMailSend className="inline mr-1.5 mb-1" />) : icon === "goto" ? (<FaArrowRightLong className="inline ml-1.5 mb-1" />) : icon === "download" ? (<HiDownload className="inline mr-1.5 mb-1" />) : null; 
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (icon === "mail") {
      const name = (document.getElementById("Name") as HTMLInputElement)?.value;
      const email = (document.getElementById("Email") as HTMLInputElement)?.value;
      const message = (document.getElementById("Message") as HTMLTextAreaElement)?.value;

      if (!name || !email || !message) {
        e.preventDefault();
        toast.error("Please fill out all fields");
      } else {
        toast.success("Sending message...");
      }
    }
    };
    return (
        <button
        onClick={icon === "mail" ? handleClick : undefined}
        type={type}
        className={`text-[#1A2B4C] bg-[#FFC107]/40 noise-bg bg-opacity-100 filter brightness-110 font-semibold rounded-full mb-15 hover:bg-[#FFC107] transition text-base cursor-pointer 
            ${padding_x} ${padding_y} ${large ? "xl:text-2xl lg:px-9 lg:py-5" : ""}`}
        >
        {icon === "goto" ? ( <> {label} {iconElement} </> ) : (<> {iconElement} {label} </>)}
        </button>
    );
}

export default Button;
