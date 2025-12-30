// "use client";

// import { useLanguage } from "@/lib/language-context";
// import { Linkedin, Twitter } from "lucide-react";

// export default function Footer() {
//   const { t, language, setLanguage } = useLanguage();
//   const currentYear = new Date().getFullYear();

//   const footerSections = [
//     { title: t.footer.product.title, links: t.footer.product.links },
//     { title: t.footer.solutions.title, links: t.footer.solutions.links },
//     { title: t.footer.resources.title, links: t.footer.resources.links },
//     { title: t.footer.company.title, links: t.footer.company.links },
//   ];

//   return (
//     <footer className="border-t border-white/5 bg-midnight-950/50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         {/* Main footer content */}
//         <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
//           {/* Logo column */}
//           <div className="col-span-2">
//             <a href="#" className="inline-block text-2xl font-bold italic tracking-tight gradient-text mb-4">
//               Clavis
//             </a>
//             <p className="text-sm text-gray-500 mb-4">
//               hello@clavis.vn
//             </p>

//             {/* Language toggle */}
//             <div className="flex items-center gap-2">
//               <span className="text-xs text-gray-500">{t.footer.language}:</span>
//               <button
//                 onClick={() => setLanguage("vi")}
//                 className={`text-xs px-2 py-1 rounded ${
//                   language === "vi"
//                     ? "bg-violet-500/20 text-violet-300"
//                     : "text-gray-500 hover:text-white"
//                 }`}
//               >
//                 🇻🇳 VI
//               </button>
//               <button
//                 onClick={() => setLanguage("en")}
//                 className={`text-xs px-2 py-1 rounded ${
//                   language === "en"
//                     ? "bg-violet-500/20 text-violet-300"
//                     : "text-gray-500 hover:text-white"
//                 }`}
//               >
//                 🇬🇧 EN
//               </button>
//             </div>
//           </div>

//           {/* Link columns */}
//           {footerSections.map((section, i) => (
//             <div key={i}>
//               <h4 className="text-sm font-semibold text-white mb-4">
//                 {section.title}
//               </h4>
//               <ul className="space-y-2">
//                 {section.links.map((link, j) => (
//                   <li key={j}>
//                     <a
//                       href="#"
//                       className="text-sm text-gray-500 hover:text-violet-400 transition-colors"
//                     >
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Bottom bar */}
//         <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
//           <p className="text-sm text-gray-500">
//             &copy; {currentYear} {t.footer.copyright}
//           </p>

//           {/* Social links */}
//           <div className="flex items-center gap-4">
//             <a
//               href="#"
//               className="p-2 text-gray-500 hover:text-violet-400 transition-colors"
//               aria-label="LinkedIn"
//             >
//               <Linkedin className="w-5 h-5" />
//             </a>
//             <a
//               href="#"
//               className="p-2 text-gray-500 hover:text-violet-400 transition-colors"
//               aria-label="Twitter"
//             >
//               <Twitter className="w-5 h-5" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
