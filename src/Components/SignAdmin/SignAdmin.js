import React, { useState } from "react";
import styled from "styled-components";
import AdmineImg from "../Images/admin.svg";
import im from "../Images/aphoto.svg";
import firebase from "firebase/compat/app";
import { app } from "../Base/Base";
import ClipLoader from "react-spinners/SyncLoader";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

const SignAdmin = () => {
  const history = useHistory();
  const [imgProfile, setImgProfile] = useState(im);
  const [percent, setPercent] = useState(0.00000001);
  const [avatar, setAvatar] = useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const showFile = URL.createObjectURL(file);
    setImgProfile(showFile);

    const fileRef = await app.storage().ref();
    const storageRef = fileRef.child("avatar/" + file.name).put(file);

    storageRef.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        const counter = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setPercent(counter);
        console.log(counter);
      },
      (err) => console.log(err.message),

      () => {
        storageRef.snapshot.ref.getDownloadURL().then((URL) => {
          console.log(URL);
          setAvatar(URL);
        });
      }
    );
  };

  const signUp = async () => {
    const saveUser = await app
      .auth()
      .createUserWithEmailAndPassword(email, password);

    if (saveUser) {
      await app.firestore().collection("users").doc(saveUser.user.uid).set({
        avatar,
        name,
        email,
        password,
        createdBy: saveUser.user.uid,
      });
      history.push("/");
      // alert("Signed Up Sucessfully");
      swal("Grate!", "Signed In Sucessfully!", "success");
    }
  };

  const signIn = async () => {
    const saveUser = await app
      .auth()
      .signInWithEmailAndPassword(email, password);

    history.push("/");
  };

  const GoogleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const saveUser = await app.auth().signInWithPopup(provider);

    if (saveUser) {
      await app.firestore().collection("users").doc(saveUser.user.uid).set({
        avatar: saveUser.user.photoURL,
        name: saveUser.user.displayName,
        email: saveUser.user.email,
        password,
        createdBy: saveUser.user.uid,
      });
      history.push("/");
    }

    history.push("/");
  };
  return (
    <Container>
      <Wrapper>
        <ImageDiv src={AdmineImg} />
        <TextDiv>
          <ImageBox>
            {percent <= 99.99 && percent > 0.00001 ? <ImageBoxCover /> : null}
            <ImageDisplay src={imgProfile} />

            {percent <= 99.99 && percent > 0.00001 ? (
              <Game>
                <span>{Math.floor(percent)}%</span>
                <Loader color={"#0076e1"} size={15} />
              </Game>
            ) : null}
          </ImageBox>
          <InputLable
            accept="image/*"
            type="file"
            id="pix"
            onChange={uploadImage}
          />
          <Label htmlFor="pix">Upload an Image</Label>

          <InputHolder>
            <label>Name</label>
            <TextInput
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </InputHolder>

          <InputHolder>
            <label>Email</label>
            <TextInput
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </InputHolder>
          <InputHolder>
            <label>Password</label>
            <TextInput
              placeholder="Create a Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </InputHolder>
          <RoomDesBtnDiv onClick={signUp}>Sign Up</RoomDesBtnDiv>
        </TextDiv>
      </Wrapper>
    </Container>
  );
};

export default SignAdmin;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  /* height: 500px; */
  width: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const ImageDiv = styled.img`
  height: 450px;
  width: 350px;
  /* background-color: aliceblue; */
  margin: 10px;
  /* object-fit: cover; */
`;
const TextDiv = styled.div`
  /* height: 450px; */
  width: 350px;
  /* background-color: green; */
  margin: 10px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

const RoomDesBtnDiv = styled.button`
  height: 40px;
  width: 170px;
  background-color: #377dff;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  font-family: Montserrat;
  transition: all 350ms;
  transform: scale(1);
  margin: 10px 0;

  :hover {
    transform: scale(0.94);
  }
`;

const InputHolder = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 12px;
  letter-spacing: 1px;
  margin: 10px 0;
`;
const TextInput = styled.input`
  color: black;
  height: 40px;
  padding-left: 10px;
  font-size: normal;
  font-family: Poppins;
  ::placeholder {
    font-family: Poppins;
    font-weight: bold;
  }
`;

const InputLable = styled.input`
  display: none;
`;

const Label = styled.label`
  cursor: pointer;
  background-color: #0076e1;
  height: 30px;
  margin-top: 20px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  border-radius: 5px;
  transform: scale(1);
  transition: all 350ms;
  font-weight: boldhh j;
  :hover {
    transform: scale(1.03);
  }
`;

const ImageBoxCover = styled.div`
  width: 100%;
  border-radius: 10px;
  /* border-radius: 50%; */
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 1;
  position: absolute;
`;
const ImageBox = styled.div`
  width: 300px;
  height: 200px;
  position: relative;
  /* border: 5px solid #0076e1; */
  justify-content: center;
  display: flex;
  align-items: center;
  /* border-radius: 50%; */
  border-radius: 10px;
`;
const ImageDisplay = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const Loader = styled(ClipLoader)`
  z-index: 10;
`;

const Game = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  span {
    font-weight: bold;
    color: black;
    z-index: 100;
    font-size: 15px;
    margin-bottom: 10px;
  }
`;
