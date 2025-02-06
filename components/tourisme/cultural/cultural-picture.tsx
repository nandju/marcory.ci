import Image from "next/image";

export default function CulturalPicture(){
    return(
        <div className="m-8 pb-6">
            <div className="flex flex-row justify-center gap-2">
            <div className="overflow-hidden  relative">
                              <Image
                                  className="w-auto h-full object-cover"
                                  src="/assets/images/illustrations/tourisme/culture_left.png"
                                  alt=""
                                  width={300} 
                                  height={250} 
                                  objectFit="cover" 
                              />
                              
                </div>
                <div className="flex flex-col gap-2">
                <div className="overflow-hidden  relative">
                              <Image
                                  className="w-auto h-auto object-cover"
                                  src="/assets/images/illustrations/tourisme/culture_right_1.png"
                                  alt=""
                                  width={300} 
                                  height={250} 
                                  objectFit="cover" 
                              />
                              
                </div>
                <div className="overflow-hidden  relative">
                              <Image
                                  className="w-auto h-auto object-cover"
                                  src="/assets/images/illustrations/tourisme/culture_right_2.png"
                                  alt=""
                                  width={300} 
                                  height={250} 
                                  objectFit="cover" 
                              />
                              
                </div>
                </div>
            </div>
        </div>
    );
}