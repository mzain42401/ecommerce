import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import { createContext, useContext, useState, useEffect } from "react";
import { db, myStorage } from "./firebase";
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';


import { getDownloadURL, ref, uploadBytes } from "firebase/storage";


const DataContext = createContext();


export default function useDataFunc() {

    // publishDoc============
    const publishDoc = async (productName,price,productDiscription,mainCategory,subCategory,CoverPic,Pic1,Pic2,Pic3,Discount,discountPrice) => {


         
 
        const coverimageRef = ref(myStorage, `images/${Date.now()}-${CoverPic.name}`)
        const coverImagePath = await uploadBytes(coverimageRef, CoverPic)
        const pic1Ref = ref(myStorage, `images/${Date.now()}-${Pic1.name}`)
        const pic1path = await uploadBytes(pic1Ref, Pic1)
        const pic2Ref = ref(myStorage, `images/${Date.now()}-${Pic2.name}`)
        const pic2path = await uploadBytes(pic2Ref, Pic2)
        const pic3Ref = ref(myStorage, `images/${Date.now()}-${Pic3.name}`)
        const pic3path = await uploadBytes(pic3Ref, Pic3)
        try {
            const id=uuidv4()
            const data = await setDoc(doc(db, "productsData",id), {
                productName,
                price,
                productDiscription,
                mainCategory,
                subCategory,
                Discount,
                discountPrice,
                coverImage: coverImagePath.ref.fullPath,
                Pic1: pic1path.ref.fullPath,
                pic2: pic2path.ref.fullPath,
                pic3: pic3path.ref.fullPath,
                id

            })
            Swal.fire("Product Added")

        } catch (error) {
            console.log(error);
        }
    }


// addComment ==================

const addComment=async(comment,productId,username)=>{

    const currentDate = new Date();
const formattedDate = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
}).format(currentDate);

    await addDoc(collection(db,`productsData/${productId}/produtComments`),{
        date:formattedDate,
        userName:username,
        comment
    })
    window.location.reload()
}

// getCommentdata==============
const getCommentdata = async (productId) => {
    const path = collection(db, `productsData/${productId}/produtComments`)
    const q = query(path)

    const querySnapshot = await getDocs(q);
    const commentData = []
    querySnapshot.forEach(data =>
        commentData.push({ ...data.data() })

    );
    return commentData


}



// getData============
    const getdata = async () => {
        const path = collection(db, 'productsData')
        const q = query(path)

        const querySnapshot = await getDocs(q);
        const productsData = []
        querySnapshot.forEach(data =>
            productsData.push({ ...data.data() })

        );
        return productsData
    }

    // shipping data
    const getShipingdata = async () => {
        const path = doc(db, 'shipping','free-fee-shipping')
        const q = await getDoc(path)
        return q.data()
  
    }



// shippingFee

    // const shippingFee = async () => {
    //     const path = doc(db, 'shipping','shippingfee')
    //     const q = await getDoc(path)
    //     return q.data()
    // }



// cartData

const cartData=async(userId)=>{


    const path = collection(db, 'cart ' + userId)
    const q = query(path)

    const querySnapshot = await getDocs(q);
    const productsData = []
    querySnapshot.forEach(data =>
      productsData.push({ ...data.data() })
    );

    return productsData

}


// addToCart


let myProducts;
  const addCartData = async (elem,authUser) => {
    myProducts = elem
    myProducts['qty'] = 1
    myProducts['totalPrice'] =elem.Discount>0?  myProducts.qty * elem.discountPrice:myProducts.qty * elem.price
    try {
      await setDoc(doc(db, "cart " + authUser.uid, "id " + myProducts.id),
        myProducts
      )
      Swal.fire('Successfully added')
    } catch (error) {
      console.log(error);
    }
  }


//   increment

let IncrementProduct;

const increment=async(user,elem)=>{
    IncrementProduct=elem
    IncrementProduct.qty=elem.qty+1
    IncrementProduct.totalPrice=elem.Discount>0?IncrementProduct.qty* elem.discountPrice:IncrementProduct.qty* elem.price
    const updateRef = doc(db, "cart " + user.uid, "id " + IncrementProduct.id);

    await updateDoc(updateRef, IncrementProduct);
 


}

// Edit Product
let editProduct;
const editProductData=async(editData,productName,price,Discount,productDiscription,mainCategory,subCategory)=>{

    editProduct=editData
editProduct.productName=productName
editProduct.price=price
editProduct.Discount=Discount
editProduct.discountPrice=Discount>0?Math.floor(price - (Discount / 100 * price)):price
editProduct.productDiscription=productDiscription
editProduct.mainCategory=mainCategory
editProduct.subCategory=subCategory
const updateRef = doc(db, "productsData" , editData.id);

await updateDoc(updateRef, editProduct);


}
const deleteProduct=async(id)=>{
    
const updateRef = doc(db, "productsData" , id);

await deleteDoc(updateRef);
window.location.reload()
}


    // getImageURL================

    const getImageURL=(path)=>{
        
        return getDownloadURL(ref(myStorage,path))
    }
    

    // getSpecificData==============================


    const  getSpecificData=async (productDetail)=>{
        const q = query(collection(db, "productsData"), where("id", "==", productDetail));

        const querySnapshot = await getDocs(q);
        var productsData ;
        querySnapshot.forEach(data =>
            productsData={ ...data.data() }

        );
        return productsData
    }

    return{
        getdata,
        publishDoc,
        getImageURL,
        getSpecificData,
        cartData,
        addCartData,
        increment,
        addComment,
        getCommentdata,
        editProductData,
        deleteProduct,
        getShipingdata,
        // shippingFee
    }
}

export const DataProvider = ({ children }) => {
    const data = useDataFunc();
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);