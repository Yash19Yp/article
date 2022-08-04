import React from "react";

import { Column, Stack, Grid, Image, Text, Row, Button } from "components";
import { useLocation, useNavigate } from "react-router-dom";
import { getArticles1 } from "service/api";

const TagspostPage = () => {
  const [apiData8, setapiData8] = React.useState();
  React.useEffect(() => {
    callApi8();
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  function callApi8() {
    const req = { params: { tag: location?.state?.tag } };
    getArticles1(req)
      .then((res) => {
        setapiData8(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleNavigate11(id) {
    navigate("/blogpage", { state: { id: id } });
  }
  function handleNavigate15() {
    navigate("/writeonmedium");
  }
  function handleNavigate16() {
    navigate("/writeondevto");
  }
  function handleNavigate17() {
    navigate("/devtoprofile");
  }
  function handleNavigate18() {
    navigate("/mediumprofile");
  }
  function handleNavigate10() {
    navigate("/");
  }

  return (
    <>
      <Column className="bg-black_900 font-gilroy mx-[auto] w-[100%]">
        <Stack className="lg:h-[1001px] xl:h-[1145px] h-[1286px] 2xl:h-[1287px] 3xl:h-[1545px] w-[100%]">
          <Stack className="absolute lg:h-[1001px] xl:h-[1145px] h-[1286px] 2xl:h-[1287px] 3xl:h-[1545px] inset-[0] w-[100%]">
            <Column >
              <Text className="font-gilroy font-semibold lg:ml-[141px] xl:ml-[161px] ml-[182px] 3xl:ml-[218px] mt-[50px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[70px] lg:text-[21px] xl:text-[24px] text-[28px] 3xl:text-[33px] text-gray_50 text-left w-[auto]">{`Articles of ${location?.state?.tag}`}</Text>
              <Grid className="lg:gap-[18px] xl:gap-[21px] gap-[24px] 3xl:gap-[28px] grid grid-cols-3 mx-[auto] w-[75%]">
                {apiData8?.map((apiData8Ele) => {
                  return (
                    <Column
                      className="common-pointer bg-gray_900 border border-bluegray_900 border-solid items-start justify-start py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius23 w-[100%]"
                      onClick={() => handleNavigate11(apiData8Ele?.id)}
                    >
                      <Column className="items-center px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] w-[100%]">
                        <Image
                          src={apiData8Ele?.social_image}
                          className="lg:h-[207px] xl:h-[236px] h-[265px] 2xl:h-[266px] 3xl:h-[319px] mx-[auto] object-contain rounded-radius12 w-[94%]"
                          alt="placeholder"
                        />
                      </Column>
                      <Text className="font-bold lg:leading-[25px] xl:leading-[29px] leading-[33.00px] 2xl:leading-[33px] 3xl:leading-[39px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_50 text-left w-[94%]">
                        {apiData8Ele?.title}
                      </Text>
                      <Text className="font-normal lg:leading-[20px] xl:leading-[23px] leading-[26.00px] 2xl:leading-[26px] 3xl:leading-[31px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_50 text-left w-[94%]">
                        {apiData8Ele?.description}
                      </Text>
                      <Column className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] w-[100%]">
                        <Row className="items-center justify-start mx-[auto] w-[94%]">
                          <Image
                            src={apiData8Ele?.user?.profile_image}
                            className="lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] object-contain rounded-radius50 lg:w-[43px] xl:w-[49px] w-[56px] 3xl:w-[67px]"
                            alt="ProfileImgLarg"
                          />
                          <Text className="font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[13px] xl:my-[15px] my-[17px] 3xl:my-[20px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_50 text-left w-[auto]">
                            {apiData8Ele?.user?.name}
                          </Text>
                          <Text className="font-medium lg:ml-[58px] xl:ml-[66px] ml-[75px] 3xl:ml-[90px] lg:my-[13px] xl:my-[15px] my-[17px] 3xl:my-[20px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_50 text-right w-[auto]">
                            {apiData8Ele?.readable_publish_date}
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                  );
                })}
              </Grid>
            </Column>
          </Stack>
          <Row className="absolute bg-black_900 border border-bluegray_900 border-solid items-center justify-between xl:pl-[28px] pl-[32px] 3xl:pl-[38px] xl:pr-[27px] pr-[31px] 3xl:pr-[37px] lg:pt-[13px] xl:pt-[15px] pt-[17px] 3xl:pt-[20px] lg:px-[24px] right-[0] top-[0] w-[100%]">
            <Image
              src={"images/img_frame9873.svg"}
              className="lg:h-[32px] xl:h-[37px] h-[41px] 2xl:h-[42px] 3xl:h-[50px] object-contain w-[14%]"
              alt="Frame9873"
            />
            <Row className="bg-black_900 items-center justify-start lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] w-[29%]">
              <Text
                 className="common-pointer ml-5 font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_50 w-[auto]"
                 onClick={handleNavigate10}
              >{`Dashboard`}</Text>
              <Text
                className="common-pointer font-medium lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_300 text-center w-[auto]"
                onClick={handleNavigate17}
              >{`Dev.to Profile`}</Text>
              <Text
                className="common-pointer font-medium lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_300 text-center w-[auto]"
                onClick={handleNavigate18}
              >{`Medium Profile`}</Text>
            </Row>
            <Row className="bg-black_900 items-center justify-center lg:ml-[320px] xl:ml-[366px] ml-[412px] 3xl:ml-[494px] w-[29%]">
              <Button
                className="common-pointer bg-white_A700 font-medium xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius100 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 text-center w-[49%]"
                onClick={handleNavigate15}
              >{`Write on medium`}</Button>
              <Button
                className="common-pointer bg-white_A700 font-medium lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius100 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 text-center w-[44%]"
                onClick={handleNavigate16}
              >{`Write on dev.to`}</Button>
            </Row>
          </Row>
        </Stack>
        <footer className="xl:mt-[106px] mt-[120px] 3xl:mt-[144px] lg:mt-[93px] w-[100%]">
          <Column className="bg-gray_902 items-start justify-center lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] w-[100%]">
            <Column className="items-center lg:pl-[115px] xl:pl-[132px] pl-[148.87px] 2xl:pl-[148px] 3xl:pl-[178px] lg:pr-[129px] xl:pr-[147px] pr-[166px] 3xl:pr-[199px] w-[100%]">
              <Row className="items-start justify-start mx-[auto] w-[78%]">
                <Image
                  src={"images/img_frame9873_1.svg"}
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
                      src={"images/img_group94.svg"}
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
    </>
  );
};

export default TagspostPage;
