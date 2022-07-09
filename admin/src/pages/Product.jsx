import React, { useEffect, useMemo, useState } from "react";
import { Chart } from "../components/Chart";
import { Image } from '@mui/icons-material';
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { userRequest } from "../requestMetods";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
import { updateProduct } from "../redux/apiCalls";

export const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );
  const [productStats, setProductsStats] = useState([]);
  const MONTHS = useMemo(
    () => [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ],
    []
  );
  useEffect(() => {
    const getStats = async () => {
      // file ? console.log(file) :console.log("no existe el file")

      try {
        const res = await userRequest.get("order/income?pid=" + productId);
        const list = res.data.sort((a, b) => {
          return a._id - b.i_id;
        });
        list.map((item) =>
          setProductsStats((prev) => [
            ...prev,
            { name: MONTHS[item._id], Sales: item.total },
          ])
        );
      } catch (error) {
        console.log(error);
      }
    };
    getStats();
  }, [productId, MONTHS]);

  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState("");
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };


  const fileStorage = () => {
    console.log("first")
    const fileName = file.name;
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
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          const id = productId;
          const product = { ...inputs, img: downloadURL, categories: cat };
          updateProduct(id, product, dispatch);
          console.log(product)
        });
      }
    );
  };
  file && fileStorage();




  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };
  const handleClick = (e) => {
    const id = productId;
    const product = {...inputs}
    e.preventDefault();
    updateProduct(id,product,dispatch)
  };
  console.log(inputs);

  return (
    <Container>
      <TitleContainer>
        <h1 className="productTitle">Product</h1>
        <Link to="/nuevoProducto">
          <AddButton>Crear</AddButton>
        </Link>
      </TitleContainer>
      <Top>
        <TopLeft>
          <Chart
            data={productStats}
            dataKey="Sales"
            title="Sales Performance"
          />
        </TopLeft>
        <TopRigth>
          <InfoTop>
            <InfoImg src={product.img} alt="" />
            <Name>{product.title}</Name>
          </InfoTop>
          <InfoBottom>
            <InfoItem>
              <span className="productInfoKey">id:</span>
              <InfoValue>{product._id}</InfoValue>
            </InfoItem>
            <InfoItem>
              <span className="productInfoKey">sales:</span>
              <InfoValue>5123</InfoValue>
            </InfoItem>
            <InfoItem>
              <span className="productInfoKey">active:</span>
              <InfoValue>yes</InfoValue>
            </InfoItem>
            <InfoItem>
              <span className="productInfoKey">in stock:</span>
              <InfoValue>{product.inStock}</InfoValue>
            </InfoItem>
          </InfoBottom>
        </TopRigth>
      </Top>
      <Bootom>
        <Form>
          <FormLeft>
            <label>Product Name</label>
            <input
              name="title"
              type="text"
              placeholder={product.title}
              onChange={handleChange}
            />{" "}
            <label>Descripcion</label>
            <input
              name="description"
              type="text"
              placeholder={product.description}
              onChange={handleChange}
            />
            <label>Precio</label>
            <input
              name="price"
              type="text"
              placeholder={product.price}
              onChange={handleChange}
            />
            <label>In Stock</label>
            <select name="inStock" id="idStock" onChange={handleChange}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active" onChange={handleChange}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </FormLeft>
          <FormRigth>
            <Upload>
              <UploadImg src={product.img} alt="" />
              <label htmlFor="file">
                <Image />
              </label>
              <input
                type="file"
                name="file"
                id="file"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Upload>
            <Button onClick={handleClick}>Update</Button>
          </FormRigth>
        </Form>
      </Bootom>
    </Container>
  );
};
const Container = styled.div`
  flex: 4;
  padding: 20px;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;
const Top = styled.div`
  display: flex;
`;
const TopLeft = styled.div`
  flex: 1;
`;
const TopRigth = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const InfoTop = styled.div`
  display: flex;
  align-items: center;
`;
const InfoImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;
const Name = styled.span`
  font-weight: 600;
`;
const InfoBottom = styled.div`
  margin-top: 10px;
`;
const InfoItem = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;
const Bootom = styled.div`
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;
const FormLeft = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 10px;
    color: gray;
  }
  input {
    margin-bottom: 10px;
    border: none;
    padding: 5px;
    border-bottom: 1px solid gray;
  }
  select {
    margin-bottom: 10px;
  }
`;
const UploadImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 4px;
  object-fit: cover;
  margin-right: 20px;
`;
const FormRigth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Upload = styled.div`
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
const InfoKey = styled.span``;
const InfoValue = styled.span`
  font-weight: 300;
`;
