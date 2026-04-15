import { useParams } from "react-router-dom";
import equipmentData from '../../../data/equipment-data';
import SEO from "../../../data/seo";
import HeaderTwo from "../../../layout/headers/header-two";
import FooterOne from "../../../layout/footers/footer-one";
import BreadCrumb from "../../common/breadcrumb";
import { Link } from 'react-router-dom';

const EquipmentPage = () => {
  const { category } = useParams();

  const key = category?.toLowerCase();
  const data = equipmentData[key] || [];

  return (
    <>
      <SEO pageTitle="Equipment" />
      <HeaderTwo />
        <BreadCrumb title={category} innerTitle={category} />
      <div className="container px-5 equipment-container">
        <div className="row g-4">

          {data.length > 0 ? (
            data.map((item) => (
              <div key={item.id} className="col-md-4 col-sm-6">
                
                <div className="equipment-card">

                  <div className="equipment-image">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="equipment-body">
                    <h3 className="equipment-title">
                      {item.title}
                    </h3>

                    <p className="equipment-desc">
                      {item.description}
                    </p>
                        {key === "quincaillerie" ? null : (
                          <Link className="more_btn" to={`/equipment/${item.id}`}>
                            Read More <i className="flaticon-right-up"></i>
                          </Link>
                        )}                
                  </div>

                </div>

              </div>
            ))
          ) : (
            <p className="equipment-empty">ما كايناش بيانات</p>
          )}

        </div>
      </div>

      <FooterOne />
    </>
  );
};

export default EquipmentPage;