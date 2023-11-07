import { addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { createContext, useContext, useState, useEffect } from "react";
import { db, myStorage } from "./firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";


const DataContext = createContext();


export default function useDataFunc() {

    // publishDoc============
    const publishDoc = async (productName,price,productDiscription,mainCategory,subCategory,CoverPic,Pic1,Pic2,Pic3,Discount) => {


        const coverimageRef = ref(myStorage, `images/${Date.now()}-${CoverPic.name}`)
        const coverImagePath = await uploadBytes(coverimageRef, CoverPic)
        const pic1Ref = ref(myStorage, `images/${Date.now()}-${Pic1.name}`)
        const pic1path = await uploadBytes(pic1Ref, Pic1)
        const pic2Ref = ref(myStorage, `images/${Date.now()}-${Pic2.name}`)
        const pic2path = await uploadBytes(pic2Ref, Pic2)
        const pic3Ref = ref(myStorage, `images/${Date.now()}-${Pic3.name}`)
        const pic3path = await uploadBytes(pic3Ref, Pic3)
        console.log(productName,price,productDiscription,mainCategory,subCategory);
        try {
            const data = await addDoc(collection(db, "productsData"), {
                productName,
                price,
                productDiscription,
                mainCategory,
                subCategory,
                Discount,
                coverImage: coverImagePath.ref.fullPath,
                Pic1: pic1path.ref.fullPath,
                pic2: pic2path.ref.fullPath,
                pic3: pic3path.ref.fullPath,
                id: Date.now()

            })

        } catch (error) {
            console.log(error, productName,subCategory,mainCategory,price + " KKK");
        }
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


    // getImageURL================

    const getImageURL=(path)=>{
        
        return getDownloadURL(ref(myStorage,path))
    }
    
    const  getSpecificData=async (productDetail)=>{
        const q = query(collection(db, "productsData"), where("id", "==", +productDetail));

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
        getSpecificData
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