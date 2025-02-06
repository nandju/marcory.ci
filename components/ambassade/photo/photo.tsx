import Image from "next/image";
import { Button } from "@nextui-org/react";
import { ChevronLeft, ChevronRight } from "lucide-react";


export default function Photo(){

    type Picture = {
        picture: string;
        title: string;

      };
      
      const pictures: Picture[] = [
        {
          picture:
            "/assets/images/illustrations/ambassade/card_1.png",
          title: "card1",

        },
        {
            picture:
              "/assets/images/illustrations/ambassade/card_2.png",
            title: "card2",
  
          },
          {
            picture:
              "/assets/images/illustrations/ambassade/card_3.png",
            title: "card3",
  
          },
          {
            picture:
              "/assets/images/illustrations/ambassade/card_4.png",
            title: "card4",
  
          },
          {
            picture:
              "/assets/images/illustrations/ambassade/card_1.png",
            title: "card5",
  
          },
          {
            picture:
              "/assets/images/illustrations/ambassade/card_2.png",
            title: "card6",
  
          },
          {
            picture:
              "/assets/images/illustrations/ambassade/card_3.png",
            title: "card7",
  
          },
          {
            picture:
              "/assets/images/illustrations/ambassade/card_4.png",
            title: "card8",
  
          },
        
      ];

    return(
        <div className="p-10 mb-6">
            
            <div className=" font-mulish text-secondary font-semibold text-center text-3xl">Galerie de Photos</div>
            <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-row justify-around items-stretch gap-4 flex-wrap mt-3 lg:mt-10">
        {pictures.map((items) => {
          return (
            <div
              key={items.title} 
              className="flex flex-col mt-4 self-stretch rounded-xl shadow-2xl w-72 bg-card"
            >
              <div className="overflow-hidden  relative">
                <Image
                    className="w-full h-auto object-cover"
                    src={items.picture}
                    alt={items.title}
                    width={233} 
                    height={248} 
                    objectFit="contain" 
                />
                
                </div>
            </div>
          );
        })}
            </div>
            <div className="hidden md:flex gap-2">
                    <button className="p-2  bg-gray-200 hover:bg-gray-300">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button className="p-2  bg-secondary hover:bg-red-600 text-white">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
}