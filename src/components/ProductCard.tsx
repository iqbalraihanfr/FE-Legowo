"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { QuickViewModal } from "@/components/QuickViewModal";

export interface Product {
  id: string;
  name_id: string;
  name_en: string;
  description_id: string;
  description_en: string;
  images: string[];
  category: string;
  price: number;
  ageRange: string;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  materials: string[];
  weight: number;
  inStock: boolean;
  featured: boolean;
}

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const productName = language === "id" ? product.name_id : product.name_en;
  const productDescription =
    language === "id" ? product.description_id : product.description_en;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <div
        ref={cardRef}
        className={`flex h-full flex-col overflow-hidden rounded-xl border border-wood-100 bg-white shadow-xs transition-all duration-300 hover:shadow-md ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Image */}
        <div className="group relative aspect-square overflow-hidden">
          <Image
            src={product.images?.[0] || "/images/logonav.png"}
            alt={productName || "Product Image"}
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex flex-grow flex-col p-4">
          <div>
            <h3 className="font-playfair mb-2 text-lg font-semibold text-wood-800 line-clamp-2">
              {productName}
            </h3>
            
            <div className="space-y-2 mb-3">
              <div className="flex items-center">
                <span className="text-wood-700 font-medium">
                  {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product.price)}
                </span>
              </div>
              
              <div className="flex items-center text-sm text-wood-600">
                <span className="mr-2">Stock:</span>
                <span className={`font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  {product.inStock ? 'Available' : 'Out of Stock'}
                </span>
              </div>
              
              {product.featured && (
                <div className="text-xs text-amber-600 font-medium">
                  Featured Product
                </div>
              )}
            </div>
            
            <p className="text-sm text-wood-600 line-clamp-3 mt-2">
              {productDescription}
            </p>
          </div>

          <div className="mt-auto pt-4">
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center gap-2 text-wood-700 hover:bg-wood-50 hover:text-wood-900"
              onClick={() => setIsQuickViewOpen(true)}
            >
              <Eye className="h-4 w-4" />
              Lihat Detail
            </Button>
          </div>
        </div>
      </div>
      
      {/* Quick View Modal */}
      <QuickViewModal 
        product={product} 
        isOpen={isQuickViewOpen} 
        onClose={() => setIsQuickViewOpen(false)} 
      />
    </div>
  );
}
