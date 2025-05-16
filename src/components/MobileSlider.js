import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaWhatsapp } from 'react-icons/fa';
import poster1 from '../images2/yanzi-1.jpg';
import poster2 from '../images2/mishan-3.jpg';
import poster3 from '../images2/hunchun-1.jpg';
import poster4 from '../images2/lifetour-4.jpg';
import poster5 from '../images2/excursion-5.jpg';
import poster6 from '../images2/stomatolog-6.jpg';
import poster7 from '../images2/kosmetolog-8.webp';
import poster8 from '../images2/shopping-9.jpg';
import './MobileSlider.css';

const MobileSlider = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const swiperRef = useRef(null); // Ссылка на Swiper

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

    const handleCardClick = (event, index) => {
        if (event.target.closest('.whatsapp-button')) return; // Если клик по WhatsApp, не разворачиваем карточку
        setExpandedIndex(expandedIndex === index ? null : index);
        
        // Останавливаем прокрутку слайдов при клике на карточку
        if (swiperRef.current) {
            swiperRef.current.swiper.autoplay.stop(); // Останавливаем прокрутку
        }
    };

    const handleWhatsappClick = (city) => {
        const message = encodeURIComponent(`Здравствуйте! Интересуюсь туром в ${city}. Расскажите подробнее!`);
        window.open(`https://wa.me/79020556001?text=${message}`, '_blank');
    };

    return (
        <div className="mobile-slider">
            <Swiper
                ref={swiperRef} // Ссылка на Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                navigation
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                centeredSlides
                className="movie-swiper"
            >
                {tours.map((tour, index) => (
                    <SwiperSlide key={index}>
                        <div 
                            className={`movie-card ${expandedIndex === index ? 'expanded' : ''}`}
                            onClick={(event) => handleCardClick(event, index)}
                        >
                            <img src={tour.poster} alt={tour.title} className="movie-poster" />
                            <div className="movie-title">{tour.title}</div>

                            {/* Кнопка WhatsApp с уникальным текстом */}
                            <div
                                className="whatsapp-button"
                                onClick={(event) => {
                                    event.preventDefault();
                                    event.stopPropagation();
                                    handleWhatsappClick(tour.title);
                                }}
                            >
                                <FaWhatsapp className="whatsapp-icon" />
                                <span>Написать в WhatsApp</span>
                            </div>

                            {/* Раскрытый текст */}
                            <div className={`movie-info ${expandedIndex === index ? 'expanded' : ''}`}>
                                <div className="highlight-box">{tour.highlight}</div>
                                <p>{tour.info}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MobileSlider;
