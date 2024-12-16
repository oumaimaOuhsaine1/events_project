"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; 
import Link from "next/link";

export default function RegisterForm() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/components"); 
  };

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    cin: "",
    ville: "",
    motDePasse: "",
    ceremonies: "",
    service: "",
    description: "",
    adresse: "",
    photoPersonnelle: null,
    photosService: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files });
    }
  };
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Données d'inscription :", formData);
  };
  
  return (
    <main className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-3/4 bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Image à gauche */}
        <div className="w-1/2">
          <img
            src="/images/form_image.png"
            alt="Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            S'inscrire
          </h1>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            {/* Champs du formulaire */}
            <div className="flex flex-col">
              <label htmlFor="nom" className="text-sm font-medium text-gray-700">Nom</label>
              <input
                id="nom"
                name="nom"
                type="text"
                value={formData.nom}
                onChange={handleChange}
                className="py-2 px-4 border border-gray-300 rounded-lg mt-1"
                placeholder="Votre nom"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="prenom" className="text-sm font-medium text-gray-700">Prénom</label>
              <input
                id="prenom"
                name="prenom"
                type="text"
                value={formData.prenom}
                onChange={handleChange}
                className="py-2 px-4 border border-gray-300 rounded-lg mt-1"
                placeholder="Votre prénom"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="py-2 px-4 border border-gray-300 rounded-lg mt-1"
                placeholder="Votre email"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="cin" className="text-sm font-medium text-gray-700">CIN</label>
              <input
                id="cin"
                name="cin"
                type="text"
                value={formData.cin}
                onChange={handleChange}
                className="py-2 px-4 border border-gray-300 rounded-lg mt-1"
                placeholder="Votre CIN"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="ville" className="text-sm font-medium text-gray-700">Ville</label>
              <input
                id="ville"
                name="ville"
                type="text"
                value={formData.ville}
                onChange={handleChange}
                className="py-2 px-4 border border-gray-300 rounded-lg mt-1"
                placeholder="Votre ville"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="motDePasse" className="text-sm font-medium text-gray-700">Mot de passe</label>
              <input
                id="motDePasse"
                name="motDePasse"
                type="password"
                value={formData.motDePasse}
                onChange={handleChange}
                className="py-2 px-4 border border-gray-300 rounded-lg mt-1"
                placeholder="Votre mot de passe"
                required
              />
            </div>

            {/* Select Service */}
            <div className="flex flex-col col-span-2">
              <label htmlFor="service" className="text-sm font-medium text-gray-700">Service</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="py-2 px-4 border border-gray-300 rounded-lg mt-1"
                required
              >
                <option value="" disabled>
                  Sélectionnez un service
                </option>
                <option value="Negafa">Negafa</option>
                <option value="DJ">DJ</option>
                <option value="Photographe">Photographe</option>
                <option value="Traiteur">Traiteur</option>
              </select>
            </div>

            {/* Select Cérémonie */}
            <div className="flex flex-col col-span-2">
              <label htmlFor="ceremonies" className="text-sm font-medium text-gray-700">Cérémonie</label>
              <select
                id="ceremonies"
                name="ceremonies"
                value={formData.ceremonies}
                onChange={handleChange}
                className="py-2 px-4 border border-gray-300 rounded-lg mt-1"
                required
              >
                <option value="" disabled>
                  Sélectionnez une cérémonie
                </option>
                <option value="Mariage">Mariage</option>
                <option value="Anniversaire">Anniversaire</option>
                <option value="Couche bébé">Couche bébé</option>
              </select>
            </div>

            <div className="flex flex-col col-span-2">
              <label htmlFor="description" className="text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="py-2 px-4 border border-gray-300 rounded-lg mt-1"
                placeholder="Décrivez-vous"
                required
              />
            </div>

            <div className="col-span-2">
              <button
                type="button"
                className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                onClick={handleRedirect}
              >
                S'inscrire
              </button>
            </div>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">
            Déjà inscrit ?{" "}
            <Link href="/" className="text-blue-600 hover:underline">
              Connectez-vous ici
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
