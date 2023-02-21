// import React, { useState } from 'react'
// import { Navigate } from 'react-router-dom'
// // import Navbar from '../../components/navbar/Navbar'
//  import { DefaultEditor } from 'react-simple-wysiwyg';
//  import Navbar from './Navbar';
// import './write.css'
// import axios from 'axios';

// const EditArticle = () => {
//     const [title, setTitle] = useState("");
//   const [category, setCategory] = useState("");
//   const [content, setContent] = useState("");
//   const [url,setUrl] = useState;
//   const [articleData,setArticleData] = useState({title:"",category:"",content:"",url:""})
//   alert('hello');
// //  const [file, setFile] = useState();

    
//     console.log(articleData,"0");
//     const onSubmitAddArcticle = (e)=>{
//          e.preventDefault();
//         //const data = {title:title,img:file, category:category,content:content};
//         const data = {title:title, category:category,content:content};
//         console.log(data);
//         // setArticleData(data);
//         // console.log(articleData,"1");
//         // axios.post("htpp://localhost/8000",articleData)
//         // .then(function (response) {
//         //    console.log(response);
//         //    Navigate("/");
//         //  })
//         //  .catch(function (error) {
//         //    console.log(error);
//         //  });
//         console.log(e.target.value);
//     }
//   return ({
//     <h1>hello</h1>}
//     // <div>
//       {/* <Navbar/> 
//       <div className="write">

//             <form className="writeForm" onSubmit={onSubmitAddArcticle}>
//                 <div className="writeFormGroup">
//                     <input
//                         className="writeInput"
//                         placeholder="Title"
//                         type="text"
//                         autoFocus={true}
//                         onChange={(e)=>setTitle(e.target.value)}
//                     />
//                     <div className="writeFormGroup">
//                         <input
//                             className="writeInput"
//                             placeholder="enter image url"
//                             type="text"
//                             autoFocus={true}
//                             onChange={(e)=>setUrl(e.target.value)}
//                         />
//                     </div>
//                 </div>
//                 <div className="writeFormGroup">
//                     <input
//                         className="writeInput"
//                         placeholder="Type Category ...."
//                         type="text"
//                         autoFocus={true}
//                         onChange={(e)=>setCategory(e.target.value)}
//                     />
//                 </div>
                
//                 <div className='write-publish-btn-wrapper'>
//                   <button type="submit" className='write-publish-btn'>
//                       Publish
//                   </button>
//               </div>
//             </form>
            
//             <div className='write-editor-wrapper'>
//                     <DefaultEditor value = {content} onChange={(e)=>setContent(e.target.value)} className="write-editor" />
//                     {/* <DefaultEditor onChange={(e)=>setContent(e.target.value)} className="write-editor"/> */}
//         //   </div>*/}

//         // </div>
//     // </div> */}
//   );
// }

// export default EditArticle;
