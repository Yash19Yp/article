import React from "react";

import { useNavigate } from "react-router-dom";
import { getMe1, getPublications } from "service/api";
import { Column, Row, Image, Text, Button, List, Input } from "components";

const MediumProfilePage = () => {
  const [apiData2, setapiData2] = React.useState();
  const [apiData3, setapiData3] = React.useState();
  React.useEffect(() => {
    callApi2();
  }, []);
  const navigate = useNavigate();

  function callApi3(data) {
    const req = {};
    getPublications(req)
      .then((res) => {
        setapiData3(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function callApi2() {
    const req = { headers: {} };
    getMe1(req)
      .then((res) => {
        setapiData2(res);

        callApi3(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleNavigate2() {
    navigate("/writeondevto");
  }
  function handleNavigate3() {
    navigate("/writeonmedium");
  }
  function handleNavigate4() {
    navigate("/devtoprofile");
  }
  function handleNavigate5() {
    navigate("/");
  }

  return (
    <>
      <Column className="bg-black_900 font-gilroy items-start justify-start mx-[auto] w-[100%]">
        <Column className="items-center w-[100%]">
          <header className="w-[100%]">
            <Row className="bg-black_900 border border-bluegray_900 border-solid items-center justify-between 3xl:pl-[103px] xl:pl-[76px] pl-[85.87px] 2xl:pl-[85px] 3xl:pr-[102px] xl:pr-[75px] pr-[85px] lg:px-[66px] lg:py-[13px] xl:py-[15px] py-[17px] 3xl:py-[20px] w-[100%]">
              <Image
                src={"images/img_frame9874_2.svg"}
                className="lg:h-[32px] xl:h-[37px] h-[41px] 2xl:h-[42px] 3xl:h-[50px] object-contain w-[14%]"
                alt="Frame9874"
              />
              <Row className="bg-black_900 items-center justify-center lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] lg:ml-[164px] xl:ml-[187px] ml-[210.87px] 2xl:ml-[211px] 3xl:ml-[253px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] w-[23%]">
                <Text
                  className="common-pointer font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_300 text-center w-[auto]"
                  onClick={handleNavigate5}
                >{`Dashboard`}</Text>
                <Text
                  className="common-pointer font-medium lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_300 text-center w-[auto]"
                  onClick={handleNavigate4}
                >{`Dev.to Profile`}</Text>
                <Text className="font-semibold lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_50 w-[auto]">{`Medium Profile`}</Text>
              </Row>
              <Row className="bg-black_900 items-center justify-center mb-[1px] lg:ml-[150px] xl:ml-[172px] ml-[194px] 3xl:ml-[232px] w-[23%]">
                <Button
                  className="common-pointer bg-white_A700 font-medium xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius100 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 text-center w-[49%]"
                  onClick={handleNavigate3}
                >{`Write on medium`}</Button>
                <Button
                  className="common-pointer bg-white_A700 font-medium lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius100 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 text-center w-[44%]"
                  onClick={handleNavigate2}
                >{`Write on dev.to`}</Button>
              </Row>
            </Row>
          </header>
          <Column className="border border-bluegray_900 border-solid items-center justify-center lg:mt-[43px] xl:mt-[49px] mt-[56px] 3xl:mt-[67px] mx-[auto] lg:px-[177px] xl:px-[202px] px-[228px] 3xl:px-[273px] lg:py-[24px] xl:py-[28px] py-[32px] 3xl:py-[38px] rounded-radius8 w-[47%]">
            <Image
              src={apiData2?.data?.imageUrl}
              className="lg:h-[123px] xl:h-[141px] h-[158px] 2xl:h-[159px] 3xl:h-[190px] mx-[auto] object-contain lg:w-[122px] xl:w-[140px] w-[158px] 3xl:w-[189px]"
              alt="Ellipse1"
            />
            <Text className="font-semibold lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] mx-[auto] lg:text-[28px] xl:text-[32px] text-[36px] 3xl:text-[43px] text-center text-gray_50 w-[auto]">
              {apiData2?.data?.name}
            </Text>
            <Text className="font-medium xl:mt-[3px] lg:mt-[3px] mt-[4px] mx-[auto] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_50 text-center w-[auto]">
              {apiData2?.data?.username}
            </Text>
          </Column>
        </Column>
        <Text className="font-semibold lg:ml-[300px] xl:ml-[343px] ml-[386px] 3xl:ml-[463px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_50 text-left w-[auto]">{`04 Following`}</Text>
        <Column className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
          <List
            className="gap-[0] min-h-[auto] mx-[auto] w-[47%]"
            orientation="vertical"
          >
            {apiData3?.data?.map((apiData3Ele) => {
              return (
                <Row className="border border-bluegray_900 border-solid items-center justify-start lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:pr-[38px] xl:pr-[43px] pr-[49px] 3xl:pr-[58px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius8 w-[100%]">
                  <Image
                    src={apiData3Ele?.imageUrl}
                    className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] xl:mb-[2px] lg:mb-[2px] mb-[3px] object-contain lg:w-[46px] xl:w-[53px] w-[60px] 3xl:w-[72px]"
                    alt="Ellipse2"
                  />
                  <Column className="lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] w-[80%]">
                    <Text className="font-bold lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_50 text-left w-[auto]">
                      {apiData3Ele?.name}
                    </Text>
                    <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_50 text-left w-[auto]">
                      {apiData3Ele?.description}
                    </Text>
                  </Column>
                </Row>
              );
            })}
          </List>
          <div className="3xl:mt-[19px] bg-transparent border-0 lg:mt-[12px] mt-[16px] w-[47%] xl:mt-[14px] input-wrap">
            <Image
              src={"images/img_ellipse_2_2.svg"}
              className="absolute z-[1] h-[60px] left-[10.00px] bg-transparent border-0 lg:h-[47px] lg:left-[7px] xl:h-[54px] xl:left-[8px] 2xl:h-[61px] 2xl:left-[10px] 3xl:h-[73px] 3xl:left-[12px] my-[auto] inset-y-[0]"
              alt="Ellipse 2"
            />
            <Input
              className="placeholder:bg-transparent bg-transparent border border-bluegray_900 border-solid font-bold lg:pl-[62px] xl:pl-[71px] pl-[80.00px] 2xl:pl-[80px] 3xl:pl-[96px] lg:py-[12px] xl:py-[14px] py-[16.5px] 2xl:py-[16px] 3xl:py-[19px] rounded-radius8 lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] placeholder:text-gray_50 text-gray_50 text-left w-[100%]"
              name="Group48"
              placeholder={`Google design`}
            ></Input>
          </div>
          <div className="3xl:mt-[19px] bg-transparent border-0 lg:mt-[12px] mt-[16px] w-[47%] xl:mt-[14px] input-wrap">
            <Image
              src={"images/img_ellipse_2_3.svg"}
              className="absolute z-[1] h-[60px] left-[10.00px] bg-transparent border-0 lg:h-[47px] lg:left-[7px] xl:h-[54px] xl:left-[8px] 2xl:h-[61px] 2xl:left-[10px] 3xl:h-[73px] 3xl:left-[12px] my-[auto] inset-y-[0]"
              alt="Ellipse 2"
            />
            <Input
              className="placeholder:bg-transparent bg-transparent border border-bluegray_900 border-solid font-bold lg:pl-[62px] xl:pl-[71px] pl-[80.00px] 2xl:pl-[80px] 3xl:pl-[96px] lg:py-[12px] xl:py-[14px] py-[16.5px] 2xl:py-[16px] 3xl:py-[19px] rounded-radius8 lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] placeholder:text-gray_50 text-gray_50 text-left w-[100%]"
              name="Group47"
              placeholder={`Muzli - Design Inspiration`}
            ></Input>
          </div>
          <footer className="xl:mt-[106px] mt-[120px] 3xl:mt-[144px] lg:mt-[93px] w-[100%]">
            <Column className="bg-gray_902 items-start justify-center lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] w-[100%]">
              <Column className="items-center lg:pl-[115px] xl:pl-[132px] pl-[148.87px] 2xl:pl-[148px] 3xl:pl-[178px] lg:pr-[129px] xl:pr-[147px] pr-[166px] 3xl:pr-[199px] w-[100%]">
                <Row className="items-start justify-start mx-[auto] w-[78%]">
                  <Image
                    src={"images/img_frame9873_4.svg"}
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
                        src={"images/img_group94_3.svg"}
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

export default MediumProfilePage;
