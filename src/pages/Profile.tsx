import React, { useState } from "react";
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
  BackButton,
  EditInput,
  SaveButton,
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
  const [isEditing, setIsEditing] = useState(false);

  const profileViewPage = (
    <ProfileContainer>
      <ProfileHeader>
        <Title mb="4" fontSize="24">
          Profile
        </Title>
        <P>Some info may be visible to other people</P>
        <EditButton onClick={() => setIsEditing(true)}>Edit</EditButton>
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
  );
  const profileEditPage = (
    <>
      <BackButton onClick={() => setIsEditing(false)}>
        <i className="fa-solid fa-angle-left" />
        Back
      </BackButton>
      <ProfileContainer>
        <ProfileHeader>
          <Title mb="4" fontSize="24">
            Change Info
          </Title>
          <P>Changes will be reflected to every services</P>
        </ProfileHeader>

        <ProfileRow>
          <ProfileContentPhoto>
            <div className="title">photo</div>
            <div className="photo">
              <i className="fa-solid fa-camera icon" />
            </div>
          </ProfileContentPhoto>
        </ProfileRow>

        {fakeData.map((row, i) => (
          <ProfileRow key={i}>
            <ProfileContent>
              <div className="title">{row.title}</div>
              <EditInput
                type="text"
                placeholder={`Enter your ${row.title}...`}
              />
            </ProfileContent>
          </ProfileRow>
        ))}

        <ProfileRow>
          <SaveButton onClick={() => setIsEditing(false)}>Save</SaveButton>
        </ProfileRow>
      </ProfileContainer>
    </>
  );

  return (
    <>
      <Header />
      {!isEditing ? profileViewPage : profileEditPage}
    </>
  );
}
