"use client";

import React from "react";
import styled from "styled-components";
import { Layout } from "@/components/ui/Layout";

const CreatePage = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/db/createPost`, {
      method: "POST",
      body: JSON.stringify({ title, description }),
    });
  };

  const handleOnChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleOnChangeDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  return (
    <Layout>
      <Form onSubmit={handleOnSubmit}>
        <Label htmlFor="title">タイトル</Label>
        <Input
          type="text"
          name="title"
          onChange={handleOnChangeTitle}
        />

        <Label htmlFor="description">説明</Label>
        <Input
          type="text"
          name="description"
          onChange={handleOnChangeDescription}
        />

        <Button type="submit">作成する</Button>
      </Form>
    </Layout>
  );
};

export default CreatePage;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #645caa;
`;

const Input = styled.input`
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  color: #666;
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
