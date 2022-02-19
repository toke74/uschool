import { useState } from "react";
import Image from "next/image";
import {
  RightBarContainer,
  ImageWrapper,
  TapWrapper,
  TabNav,
  TabLists,
  TabListItem,
  TabLink,
  TabContent,
  PersonalTabContent,
  TabHeading,
  TabDescription,
  TabButton,
  MonthlyPlan,
  CoursePrice,
  BtnGroup,
  ApplyCouponAndGiftBtn,
  Divider,
  OrDivider,
  BusinessTabContent,
  BusinessLists,
  BusinessListItemWrapper,
  RightIcon,
  BusinessListItem,
  Firstletter,
  StyleHeading,
} from "./courseRightBarStyle";

const CourseRightBar = () => {
  const [openTab, setOpenTab] = useState(1);
  const [tabChange, setTabChange] = useState(false);

  const changeRightBarTab = () => {
    if (window.scrollY >= 80) {
      setTabChange(true);
    } else {
      setTabChange(false);
    }
  };
  window.addEventListener("scroll", changeRightBarTab);

  return (
    <RightBarContainer>
      <ImageWrapper tabChange={tabChange}>
        <Image
          src="/static/images/course/c4.jpg"
          alt=""
          width={1000}
          height={450}
        />
      </ImageWrapper>
      <TapWrapper tabChange={tabChange}>
        {/* Tab nav start */}
        <TabNav>
          <TabLists>
            <TabListItem openTab={openTab === 1 ? true : false}>
              <TabLink
                openTab={openTab === 1 ? true : false}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
              >
                Personal
              </TabLink>
            </TabListItem>
            <TabListItem openTab={openTab === 2 ? true : false}>
              <TabLink
                openTab={openTab === 2 ? true : false}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
              >
                Teams
              </TabLink>
            </TabListItem>
          </TabLists>
        </TabNav>

        <TabContent>
          {/* Personal tab start */}
          <PersonalTabContent openTab={openTab === 1 ? true : false}>
            <TabHeading>Subscribe to Uschool&apos;s top courses</TabHeading>
            <TabDescription>
              Get this course plus top-rated picks in Machine Learning and other
              popular topics. Learn more
            </TabDescription>
            <TabButton> Try Personal Plan for free</TabButton>
            <MonthlyPlan> $29.99 per month after 7 day trial</MonthlyPlan>
            <Divider>
              <OrDivider>or</OrDivider>
            </Divider>
            <CoursePrice>$84.99</CoursePrice>
            <TabButton> Buy this course</TabButton>
            <MonthlyPlan> 30-Day Money-Back Guarantee</MonthlyPlan>
            <BtnGroup>
              <ApplyCouponAndGiftBtn>Apply Coupon</ApplyCouponAndGiftBtn>
              <ApplyCouponAndGiftBtn> Gift this course</ApplyCouponAndGiftBtn>
            </BtnGroup>
          </PersonalTabContent>

          {/* Business tab start */}
          <BusinessTabContent openTab={openTab === 2 ? true : false}>
            <TabHeading>
              <Firstletter>U</Firstletter>School
              <StyleHeading> Business</StyleHeading>
            </TabHeading>
            <TabDescription>
              Subscribe to this course and 6,000+ top‑rated Udemy courses for
              your organization.
            </TabDescription>
            <TabButton>Try Uschool Business</TabButton>
            <BusinessLists>
              <BusinessListItemWrapper>
                <RightIcon>&#10004;</RightIcon>
                <BusinessListItem>
                  For teams of 5 or more users
                </BusinessListItem>
              </BusinessListItemWrapper>
              <BusinessListItemWrapper>
                <RightIcon>&#10004;</RightIcon>
                <BusinessListItem>
                  6,000+ fresh & in-demand courses
                </BusinessListItem>
              </BusinessListItemWrapper>
              <BusinessListItemWrapper>
                <RightIcon>&#10004;</RightIcon>
                <BusinessListItem>Learning Engagement tools</BusinessListItem>
              </BusinessListItemWrapper>
              <BusinessListItemWrapper>
                <RightIcon>&#10004;</RightIcon>
                <BusinessListItem>SSO and LMS Integrations</BusinessListItem>
              </BusinessListItemWrapper>
            </BusinessLists>
          </BusinessTabContent>
        </TabContent>
      </TapWrapper>
    </RightBarContainer>
  );
};

export default CourseRightBar;
