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
        { title: 'Янцзы', poster: poster1, info: (
            <>
                Для жителей Якутии, Камчатки, Сахалина проезд до Владивостока в тур <span style={{ color: '#E63946', fontWeight: 'bold' }}>НЕ ВХОДИТ.</span><br />
                Все выезды только с Владивостока.<br />
                <span style={{ color: '#32CD32', fontWeight: 'bold' }}>Что включено:</span> Ранний выезд рейсовым автобусом из Владивостока с 4:00 до 7:00.<br />
                Билет на скоростную электричку Хуньчунь/Янцзы, проезд на автобусе.<br />
                Завтраки, проживание в отеле, русскоговорящий переводчик, групповой список, медицинская страховка.
            </>
        )},
        { title: 'Мишань', poster: poster2, info: (
            <>
                Для жителей Якутии, Камчатки, Сахалина проезд до Владивостока в тур <span style={{ color: '#E63946', fontWeight: 'bold' }}>НЕ ВХОДИТ.</span><br />
                Все выезды только с Владивостока.<br />
                <span style={{ color: '#32CD32', fontWeight: 'bold' }}>Что включено:</span> Ранний выезд рейсовым автобусом из Владивостока с 4:00 до 7:00, проживание в отеле, русскоговорящий переводчик, групповой список, медицинская страховка.
            </>
        )},
        { title: 'Хуньчунь', poster: poster3, info: (
            <>
                Для жителей Якутии, Камчатки, Сахалина проезд до Владивостока в тур <span style={{ color: '#E63946', fontWeight: 'bold' }}>НЕ ВХОДИТ.</span><br />
                Все выезды только с Владивостока.<br />
                <span style={{ color: '#32CD32', fontWeight: 'bold' }}>Что включено:</span> Ранний выезд рейсовым автобусом из Владивостока с 4:00 до 7:00, завтраки, проживание в отеле, русскоговорящий переводчик, групповой список, медицинская страховка.
            </>
        )},
        { title: 'Лечебно-оздоровительный тур', poster: poster4, info: (
            <>
                От 5 до 10 дней, цена от 9000₽, может меняться в зависимости от курса.<br />
                <span style={{ color: '#E63946', fontWeight: 'bold' }}>Пластическая хирургия в Янцзы.</span> Также на оздоровительные туры у нас действует кеш-бек до 100%.
            </>
        )},
        { title: 'Экскурсионный тур', poster: poster5, info: (
            <>
                От 4 дней, цена от 9000₽, может меняться в зависимости от курса.
            </>
        )},
        { title: 'Стоматологический тур', poster: poster6, info: (
            <>
                От 4 до 10 дней, цена от 9000₽, может меняться в зависимости от курса.<br />
                г. Хуньчунь, <span style={{ color: '#E63946', fontWeight: 'bold' }}>пластическая хирургия в Янцзы.</span>
            </>
        )},
        { title: 'Имплантация и косметология', poster: poster7, info: (
            <>
                От 4 до 15 дней, цена от 9900₽, цена может меняться в зависимости от курса.<br />
                г. Хуньчунь, <span style={{ color: '#E63946', fontWeight: 'bold' }}>пластическая хирургия в Янцзы.</span>
            </>
        )},
        { title: 'Шоппинг тур', poster: poster8, info: (
            <>
                От 4 дней, цена от 6500₽, цена может меняться в зависимости от курса.<br />
                г. Мишань.
            </>
        )}
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
