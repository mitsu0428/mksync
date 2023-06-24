"use client";

import React from "react";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css"; // カレンダーのcss
import Calendar from "@/components/page/Calendar";

export default function Home() {
  return (
    <Wrapper>
      <Title>MKSync</Title>
      <SubTitle>SNS管理 カレンダーアプリケーション</SubTitle>
      <Descripiton>
        Instagram、Tiktok、YouTubeの投稿を管理するカレンダーアプリケーションです。
      </Descripiton>
      <CalendarWrapper>
        <Calendar />
      </CalendarWrapper>
      <TodayPostWrapper></TodayPostWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 32px;
`;

const Title = styled.h1`
  font-size: 32px;
  padding: 16px;
  text-align: center;
  color: #666;
`;

const SubTitle = styled.h2`
  font-size: 24px;
  padding: 16px;
  text-align: left;
  color: #666;
`;

const Descripiton = styled.p`
  font-size: 16px;
  padding: 16px;
  color: #666;
`;

const CalendarWrapper = styled.div`
  margin-top: 32px;
  padding: 16px;
  font-size: 24px;
  background-color: #eee;
  min-height: 400px;
  border-radius: 8px;
`;

const TodayPostWrapper = styled.div`
  margin-top: 32px;
  padding: 16px;
  font-size: 24px;
  background-color: #eee;
  min-height: 400px;
  border-radius: 8px;
`;
