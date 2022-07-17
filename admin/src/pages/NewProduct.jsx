import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
import { addProduct, mensajeApiCall } from "../redux/apiCalls";
import { useDispatch } from "react-redux";
import Errors from "../elements/Errors";

export const NewProduct = () => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState("");
  const [cat, setCat] = useState([]);
  const [errors,setErrors] = useState({
    isErrors:false,
    errors:[]
})
  const dispatch = useDispatch();

  //Llevar al inicio de la pantalla
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };
  const handleClick = (e) => {
    e.preventDefault();
    const fileName = file.name ;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
   uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        console.log(error);
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          const product = { ...inputs, image: [downloadURL], categories: cat };
          addProduct(product, dispatch);

          mensajeApiCall &&  setErrors({
            isErrors:true,
            errors:mensajeApiCall.message
        })
          // window.location.replace("/productos");
        });
      }
    )
  };

  return (
    <Container>
      <Title>Ingresar nuevo producto</Title>
      <Form>
        <Item>
          <label>Imagen</label>
          <input
            name="file"
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </Item>
        <Item>
          <label>Nombre</label>
          <input
            name="name"
            type="text"
            placeholder="Nombre del producto"
            onChange={handleChange}
          />
        </Item>
        <Item>
          <label>Descripción</label>
          <input
            name="description"
            type="text"
            placeholder="Agrega una breve descripción del producto"
            onChange={handleChange}
          />
        </Item>
        <Item>
          <label>Categoría</label>
          <input
            name="cat"
            type="text"
            placeholder="Ingresa una categoría"
            onChange={handleCat}
          />
        </Item>
        <Item>
          <label>Precio</label>
          <input
            name="price"
            type="number"
            placeholder="Ingresa el precio"
            onChange={handleChange}
          />
        </Item>
        <Item>
          <label>Cantidad</label>
          <input
            name="stock"
            type="number"
            placeholder="Cantidad disponible"
            onChange={handleChange}
          />
        </Item>
        <Button onClick={handleClick}>Crear</Button>
      </Form>
      <Errors errors={errors}/>
    </Container>
  );
};
const Container = styled.div`
    flex: 7;
  padding: 20px;
`;
const Title = styled.h1``;
const Form = styled.form`
  margin-top: 10px;
`;
const Item = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  label {
    color: gray;
    font-weight: 600;
    margin-bottom: 10px;
  }
  input {
    padding: 10px;
  }
  select {
    padding: 10px;
  }
`;
const Button = styled.button`
  margin-top: 10px;
  padding: 7px 10px;
  border: none;
  border-radius: 4px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
