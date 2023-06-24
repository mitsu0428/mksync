"use client";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { AiOutlinePlus } from "react-icons/ai";

export const Header: React.FC = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <Link href="/">新しい予定を登録する</Link>
      <Button
        type="button"
        onClick={() => router.replace("/create")}
      >
        <AiOutlinePlus color="white" />
        新規追加
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 32px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  background-color: #645caa;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;
