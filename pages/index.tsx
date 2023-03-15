import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Select, { VibeType } from "../components/Select";
import Footer from "../components/Footer";
import Github from "../components/GitHub";
import Header from "../components/Header";
import LoadingDots from "../components/LoadingDots";
import ResizablePanel from "../components/ResizablePanel";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import PlatformSelect from "../components/PlatformSelect";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [bio, setBio] = useState(
    "I build pretty things in web3.  Software & Developer Relations Engineer 👉 @addUTILITI"
  );
  const [platform, setPlatform] = useState("Twitter");
  const [vibe, setVibe] = useState<VibeType>("Professional");
  const [generatedBios, setGeneratedBios] = useState("");

  const prompt =
    vibe === "Funny"
      ? `Generate a funny ${platform} bio with no hashtags. Make sure there is a joke in there and it's a little ridiculous. Make sure the generated bio is at max 20 words and base it on this context: ${bio}${
          bio.slice(-1) === "." ? "" : "."
        }`
      : `Generate a ${vibe} ${platform} bio with no hashtags. Make sure the generated bio is at least 14 words and at max 20 words and base it on this context: ${bio}${
          bio.slice(-1) === "." ? "" : "."
        }`;

  const generateBio = async (e: any) => {
    e.preventDefault();
    setGeneratedBios("");
    setLoading(true);

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    let answer = await response.json();
    console.log(answer.bot.replace(/^"|"$/g, ""));
    setGeneratedBios(answer.bot.replace(/^"|"$/g, ""));
    setLoading(false);
  };

  return (
    <div
      className={`flex  mx-auto flex-col items-center justify-center py-2 min-h-screen bg-gradient-to-r ${
        platform == "Twitter" && "from-blue-100 via-blue-300 to-blue-500"
      } ${platform == "YouTube" && "from-red-100 via-red-300 to-red-500"} ${
        platform == "Instagram" && "from-rose-100 via-rose-300 to-rose-500"
      } ${platform == "LinkedIn" && "from-sky-100 via-sky-300 to-sky-500"} ${
        platform == "TikTok" && "from-indigo-100 via-indigo-300 to-indigo-500"
      } ${platform == "Tinder" && "from-pink-100 via-pink-300 to-pink-500"} ${
        platform == "Twitch" && "from-purple-100 via-purple-300 to-purple-500"
      } ${platform == "Facebook" && "from-blue-300 via-blue-500 to-blue-700"} ${
        platform == "Tumblr" && "from-green-100 via-green-300 to-green-500"
      }  
      `}
    >
      <Head>
        <title>Your Twitter Bio Sucks | @elonsdev tools</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='title'
          content='Your Twitter Bio Sucks | @elonsdev tools'
        ></meta>
        <meta
          name='description'
          content='Create a better twitter bio in 2 steps with the help of AI.'
        ></meta>

        <meta property='og:type' content='website'></meta>
        <meta
          property='og:url'
          content='https://yourbiosucks.elons.dev/'
        ></meta>
        <meta
          property='og:title'
          content='Your Twitter Bio Sucks | @elonsdev tools'
        ></meta>
        <meta
          property='og:description'
          content='Create a better twitter bio in 2 steps with the help of AI.'
        ></meta>
        <meta property='og:image' content='/og.png'></meta>

        <meta property='twitter:card' content='summary_large_image'></meta>
        <meta
          property='twitter:url'
          content='https://yourbiosucks.elons.dev/'
        ></meta>
        <meta
          property='twitter:title'
          content='Your Twitter Bio Sucks | @elonsdev tools'
        ></meta>
        <meta
          property='twitter:description'
          content='Create a better twitter bio in 2 steps with the help of AI.'
        ></meta>
        <meta property='twitter:image' content='/og.png'></meta>
      </Head>

      <main className='flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20 '>
        <h1 className='flex items-center sm:text-6xl text-4xl max-w-4xl font-bold text-slate-900'>
          Your{" "}
          <span className='w-[320px]'>
            <Typewriter
              options={{
                strings: [
                  "Twitter",
                  "YouTube",
                  "Instagram",
                  "LinkedIn",
                  "TikTok",
                  "Tinder",
                  "Twitch",
                  "Facebook",
                  "Tumblr",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>{" "}
          Bio Sucks!
        </h1>

        <div className='max-w-7xl lg:w-[600px]'>
          <div className='flex mt-10 items-center space-x-3'>
            <Image
              src='/1-black.png'
              width={30}
              height={30}
              alt='1 icon'
              className='mb-5 sm:mb-0'
            />
            <p className='text-left font-medium'>Choose your platform.</p>
          </div>
          <div className='block'>
            <PlatformSelect
              platform={platform}
              setPlatform={(newPlatform) => setPlatform(newPlatform)}
            />
          </div>

          <div className='flex mt-10 items-center space-x-3'>
            <Image
              src='/1-black.png'
              width={30}
              height={30}
              alt='1 icon'
              className='mb-5 sm:mb-0'
            />
            <p className='text-left font-medium'>
              Copy your current bio{" "}
              <span className='text-slate-500'>(or steal someone's)</span>.
            </p>
          </div>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={4}
            className='w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5'
            placeholder={
              "e.g. I build pretty things in web3.  Software & Developer Relations Engineer 👉 @addUTILITI"
            }
          />
          <div className='flex mb-5 items-center space-x-3'>
            <Image src='/2-black.png' width={30} height={30} alt='1 icon' />
            <p className='text-left font-medium'>Select your vibe.</p>
          </div>

          <div className='block'>
            <Select vibe={vibe} setVibe={(newVibe) => setVibe(newVibe)} />
          </div>

          {!loading && (
            <button
              className='bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full'
              onClick={(e) => generateBio(e)}
            >
              Generate your bio &rarr;
            </button>
          )}
          {loading && (
            <button
              className='bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full'
              disabled
            >
              <LoadingDots color='white' style='large' />
            </button>
          )}
        </div>
        <Toaster
          position='top-center'
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />
        <hr className='h-px bg-gray-700 border-1 dark:bg-gray-700' />
        <ResizablePanel>
          <AnimatePresence mode='wait'>
            <motion.div className='space-y-10 my-10 '>
              {generatedBios && (
                <>
                  <div className='space-y-8 flex flex-col items-center justify-center sm:max-w-[380px] lg:max-w-[600px] mx-auto'>
                    {generatedBios && (
                      <div
                        className='bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border '
                        onClick={() => {
                          navigator.clipboard.writeText(generatedBios);
                          toast("Bio copied to clipboard", {
                            icon: "✂️",
                          });
                        }}
                      >
                        <p>{generatedBios}</p>
                      </div>
                    )}
                  </div>
                  <div>
                    <p className='text-sm font-semibold'>
                      Enjoyed this tool? Follow me on Twitter:
                      <Link
                        className='ml-2'
                        href='https://twitter.com/elonsdev'
                      >
                        @elonsdev
                      </Link>
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </ResizablePanel>
      </main>
    </div>
  );
};

export default Home;
