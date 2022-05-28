import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Header from "../components/Header";
import { useAuth } from "../hooks";
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

export default function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.username) {
      navigate("/");
    }
  }, [user]);

  const userData = [
    { title: "name", content: user.username },
    { title: "bio", content: user.bio },
    { title: "phone", content: user.phone },
    { title: "email", content: user.email },
    { title: "password", content: "************" },
  ];
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

      {userData.map((row, i) => (
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

        {userData.map((row, i) => (
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
