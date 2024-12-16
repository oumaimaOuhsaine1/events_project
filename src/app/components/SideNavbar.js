"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; 
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { FaUser, FaServicestack, FaRegCommentDots } from "react-icons/fa";
import { BsCardChecklist } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import ProfileForm from "./ProfileForm";
import ServicePage from "./ServicePage";
import Abonnement from "./AbonnementPage";
import Feedbacks from "./FeedbacksPage";

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("");
  const router = useRouter(); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    
    // localStorage.removeItem("userToken"); 
    sessionStorage.clear(); 
    router.push("/"); 
  };

  return (
    <div className="flex h-screen">
      <div
        className={`bg-gray-800 text-white transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="p-6 flex justify-between items-center">
          <button onClick={toggleSidebar}>
            {isOpen ? (
              <IoCloseSharp size={24} />
            ) : (
              <GiHamburgerMenu size={24} />
            )}
          </button>
        </div>

        <ul className="p-4 space-y-12">
          <li
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => setActiveTab("profil")}
          >
            <FaUser size={20} />
            {isOpen && <span>Profil</span>}
          </li>

          <li
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => setActiveTab("services")}
          >
            <FaServicestack size={20} />
            {isOpen && <span>Services</span>}
          </li>

          <li
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => setActiveTab("Abonnement")}
          >
            <BsCardChecklist size={20} />
            {isOpen && <span>Abonnement</span>}
          </li>
          <li
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => setActiveTab("Feedbacks")}
          >
            <FaRegCommentDots size={20} />
            {isOpen && <span>Feedbacks</span>}
          </li>
        </ul>

        <div className="absolute bottom-4 left-4">
          <button
            className="flex items-center space-x-4 text-red-500 hover:text-red-400"
            onClick={handleLogout} 
          >
            <BiLogOut size={20} />
            {isOpen && <span>Logout</span>}
          </button>
        </div>
      </div>

      <div className="flex-1 p-8">
        {activeTab === "profil" && <ProfileForm />}
        {activeTab === "services" && <ServicePage />}
        {activeTab === "Abonnement" && <Abonnement />}
        {activeTab === "Feedbacks" && <Feedbacks />}
      </div>
    </div>
  );
};

export default SideNavbar;
