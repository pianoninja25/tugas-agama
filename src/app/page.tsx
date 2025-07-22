'use client';

import React from 'react';
import { BookOpen, Users, Leaf, Award } from 'lucide-react';

export default function AkhlakPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=\'60\'%20height=\'60\'%20viewBox=\'0%200%2060%2060\'%20xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg%20fill=\'none\'%20fill-rule=\'evenodd\'%3E%3Cg%20fill=\'%23ffffff\'%20fill-opacity=\'0.05\'%3E%3Ccircle%20cx=\'30\'%20cy=\'30\'%20r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

        <div className="relative px-6 py-24 lg:py-32">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-100 text-sm font-medium mb-6 border border-white/20">
              <BookOpen className="w-4 h-4 mr-2" />
              Artikel Ilmiah
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                Akhlak dan Perilaku Baik
              </span>
              <br />
              dalam Lingkungan Sosial
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Membentuk masyarakat yang lebih harmonis dan berkelanjutan melalui perilaku etis dan tanggung jawab sosial.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-blue-200">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>Harmoni Sosial</span>
              </div>
              <div className="flex items-center">
                <Leaf className="w-5 h-5 mr-2" />
                <span>Lingkungan Berkelanjutan</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>Nilai Moral</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
          {/* Introduction Card */}
          <div className="bg-white rounded-2xl shadow-xl shadow-blue-100/50 p-8 lg:p-12 mb-16 border border-blue-100/50">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">Pendahuluan</h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Akhlak atau moralitas mencerminkan nilai-nilai yang membimbing seseorang dalam bertindak. Dalam konteks lingkungan sosial dan alam, perilaku baik menjadi kunci untuk membangun masyarakat yang sehat, saling menghargai, dan berkelanjutan.
            </p>
          </div>

          {/* Importance Section */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12 mb-16 border border-blue-200/30">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">Pentingnya Akhlak dalam Lingkungan</h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Perilaku sehari-hari seperti tidak membuang sampah sembarangan, saling tolong-menolong, bersikap jujur, dan menjaga fasilitas umum merupakan wujud nyata implementasi akhlak. Ketika akhlak diterapkan secara kolektif, dampaknya sangat besar terhadap kualitas hidup bersama.
            </p>
          </div>

          {/* Impact Section with Cards */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Dampak Perilaku Baik</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg shadow-blue-100/50 border border-blue-100/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Kehidupan Sosial Lebih Harmonis</h3>
                <p className="text-slate-600 leading-relaxed">
                  Akhlak seperti empati, jujur, dan tanggung jawab memperkuat ikatan antarindividu dalam masyarakat.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg shadow-blue-100/50 border border-blue-100/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mb-6">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Lingkungan Alam Lebih Terjaga</h3>
                <p className="text-slate-600 leading-relaxed">
                  Kesadaran akan tanggung jawab ekologis mengurangi kerusakan lingkungan dan melestarikan alam.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg shadow-blue-100/50 border border-blue-100/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Budaya Positif Terbentuk</h3>
                <p className="text-slate-600 leading-relaxed">
                  Perilaku baik menjadi norma dalam masyarakat dan diwariskan lintas generasi.
                </p>
              </div>
            </div>
          </div>

          {/* Challenges Section */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 lg:p-12 mb-16 border border-amber-200/50">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Tantangan dan Solusi</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Tantangan seperti egoisme, kurangnya pendidikan karakter, dan minimnya keteladanan masih menjadi hambatan. Oleh karena itu, penting untuk melibatkan keluarga, sekolah, dan media sosial dalam membangun kesadaran moral yang konsisten.
            </p>
          </div>

          {/* Conclusion */}
          <div className="bg-white rounded-2xl shadow-xl shadow-blue-100/50 p-8 lg:p-12 mb-16 border border-blue-100/50">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Penutup</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Implementasi akhlak dan perilaku baik bukan hanya tanggung jawab individu, tapi juga kolektif. Perubahan kecil dari diri sendiri bisa berdampak besar terhadap lingkungan sosial maupun ekologis di masa depan.
            </p>
          </div>

          {/* References */}
          <div className="bg-slate-50 rounded-2xl p-8 lg:p-12 mb-16 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Referensi</h3>
            <div className="space-y-4 text-slate-600">
              <div className="border-l-4 border-blue-400 pl-4">
                <p>Lickona, T. (1991). <em>Educating for Character: How Our Schools Can Teach Respect and Responsibility</em>.</p>
              </div>
              <div className="border-l-4 border-indigo-400 pl-4">
                <p>Supriyadi, A. (2020). "Pendidikan Karakter Berbasis Akhlak Mulia." <em>Jurnal Pendidikan Moral</em>, 7(1), 20–34.</p>
              </div>
              <div className="border-l-4 border-purple-400 pl-4">
                <p>UNESCO. (2023). <em>Education for Sustainable Development</em>.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Author Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Tautan Pribadi</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a
                href="https://www.youtube.com/watch?v=9LCTJ8BxgAg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200 font-medium"
              >
                📹 Video Wawancara
              </a>
              <a
                href="https://garudatalent.fun/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
              >
                🔗 Tentang Penulis
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm">© 2025 Leonard Sianipar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
