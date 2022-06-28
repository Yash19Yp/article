import React from "react";

import { getArticles, getArticles1 } from "service/api";
import { Column, Row, Image, Text, Button, Input, List } from "components";

const BlogPagePage = () => {
  const [apiData1, setapiData1] = React.useState();
  const [apiData2, setapiData2] = React.useState();
  React.useEffect(() => {
    callApi1();
  }, []);

  function callApi2(data) {
    const req = { params: { per_page: "3" } };
    getArticles1(req)
      .then((res) => {
        setapiData2(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function callApi1() {
    const req = { path: { id: "id" } };
    getArticles(req)
      .then((res) => {
        setapiData1(res);

        callApi2(res);
      })
      .catch((err) => {
        console.error(err);
      });
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
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_50 w-[auto]">{`Dashboard`}</Text>
                <Text className="font-medium lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_300 text-center w-[auto]">{`Dev.to Profile`}</Text>
                <Text className="font-medium lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_300 text-center w-[auto]">{`Medium Profile`}</Text>
              </Row>
              <Row className="bg-black_900 items-center justify-center mb-[1px] lg:ml-[151px] xl:ml-[173px] ml-[195px] 3xl:ml-[234px] w-[23%]">
                <Button className="bg-white_A700 font-medium xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius100 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 text-center w-[49%]">{`Write on medium`}</Button>
                <Button className="bg-white_A700 font-medium lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius100 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 text-center w-[44%]">{`Write on dev.to`}</Button>
              </Row>
            </Row>
          </header>
          <Image
            src={apiData1?.social_image}
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
          {apiData1?.title}
        </Text>
        <Column className="items-center lg:mt-[43px] xl:mt-[49px] mt-[56px] 3xl:mt-[67px] lg:pl-[178px] xl:pl-[204px] pl-[230px] 3xl:pl-[276px] lg:pr-[170px] xl:pr-[194px] pr-[219px] 3xl:pr-[262px] w-[100%]">
          <Row className="font-publicsans items-start justify-start mx-[auto] w-[68%]">
            <Image
              src={apiData1?.user?.profile_image}
              className="lg:h-[55px] xl:h-[63px] h-[70px] 2xl:h-[71px] 3xl:h-[85px] object-contain rounded-radius50 lg:w-[54px] xl:w-[62px] w-[70px] 3xl:w-[84px]"
              alt="ProfileImgLarg"
            />
            <Column className="font-gilroy items-start justify-start lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[18%]">
              <Text className="font-semibold mx-[auto] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_50 text-center w-[auto]">
                {apiData1?.user?.name}
              </Text>
              <Text className="font-normal lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_100 text-center w-[auto]">
                {apiData1?.readable_publish_date}
              </Text>
            </Column>
            <div className="3xl:ml-[638px] bg-transparent border-0 lg:ml-[413px] lg:my-[3px] ml-[532px] my-[4px] w-[19%] xl:ml-[473px] xl:my-[3px] input-wrap">
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
            </div>
          </Row>
          <Text className="font-gilroy font-medium lg:leading-[27px] xl:leading-[31px] leading-[35.00px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[43px] xl:mt-[49px] mt-[56px] 3xl:mt-[67px] mx-[auto] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_100 text-left w-[68%]">
            {apiData1?.description}
          </Text>
          <Text className="font-light font-publicsans lg:leading-[27px] xl:leading-[31px] leading-[35.00px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] mx-[auto] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_100 text-left w-[68%]">
            <span className="text-bluegray_100 font-gilroy font-medium">
              <>{`The game’s not big enough unless it scares you a little. Wait a minute – you’ve been declared dead. You can’t give `}</>
            </span>
            <span className="text-bluegray_100 font-gilroy font-medium">
              <>{`orders around`}</>
            </span>
            <span className="text-bluegray_100 font-gilroy font-medium">
              <>{` here. I’ll alert the crew. What? We’re not at all alike! Flair is what marks the difference between artistry and mere competence.`}</>
            </span>
          </Text>
          <Text className="font-gilroy font-medium lg:leading-[27px] xl:leading-[31px] leading-[35.00px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] mx-[auto] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_100 text-left w-[68%]">{`Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard.`}</Text>
          <Text className="font-gilroy font-medium lg:leading-[27px] xl:leading-[31px] leading-[35.00px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] mx-[auto] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_100 text-left w-[68%]">{`Could someone survive inside a transporter buffer for 75 years? Fate. It protects fools, little children, and ships named “Enterprise.”`}</Text>
          <Text className="font-gilroy font-medium lg:leading-[27px] xl:leading-[31px] leading-[35.00px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] mx-[auto] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_100 text-left w-[68%]">{`Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf. Could someone survive inside a transporter buffer for 75 years? Fate. It protects fools, little children, and ships named “Enterprise.”`}</Text>
          <Row className="lg:gap-[22px] xl:gap-[25px] gap-[29px] 3xl:gap-[34px] grid grid-cols-2 items-center justify-center lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] mx-[auto] w-[68%]">
            <Image
              src={"images/img_rectangle23.png"}
              className="lg:h-[260px] xl:h-[298px] h-[334px] 2xl:h-[335px] 3xl:h-[402px] object-contain rounded-radius15 w-[100%]"
              alt="Rectangle23"
            />
            <Image
              src={"images/img_rectangle24.png"}
              className="lg:h-[260px] xl:h-[298px] h-[334px] 2xl:h-[335px] 3xl:h-[402px] object-contain rounded-radius15 w-[100%]"
              alt="Rectangle24"
            />
          </Row>
          <Text className="font-gilroy font-medium lg:leading-[27px] xl:leading-[31px] leading-[35.00px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] mx-[auto] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_100 text-left w-[68%]">{`What’s a knock-out like you doing in a computer-generated gin joint like this? But the probability of making a six is no greater than that of rolling a seven. I guess it’s better to be lucky than good.`}</Text>
          <Text className="font-gilroy font-medium lg:leading-[27px] xl:leading-[31px] leading-[35.00px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] mx-[auto] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_100 text-left w-[68%]">{`Damage report! I’ve had twelve years to think about it. And if I had it to do over again, I would have grabbed the phaser and pointed it at you instead of them. Some days you get the bear, and some days the bear gets you. Ensign Babyface! I’m afraid I still don’t understand, sir. Mr. Crusher, ready a collision course with the Borg ship. Yesterday I did not know how to eat gagh. You’re going to be an interesting companion.`}</Text>
        </Column>
        <Row className="font-gilroy items-center justify-start lg:ml-[211px] xl:ml-[241px] ml-[272px] 3xl:ml-[326px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[34%]">
          <div className="bg-bluegray_100 h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] rounded-radius501 w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
          <Text className="font-medium lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_100 text-left w-[auto]">{`Lorem ipsum dolor sit amet.`}</Text>
        </Row>
        <Row className="font-gilroy items-center justify-start lg:ml-[211px] xl:ml-[241px] ml-[272px] 3xl:ml-[326px] w-[34%]">
          <div className="bg-bluegray_100 h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] rounded-radius501 w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
          <Text className="font-medium lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_100 text-left w-[auto]">{`At vero eos et accusamus et iusto odio.`}</Text>
        </Row>
        <Row className="font-gilroy items-center justify-start lg:ml-[211px] xl:ml-[241px] ml-[272px] 3xl:ml-[326px] w-[34%]">
          <div className="bg-bluegray_100 h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] rounded-radius501 w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
          <Text className="font-medium lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_100 text-left w-[auto]">{`Excepteur sint occaecat cupidatat non proident.`}</Text>
        </Row>
        <Column className="font-gilroy items-center lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] lg:pl-[188px] xl:pl-[215px] pl-[242px] 3xl:pl-[290px] lg:pr-[170px] xl:pr-[194px] pr-[219px] 3xl:pr-[262px] w-[100%]">
          <Text className="font-medium lg:leading-[27px] xl:leading-[31px] leading-[35.00px] 2xl:leading-[35px] 3xl:leading-[42px] mx-[auto] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_100 text-left w-[68%]">{`Could someone survive inside a transporter buffer for 75 years? Fate. It protects fools, little children, and ships named “Enterprise.”`}</Text>
        </Column>
        <Text className="font-gilroy font-medium lg:ml-[188px] xl:ml-[215px] ml-[242px] 3xl:ml-[290px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_50 text-left w-[auto]">{`Tags`}</Text>
        <Row className="font-gilroy items-center justify-start lg:ml-[188px] xl:ml-[215px] ml-[242px] 3xl:ml-[290px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[35%]">
          <Button className="bg-gray_901 font-medium py-[10.54px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[8px] xl:py-[9px] rounded-radius50 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_50 text-center w-[19%]">{`Writing`}</Button>
          <Button className="bg-gray_901 font-medium lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] py-[10.54px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[8px] xl:py-[9px] rounded-radius50 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_50 text-center w-[19%]">{`Tutorial`}</Button>
          <Button className="bg-gray_901 font-medium lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] py-[10.54px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[8px] xl:py-[9px] rounded-radius50 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_50 text-center w-[19%]">{`How to`}</Button>
          <Button className="bg-gray_901 font-medium lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] py-[10.54px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[8px] xl:py-[9px] rounded-radius50 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_50 text-center w-[15%]">{`Book`}</Button>
          <Button className="bg-gray_901 font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] py-[10.54px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[8px] xl:py-[9px] rounded-radius50 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_50 text-center w-[15%]">{`2020`}</Button>
        </Row>
        <Column className="font-gilroy items-center lg:mt-[51px] xl:mt-[58px] mt-[66px] 3xl:mt-[79px] lg:px-[459px] xl:px-[525px] px-[591px] 3xl:px-[709px] w-[100%]">
          <Row className="items-center justify-center mx-[auto] w-[18%]">
            <Image
              src={apiData1?.user?.profile_image}
              className="lg:h-[55px] xl:h-[63px] h-[70px] 2xl:h-[71px] 3xl:h-[85px] object-contain rounded-radius50 lg:w-[54px] xl:w-[62px] w-[70px] 3xl:w-[84px]"
              alt="ProfileImgLarg"
            />
            <Column className="items-start lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[67%]">
              <Text className="font-semibold mx-[auto] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_50 text-center w-[auto]">
                {apiData1?.user?.name}
              </Text>
              <Text className="font-normal lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_100 text-left w-[auto]">
                {apiData1?.user?.username}
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
            {apiData2?.map((apiData2Ele) => {
              return (
                <Column className="bg-gray_900 border border-bluegray_900 border-solid items-start justify-start py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius23 w-[100%]">
                  <Column className="items-center px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] w-[100%]">
                    <Image
                      src={apiData2Ele?.social_image}
                      className="lg:h-[207px] xl:h-[236px] h-[265px] 2xl:h-[266px] 3xl:h-[319px] mx-[auto] object-contain rounded-radius12 w-[94%]"
                      alt="placeholder"
                    />
                  </Column>
                  <Text className="font-bold lg:leading-[25px] xl:leading-[29px] leading-[33.00px] 2xl:leading-[33px] 3xl:leading-[39px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-gray_50 text-left w-[94%]">
                    {apiData2Ele?.title}
                  </Text>
                  <Text className="font-normal lg:leading-[20px] xl:leading-[23px] leading-[26.00px] 2xl:leading-[26px] 3xl:leading-[31px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_50 text-left w-[94%]">
                    {apiData2Ele?.description}
                  </Text>
                  <Column className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] w-[100%]">
                    <Row className="items-center justify-between mx-[auto] w-[94%]">
                      <Row className="items-center justify-start w-[45%]">
                        <Image
                          src={apiData2Ele?.user?.profile_image}
                          className="lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] object-contain rounded-radius50 lg:w-[43px] xl:w-[49px] w-[56px] 3xl:w-[67px]"
                          alt="ProfileImgLarg"
                        />
                        <Text className="font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[13px] xl:my-[15px] my-[17px] 3xl:my-[20px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_50 text-left w-[auto]">
                          {apiData2Ele?.user?.name}
                        </Text>
                      </Row>
                      <Text className="font-medium lg:ml-[58px] xl:ml-[66px] ml-[75px] 3xl:ml-[90px] lg:my-[13px] xl:my-[15px] my-[17px] 3xl:my-[20px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_50 text-right w-[auto]">
                        {apiData2Ele?.readable_publish_date}
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
