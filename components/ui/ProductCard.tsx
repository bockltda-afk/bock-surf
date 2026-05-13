import { formatPrice } from "@/lib/utils";
import { PlayCircle } from "lucide-react";

interface ProductProps {
  id: string;
  name: string;
  short_description: string;
  price: number;
  original_price?: number | null;
  duration_weeks?: number | null;
  image_url?: string | null;
  type: 'presencial' | 'asincronico' | 'plan';
  onClick: () => void;
}

export default function ProductCard({
  name,
  short_description,
  price,
  original_price,
  duration_weeks,
  image_url,
  type,
  onClick
}: ProductProps) {
  const isOnline = type === 'asincronico';

  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer bg-card rounded-2xl overflow-hidden border border-gray-800 hover:border-accent/50 transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden bg-gray-900">
        {image_url ? (
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${image_url}')` }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
            <span className="text-gray-600 font-bold text-xl uppercase tracking-widest">{type}</span>
          </div>
        )}
        
        {/* Badges */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {isOnline && (
            <span className="bg-accent text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
              Online
            </span>
          )}
        </div>

        {/* Play Icon for courses */}
        {isOnline && (
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <PlayCircle className="text-white w-16 h-16 opacity-80" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 mb-6 flex-grow">{short_description}</p>
        
        <div className="flex items-end justify-between mt-auto">
          <div>
            {duration_weeks && (
              <p className="text-sm text-gray-500 mb-1">{duration_weeks} Semanas</p>
            )}
            <div className="flex items-center gap-3">
              <span className="text-2xl font-black text-accent">{formatPrice(price)}</span>
              {original_price && (
                <span className="text-sm text-gray-500 line-through">{formatPrice(original_price)}</span>
              )}
            </div>
          </div>
          
          <button className="px-4 py-2 rounded-md bg-white/5 hover:bg-white/10 text-white font-medium transition-colors border border-gray-700 group-hover:border-accent/30 group-hover:text-accent">
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
}
