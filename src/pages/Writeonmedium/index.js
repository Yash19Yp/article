import React from "react";

import { postPosts } from "service/api";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import useForm from "simple-react-hook-form";
import * as Content_format from "constants/Content_format";
import { ToastContainer, toast } from "react-toastify";
import { Column, Row, Text, Button, Input, SelectBox } from "components";

const WriteonmediumPage = () => {
  const [apiData, setapiData] = React.useState();
  const form = useForm({ title: "", content: "", canonicalUrl: "", tags: "" });
  const navigate = useNavigate();

  function callApi(data) {
    const req = { data: { ...data, contentFormat: Content_format.html } };
    postPosts(req)
      .then((res) => {
        setapiData(res);

        toast.success("Article Posted Successfully.");
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleBackNavigation2() {
    navigate(-1);
  }

  return (
    <>
      <Column className="bg-black_900 font-gilroy mx-[auto] lg:pb-[38px] xl:pb-[44px] pb-[50px] 3xl:pb-[60px] w-[100%]">
        <header className="w-[100%]">
          <Row className="border border-bluegray_900 border-solid items-center justify-start lg:pb-[14px] xl:pb-[16px] pb-[18px] 3xl:pb-[21px] lg:pt-[13px] xl:pt-[15px] pt-[17px] 3xl:pt-[20px] lg:px-[24px] xl:px-[28px] px-[32px] 3xl:px-[38px] w-[100%]">
            <Text className="font-medium xl:mb-[2px] lg:mb-[2px] mb-[3px] xl:mt-[3px] lg:mt-[3px] mt-[4px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-center text-gray_50 w-[auto]">{`Write on medium`}</Text>
            <Button
              className="common-pointer border border-bluegray_50 border-solid font-medium ml-[1018px] 3xl:ml-[1222px] lg:ml-[791px] xl:ml-[905px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius100 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_50 text-center w-[6%]"
              onClick={handleBackNavigation2}
            >{`Cancel`}</Button>
            <Button
              className="common-pointer bg-white_A700 font-medium lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius100 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 text-center w-[6%]"
              onClick={() => {
                form.handleSubmit(callApi);
              }}
            >{`Publish`}</Button>
          </Row>
        </header>
        <Row className="items-start justify-start lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:px-[24px] xl:px-[28px] px-[32px] 3xl:px-[38px] w-[100%]">
          <Column className="w-[63%]">
            <Input
              className="placeholder:bg-transparent bg-transparent border border-bluegray_700 border-solid font-medium lg:leading-[50px] xl:leading-[57px] leading-[65.00px] 2xl:leading-[65px] 3xl:leading-[78px] lg:pl-[24px] xl:pl-[28px] pl-[32px] 3xl:pl-[38px] xl:py-[11px] py-[12.5px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] rounded-radius8 lg:text-[31px] xl:text-[35px] text-[40px] 3xl:text-[48px] placeholder:text-bluegray_600 text-bluegray_600 text-left w-[100%]"
              onChange={(e) => {
                form.handleChange("title", e.target.value);
              }}
              value={form?.values?.title}
              name="Group59"
              placeholder={`Title`}
            ></Input>
            <Input
              className="bg-transparent border-0 font-medium lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_600 text-left w-[100%]"
              onChange={(e) => {
                form.handleChange("content", e.target.value);
              }}
              value={form?.values?.content}
              name="Tellyourstory"
              placeholder={""}
            ></Input>
          </Column>
          <Column className="items-start justify-start lg:mb-[297px] xl:mb-[340px] mb-[383px] 3xl:mb-[459px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] w-[31%]">
            <Text className="font-medium lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_50 text-left w-[auto]">{`Add tags`}</Text>
            <Input
              className="placeholder:bg-transparent bg-transparent border border-bluegray_700 border-solid font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:pb-[32px] xl:pb-[36px] pb-[41.5px] 2xl:pb-[41px] 3xl:pb-[49px] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:pt-[23px] xl:pt-[27px] pt-[30.5px] 2xl:pt-[30px] 3xl:pt-[36px] rounded-radius8 lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] placeholder:text-bluegray_600 text-bluegray_600 text-left w-[100%]"
              onChange={(e) => {
                form.handleChange("tags", e.target.value);
              }}
              value={form?.values?.tags}
              name="Group62"
              placeholder={`Add tags`}
            ></Input>
            <Text className="font-medium lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_50 text-left w-[auto]">{`Canonical link`}</Text>
            <Input
              className="placeholder:bg-transparent bg-transparent border border-bluegray_700 border-solid font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:py-[14px] xl:py-[16px] py-[18.5px] 2xl:py-[18px] 3xl:py-[22px] rounded-radius8 lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] placeholder:text-bluegray_600 text-bluegray_600 text-left w-[100%]"
              onChange={(e) => {
                form.handleChange("canonicalUrl", e.target.value);
              }}
              value={form?.values?.canonicalUrl}
              name="Group63"
              placeholder={`Add canonical link here`}
            ></Input>
            <SelectBox
              className="bg-transparent border border-bluegray_700 border-solid font-medium lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:py-[16px] xl:py-[19px] py-[21.5px] 2xl:py-[21px] 3xl:py-[25px] rounded-radius8 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_600 text-left w-[100%]"
              placeholderClassName="bg-transparent text-bluegray_600"
              name="Group65"
              placeholder={`Select content format`}
              isSearchable={true}
              isMulti={true}
            ></SelectBox>
          </Column>
        </Row>
      </Column>

      <ToastContainer />
    </>
  );
};

export default WriteonmediumPage;
