import React from 'react';

import 'rc-drawer/assets/index.css';
import 'assets/css/react-slick.css';
import 'react-modal-video/css/modal-video.min.css';
import 'typeface-bree-serif';
import 'typeface-dm-sans';

import { StickyProvider } from 'contexts/app/app.provider';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Features from 'sections/features';
import FaqOne from 'sections/faq-one';
import FaqTwo from 'sections/faq-two';
import Video from 'sections/video';
import Pricing from 'sections/pricing';
import Services from 'sections/services';
import ProductFeature from 'sections/product-feature';
import CustomerSupport from 'sections/customer-support';

export default function IndexPage() {
  return (
    <StickyProvider>
      <Layout>
        <SEO
          title="Startup Landing 019"
          description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
        />
        <Banner />
        <Features />
        <FaqOne />
        <ProductFeature />
        <Services />
        <Pricing />
        <CustomerSupport />
        <Video />
        <FaqTwo />
      </Layout>
    </StickyProvider>
  );
}
