import React from 'react';
import logo from "./image/logo.png";
import extra from './image/extra.jpeg';
import headmaster from "./image/Head.jpg"
import extra0 from "./image/extra0.jpeg";
import rizzky from "./image/rizzky.jpeg";
import iqbal from "./image/iqbal.jpeg";
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [activeIndex, setactiveIndex] = useState(0);
  const testimonials = [
    {
      image: iqbal,
      quote: "Selama bersekolah di Sman 17 Surabaya atau smantass, saya sama sekali tidak menyia-nyiakan 3 tahun masa sekolah menengah atas. saya bisa dangan bebas mengeksplor diri dan berkembang dengan lingkungan, sarana prasarana serta dukungan yang selalu memenuhi kebutuhan saya, guna mencapai mimpi.",
      alt: "Alumni",
      nama: "Iqbal Adam Umri",
      pendidikan: "Mahasiswa"
    },
    {
      image: rizzky,
      quote: "Saya alumni 17 bangga dan bersyukur bisa menimba ilmu di smantass. Sekolah yang memberikan kesempatan mengembangkan potensi sehingga menjadi siswa yang bernilai bagi semua orang. Terima kasih Bapak dan Ibu guru dan semua karyawan yang telah memberikan ilmu dan membentuk karakter saya.",
      alt: "Alumni",
      nama: "Rizky ilham arifin",
      pendidikan: "Mahasiswa"
    }
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setactiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000); // 5000 milliseconds = 5 seconds
    
    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="testimonials">
      <div className="container">
        <h2>Apa Kata Mereka?</h2>
        <div className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`testimonial ${index === activeIndex ? 'active' : ''}`}
            >
              <div className="quote">
                <p>{testimonial.quote}</p>
              </div>
              <div className="author">
                <img src={testimonial.image} alt={index === 0 ? "Alumni" : "Siswa"} />
                <h4>{testimonial.nama}</h4>
                <p>{testimonial.pendidikan}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: headmaster,
      alt: "Kegiatan Belajar Mengajar",
      title: "Selamat datang di SMAN 17 Surabaya",
      description: "Sekolah unggulan yang membentuk generasi unggul yang berkarakter dan berprestasi",
      link: "#"
    },
    {
      image: extra,
      alt: "Ekstrakurikuler",
      title: "Pengembangan Bakat dan Minat Siswa",
      description: "Berbagai kegiatan ekstrakurikuler untuk mengasah kreativitas dan talenta",
      link: "#"
    }
  ];

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Ganti slide setiap 5 detik

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero">
      <div className="slider">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={slide.image} alt={slide.alt} />
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <a href={slide.link} className="btn">
                Selengkapnya
              </a>
            </div>
          </div>
        ))}
        
      </div>
      
      <div className="slider-controls">
        {slides.map((_, index) => (
          <span 
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default function Website() {

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      
      <header>
        <div className="top-bar">
          <div className="container">
            <div className="contact-info">
              <span>
                <i className="fas fa-phone" /> (021) 1234567
              </span>
              <span>
                <i className="fas fa-envelope" /> info@sman17surabaya.sch.id
              </span>
            </div>
            <div className="social-media">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>
        
        <nav>
          <div className="container">
            <div className="logo">
              <img src={logo} alt="Logo SMAN 17 Surabaya" />
              <div className="logo-text">
                <h1>SMAN 17 Surabaya</h1>
                <p>Sekolah Unggulan Berprestasi</p>
              </div>
            </div>
            <ul className="menu">
              <li>
                <a href="#" className="active">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#">Profil</a>
                <ul className="submenu">
                  <li>
                    <a href="#">Sejarah</a>
                  </li>
                  <li>
                    <a href="#">Visi Misi</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Akademik</a>
              </li>
              <li>
                <a href="#">Siswa</a>
              </li>
              <li>
                <a href="#">Guru & Staff</a>
              </li>
              <li>
                <a href="#">Berita</a>
              </li>
              <li>
                <a href="#">Galeri</a>
              </li>
              <li>
                <a href="#">Kontak</a>
              </li>
            </ul>
            <div className="mobile-menu">
              <i className="fas fa-bars" />
            </div>
          </div>
        </nav>
      </header>

      <Slider />

      <section className="quick-links">
        <div className="container">
          <div className="link-box">
            <i className="fas fa-calendar-alt" />
            <h3>Kalender Akademik</h3>
            <p>Jadwal kegiatan sekolah tahun 2023/2024</p>
            <a href="#">
              Lihat Jadwal <i className="fas fa-arrow-right" />
            </a>
          </div>
          <div className="link-box">
            <i className="fas fa-graduation-cap" />
            <h3>Penerimaan Siswa Baru</h3>
            <p>Informasi pendaftaran siswa baru</p>
            <a href="#">
              Daftar Sekarang <i className="fas fa-arrow-right" />
            </a>
          </div>
          <div className="link-box">
            <i className="fas fa-book" />
            <h3>E-Learning</h3>
            <p>Sistem pembelajaran online</p>
            <a href="#">
              Masuk <i className="fas fa-arrow-right" />
            </a>
          </div>
          <div className="link-box">
            <i className="fas fa-newspaper" />
            <h3>Berita Terkini</h3>
            <p>Update informasi seputar sekolah</p>
            <a href="#">
              Baca Berita <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="about-content">
            <h2>Tentang SMAN 17 Surabaya</h2>
            <p>
              SMA Negeri (SMAN) 17 Surabaya atau dikenal dengan akronim Smantass berdiri pada tanggal 22 Desember 1986 merupakan salah satu Sekolah Menengah Atas Negeri yang ada di Provinsi Jawa Timur, Indonesia. Sama dengan SMA pada umumnya di Indonesia masa pendidikan sekolah di SMAN 17 Surabaya ditempuh dalam waktu tiga tahun pelajaran, mulai dari Kelas X sampai Kelas XII. Adapun maskot dari SMANTASS adalah Burhan.
            </p>
            <div className="achievements">
              <div className="achievement-item">
                <span className="number">25+</span>
                <span className="label">Prestasi Nasional</span>
              </div>
              <div className="achievement-item">
                <span className="number">98%</span>
                <span className="label">Kelulusan</span>
              </div>
              <div className="achievement-item">
                <span className="number">50+</span>
                <span className="label">Guru Berprestasi</span>
              </div>
            </div>
            <a href="#" className="btn">
              Baca Selengkapnya
            </a>
          </div>
          <div className="about-image">
            <img src="about-school.jpg" alt="Gedung SMAN 17 Surabaya" />
          </div>
        </div>
      </section>

      <section className="news">
        <div className="container">
          <div className="section-header">
            <h2>Berita & Pengumuman</h2>
            <a href="#" className="view-all">
              Lihat Semua <i className="fas fa-arrow-right" />
            </a>
          </div>
          <div className="news-grid">
            <div className="news-card">
              <div className="news-image">
                <img src="news1.jpg" alt="Berita 1" />
                <span className="date">15 Mar 2023</span>
              </div>
              <div className="news-content">
                <h3>Siswa SMAN 17 Surabaya Juara Olimpiade Matematika Nasional</h3>
                <p>
                  Tim olimpiade matematika SMAN 17 Surabaya berhasil meraih medali
                  emas dalam kompetisi tingkat nasional yang diselenggarakan di
                  Jakarta.
                </p>
                <a href="#" className="read-more">
                  Baca Selengkapnya
                </a>
              </div>
            </div>
            <div className="news-card">
              <div className="news-image">
                <img src="news2.jpg" alt="Berita 2" />
                <span className="date">10 Mar 2023</span>
              </div>
              <div className="news-content">
                <h3>Pembukaan Pendaftaran Siswa Baru TA 2023/2024</h3>
                <p>
                  Pendaftaran siswa baru tahun ajaran 2023/2024 dibuka mulai 1 April
                  2023. Persyaratan dan informasi lengkap dapat dilihat di halaman
                  PPDB.
                </p>
                <a href="#" className="read-more">
                  Baca Selengkapnya
                </a>
              </div>
            </div>
            <div className="news-card">
              <div className="news-image">
                <img src="news3.jpg" alt="Berita 3" />
                <span className="date">5 Mar 2023</span>
              </div>
              <div className="news-content">
                <h3>Workshop Pengembangan Kurikulum Merdeka Belajar</h3>
                <p>
                  Guru-guru SMAN 17 Surabaya mengikuti workshop implementasi
                  kurikulum merdeka belajar untuk meningkatkan kualitas
                  pembelajaran.
                </p>
                <a href="#" className="read-more">
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery">
        <div className="container">
          <div className="section-header">
            <h2>Galeri Kegiatan</h2>
            <a href="#" className="view-all">
              Lihat Semua <i className="fas fa-arrow-right" />
            </a>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="gallery1.jpg" alt="Kegiatan 1" />
              <div className="overlay">
                <h3>Studi Lapangan</h3>
                <p>Kunjungan ke Museum Nasional</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="gallery2.jpg" alt="Kegiatan 2" />
              <div className="overlay">
                <h3>Pentas Seni</h3>
                <p>Pagelaran tahunan siswa</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="gallery3.jpg" alt="Kegiatan 3" />
              <div className="overlay">
                <h3>Olahraga</h3>
                <p>Kejuaraan basket antar sekolah</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="gallery4.jpg" alt="Kegiatan 4" />
              <div className="overlay">
                <h3>Ekskul Robotik</h3>
                <p>Latihan pembuatan robot</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials/>

      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="footer-col">
              <h3>Tentang Kami</h3>
              <p>
                SMAN 17 Surabaya adalah sekolah unggulan dengan berbagai prestasi di
                tingkat nasional dan internasional.
              </p>
              <div className="footer-contact">
                <p>
                  <i className="fas fa-map-marker-alt" /> Jl. Pendidikan No. 123,
                  Surabaya
                </p>
                <p>
                  <i className="fas fa-phone" /> (021) 1234567
                </p>
                <p>
                  <i className="fas fa-envelope" /> info@sman17surabaya.sch.id
                </p>
              </div>
            </div>
            <div className="footer-col">
              <h3>Link Cepat</h3>
              <ul>
                <li>
                  <a href="#">Profil Sekolah</a>
                </li>
                <li>
                  <a href="#">Penerimaan Siswa Baru</a>
                </li>
                <li>
                  <a href="#">Kalender Akademik</a>
                </li>
                <li>
                  <a href="#">E-Learning</a>
                </li>
                <li>
                  <a href="#">Galeri Foto</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Berita Terkini</h3>
              <div className="footer-news">
                <div className="footer-news-item">
                  <img src="news-thumb1.jpg" alt="Berita" />
                  <div className="footer-news-content">
                    <a href="#">Siswa Raih Medali Olimpiade</a>
                    <span>15 Mar 2023</span>
                  </div>
                </div>
                <div className="footer-news-item">
                  <img src="news-thumb2.jpg" alt="Berita" />
                  <div className="footer-news-content">
                    <a href="#">Pendaftaran Siswa Baru Dibuka</a>
                    <span>10 Mar 2023</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-col">
              <h3>Newsletter</h3>
              <p>
                Dapatkan informasi terbaru dari kami dengan berlangganan newsletter.
              </p>
              <form className="newsletter-form">
                <input type="email" placeholder="Alamat Email Anda" />
                <button type="submit">Berlangganan</button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="copyright">
              <p>© 2023 SMAN 17 Surabaya. Semua Hak Dilindungi.</p>
            </div>
            <div className="footer-links">
              <a href="#">Kebijakan Privasi</a>
              <a href="#">Syarat & Ketentuan</a>
              <a href="#">Peta Situs</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}