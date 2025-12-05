import { useState, useEffect } from 'react';

function Photo() {
  const [photoUrl, setPhotoUrl] = useState('');

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(res => res.json())
      .then(data => setPhotoUrl(data[0].url))
      .catch(err => console.error('Ошибка загрузки фото:', err));
  }, []);

  return (
    <div className="photo-container">
      {photoUrl ? <img src={photoUrl} alt="Котик" /> : <p>Загрузка фото...</p>}
    </div>
  );
}

export default Photo;
