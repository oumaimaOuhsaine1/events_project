"use client";

import { useRouter } from "next/navigation"; // Utiliser le hook router de Next.js
import { BiLogOut } from "react-icons/bi";

const LogoutButton = ({ isOpen, setActiveTab }) => {
  const router = useRouter(); // Hook pour la navigation

  const handleLogout = () => {
    // Supprimer des données si nécessaire
    localStorage.removeItem("userToken"); // Ou autre action de nettoyage

    // Rediriger vers la page de connexion (page.tsx)
    router.push("/"); // Remplace "/" par le chemin exact si différent
  };

  return (
    <div className="absolute bottom-4 left-4">
      <button
        className="flex items-center space-x-4 text-red-500 hover:text-red-400"
        onClick={() => {
          setActiveTab("Logout"); // Met à jour l'onglet actif
          handleLogout(); // Appelle la fonction de déconnexion
        }}
      >
        <BiLogOut size={20} />
        {isOpen && <span>Logout</span>}
      </button>
    </div>
  );
};

export default LogoutButton;
