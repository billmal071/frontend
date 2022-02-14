import React from "react";
import Image from "next/image";
import styles from "./Sidebar.module.scss";
import useProducts from "@/hooks/useProducts";
import { Spin } from "antd";
import StarRatingComponent from "react-star-rating-component";
import { ProductType } from "@/interfaces/commonTypes";

const Sidebar = function ({ title }) {
  const payload = {
    page: 1,
    pageSize: 5,
    sales: "selling",
    search: title,
  };
  const {
    status: categoryStatus,
    data: categoryData,
    error: categoryError,
  } = useProducts(payload);

  return (
    <div className={styles.sidebar}>
      <h3 className={styles.header}>Best Selling</h3>

      <div className={styles.products}>
        {categoryStatus === "error" && (
          <div className="tw-py-5 tw-w-full tw-text-center">
            <h1 className="tw-text-error tw-font-bold tw-text-2xl">
              {categoryError}
            </h1>
          </div>
        )}
        {categoryStatus === "loading" && (
          <div className="tw-py-5 tw-w-full tw-text-center">
            <Spin size="large" />
          </div>
        )}
        {categoryData?.products.objects.length &&
          categoryData?.products.objects.map((product: ProductType) => (
            <div key={product.id} className={styles.product}>
              <div className={styles.product_imageContainer}>
                <Image
                  src={product?.image[0].imageUrl}
                  width="96"
                  height="110"
                />
              </div>

              <div className={styles.product_details}>
                <p className={styles.textSm}>{product?.productTitle}</p>
                <p className={styles.textMd}>
                  {product.options[0]?.discountedPrice ? (
                    <span>₦{product.options[0].optionTotalPrice}</span>
                  ) : (
                    <span>₦{product.options[0]?.price}</span>
                  )}
                </p>
                {product.productRating.length > 0 ? (
                  <div>
                    <StarRatingComponent
                      name="rate1"
                      starCount={5}
                      value={product.productRating[0].rating}
                      editing={false}
                      emptyStarColor="#c4c4c4"
                      starColor="#ffc107"
                    />
                  </div>
                ) : (
                  <div className={styles.box_productRating}>
                    <StarRatingComponent
                      name="rate2"
                      starCount={5}
                      value={0}
                      editing={false}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
