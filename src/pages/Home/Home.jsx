import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import Section, {
  SectionBody,
  SectionTitle,
} from "../../components/Section/Section";
import Grid from "../../components/Grid/Grid";
import PolicyCard from "../../components/Policycard/PolicyCard";
import policy from "../../json/policy";
import productData from "../../functions/products";
import ProductCard from "../../components/Card/ProductCard";
export const Home = () => {
  return (
    <div>
      <Navbar />
      <Section>
        <SectionBody>
          <Grid>
            {policy.map((item, index) => (
              <>
                <PolicyCard
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Top sản phẩm bán chạy trong tuần</SectionTitle>
        <SectionBody>
          <Grid styles="renderTro">
            {productData.getProducts(4).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </div>
  );
};
