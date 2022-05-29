import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAPI } from "../api";
import Header from "../components/Header";
import { useAuth } from "../hooks";
import { P, Title } from "../styles";
import {
  BackButton,
  BottomRow,
  EditButton,
  EditInput,
  ProfileContainer,
  ProfileContent,
  ProfileContentPhoto,
  ProfileHeader,
  ProfileInputContainer,
  ProfileRow,
  SaveButton,
} from "../styles/Profile.styles";
import { UserDataType } from "../types";
import { getUserDataFromLocalStorage } from "../utils";

export default function Profile() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState<UserDataType>(null);
  const [message, setMessage] = useState("");

  const phoneInputRef = useRef<HTMLInputElement>();
  const passwordInputRef = useRef<HTMLInputElement>();
  const emailInputRef = useRef<HTMLInputElement>();
  const bioInputRef = useRef<HTMLInputElement>();
  const usernameInputRef = useRef<HTMLInputElement>();
  const fileInputRef = useRef<HTMLInputElement>();
  const { id, accessToken } = getUserDataFromLocalStorage();
  const auth = useAuth();

  useEffect(() => {
    if (!accessToken) {
      localStorage.removeItem("userData");
      navigate("/");
    }

    (async () => {
      try {
        const { data } = await UserAPI.get(`/${id}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        setUser(data);
        auth.login(data);
      } catch (err: any) {
        console.log(err.response?.data?.message);
        localStorage.removeItem("userData");
        navigate("/");
        // CODE REFRESH AUTH...
      }
    })();
  }, [isEditing]);

  const saveHandler = async () => {
    const updateInfo = {
      username: usernameInputRef?.current?.value,
      password: passwordInputRef?.current?.value,
      phone: phoneInputRef?.current?.value,
      email: emailInputRef?.current?.value,
      bio: bioInputRef?.current?.value,
    };

    try {
      await UserAPI.put(`/${id}`, updateInfo, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setIsEditing(false);
    } catch (err: any) {
      return setMessage(err.response.data.message);
    }
  };

  const profileViewPage = user && (
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

      <ProfileRow>
        <ProfileContent>
          <div className="title">name</div>
          <div className="content">{user.username}</div>
        </ProfileContent>
      </ProfileRow>
      <ProfileRow>
        <ProfileContent>
          <div className="title">bio</div>
          <div className="content">{user.bio}</div>
        </ProfileContent>
      </ProfileRow>
      <ProfileRow>
        <ProfileContent>
          <div className="title">phone</div>
          <div className="content">{user.phone}</div>
        </ProfileContent>
      </ProfileRow>
      <ProfileRow>
        <ProfileContent>
          <div className="title">email</div>
          <div className="content">{user.email}</div>
        </ProfileContent>
      </ProfileRow>
      <ProfileRow>
        <ProfileContent>
          <div className="title">password</div>
          <div className="content">*******</div>
        </ProfileContent>
      </ProfileRow>
    </ProfileContainer>
  );
  const profileEditPage = user && (
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
          <ProfileContentPhoto
            editing={isEditing}
            src={user.photoUrl || ""}
            onClick={() => {
              console.log("click");
              fileInputRef.current?.click();
            }}
          >
            <div className="photo">
              <i className="fa-solid fa-camera icon" />
            </div>
            <div className="title">change photo</div>
          </ProfileContentPhoto>
        </ProfileRow>

        <input
          ref={fileInputRef}
          type="file"
          style={{ display: "none" }}
          accept=".png, .jpg, .jpeg"
          onChange={(e) => {
            console.log(e.target?.files[0]);
          }}
        />

        <ProfileRow>
          <ProfileInputContainer>
            <div className="title">name</div>
            <EditInput
              ref={usernameInputRef}
              type="text"
              placeholder="Enter your new name..."
              defaultValue={user.username}
            />
          </ProfileInputContainer>
        </ProfileRow>
        <ProfileRow>
          <ProfileInputContainer>
            <div className="title">bio</div>
            <EditInput
              ref={bioInputRef}
              type="text"
              placeholder="Enter your new bio..."
              defaultValue={user.bio}
            />
          </ProfileInputContainer>
        </ProfileRow>
        <ProfileRow>
          <ProfileInputContainer>
            <div className="title">phone</div>
            <EditInput
              ref={phoneInputRef}
              type="text"
              placeholder="Enter your new phone..."
              defaultValue={user.phone}
            />
          </ProfileInputContainer>
        </ProfileRow>
        <ProfileRow>
          <ProfileInputContainer>
            <div className="title">email</div>
            <EditInput
              ref={emailInputRef}
              type="text"
              placeholder="Enter your new email..."
              defaultValue={user.email}
            />
          </ProfileInputContainer>
        </ProfileRow>
        <ProfileRow>
          <ProfileInputContainer>
            <div className="title">password</div>
            <EditInput
              ref={passwordInputRef}
              placeholder="Enter your new password..."
              type="password"
            />
          </ProfileInputContainer>
        </ProfileRow>

        <BottomRow>
          <p>{message && message}</p>
          <SaveButton onClick={saveHandler}>Save</SaveButton>
        </BottomRow>
      </ProfileContainer>
    </>
  );

  return (
    <>
      <Header />
      {user && isEditing ? profileEditPage : profileViewPage}
    </>
  );
}
