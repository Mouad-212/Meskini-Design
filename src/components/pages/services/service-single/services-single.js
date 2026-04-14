import React from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../../../data/services-data';
import ctaImage from '../../../assets/img/page/cta-1.jpg';
import image1 from '../../../assets/img/portfolio/portfolio-5.jpg';
import image2 from '../../../assets/img/portfolio/portfolio-8.jpg';

const ServicesSingleMain = ({singleData}) => {
    return (
        <>
            <div className="services__details section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 columns_sticky">
                            <div className="all__sidebar">                        
                                <div className="all__sidebar-item">
                                    <h4>Our Solutions</h4>
                                    <div className="all__sidebar-item-category">
                                        <ul>
                                            {servicesData.slice(0, 5).map((data, id) => (
                                                <li key={id}><Link to={`/services/${data.id}`}>{data.title}<i className="flaticon-right-up"></i></Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="all__sidebar-item-help mb-25" style={{backgroundImage: `url(${ctaImage})`}}>
                                    <h3>Ready for Your Next Construction?</h3>
                                    <Link className="build_button mt-20" to="/contact-us">Get an Advice<i className="flaticon-right-up"></i></Link>
                                </div>
                                <div className="all__sidebar-item">
                                    <h4>Download</h4>
                                    <div className="all__sidebar-item-download">
                                        <ul>
                                            <li><Link to="#">Company Details<span className="fal fa-arrow-to-bottom"></span></Link></li>
                                            <li><Link to="#">Our Brochures<span className="fal fa-arrow-to-bottom"></span></Link></li>
                                        </ul>                            
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div className="col-lg-8">
                            <div className="services__details-area">
                                <img src={singleData.image} alt="image" />
                                <h3 className="mt-25 mb-20">{singleData.title}</h3>
                               <p>{singleData.details}</p>
                                <div className="row mt-40 mb-40">
                                    <div className="col-sm-6 sm-mb-25">
                                        <img className="img_full" src={image1} alt="image" />
                                    </div>
                                    <div className="col-sm-6">
                                        <img className="img_full" src={image2} alt="image" />
                                    </div>
                                </div>
                                <p>Nous fournissons des services de construction exceptionnels soutenus par des années d'expérience. Notre équipe qualifiée privilégie la qualité, la transparence et la satisfaction des clients. Nous utilisons des techniques innovantes et des pratiques durables, garantissant l'achèvement des projets dans les délais. Faites-nous confiance pour donner vie à vos projets avec un savoir-faire inégalé.</p>
                                <ul className="services__details-area-list">
                                    {singleData.avantages?.map((item, index) => (
                                    <li key={index} style={{ display: "block", marginBottom: "10px" }}>
                                     <i className="flaticon-check-mark"></i>
                                        {item}

                                         </li>
                                         ))}
                                    
                                </ul>
                               <h3>FAQ</h3>

                                <div className="mt-30" id="accordionExample">
                                {singleData.faq?.map((item, index) => (
                                    <div className="faq-item" key={index}>
                                    
                                    <h5
                                        className={`icon ${index !== 0 ? "collapsed" : ""}`}
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapse${index}`}
                                    >
                                        {index + 1}. {item.question}
                                    </h5>

                                    <div
                                        id={`collapse${index}`}
                                        className={`faq-item-body collapse ${index === 0 ? "show" : ""}`}
                                        data-bs-parent="#accordionExample"
                                    >
                                        <p>{item.answer}</p>
                                    </div>

                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>          
        </>
    );
};

export default ServicesSingleMain;