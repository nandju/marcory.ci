import React from 'react';
import Image from 'next/image';
import { Building, Globe, MapPin, User } from 'lucide-react';


export default function About(){
    return(
       
            <div className="w-full relative h-[400px]">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/assets/images/backgrounds/background_1.png"
                  alt="Background"
                  fill
                  className="object-cover object-bottom"
                  priority
                />
              </div>
        
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#003d99]/40 z-10"></div>
        
              {/* Content */}
              <div className="relative z-20 w-full h-full">
                <div className="container relative mx-auto px-4 py-20">
                  <div className="flex flex-col absolute top-0 left-0 bg-primary text-white w-[360px] p-4 gap-4">
                    <div className="flex items-center gap-3">
                        <User size={24} className="text-secondary" />
                        <div className="flex flex-col">
                            <div>Direction</div>
                            <div>Gonfouli SOUARIBA, Ambassadeur en Côte d'Ivoire</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Globe size={24} className="text-secondary" />
                        <div className="flex flex-col">
                        <div>Pays</div>
                        <div>Côte d'Ivoire</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Building size={24} className="text-secondary" />
                        <div className="flex flex-col">
                        <div>Ville</div>
                        <div>Abidjan</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <MapPin size={24} className="text-secondary" />
                        <div className="flex flex-col">
                            <div>Adresse</div>
                            <div>39, Blvd. Hassan II(Bvld. de la Corniche) Abidjan-Cocody</div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    );
}