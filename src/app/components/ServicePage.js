import React, { useState } from "react";

const ServicePage = () => {
  const [files, setFiles] = useState([]); 
  const [description, setDescription] = useState(""); // Description du service
  const [services, setServices] = useState([]); // Liste des services ajoutés
  const [isSubscribed, setIsSubscribed] = useState(true); // Vérifie si l'utilisateur est abonné
  const [editService, setEditService] = useState(null); // Service en édition (si applicable)

  const handleFileChange = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    if (files.length + uploadedFiles.length > 5) {
      alert("Vous pouvez ajouter au maximum 5 fichiers.");
      return;
    }
    setFiles([...files, ...uploadedFiles]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubscribed) {
      const newService = {
        id: Date.now(),
        files,
        description,
      };
      setServices([...services, newService]);
      setFiles([]); // Réinitialiser les fichiers après soumission
      setDescription(""); // Réinitialiser la description après soumission
    } else {
      alert("Vous devez être abonné pour ajouter un service.");
    }
  };

  const handleDelete = (serviceId) => {
    const updatedServices = services.filter(service => service.id !== serviceId);
    setServices(updatedServices);
  };

  const handleEdit = (serviceId) => {
    const serviceToEdit = services.find(service => service.id === serviceId);
    setEditService(serviceToEdit);
    setFiles(serviceToEdit.files);
    setDescription(serviceToEdit.description);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedServices = services.map(service =>
      service.id === editService.id
        ? { ...service, files, description }
        : service
    );
    setServices(updatedServices);
    setEditService(null);
    setFiles([]);
    setDescription("");
  };

  return (
    <div className="service-page-container">
      <h1>Ajouter un service</h1>
      {isSubscribed ? (
        <form onSubmit={editService ? handleUpdate : handleSubmit} className="service-form">
          <div className="form-field">
            <label htmlFor="fileUpload">Télécharger des fichiers (max 5)</label>
            <input
              type="file"
              id="fileUpload"
              accept="image/*,audio/*,video/*"
              onChange={handleFileChange}
              multiple
            />
            <div className="file-preview">
              {files.map((file, index) => (
                <p key={index}>{file.name}</p>
              ))}
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="serviceDescription">Description du service</label>
            <textarea
              id="serviceDescription"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Décrivez votre service..."
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            {editService ? "Mettre à jour le service" : "Ajouter le service"}
          </button>
        </form>
      ) : (
        <p className="subscribed-message">Vous devez être abonné pour ajouter un service. Veuillez vous abonner.</p>
      )}

      <h2>Services enregistrés</h2>
      <div className="services-grid">
        {services.length > 0 ? (
          services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-media">
                {service.files.map((file, index) => (
                  <div key={index}>
                    {file.type.includes("image") && (
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`file-${service.id}-${index}`}
                        width="150"
                        height="150"
                      />
                    )}
                    {file.type.includes("audio") && (
                      <audio controls src={URL.createObjectURL(file)} />
                    )}
                    {file.type.includes("video") && (
                      <video controls width="150" height="150" src={URL.createObjectURL(file)} />
                    )}
                  </div>
                ))}
              </div>
              <div className="service-description">
                <p>{service.description}</p>
                <button onClick={() => handleEdit(service.id)} className="edit-btn">Modifier</button>
                <button onClick={() => handleDelete(service.id)} className="delete-btn">Supprimer</button>
              </div>
            </div>
          ))
        ) : (
          <h4>Aucun service ajouté pour le moment.</h4>
        )}
      </div>
    </div>
  );
};

export default ServicePage;
