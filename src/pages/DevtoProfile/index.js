import React from "react";

import { useNavigate } from "react-router-dom";
import { getMe2, getMe } from "service/api";
import { Column, Row, Image, Text, Button, List } from "components";

const DevtoProfilePage = () => {
  const [apiData4, setapiData4] = React.useState();
  const [apiData5, setapiData5] = React.useState();
  React.useEffect(() => {
    callApi4();
  }, []);
  const navigate = useNavigate();

  function callApi5(data) {
    const req = {};
    getMe(req)
      .then((res) => {
        setapiData5(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function callApi4() {
    const req = {};
    getMe2(req)
      .then((res) => {
        setapiData4(res);

        callApi5(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleNavigate1() {
    navigate("/blogpage", { state: { id: apiData5?.response } });
  }
  function handleNavigate12() {
    navigate("/writeondevto");
  }
  function handleNavigate13() {
    navigate("/");
  }
  function handleNavigate14() {
    navigate("/mediumprofile");
  }
  function handleNavigate19() {
    navigate("/writeonmedium");
  }

  return (
    <>
      <Column className="bg-black_900 font-gilroy items-start justify-start mx-[auto] w-[100%]">
        <Column className="items-center w-[100%]">
          <header className="w-[100%]">
            <Row className="bg-black_900 border border-bluegray_900 border-solid items-center justify-between 3xl:pl-[103px] xl:pl-[76px] pl-[85.87px] 2xl:pl-[85px] 3xl:pr-[102px] xl:pr-[75px] pr-[85px] lg:px-[66px] lg:py-[13px] xl:py-[15px] py-[17px] 3xl:py-[20px] w-[100%]">
              <Image
                src={"images/img_frame9874.svg"}
                className="lg:h-[32px] xl:h-[37px] h-[41px] 2xl:h-[42px] 3xl:h-[50px] object-contain w-[16%]"
                alt="Frame9874"
              />
              <Row className="bg-black_900 items-center justify-center lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] lg:ml-[164px] xl:ml-[187px] ml-[210.87px] 2xl:ml-[211px] 3xl:ml-[253px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] w-[26%]">
                <Text
                  className="common-pointer font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_300 w-[auto]"
                  onClick={handleNavigate13}
                >
                  Dashboard
                </Text>
                <Text className="font-semibold lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_50 w-[auto]">
                  Dev.to Profile
                </Text>
                <Text
                  className="common-pointer font-medium lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_300 w-[auto]"
                  onClick={handleNavigate14}
                >
                  Medium Profile
                </Text>
              </Row>
              <Row className="bg-black_900 items-center justify-center mb-[1px] lg:ml-[150px] xl:ml-[172px] ml-[194px] 3xl:ml-[232px] w-[26%]">
                <Button
                  className="common-pointer bg-white_A700 font-medium xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius100 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 text-center w-[49%]"
                  onClick={handleNavigate19}
                >
                  Write on medium
                </Button>
                <Button
                  className="common-pointer bg-white_A700 font-medium lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius100 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 text-center w-[44%]"
                  onClick={handleNavigate12}
                >
                  Write on dev.to
                </Button>
              </Row>
            </Row>
          </header>
          <Column className="border border-bluegray_900 border-solid items-center justify-center lg:mt-[43px] xl:mt-[49px] mt-[56px] 3xl:mt-[67px] xl:px-[103px] px-[116px] 3xl:px-[139px] lg:px-[90px] lg:py-[24px] xl:py-[28px] py-[32px] 3xl:py-[38px] rounded-radius8 w-[47%]">
            <Image
              src={apiData4?.profile_image}
              className="lg:h-[123px] xl:h-[141px] h-[158px] 2xl:h-[159px] 3xl:h-[190px] object-contain lg:w-[122px] xl:w-[140px] w-[158px] 3xl:w-[189px]"
              alt="Ellipse1"
            />
            <Text className="font-semibold lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[28px] xl:text-[32px] text-[36px] 3xl:text-[43px] text-gray_50 w-[auto]">
              {apiData4?.name}
            </Text>
            <Text className="font-medium xl:mt-[3px] lg:mt-[3px] mt-[4px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_50 w-[auto]">
              {apiData4?.username}
            </Text>
            <Row className="items-center justify-center lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
              <Text className="font-medium lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_50 w-[auto]">
                {apiData4?.joined_at}
              </Text>
              <Row className="items-center justify-start lg:ml-[38px] xl:ml-[44px] ml-[50px] 3xl:ml-[60px] w-[40%]">
                <Image
                  src={"images/img_githuboutline.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:mb-[3px] mb-[4px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:my-[3px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="githubOutline"
                />
                <Text className="font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_50 w-[auto]">
                  {apiData4?.github_username}
                </Text>
              </Row>
            </Row>
          </Column>
        </Column>
        <Text className="font-semibold lg:ml-[297px] xl:ml-[340px] ml-[383px] 3xl:ml-[459px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_50 w-[auto]">
          My Articles
        </Text>
        <Column className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
          <List className="gap-[0] min-h-[auto] w-[47%]" orientation="vertical">
            {apiData5?.map((apiData5Ele) => {
              return (
                <Row
                  className="common-pointer bg-gray_900 border border-bluegray_900 border-solid items-center justify-start lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:pr-[16px] xl:pr-[18px] pr-[21px] 3xl:pr-[25px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius8 w-[100%]"
                  onClick={handleNavigate1}
                >
                  <Image
                    src={apiData5Ele?.cover_image}
                    className="lg:h-[165px] xl:h-[189px] h-[212px] 2xl:h-[213px] 3xl:h-[255px] object-contain rounded-radius12 w-[47%]"
                    alt="placeholder"
                  />
                  <Column className="items-start lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] w-[50%]">
                    <Text className="font-bold lg:leading-[25px] xl:leading-[29px] leading-[33.00px] 2xl:leading-[33px] 3xl:leading-[39px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_50 text-left w-[100%]">
                      {apiData5Ele?.title}
                    </Text>
                    <Text className="font-normal lg:leading-[20px] xl:leading-[23px] leading-[26.00px] 2xl:leading-[26px] 3xl:leading-[31px] xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_50 text-left w-[100%]">
                      {apiData5Ele?.description}
                    </Text>
                    <Column className="items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Row className="items-center justify-start w-[46%]">
                          <Image
                            src={apiData5Ele?.user?.profile_image}
                            className="lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] object-contain rounded-radius50 lg:w-[43px] xl:w-[49px] w-[56px] 3xl:w-[67px]"
                            alt="ProfileImgLarg"
                          />
                          <Text className="font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[13px] xl:my-[15px] my-[17px] 3xl:my-[20px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_50 w-[auto]">
                            {apiData5Ele?.user?.name}
                          </Text>
                        </Row>
                        <Text className="font-medium lg:ml-[54px] xl:ml-[62px] ml-[70px] 3xl:ml-[84px] lg:my-[13px] xl:my-[15px] my-[17px] 3xl:my-[20px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_50 w-[auto]">
                          {apiData5Ele?.user?.username}
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                </Row>
              );
            })}
          </List>
          <footer className="xl:mt-[106px] mt-[120px] 3xl:mt-[144px] lg:mt-[93px] w-[100%]">
            <Column className="bg-gray_902 items-start justify-center lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] w-[100%]">
              <Column className="items-center lg:pl-[115px] xl:pl-[132px] pl-[148.87px] 2xl:pl-[148px] 3xl:pl-[178px] lg:pr-[129px] xl:pr-[147px] pr-[166px] 3xl:pr-[199px] w-[100%]">
                <Row className="items-start justify-start w-[100%]">
                  <Image
                    src={"images/img_frame9873_2.svg"}
                    className="lg:h-[32px] xl:h-[37px] h-[41px] 2xl:h-[42px] 3xl:h-[50px] lg:mb-[107px] xl:mb-[122px] mb-[138px] 3xl:mb-[165px] object-contain w-[18%]"
                    alt="Frame9873"
                  />
                  <Column className="items-start justify-start xl:ml-[112px] ml-[126.87px] 2xl:ml-[126px] 3xl:ml-[152px] lg:ml-[98px] w-[10%]">
                    <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                      Quick Links
                    </Text>
                    <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]">
                      Dashboard
                    </Text>
                    <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]">
                      Dev.to Profile
                    </Text>
                    <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]">
                      Medium Profile
                    </Text>
                    <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]">
                      Write on Medium
                    </Text>
                    <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]">
                      Write on Dev.to
                    </Text>
                  </Column>
                  <Column className="items-start justify-start lg:mb-[24px] xl:mb-[28px] mb-[32px] 3xl:mb-[38px] xl:ml-[112px] ml-[126px] 3xl:ml-[151px] lg:ml-[98px] w-[6%]">
                    <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                      Company
                    </Text>
                    <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]">
                      About
                    </Text>
                    <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]">
                      Careers
                    </Text>
                    <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]">
                      Writers
                    </Text>
                    <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]">
                      Blog
                    </Text>
                  </Column>
                  <Column className="items-start justify-start lg:mb-[49px] xl:mb-[56px] mb-[64px] 3xl:mb-[76px] xl:ml-[112px] ml-[126px] 3xl:ml-[151px] lg:ml-[98px] w-[11%]">
                    <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                      Help
                    </Text>
                    <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]">
                      FAQs
                    </Text>
                    <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]">
                      Terms & Conditions
                    </Text>
                    <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]">
                      Privacy Policy
                    </Text>
                  </Column>
                  <Column className="items-start justify-start lg:mb-[58px] xl:mb-[66px] mb-[75px] 3xl:mb-[90px] xl:ml-[112px] ml-[126px] 3xl:ml-[151px] lg:ml-[98px] lg:mt-[29px] xl:mt-[33px] mt-[38px] 3xl:mt-[45px] w-[10%]">
                    <Text className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                      Connect on
                    </Text>
                    <Column className="items-center lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] pl-[1px] w-[100%]">
                      <Image
                        src={"images/img_group94_1.svg"}
                        className="lg:h-[20px] xl:h-[23px] h-[25px] 2xl:h-[26px] 3xl:h-[31px] object-contain w-[100%]"
                        alt="Group94"
                      />
                    </Column>
                  </Column>
                </Row>
              </Column>
              <Text className="font-normal lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]">
                2022 Writista all rights reserved
              </Text>
            </Column>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default DevtoProfilePage;
