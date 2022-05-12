import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import { P, Title } from "../styles";
import {
  EditButton,
  ProfileContainer,
  ProfileHeader,
  ProfileRow,
  ProfileContentPhoto,
  ProfileContent,
} from "../styles/Profile.styles";

const fakeData = [
  { title: "name", content: "Xanthe Neal" },
  {
    title: "bio",
    content: "I am a software developer and a big fan of devchallenges...",
  },
  { title: "phone", content: "908249274292" },
  { title: "email", content: "xanthe.neal@gmail.com" },
  { title: "password", content: "************" },
];

export default function Profile() {
  return (
    <>
      <Header />
      <ProfileContainer>
        <ProfileHeader>
          <Title fontSize="24">Profile</Title>
          <P>Some info may be visible to other people</P>
          <EditButton>Edit</EditButton>
        </ProfileHeader>

        <ProfileRow>
          <ProfileContentPhoto>
            <div className="title">photo</div>
            <div className="photo" />
          </ProfileContentPhoto>
        </ProfileRow>

        {fakeData.map((row, i) => (
          <ProfileRow key={i}>
            <ProfileContent>
              <div className="title">{row.title}</div>
              <div className="content">{row.content}</div>
            </ProfileContent>
          </ProfileRow>
        ))}
      </ProfileContainer>
    </>
  );
}
