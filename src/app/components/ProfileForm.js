"use client";

import React, { useState } from "react";
import Map from "./Map";

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    cin: "",
    ville: "",
    motDePasse: "",
    service: "",
    ceremonies: "",
    description: "",
    localisation: "",
    adresse: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données soumises :", formData);
  };

  return (
    <main className=" bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-10 w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center text-black">Modifier votre Profil</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          {/* Champ Nom */}
          <div className="flex flex-col">
            <label htmlFor="nom" className="text-sm font-medium text-gray-800">Nom</label>
            <input
              id="nom"
              name="nom"
              type="text"
              value={formData.nom}
              onChange={handleChange}
              className="py-2 px-4 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Votre nom"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="prenom" className="text-sm font-medium text-gray-800">Prénom</label>
            <input
              id="prenom"
              name="prenom"
              type="text"
              value={formData.prenom}
              onChange={handleChange}
              className="py-2 px-4 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Votre prénom"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-gray-800">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="py-2 px-4 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Votre email"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="cin" className="text-sm font-medium text-gray-800">CIN</label>
            <input
              id="cin"
              name="cin"
              type="text"
              value={formData.cin}
              onChange={handleChange}
              className="py-2 px-4 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Votre CIN"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="ville" className="text-sm font-medium text-gray-800">Ville</label>
            <input
              id="ville"
              name="ville"
              type="text"
              value={formData.ville}
              onChange={handleChange}
              className="py-2 px-4 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Votre ville"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="motDePasse" className="text-sm font-medium text-gray-800">Mot de passe</label>
            <input
              id="motDePasse"
              name="motDePasse"
              type="password"
              value={formData.motDePasse}
              onChange={handleChange}
              className="py-2 px-4 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Votre mot de passe"
              required
            />
          </div>

          <div className="flex flex-col col-span-2">
            <label htmlFor="service" className="text-sm font-medium text-gray-800">Service</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="py-2 px-4 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-black"
              required
            >
              <option value="" disabled>Sélectionnez un service</option>
              <option value="Negafa">Negafa</option>
              <option value="DJ">DJ</option>
              <option value="Photographe">Photographe</option>
              <option value="Traiteur">Traiteur</option>
            </select>
          </div>

          <div className="flex flex-col col-span-2">
            <label htmlFor="ceremonies" className="text-sm font-medium text-gray-800">Cérémonie</label>
            <select
              id="ceremonies"
              name="ceremonies"
              value={formData.ceremonies}
              onChange={handleChange}
              className="py-2 px-4 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-black"
              required
            >
              <option value="" disabled>Sélectionnez une cérémonie</option>
              <option value="Mariage">Mariage</option>
              <option value="Anniversaire">Anniversaire</option>
              <option value="Couche bébé">Couche bébé</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="adresse" className="text-sm font-medium text-gray-800">adresse</label>
            <input
              id="adresse"
              name="adresse"
              type="text"
              value={formData.adresse}
              onChange={handleChange}
              className="py-2 px-4 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Votre adresse"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="description" className="text-sm font-medium text-gray-800">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="py-2 px-4 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Décrivez-vous"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="photo" className="text-sm font-medium text-gray-800">Votre photo</label>
            <input
            type="file"
              id="photo"
              name="photo"
              value={formData.photo}
              onChange={handleChange}
              className="py-2 px-4 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Décrivez-vous"
              required
            />
          </div>
          <div>
          <label htmlFor="localisation" className="text-sm font-medium text-gray-800">localisation</label>

      <Map />
    </div>

          <div className="col-span-2 text-center">
            <button
              type="submit"
              className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
Modifier 
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ProfileForm;
