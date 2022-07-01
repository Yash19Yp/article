import React from "react";

import { postArticles } from "service/api";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import useForm from "simple-react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { Column, Row, Text, Button, Input, TextArea } from "components";

const WriteondevtoPage = () => {
  const [apiData1, setapiData1] = React.useState();
  const form = useForm({
    article: { title: "", body_markdown: "", canonical_url: "" },
  });
  const navigate = useNavigate();

  function callApi1(data) {
    const req = { data: { ...data } };
    postArticles(req)
      .then((res) => {
        setapiData1(res);
        navigate("/");
        toast.success("Article Posted Successfully.");
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleBackNavigation1() {
    navigate(-1);
  }

  return (
    <>
      <Column className="bg-black_900 font-gilroy mx-[auto] lg:pb-[38px] xl:pb-[44px] pb-[50px] 3xl:pb-[60px] w-[100%]">
        <header className="w-[100%]">
          <Row className="border border-bluegray_900 border-solid items-center justify-start lg:pb-[14px] xl:pb-[16px] pb-[18px] 3xl:pb-[21px] lg:pt-[13px] xl:pt-[15px] pt-[17px] 3xl:pt-[20px] lg:px-[24px] xl:px-[28px] px-[32px] 3xl:px-[38px] shadow-bs w-[100%]">
            <Text className="font-medium xl:mb-[2px] lg:mb-[2px] mb-[3px] xl:mt-[3px] lg:mt-[3px] mt-[4px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-center text-gray_50 w-[auto]">{`Write on dev.to`}</Text>
            <Button
              className="common-pointer border border-bluegray_50 border-solid font-medium ml-[1037px] 3xl:ml-[1245px] lg:ml-[806px] xl:ml-[922px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius100 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_50 text-center w-[6%]"
              onClick={handleBackNavigation1}
            >{`Cancel`}</Button>
            <Button
              className="common-pointer bg-white_A700 font-medium lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius100 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 text-center w-[6%]"
              onClick={() => {
                form.handleSubmit(callApi1);
              }}
            >{`Publish`}</Button>
          </Row>
        </header>
        <Row className="items-start justify-start lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:px-[24px] xl:px-[28px] px-[32px] 3xl:px-[38px] w-[100%]">
          <Column className="w-[63%]">
            <Input
              className="placeholder:bg-transparent bg-transparent border border-bluegray_700 border-solid font-medium lg:leading-[50px] xl:leading-[57px] leading-[65.00px] 2xl:leading-[65px] 3xl:leading-[78px] lg:pl-[24px] xl:pl-[28px] pl-[32px] 3xl:pl-[38px] xl:py-[11px] py-[12.5px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] rounded-radius8 lg:text-[31px] xl:text-[35px] text-[40px] 3xl:text-[48px] placeholder:text-bluegray_600 text-bluegray_600 text-left w-[100%]"
              onChange={(e) => {
                form.handleChange("article.title", e.target.value);
              }}
              value={form?.values?.article?.title}
              name="Group67"
              placeholder={`Title`}
            ></Input>
            <Column className="lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
              <TextArea
                className="bg-transparent border border-bluegray_700 border-solid font-medium lg:pb-[535px] xl:pb-[612px] pb-[688px] 3xl:pb-[826px] lg:pl-[24px] xl:pl-[28px] pl-[32px] 3xl:pl-[38px] lg:pr-[575px] xl:pr-[658px] pr-[740px] 3xl:pr-[888px] lg:pt-[24px] xl:pt-[28px] pt-[32px] 3xl:pt-[38px] rounded-radius8 lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_600 text-left w-[100%]"
                name="Tellyourstory"
                onChange={(e) => {
                  form.handleChange("article.body_markdown", e.target.value);
                }}
                value={form?.values?.article?.body_markdown}
                placeholder={"Tell your Story ...."}
              ></TextArea>
            </Column>
          </Column>
          <Column className="items-start justify-start lg:mb-[358px] xl:mb-[410px] mb-[461px] 3xl:mb-[553px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] w-[31%]">
            {/* <Text className="font-medium lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_50 text-left w-[auto]">{`Add tags`}</Text>
            <Input
              className="placeholder:bg-transparent bg-transparent border border-bluegray_700 border-solid font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:pb-[32px] xl:pb-[36px] pb-[41.5px] 2xl:pb-[41px] 3xl:pb-[49px] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:pt-[23px] xl:pt-[27px] pt-[30.5px] 2xl:pt-[30px] 3xl:pt-[36px] rounded-radius8 lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] placeholder:text-bluegray_600 text-bluegray_600 text-left w-[100%]"
              onChange={(e) => {
                form.handleChange("article.tags", e.target.value);
              }}
              value={form?.values?.article?.tags}
              name="Group71"
              placeholder={`Add tags`}
            ></Input> */}
            <Text className="font-medium lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_50 text-left w-[auto]">{`Canonical link`}</Text>
            <Input
              className="placeholder:bg-transparent bg-transparent border border-bluegray_700 border-solid font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:py-[14px] xl:py-[16px] py-[18.5px] 2xl:py-[18px] 3xl:py-[22px] rounded-radius8 lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] placeholder:text-bluegray_600 text-bluegray_600 text-left w-[100%]"
              onChange={(e) => {
                form.handleChange("article.canonical_url", e.target.value);
              }}
              value={form?.values?.article?.canonical_url}
              name="Group70"
              placeholder={`Add canonical link here`}
            ></Input>
          </Column>
        </Row>
      </Column>

      <ToastContainer />
    </>
  );
};

export default WriteondevtoPage;
