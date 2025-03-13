import React from 'react';
import Image from 'next/image';
import { Building, Globe, Mail, MapPin, Phone, User, Facebook } from 'lucide-react';
import Link from 'next/link';


export default function About(){
    return(
       
            <div className="w-full relative h-[400px]">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/assets/images/backgrounds/bg-contact.png"
                  alt="Background"
                  fill
                  className="object-cover object-center"
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
                        <Phone size={24} className="text-secondary" />
                        <div className="flex flex-col">
                            <div>Numéro de téléphone</div>
                            <div>+225 2722394913</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Facebook size={24} className="text-secondary" />
                        <div className="flex flex-col">
                        <div>Facebook</div>
                        <Link className="hover:text-secondary" href="https://www.facebook.com/share/1Dx5XFzv8D/" target="_blank" rel="noopener noreferrer">Ambassade du Tchad en Côte d'Ivoire</Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Mail size={24} className="text-secondary" />
                        <div className="flex flex-col">
                        <div>Adresse Email</div>
                        <div>ambassade.tchadabj@ambatchad.ci</div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    );
}