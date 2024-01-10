
export function CardOne(){
    const cardList1=[
        {img:"/home/poster/Card/item1.webp"},
        {img:"/home/poster/Card/item2.webp"},
        {img:"/home/poster/Card/item3.webp"},
        {img:"/home/poster/Card/item4.webp"},
        {img:"/home/poster/Card/item5.webp"},
        {img:"/home/poster/Card/item6.webp"},
        {img:"/home/poster/Card/item7.webp"},
    ]
    return(
        <>
       <div className="carousel slide mx-5" data-bs-ride="carousel" id="carouselExampleAutoplaying">
        <div className="carousel-inner">
            <img src="/home/poster/Card/item1.webp" alt="" />
            <img src="/home/poster/Card/item2.webp" alt="" />
            <img src="/home/poster/Card/item3.webp" alt="" />
            <img src="/home/poster/Card/item4.webp" alt="" />
            <img src="/home/poster/Card/item5.webp" alt="" />
            <img src="/home/poster/Card/item6.webp" alt="" />
            <img src="/home/poster/Card/item7.webp" alt="" />
         
           <button
           className="carousel-control-prev"
           type="button"
           data-bs-target="#carouselExampleAutoplaying"
           data-bs-slide="prev"
         >
           <span
             className="carousel-control-prev-icon bg-dark" style={{borderRadius:"50%",padding:"10%" ,marginRight:"120px"}}
             aria-hidden="true"
           ></span>
           <span className="visually-hidden">Previous</span>
         </button>
         <button
           className="carousel-control-next"
           type="button"
           data-bs-target="#carouselExampleAutoplaying"
           data-bs-slide="next"
         >
           <span
            className="carousel-control-next-icon bg-dark" style={{borderRadius:"50%",padding:"10%" ,marginLeft:"120px"}}
             aria-hidden="true"
           ></span>
           <span className="visually-hidden">Next</span>
         </button>
         </div>
         </div>
         {/* --------------------------- */}
         <div className="carousel slide mx-5" data-bs-ride="carousel" id="carouselExampleAutoplaying">
        <div className="carousel-inner">
            <img src="/home/poster/Card/card1.webp" alt="" />
            <img src="/home/poster/Card/card2.webp" alt="" />
            <img src="/home/poster/Card/card3.webp" alt="" />
            <img src="/home/poster/Card/card4.webp" alt="" />
            <img src="/home/poster/Card/card5.webp" alt="" />
            <img src="/home/poster/Card/card6.webp" alt="" />
            <img src="/home/poster/Card/card7.webp" alt="" />
            
         
           <button
           className="carousel-control-prev"
           type="button"
           data-bs-target="#carouselExampleAutoplaying"
           data-bs-slide="prev"
         >
           <span
             className="carousel-control-prev-icon bg-dark" style={{borderRadius:"50%",padding:"10%" ,marginRight:"120px"}}
             aria-hidden="true"
           ></span>
           <span className="visually-hidden">Previous</span>
         </button>
         <button
           className="carousel-control-next"
           type="button"
           data-bs-target="#carouselExampleAutoplaying"
           data-bs-slide="next"
         >
           <span
             className="carousel-control-next-icon bg-dark" style={{borderRadius:"50%",padding:"10%", marginLeft:"120px"}}
             aria-hidden="true"
           ></span>
           <span className="visually-hidden">Next</span>
         </button>
         </div>
         </div>
         </>
         
    )
}
// export function Card({img}){
//     return(
//         <div className="card">
//             <img src={img} alt="" />
//         </div>
//     )
// }