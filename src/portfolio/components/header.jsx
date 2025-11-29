import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import {
    LuSparkles,
    LuGraduationCap,
    LuFolderKanban,
    LuBriefcaseBusiness,
    LuMail,
} from "react-icons/lu";
const HeaderComponent = () => {
    const headerlist = [
        { id: 1, label: "About", path: "#about", icon: <FaUser size={18} /> },
        { id: 2, label: "Skills", path: "#skills", icon: <LuSparkles size={18} /> },
        { id: 3, label: "Education", path: "#education", icon: <LuGraduationCap size={18} /> },
        { id: 4, label: "Projects", path: "#projects", icon: <LuFolderKanban size={18} /> },
        { id: 5, label: "Experience", path: "#experience", icon: <LuBriefcaseBusiness size={18} /> },
        { id: 6, label: "Contact", path: "#contact", icon: <LuMail size={18} /> },
    ];
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {/* Header */}
            <header className="sticky top-0 bg-[#43766C] border-b-green-100 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-xl text-white   font-bold">Mark Rexon</div>
                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-7">
                        {headerlist?.map(x => (
                            <a
                                href={x.path}
                                className="flex items-center gap-3 text-white hover:text-gray-400"
                            >
                                {x.icon}
                                <span>{x.label}</span>
                            </a>

                        ))}

                    </nav>
                    <button
                        className="md:hidden text-white text-2xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {!isOpen ? <CgClose size={18} /> : <BiMenu />}
                    </button>
                </div>
            </header>

            <div className={`md:hidden flex  justify-center w-full my-2 ${isOpen ? "hidden" : ""}`}>
                <nav className="inline-flex items-center gap-6 p-2 px-4 bg-gray-200 shadow-xl rounded-full">
                    {headerlist?.map(x => (
                        <a id={x.id} href={`${x.path}`} className="text-green-[#43766C] hover:text-gray-400">
                            <div className="flex flex-col  justify-center items-center space-y-1">
                                <div>{x.icon}</div>
                                <div className="text-sm" >{x.label}</div>
                            </div>
                        </a>
                    ))}

                </nav>
            </div>


        </>
    );
};

export default HeaderComponent;
