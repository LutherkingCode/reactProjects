import { useState } from "react";

export function useStorage(kle) {
  const [donnesStoques, setDonnes] = useState(() => {
    const donnesStoques = JSON.parse(localStorage.getItem(kle)) || [];
    return donnesStoques;
  });

  function read(id) {
    return donnesStoques.find((objet) => objet.id === id);
  }

  function update(id, objet) {
    const donnesModifies = donnesStoques.map((item) =>
      item.id === id ? { ...item, ...objet } : item
    );
    setDonnes(donnesModifies);
    localStorage.setItem(key, JSON.stringify(donnesModifies));
  }

  function create(newObjet) {
    const nouveDonnes = [...data, newObjet];
    setDonnes(nouveDonnes);
    localStorage.setItem(key, JSON.stringify(nouveDonnes));
  }

  const deletee = (Id) => {
    const donnesModifies = donnesStoques.filter((item) => item.id !== Id);
    setDonnes(updatedData);
    localStorage.setItem(key, JSON.stringify(donnesModifies));
  };

  return {
    donnesStoques,
    create,
    read,
    update,
    deletee,
  };
}
