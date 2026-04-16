import React from "react";
import { useParams, Link } from "react-router-dom";
import equipmentData from "../../../data/equipment-data";

import SEO from "../../../data/seo";
import HeaderTwo from "../../../layout/headers/header-four";
import FooterOne from "../../../layout/footers/footer-four";
import BreadCrumb from "../../common/breadcrumb";

const EquipmentDetails = () => {
  const { id } = useParams();

  const allItems = [
    ...equipmentData.bois,
    ...equipmentData.plantravail,
    ...equipmentData.poignee,
    ...equipmentData.accessoire,
    ...equipmentData.quincaillerie,
    ...equipmentData.eclerage,
  ];

  const item = allItems.find((el) => el.id === id);

  if (!item) {
    return (
      <>
        <SEO pageTitle="Not Found" />
        <HeaderTwo />
        <div className="container py-5">
          <h2>Équipement non trouvé</h2>
        </div>
        <FooterOne />
      </>
    );
  }

  return (
    <>
      <SEO pageTitle={item.title} />
      <HeaderTwo />

      <BreadCrumb title={item.title} innerTitle={item.title} />
        <div className="faq__area section-padding">
  <div className="container">
    <div className="row al-center">
      <div className="equipment-detail-div">

      <h2 className="equipment-detail-title wow fadeInRight">
              {item.title} 
            </h2>
          <h3 className="equipment-detail-title title2">{item.title2}</h3>
          <p className=" equipment-detail-p mb-30">{item.description}</p>
      </div>

      {/* LEFT IMAGE */}
      <div className="col-xl-6 col-lg-5 lg-mb-25">
        <div className="faq__area-image mr-50 xl-mr-0">
          <img
            className="wow img_right_animation"
            src={item.image}
            alt={item.title}
          />
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="col-xl-6 col-lg-7">

        <div className="faq__area-right">

          {/* TITLE */}
          <div className="faq__area-right-title mb-40">
            {/* <span className="subtitle wow fadeInLeft">
              Équipement
            </span> */}

            
          </div>

          {/* DESCRIPTION */}
          

          {/* ACCORDION */}
          <div className="wow fadeInUp" id="accordionExample">

            {item.detail && (
              <>
                {/* 1 */}
                <div className="faq-item">
                  <h5 className="icon" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                    Description détaillée
                  </h5>

                  <div id="collapseOne" className="faq-item-body collapse show" data-bs-parent="#accordionExample">
                    <p>{item.detail.text}</p>
                  </div>
                </div>

                {/* 2 */}
                <div className="faq-item">
                  <h5 className="icon collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                    Structure
                  </h5>

                  <div id="collapseTwo" className="faq-item-body collapse" data-bs-parent="#accordionExample">
                    <p>{item.detail.structure}</p>
                  </div>
                </div>

                {/* 3 */}
                <div className="faq-item">
                  <h5 className="icon collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                    Avantages
                  </h5>

                  <div id="collapseThree" className="faq-item-body collapse" data-bs-parent="#accordionExample">
                    <ul>
                      {item.detail.avantages?.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 4 */}
                <div className="faq-item">
                  <h5 className="icon collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                    Inconvénients
                  </h5>

                  <div id="collapseFour" className="faq-item-body collapse" data-bs-parent="#accordionExample">
                    <ul>
                      {item.detail.inconvenients?.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 5 */}
                <div className="faq-item">
                  <h5 className="icon collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                    Utilisations
                  </h5>

                  <div id="collapseFive" className="faq-item-body collapse" data-bs-parent="#accordionExample">
                    <ul>
                      {item.detail.utilisations?.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}

          </div>

        </div>

      </div>

    </div>
  </div>
</div>

      <FooterOne />
    </>
  );
};

export default EquipmentDetails;