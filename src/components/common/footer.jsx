import { footerData } from "../../utils/constants";

export const BottomFooter=()=>{
  return(
    <>
       <div className="bg-[#D89837] text-center py-10 mt-8">
          <p className="text-sm">Copyright © 2025 Technical University of Mombasa. All Rights Reserved.</p>
          <p className="italic">"Jiddu Tajidu"</p>
        </div>
    </>
  )
}

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white pt-10 mt-5">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5 md:p-1">
          {footerData.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-2 border-b-2 border-green-500 inline-block">
                {section.title}
              </h3>
              <ul className="mt-2 space-y-2">
                {section.details?.map((detail, i) => (
                  <li key={i} className="text-sm text-gray-300">{detail}</li>
                ))}
                {section.links?.map((link, i) => (
                  <li key={i} className="text-sm text-gray-300 hover:text-green-400 cursor-pointer">
                    &rarr; {link}
                  </li>
                ))}
              </ul>
              {section.icons && (
                <div className="flex space-x-3 mt-4">
                  {section.icons.map((icon, i) => (
                    <button
                      key={i}
                      className="bg-green-600 p-2 rounded-full hover:bg-green-500 transition"
                    >
                      <i className={`fab fa-${icon} text-white`}></i>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
       <BottomFooter/>
      </footer>
    );
  };
  
  export default Footer;
  