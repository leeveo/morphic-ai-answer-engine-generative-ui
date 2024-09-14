"use client";

import React, { useEffect, useState } from 'react';
import HistoryContainer from './history-container';

export function Sidebar() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    fetch('/random-images')
      .then(response => response.json())
      .then(data => {
        console.log('Images fetched:', data); // Log the fetched images
        setImages(data);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <div className="h-screen p-2 fixed top-0 left-0 flex-col justify-center pb-24 hidden sm:flex" style={{ width: '450px', marginTop: '150px' }}>
      <div className="flex flex-col items-center space-y-4">
        {images.map((image, index) => (
          <img key={index} src={`/images/${image}`} alt={`Random ${index + 1}`} className="w-450 h-270 object-cover" />
        ))}
      </div>
      <HistoryContainer location="sidebar" />
    </div>
  );
}