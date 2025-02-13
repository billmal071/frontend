import { UploadProductType } from "@/interfaces/commonTypes";
import { createProduct } from "@/store/product/product.action";
import { RootState } from "@/store/rootReducer";
import { useRouter } from "next/router";
import React from "react";
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import Button from "../buttons/Button";

type Props = {
  submitDetails: UploadProductType;
};

function Header({ submitDetails }: Props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, seller } = useSelector((state: RootState) => state);

  function goBack() {
    router.back();
  }

  async function saveItem() {
    const { message } = await import("antd");
    submitDetails.token = user.token;
    const {
      category,
      subcategory,
      productTitle,
      productImageUrl,
      productOptions,
    } = submitDetails;
    if (category.trim() === "") {
      return message.error("Pick a category");
    }
    if (subcategory.trim() === "") {
      return message.error("Pick a sub category");
    }
    if (productTitle.trim() === "") {
      return message.error("Add a product title");
    }
    if (productImageUrl.length < 1) {
      return message.error("Add product images");
    }
    if (productOptions.length < 1) {
      return message.error("Add product options");
    }
    dispatch(createProduct(submitDetails, user.token));
    // console.log(submitDetails);
  }

  return (
    <header className="tw-bg-red-kwek100 tw-py-4 tw-px-2 md:tw-px-8 tw-flex tw-justify-between tw-items-center tw-sticky tw-top-0">
      <nav>
        <div
          className="tw-flex tw-justify-center tw-items-center tw-rounded-full tw-h-7 tw-w-7 hover:cursor-pointer"
          onClick={goBack}
        >
          <img src="/svg/left-arrow-long.svg" />
        </div>
      </nav>
      <nav>
        <div>
          <p className="tw-font-semibold tw-capitalize tw-text-white-100 tw-mb-0 tw-text-base lg:tw-text-2xl">
            upload new product
          </p>
        </div>
      </nav>
      <nav className="tw-text-white-100">
      <Link href="/seller-product/singleProduct">
        <a>
        <Button
          buttonStyle={
            "tw-bg-green-success tw-text-white-100 tw-text-xs tw-py-2 tw-px-5 tw-rounded-sm tw-capitalize hover:tw-text-yellow-filled"
          }
          text={"save item"}
          cmd={saveItem}
        />
        </a>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
