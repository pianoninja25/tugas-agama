// const features = [
//   {
//     title: 'Dasar-dasar Kehidupan',
//     content:
//       'Pancasila, UUD 1945, NKRI, dan Bhinneka Tunggal Ika menjadi dasar utama kehidupan berbangsa dan bernegara di Indonesia.',
//     image: 'https://undraw.co/api/illustrations/freedom.svg',
//   },
//   {
//     title: 'Akhlak dalam Berbangsa',
//     content:
//       'Menjunjung tinggi kejujuran, tanggung jawab, dan rasa hormat terhadap sesama sebagai landasan moral dalam bernegara.',
//     image: 'https://undraw.co/api/illustrations/ethics.svg',
//   },
//   {
//     title: 'Pilar Kebangsaan',
//     content:
//       'Empat pilar utama: Pancasila, UUD 1945, NKRI, dan Bhinneka Tunggal Ika memperkuat identitas dan kesatuan bangsa.',
//     image: 'https://undraw.co/api/illustrations/structure.svg',
//   },
//   {
//     title: 'Toleransi Beragama',
//     content:
//       'Menghormati keberagaman keyakinan sebagai wujud nyata persatuan dalam keberagaman Indonesia.',
//     image: 'https://undraw.co/api/illustrations/tolerance.svg',
//   },
// ];

// const FeatureSection = () => (
//   <section className="py-20 px-6 bg-white">
//     <div className="max-w-6xl mx-auto text-center mb-12">
//       <h2 className="text-3xl md:text-4xl font-bold font-serif text-emerald-700 mb-4">
//         Nilai-nilai Utama
//       </h2>
//       <p className="text-gray-600">
//         Pilar penting dalam membentuk masyarakat Indonesia yang adil, damai, dan bersatu.
//       </p>
//     </div>
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
//       {features.map((item, idx) => (
//         <div
//           key={idx}
//           className="bg-emerald-50 border border-emerald-100 p-6 rounded-xl shadow-md hover:shadow-xl transition"
//         >
//           <img src={item.image} alt={item.title} className="h-40 mx-auto mb-4 object-contain" />
//           <h3 className="text-xl font-semibold text-emerald-800 mb-2">{item.title}</h3>
//           <p className="text-gray-700 text-justify">{item.content}</p>
//         </div>
//       ))}
//     </div>
//   </section>
// );
