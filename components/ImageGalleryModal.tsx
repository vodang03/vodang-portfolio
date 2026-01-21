"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ImageGalleryModalProps {
  images: string[];
  onClose: () => void;
}

export default function ImageGalleryModal({ images, onClose }: ImageGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    },
    [onClose, nextImage, prevImage],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      {/* Nút đóng */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
      >
        <X size={24} />
      </button>

      {/* Container ảnh */}
      <div
        className="relative w-full max-w-6xl aspect-video flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Nút lùi */}
        {images.length > 1 && (
          <button
            onClick={prevImage}
            className="absolute left-2 md:-left-16 p-2 text-white/70 hover:text-white bg-black/50 hover:bg-white/20 rounded-full transition-colors z-10"
          >
            <ChevronLeft size={32} />
          </button>
        )}

        {/* Ảnh chính */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full h-full"
        >
          <Image
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            fill
            className="object-contain"
            priority
            sizes="100vw"
          />
        </motion.div>

        {/* Nút tiến */}
        {images.length > 1 && (
          <button
            onClick={nextImage}
            className="absolute right-2 md:-right-16 p-2 text-white/70 hover:text-white bg-black/50 hover:bg-white/20 rounded-full transition-colors z-10"
          >
            <ChevronRight size={32} />
          </button>
        )}

        {/* Bộ đếm ảnh */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </motion.div>
  );
}
