// "use client";

// import {useState} from 'react';
// import clsx from "clsx";

// export default function ReviewWindow({params}:{
//     params:{
//         open:boolean
//     }
// }) {
//     let open = params.open;

//     // const [open, setOpen] = useState(true);

//     // function openReview() {
//     //     setOpen(true);
//     // }

//     // function closeReview() {
//     //     setOpen(false);
//     // }

//     function closeReview() {
//         open = false; 
//     }

//     return (
//         <div className={clsx("h-screen w-screen fixed z-20 bg-black opacity-20", {"invisible":open===false}, {"visible":open===true})}>
//             <button onClick={closeReview} className="bg-white">
//                 HELLLLLLLLLOOOOOOOOOOOOOOOO
//             </button>
//         </div>
//     );
// }