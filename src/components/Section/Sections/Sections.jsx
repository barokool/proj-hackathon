import React from "react";
import Section, { SectionBody, SectionTitle } from "../Section";
import Grid from "../../Grid/Grid";
import PolicyCard from "../../Policycard/PolicyCard";
import ProductCard from "../../Card/ProductCard";
import productData from "../../../functions/products";
import policy from "../../../json/policy";
export const Sections = () => {
  return (
    <>
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
        <SectionTitle>Top apartments for renting</SectionTitle>
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
    </>
  );
};
