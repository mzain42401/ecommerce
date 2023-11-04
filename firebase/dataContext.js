import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { createContext, useContext, useState, useEffect } from "react";
import { db, myStorage } from "./firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";


const DataContext = createContext();


export default function useDataFunc() {

    // publishDoc============
    const publishDoc = async (productName, Price, Description, mainCategory, subCategory, coverPic, pic1, pic2, pic3) => {


        const coverimageRef = ref(myStorage, `images/${Date.now()}-${coverPic.name}`)
        const coverImagePath = await uploadBytes(coverimageRef, coverPic)
        const pic1Ref = ref(myStorage, `images/${Date.now()}-${pic1.name}`)
        const pic1path = await uploadBytes(pic1Ref, pic1)
        const pic2Ref = ref(myStorage, `images/${Date.now()}-${pic2.name}`)
        const pic2path = await uploadBytes(pic2Ref, pic2)
        const pic3Ref = ref(myStorage, `images/${Date.now()}-${pic3.name}`)
        const pic3path = await uploadBytes(pic3Ref, pic3)
        try {
            const data = await addDoc(collection(db, "productsData"), {
                productName,
                Price,
                Description,
                mainCategory,
                subCategory,
                coverImage: coverImagePath.ref.fullPath,
                Pic1: pic1path.ref.fullPath,
                pic2: pic2path.ref.fullPath,
                pic3: pic3path.ref.fullPath,
                id: Date.now()

            })

        } catch (error) {
            console.log(error);
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
        const aa=path
        console.log(aa);
        
        return getDownloadURL(ref(myStorage,path))
    }
    

    return{
        getdata,
        publishDoc,
        getImageURL
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