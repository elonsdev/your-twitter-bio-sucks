import { useState } from "react";

import {
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
  FaTwitch,
  FaFacebook,
  FaTumblr,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiTinder } from "react-icons/si";

export type PlatformType =
  | "Twitter"
  | "YouTube"
  | "Instagram"
  | "LinkedIn"
  | "TikTok"
  | "Tinder"
  | "Twitch"
  | "Facebook"
  | "Tumblr";

interface DropDownProps {
  platform: string;
  setPlatform: (platform: PlatformType) => void;
}

export default function PlatformSelect({
  platform,
  setPlatform,
}: DropDownProps) {
  const [selected, isSelected] = useState("");

  const setThePlatform = (theplatform: PlatformType) => {
    setPlatform(theplatform);
    isSelected(theplatform);
  };
  return (
    <>
      <div className='flex flex-wrap gap-5 md:gap-2 lg:gap-1 justify-between items-center mt-10 md:text-4xl lg:text-5xl'>
        <div
          className={`p-2 rounded-full cursor-pointer ${
            selected == "Twitter" && "ring-2 ring-black "
          }`}
          title='Twitter'
          onClick={() => setThePlatform("Twitter")}
        >
          <FaTwitter size={30} />
        </div>
        <div
          className={`p-2 rounded-full cursor-pointer ${
            selected == "YouTube" && "ring-2 ring-black "
          }`}
          title='YouTube'
          onClick={() => setThePlatform("YouTube")}
        >
          <FaYoutube size={30} />
        </div>
        <div
          className={`p-2 rounded-full cursor-pointer ${
            selected == "Instagram" && "ring-2 ring-black "
          }`}
          title='Instagram'
          onClick={() => setThePlatform("Instagram")}
        >
          <AiFillInstagram size={30} />
        </div>
        <div
          className={`p-2 rounded-full cursor-pointer ${
            selected == "LinkedIn" && "ring-2 ring-black "
          }`}
          title='LinkedIn'
          onClick={() => setThePlatform("LinkedIn")}
        >
          <FaLinkedin size={30} />
        </div>
        <div
          className={`p-2 rounded-full cursor-pointer ${
            selected == "TikTok" && "ring-2 ring-black "
          }`}
          title='TikTok'
          onClick={() => setThePlatform("TikTok")}
        >
          <FaTiktok size={30} />
        </div>
        <div
          className={`p-2 rounded-full cursor-pointer ${
            selected == "Tinder" && "ring-2 ring-black "
          }`}
          title='Tinder'
          onClick={() => setThePlatform("Tinder")}
        >
          <SiTinder size={30} />
        </div>
        <div
          className={`p-2 rounded-full cursor-pointer ${
            selected == "Twitch" && "ring-2 ring-black "
          }`}
          title='Twitch'
          onClick={() => setThePlatform("Twitch")}
        >
          <FaTwitch size={30} />
        </div>
        <div
          className={`p-2 rounded-full cursor-pointer ${
            selected == "Facebook" && "ring-2 ring-black "
          }`}
          title='Facebook'
          onClick={() => setThePlatform("Facebook")}
        >
          <FaFacebook size={30} />
        </div>
        <div
          className={`p-2 rounded-full cursor-pointer ${
            selected == "Tumblr" && "ring-2 ring-black "
          }`}
          title='Tumblr'
          onClick={() => setThePlatform("Tumblr")}
        >
          <FaTumblr size={30} />
        </div>
      </div>
    </>
  );
}
