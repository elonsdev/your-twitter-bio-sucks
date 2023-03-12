import { useState } from "react";

export type VibeType = "Professional" | "Casual" | "Funny" | "Shitposter" | "Lover" | "Cat" | "Alien";

interface DropDownProps {
  vibe: VibeType;
  setVibe: (vibe: VibeType) => void;
}

export default function Select({ vibe, setVibe }: DropDownProps) {
    const [selected, isSelected] = useState("")

    const setTheVibes = (thevibes:VibeType) => {
        setVibe(thevibes)
        isSelected(thevibes)
    }
  return (
    <>
        <div className="flex justify-between items-center mt-10 md:text-4xl lg:text-5xl">
            <div 
                className={`p-1 rounded-full cursor-pointer ${selected == 'Casual' && 'ring-2 ring-black '}`} 
                title="Casual" 
                onClick={() => setTheVibes("Casual")}>
                🤑
            </div>
            
            <div 
                className={`p-1 rounded-full cursor-pointer ${selected == 'Professional' && 'ring-2 ring-black '}`} 
                title="Professional" 
                onClick={() => setTheVibes("Professional")}>
                🙂
            </div>
            <div className={`p-1 rounded-full cursor-pointer ${selected == 'Funny' && 'ring-2 ring-black '}`} 
                title="Funny" 
                onClick={() => setTheVibes("Funny")}>
                🤣
            </div>
            <div className={`p-1 rounded-full cursor-pointer ${selected == 'Shitposter' && 'ring-2 ring-black '}`} 
                title="Shitposter" 
                onClick={() => setTheVibes("Shitposter")}>
                💩
            </div>
            <div 
                className={`p-1 rounded-full cursor-pointer ${selected == 'Lover' && 'ring-2 ring-black '}`} 
                title="Lover" 
                onClick={() => setTheVibes("Lover")}>
                😍
            </div>
            <div 
                className={`p-1 rounded-full cursor-pointer ${selected == 'Cat' && 'ring-2 ring-black '}`} 
                title="Cat" 
                onClick={() => setTheVibes("Cat")}>
                🐱
            </div>
            <div
                className={`p-1 rounded-full cursor-pointer ${selected == 'Alien' && 'ring-2 ring-black '}`} 
                title="Alien" 
                onClick={() => setTheVibes("Alien")}>
                👽
            </div>
        </div>
    </>
  );
}
