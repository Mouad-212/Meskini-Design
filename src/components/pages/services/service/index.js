import SEO from "../../../data/seo";
import HeaderTwo from "../../../layout/headers/header-four";
import BreadCrumb from "../../common/breadcrumb";
import ServicesMain from "./services";
import FooterOne from "../../../layout/footers/footer-four";

const ServicePage = () => {
    return (
        <>
            <SEO pageTitle="Services" />
            <HeaderTwo />
            <BreadCrumb title="Services" innerTitle="Services" />
            <ServicesMain />
            <FooterOne />
        </>
    );
};

export default ServicePage;