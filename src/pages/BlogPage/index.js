import React from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { getArticles, getLatest } from "service/api";
import { Column, Row, Image, Text, Button, Input, List } from "components";

const BlogPagePage = () => {
  const [apiData6, setapiData6] = React.useState();
  const [apiData7, setapiData7] = React.useState();
  React.useEffect(() => {
    callApi6();
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  function callApi7(data) {
    const req = { params: { per_page: "3" } };
    getLatest(req)
      .then((res) => {
        setapiData7(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function callApi6() {
    const req = { path: { id: location?.state?.id } };
    getArticles(req)
      .then((res) => {
        setapiData6(res);

        callApi7(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleNavigate6() {
    navigate("/writeondevto");
  }
  function handleNavigate7() {
    navigate("/writeonmedium");
  }
  function handleNavigate8() {
    navigate("/mediumprofile");
  }
  function handleNavigate9() {
    navigate("/devtoprofile");
  }
  function handleNavigate10() {
    navigate("/");
  }

  return (
    <>
      <Column className="bg-black_900 items-start justify-start mx-[auto] w-[100%]">
        <Column className="font-gilroy items-center w-[100%]">
          <header className="w-[100%]">
            <Row className="border border-bluegray_900 border-solid items-center justify-between 3xl:pl-[103px] xl:pl-[76px] pl-[85.87px] 2xl:pl-[85px] 3xl:pr-[102px] xl:pr-[75px] pr-[85px] lg:px-[66px] lg:py-[13px] xl:py-[15px] py-[17px] 3xl:py-[20px] w-[100%]">
              <Image
                src={"images/img_frame9874_1.svg"}
                className="lg:h-[32px] xl:h-[37px] h-[41px] 2xl:h-[42px] 3xl:h-[50px] object-contain w-[14%]"
                alt="Frame9874"
              />
              <Row className="items-center justify-center lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] lg:ml-[164px] xl:ml-[187px] ml-[210.87px] 2xl:ml-[211px] 3xl:ml-[253px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] w-[23%]">
                <Text
                  className="common-pointer font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_50 w-[auto]"
                  onClick={handleNavigate10}
                >{`Dashboard`}</Text>
                <Text
                  className="common-pointer font-medium lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_300 text-center w-[auto]"
                  onClick={handleNavigate9}
                >{`Dev.to Profile`}</Text>
                <Text
                  className="common-pointer font-medium lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_300 text-center w-[auto]"
                  onClick={handleNavigate8}
                >{`Medium Profile`}</Text>
              </Row>
              <Row className="bg-black_900 items-center justify-center mb-[1px] lg:ml-[151px] xl:ml-[173px] ml-[195px] 3xl:ml-[234px] w-[23%]">
                <Button
                  className="common-pointer bg-white_A700 font-medium xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius100 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 text-center w-[49%]"
                  onClick={handleNavigate7}
                >{`Write on medium`}</Button>
                <Button
                  className="common-pointer bg-white_A700 font-medium lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius100 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 text-center w-[44%]"
                  onClick={handleNavigate6}
                >{`Write on dev.to`}</Button>
              </Row>
            </Row>
          </header>
          <Image
            src={apiData6?.social_image}
            className="lg:h-[389px] xl:h-[445px] h-[500px] 2xl:h-[501px] 3xl:h-[601px] lg:mt-[43px] xl:mt-[49px] mt-[56px] 3xl:mt-[67px] mx-[auto] object-contain rounded-radius20 w-[88%]"
            alt="Frame9881"
          />
        </Column>
        <Text className="font-light font-publicsans 3xl:ml-[103px] lg:ml-[66px] xl:ml-[76px] ml-[86px] lg:mt-[43px] xl:mt-[49px] mt-[56px] 3xl:mt-[67px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-black_901 text-left w-[auto]">
          <span className="text-bluegray_300 font-gilroy font-normal">
            <>{`Category`}</>
          </span>
          <span className="text-black_901">
            <>{` `}</>
          </span>
          <span className="text-bluegray_50 tracking-ls1 font-gilroy font-bold">
            <>{`Writing`}</>
          </span>
        </Text>
        <Text className="font-gilroy font-semibold 3xl:ml-[103px] lg:ml-[66px] xl:ml-[76px] ml-[86px] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] lg:text-[40px] xl:text-[46px] text-[52px] 3xl:text-[62px] text-gray_50 text-left w-[auto]">
          {apiData6?.title}
        </Text>
        <Column className="items-center lg:mt-[43px] xl:mt-[49px] mt-[56px] 3xl:mt-[67px] lg:pl-[178px] xl:pl-[204px] pl-[230px] 3xl:pl-[276px] lg:pr-[170px] xl:pr-[194px] pr-[219px] 3xl:pr-[262px] w-[100%]">
          <Row className="font-publicsans items-start justify-start mx-[auto] w-[68%]">
            <Image
              src={apiData6?.user?.profile_image}
              className="lg:h-[55px] xl:h-[63px] h-[70px] 2xl:h-[71px] 3xl:h-[85px] object-contain rounded-radius50 lg:w-[54px] xl:w-[62px] w-[70px] 3xl:w-[84px]"
              alt="ProfileImgLarg"
            />
            <Column className="font-gilroy items-start justify-start lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[18%]">
              <Text className="font-semibold mx-[auto] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_50 text-center w-[auto]">
                {apiData6?.user?.name}
              </Text>
              <Text className="font-normal lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_100 text-center w-[auto]">
                {apiData6?.readable_publish_date}
              </Text>
            </Column>
            {/* <div className="3xl:ml-[638px] bg-transparent border-0 lg:ml-[413px] lg:my-[3px] ml-[532px] my-[4px] w-[19%] xl:ml-[473px] xl:my-[3px] input-wrap">
              <Image
                src={"images/img_vector.svg"}
                className="absolute z-[1] left-[31.50px] bg-transparent border-0 lg:left-[24px] xl:left-[28px] 2xl:left-[31px] 3xl:left-[37px] my-[auto] inset-y-[0]"
                alt="Vector"
              />
              <Input
                className="placeholder:bg-transparent bg-transparent border border-bluegray_50 border-solid font-medium 3xl:pl-[105px] lg:pl-[68px] xl:pl-[78px] pl-[88.00px] 2xl:pl-[88px] lg:pr-[23px] xl:pr-[26px] pr-[29.94px] 2xl:pr-[29px] 3xl:pr-[35px] lg:py-[16px] xl:py-[18px] py-[21.3px] 2xl:py-[21px] 3xl:py-[25px] rounded-radius5 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] placeholder:text-bluegray_50 text-bluegray_50 text-right w-[100%]"
                name="Group46"
                placeholder={`Share Now`}
              ></Input>
            </div> */}
          </Row>
          <Text className="font-gilroy font-medium lg:leading-[27px] xl:leading-[31px] leading-[35.00px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[43px] xl:mt-[49px] mt-[56px] 3xl:mt-[67px] mx-[auto] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_100 text-left w-[68%]">
            <div dangerouslySetInnerHTML={{ __html: apiData6?.body_html }} />
          </Text>
        </Column>
        <Text className="font-gilroy font-medium lg:ml-[188px] xl:ml-[215px] ml-[242px] 3xl:ml-[290px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_50 text-left w-[auto]">{`Tags`}</Text>
        <Row className="font-gilroy items-center justify-start lg:ml-[188px] xl:ml-[215px] ml-[242px] 3xl:ml-[290px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[35%]">
          {apiData6?.tags.map((tag) => {
            return (
              <Button className="bg-gray_901 font-medium lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] py-[10.54px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[8px] xl:py-[9px] rounded-radius50 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_50 text-center w-[30%]">
                {tag}
              </Button>
            );
          })}{" "}
        </Row>
        <Column className="font-gilroy items-center lg:mt-[51px] xl:mt-[58px] mt-[66px] 3xl:mt-[79px] lg:px-[459px] xl:px-[525px] px-[591px] 3xl:px-[709px] w-[100%]">
          <Row className="items-center justify-center mx-[auto] w-[18%]">
            <Image
              src={apiData6?.user?.profile_image}
              className="lg:h-[55px] xl:h-[63px] h-[70px] 2xl:h-[71px] 3xl:h-[85px] object-contain rounded-radius50 lg:w-[54px] xl:w-[62px] w-[70px] 3xl:w-[84px]"
              alt="ProfileImgLarg"
            />
            <Column className="items-start lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[67%]">
              <Text className="font-semibold mx-[auto] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_50 text-center w-[auto]">
                {apiData6?.user?.name}
              </Text>
              <Text className="font-normal lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_100 text-left w-[auto]">
                {apiData6?.user?.username}
              </Text>
            </Column>
          </Row>
        </Column>
        <Text className="font-gilroy font-semibold lg:ml-[141px] xl:ml-[161px] ml-[182px] 3xl:ml-[218px] mt-[112px] 3xl:mt-[134px] lg:mt-[87px] xl:mt-[99px] lg:text-[21px] xl:text-[24px] text-[28px] 3xl:text-[33px] text-gray_50 text-left w-[auto]">{`More Like these`}</Text>
        <Column className="font-gilroy items-center lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] w-[100%]">
          <List
            className="lg:gap-[18px] xl:gap-[21px] gap-[24px] 3xl:gap-[28px] grid grid-cols-3 min-h-[auto] mx-[auto] w-[75%]"
            orientation="horizontal"
          >
            {apiData7?.map((apiData7Ele) => {
              return (
                <Column className="bg-gray_900 border border-bluegray_900 border-solid items-start justify-start py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius23 w-[100%]">
                  <Column className="items-center px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] w-[100%]">
                    <Image
                      src={apiData7Ele?.social_image}
                      className="lg:h-[207px] xl:h-[236px] h-[265px] 2xl:h-[266px] 3xl:h-[319px] mx-[auto] object-contain rounded-radius12 w-[94%]"
                      alt="placeholder"
                    />
                  </Column>
                  <Text className="font-bold lg:leading-[25px] xl:leading-[29px] leading-[33.00px] 2xl:leading-[33px] 3xl:leading-[39px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_50 text-left w-[94%]">
                    {apiData7Ele?.title}
                  </Text>
                  <Text className="font-normal lg:leading-[20px] xl:leading-[23px] leading-[26.00px] 2xl:leading-[26px] 3xl:leading-[31px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_50 text-left w-[94%]">
                    {apiData7Ele?.description}
                  </Text>
                  <Column className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] w-[100%]">
                    <Row className="items-center justify-between mx-[auto] w-[94%]">
                      <Row className="items-center justify-start w-[45%]">
                        <Image
                          src={apiData7Ele?.user?.profile_image}
                          className="lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] object-contain rounded-radius50 lg:w-[43px] xl:w-[49px] w-[56px] 3xl:w-[67px]"
                          alt="ProfileImgLarg"
                        />
                        <Text className="font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[13px] xl:my-[15px] my-[17px] 3xl:my-[20px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_50 text-left w-[auto]">
                          {apiData7Ele?.user?.name}
                        </Text>
                      </Row>
                      <Text className="font-medium lg:ml-[58px] xl:ml-[66px] ml-[75px] 3xl:ml-[90px] lg:my-[13px] xl:my-[15px] my-[17px] 3xl:my-[20px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_50 text-right w-[auto]">
                        {apiData7Ele?.readable_publish_date}
                      </Text>
                    </Row>
                  </Column>
                </Column>
              );
            })}
          </List>
          <footer className="xl:mt-[106px] mt-[120px] 3xl:mt-[144px] lg:mt-[93px] w-[100%]">
            <Column className="bg-gray_902 items-start justify-center lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] w-[100%]">
              <Column className="items-center lg:pl-[115px] xl:pl-[132px] pl-[148.87px] 2xl:pl-[148px] 3xl:pl-[178px] lg:pr-[129px] xl:pr-[147px] pr-[166px] 3xl:pr-[199px] w-[100%]">
                <Row className="items-start justify-start mx-[auto] w-[78%]">
                  <Image
                    src={"images/img_frame9873_3.svg"}
                    className="lg:h-[32px] xl:h-[37px] h-[41px] 2xl:h-[42px] 3xl:h-[50px] lg:mb-[107px] xl:mb-[122px] mb-[138px] 3xl:mb-[165px] object-contain w-[18%]"
                    alt="Frame9873"
                  />
                  <Column className="items-start justify-start xl:ml-[112px] ml-[126.87px] 2xl:ml-[126px] 3xl:ml-[152px] lg:ml-[98px] w-[10%]">
                    <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-left text-white_A700 w-[auto]">{`Quick Links`}</Text>
                    <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-white_A700 w-[auto]">{`Dashboard`}</Text>
                    <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-white_A700 w-[auto]">{`Dev.to Profile`}</Text>
                    <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-white_A700 w-[auto]">{`Medium Profile`}</Text>
                    <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-white_A700 w-[auto]">{`Write on Medium`}</Text>
                    <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-white_A700 w-[auto]">{`Write on Dev.to`}</Text>
                  </Column>
                  <Column className="items-start justify-start lg:mb-[24px] xl:mb-[28px] mb-[32px] 3xl:mb-[38px] xl:ml-[112px] ml-[126px] 3xl:ml-[151px] lg:ml-[98px] w-[6%]">
                    <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-left text-white_A700 w-[auto]">{`Company`}</Text>
                    <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-white_A700 w-[auto]">{`About`}</Text>
                    <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-white_A700 w-[auto]">{`Careers`}</Text>
                    <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-white_A700 w-[auto]">{`Writers`}</Text>
                    <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-white_A700 w-[auto]">{`Blog`}</Text>
                  </Column>
                  <Column className="items-start justify-start lg:mb-[49px] xl:mb-[56px] mb-[64px] 3xl:mb-[76px] xl:ml-[112px] ml-[126px] 3xl:ml-[151px] lg:ml-[98px] w-[11%]">
                    <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-left text-white_A700 w-[auto]">{`Help`}</Text>
                    <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-white_A700 w-[auto]">{`FAQs`}</Text>
                    <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-white_A700 w-[auto]">{`Terms & Conditions`}</Text>
                    <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-white_A700 w-[auto]">{`Privacy Policy`}</Text>
                  </Column>
                  <Column className="items-start justify-start lg:mb-[58px] xl:mb-[66px] mb-[75px] 3xl:mb-[90px] xl:ml-[112px] ml-[126px] 3xl:ml-[151px] lg:ml-[98px] lg:mt-[29px] xl:mt-[33px] mt-[38px] 3xl:mt-[45px] w-[10%]">
                    <Text className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`Connect on`}</Text>
                    <Column className="items-center lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] pl-[1px] w-[100%]">
                      <Image
                        src={"images/img_group94_2.svg"}
                        className="lg:h-[20px] xl:h-[23px] h-[25px] 2xl:h-[26px] 3xl:h-[31px] mx-[auto] object-contain w-[99%]"
                        alt="Group94"
                      />
                    </Column>
                  </Column>
                </Row>
              </Column>
              <Text className="font-normal lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[auto]">{`2022 Writista all rights reserved`}</Text>
            </Column>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default BlogPagePage;
