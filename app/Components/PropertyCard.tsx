// components/PropertyCard.jsx
import Image from 'next/image';

interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  imageUrl: string;
  isVerified: boolean;
  type: string;
}

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <Image 
          src={property.imageUrl} 
          alt={property.title}
          layout="fill"
          objectFit="cover"
        />
        {/* Verification Badge */}
        {property.isVerified && (
          <div className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
            <span>✓</span> CDA VERIFIED
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-slate-800 leading-tight">{property.title}</h3>
            <p className="text-sm text-slate-500 italic">{property.location}</p>
          </div>
          <p className="text-emerald-700 font-bold text-lg">₦{property.price.toLocaleString()}</p>
        </div>
        
        <div className="mt-4 flex items-center justify-between text-slate-600 text-sm border-t pt-3">
          <span>{property.type}</span>
          <button className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg font-semibold hover:bg-emerald-100 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}