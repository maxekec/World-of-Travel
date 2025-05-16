import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/autoplay";
import { Navigation } from 'swiper/modules';
import { FaWhatsapp } from 'react-icons/fa';
import poster1 from '../images2/yanzi-1.jpg';
import poster2 from '../images2/mishan-3.jpg';
import poster3 from '../images2/hunchun-1.jpg';
import poster4 from '../images2/lifetour-4.jpg';
import poster5 from '../images2/excursion-5.jpg';
import poster6 from '../images2/stomatolog-6.jpg';
import poster7 from '../images2/kosmetolog-8.webp';
import './Slider.css';

const DesktopSlider = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    useEffect(() => {
        AOS.init({
            duration: 1000, // Длительность анимации в миллисекундах
            once: true, // Анимация срабатывает только один раз
        });
    }, []);
    const tours = [
        { title: 'Индивидуальные туры', poster: poster1, info: (
            <>
                <p>Продолжительность тура: от 4 дней.</p>
                <p>Направления: Харбин, Далянь, Пекин, Шанхай, Санья.</p>
                <p>Гостиницы: 3х звездочные, 4х звездочные, 5ти звездочные.</p>
                <p><strong>Стоимость: от 30.000₽</strong></p>
            </>
        ), highlight: 'В стоимость туров входит: проезд, проживание, завтраки, страховка, трансфер, услуги гид-переводчика.' },
        
        { title: 'Авторские туры', poster: poster2, info: (
            <>
                <p>Продолжительность тура: от 4 дней.</p>
                <p>Направления: Чайбаньшань, Вейхай, Санья.</p>
                <p>Гостиницы: 3х звездочные, 4х звездочные, 5ти звездочные.</p>
                <p><strong>Стоимость зависит от количества дней и уровня гостиницы.</strong></p>
            </>
        ), highlight: 'В стоимость туров входит: проезд, проживание, завтраки, страховка, трансфер, услуги гид-переводчика.' },

        { title: 'Групповые туры в Хуньчунь', poster: poster3, info: (
            <>
                <p>Продолжительность тура: 4 дня и 3 ночи.</p>
                <p><strong>от 9000₽ - 3х звездочная гостиница.</strong></p>
                <p><strong>от 13.000₽ - 5ти звездочная гостиница.</strong></p>
            </>
        ), highlight: 'В стоимость туров входит: проезд, проживание, завтраки, страховка, трансфер, услуги гид-переводчика.' },

        { title: 'Лечебно-оздоровительные туры в Хуньчунь', poster: poster4, info: (
            <>
                <p>Продолжительность тура: от 7 до 15 дней.</p>
                <p>Гостиницы: 3х звездочные, 4х звездочные, 5ти звездочные.</p>
                <p><strong>Стоимость: от 9000₽</strong></p>
                <p style={{ color: 'green' }}>На лечебно-оздоровительные туры действует 100% кэш-бек.</p>

            </>
        ), highlight: 'В стоимость туров входит: проезд, проживание, завтраки, страховка, трансфер, услуги гид-переводчика.' },

        { title: 'Экскурсионные туры', poster: poster5, info: (
            <>
                <p>Направления: Хуньчунь, Янцзы, Мишань.</p>
                <p>Гостиницы: 3х звездочные, 4х звездочные, 5ти звездочные.</p>
                <p><strong>Стоимость: от 9000₽</strong></p>
            </>
        ), highlight: 'В стоимость туров входит: проезд, проживание, завтраки, страховка, трансфер, услуги гид-переводчика.' },

        { title: 'Стоматологические туры в Хуньчунь', poster: poster6, info: (
            <>
                <p>Продолжительность тура: от 4 до 15 дней.</p>
                <p>Гостиницы: 3х звездочные, 4х звездочные, 5ти звездочные.</p>
                <p><strong>Стоимость: от 9000₽</strong></p>
            </>
        ), highlight: 'В стоимость туров входит: проезд, проживание, завтраки, страховка, трансфер, услуги гид-переводчика.' },

        { title: 'Имплантация и косметология в Хуньчуне', poster: poster7, info: (
            <>
                <p>Продолжительность тура: от 4 дней</p>
                <p>Гостиницы: 3х звездочные, 4х звездочные, 5ти звездочные.</p>
                <p><strong>Стоимость: от 9000₽</strong></p>
            </>
        ), highlight: 'В стоимость туров входит: проезд, проживание, завтраки, страховка, трансфер, услуги гид-переводчика.' }
    ];

    const handleCardClick = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const handleWhatsappClick = (tourTitle) => {
        window.open(`https://wa.me/79020556001?text=Здравствуйте!%20Заинтересован в данном предложении %20в%20${tourTitle}`, '_blank');
    };

    return (
        <div className="desktop-slider">
            <Swiper modules={[Navigation]} slidesPerView={3} spaceBetween={20} loop={true} navigation>
                {tours.map((tour, index) => (
                    <SwiperSlide key={index}>
                        <div className={`movie-card ${expandedIndex === index ? 'expanded' : ''}`} onClick={() => handleCardClick(index)}>
                            <img src={tour.poster} alt={tour.title} className={`movie-poster ${expandedIndex === index ? 'hidden' : ''}`} />
                            <div className={`movie-title ${expandedIndex === index ? 'hidden' : ''}`}>{tour.title}</div>

                            <div className={`whatsapp-button ${expandedIndex === index ? 'hidden' : ''}`} onClick={(e) => { e.stopPropagation(); handleWhatsappClick(tour.title); }}>
                                <FaWhatsapp className="whatsapp-icon" />
                                <span>Написать в WhatsApp</span>
                            </div>

                            <div className={`movie-info ${expandedIndex === index ? 'expanded' : ''}`}>
                                <div className="highlight-box">{tour.highlight}</div>
                                {tour.info}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default DesktopSlider;
