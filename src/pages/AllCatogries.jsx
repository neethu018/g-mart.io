import React, { useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion,Card,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


import {
  faArrowAltCircleRight,
  faArrowRight,
  faHeart,
  faSearch,
  faShare,
  faShareNodes,
  faStar,
  faBars,
  faArrowDown,
  faArrowUp
} from "@fortawesome/free-solid-svg-icons";
import './Styles.css';

const AllCatogries = () => {
    //const [showBagsLugsDropdown, setshowBagsLugsDropdown] = useState(false);

    //const handleBagsLugsMouseLeave = () => {
   //     setshowBagsLugsDropdown(false);
 //     };
      

    //const handleBagsLugsMouseEnter = () => {
  //      setshowBagsLugsDropdown(true);
//      };
{/*

  <div className=''>
            <Row className=' d-flex flex-wrap w-100' style={{border:"",paddingRight:"6px"}}>
                 <Col  xl={1} xs={3}><img src='../../public/fashion.png' alt=''  style={{width:"90px",height:"80px",paddingTop:"",paddingLeft:"0px"}}></img></Col>
                 <Col xl={10} xs={8}  style={{paddingTop:""}} className='justify-content-center no-gutters' >
                    
                         <Row className=''lass><h4 style={{fontWeight:"bolder",paddingTop:"5px"}}>Fashion</h4></Row>
                         <Row><p className='' style={{overflow:"hidden"}}>Men, Women, Boys, Girls, Junior Boys, Junior Girls, Infants, Toys & Baby Care, Home & Kitchen, Tech</p></Row>
                        
                  </Col>
                 <Col xl={1} xs={1}><p><FontAwesomeIcon icon={faArrowDown} color="" className='arrow-icon' style={{padding:"14px",borderRadius:"35px",fontSize:"13px"}} /></p>
                  </Col>
            </Row>
            <hr />    
        </div>

         <Card border='light' className='border-none'>
        <Card.Body>
          <div className="d-flex">
            
            <img src='../../public/pf.png'  alt="Your Image" style={{width:"60px",height:"50px",marginLeft:"20px"}} />

          
            <div className="ml-3 pt-2">
              <Card.Title><h5 style={{fontWeight:"bolder",paddingTop:"3px", paddingLeft:"5px"}}>Premiumfruits</h5></Card.Title>
              
            </div>
          </div>
        </Card.Body>
      </Card>


*/}
      const [isHover,setHover]=useState(false);








  return (
    <Container >
        <div className='pt-5'>

{/* PremiumFruits-------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------
----------- */}
        <Accordion style={{border:"0!important"}} className='accordian accordian-flush' >
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card   className='border-none' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} as={Link} to={"/premiumfruits"} style={{textDecoration:"none",border:"none"}}>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/pf.png'  alt="Your Image" style={{width:"90px",height:"70px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h4 style={{fontWeight:"bolder",paddingTop:"3px", paddingLeft:"8px"}}>Premiumfruits</h4></Card.Title>
              <Card.Text className='' style={{fontWeight:"",paddingTop:"0px", paddingLeft:"8px"}}>Apples & Pears, Banana, Melons & Coconut, Cherries, Berries & Exotic Fruits, Citrus, Mango & Grapes, Dates, Gift, Assorted & XL ...</Card.Text>
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr style={{marginLeft:"10px",marginRight:"10px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
            <Accordion.Body className='pt-0 '>
            <Accordion style={{paddingBottom:"0px"}} className='accordian accordian-flush 1' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card  as={Link} to={"/premiumfruits/ApplePears"} border='white' className='border-none text-decoration-none'>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/apples-pears-20230607.webp'  alt="Your Image" style={{width:"60px",height:"50px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h5 style={{fontWeight:"bolder",paddingTop:"23px", paddingLeft:"18px"}}className='h-all'>Apples & Pears</h5></Card.Title>
              
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr className='h-all' style={{marginLeft:"30px",marginRight:"15px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
            <Accordion.Body >
          
      <Accordion.Item className='item '> <Card  as={Link} to={"/premiumfruits/ApplePears/apples"}border='light' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Apples</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card  as={Link} to={"/premiumfruits/ApplePears/pears"}border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Pears</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>

       </Accordion.Body>
     </Accordion.Item>
    </Accordion>
    


{/*---                                                **1**                                                       --- */}


            <Accordion style={{paddingBottom:"0px"}} className='accordian accordian-flush 1' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card as={Link}
                to={"/premiumfruits/AvacadoPeachPlum"} border='white' className='border-none text-decoration-none'>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/avocado-peach-plum-20230607.webp'  alt="Your Image" style={{width:"60px",height:"50px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h5 style={{fontWeight:"bolder",paddingTop:"23px", paddingLeft:"18px"}}className='h-all'>Avacados-Peaches-Plum</h5></Card.Title>
              
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr className='h-all' style={{marginLeft:"30px",marginRight:"15px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
            <Accordion.Body >
          
      <Accordion.Item className='item '> <Card as={Link}
                to={"/premiumfruits/AvacadoPeachPlum/avacados"} border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Avacados</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card as={Link}
                to={"/premiumfruits/AvacadoPeachPlum/peaches"} border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Peaches</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card as={Link}
                to={"/premiumfruits/AvacadoPeachPlum/nectarines"} border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Nectarines</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      
      
       </Accordion.Body>
     </Accordion.Item>
    </Accordion>
    


{/*---                                                **1**                                                       --- */}


            <Accordion style={{paddingBottom:"0px"}} className='accordian accordian-flush 1' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card
            as={Link}
            to={"/premiumfruits/BananaMelonCoconut"}  border='white' className='border-none text-decoration-none'>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/banana-melons-coconut-20230607.webp'  alt="Your Image" style={{width:"60px",height:"50px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h5 style={{fontWeight:"bolder",paddingTop:"23px", paddingLeft:"18px"}}className='h-all'>Banana-Melons-Coconut</h5></Card.Title>
              
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr className='h-all' style={{marginLeft:"30px",marginRight:"15px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
            <Accordion.Body >
          
      <Accordion.Item className='item '> <Card as={Link}
                to={"/premiumfruits/BananaMelonCoconut/bananas"} border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Bananas</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card as={Link}
                to={"/premiumfruits/BananaMelonCoconut/melons"} border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Melons</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card as={Link}
                to={"/premiumfruits/BananaMelonCoconut/coconuts"}border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Coconuts</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
       </Accordion.Body>
     </Accordion.Item>
    </Accordion>
    


{/*---                                                **1**                                                       --- */}


            <Accordion style={{paddingBottom:"0px"}} className='accordian accordian-flush 1' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card  as={Link}
                to={"/premiumfruits/CherriesBerriesDragonfruit"} border='white' className='border-none text-decoration-none'>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/cherries-berries-exotic-fruits-20230607.webp'  alt="Your Image" style={{width:"60px",height:"50px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h5 style={{fontWeight:"bolder",paddingTop:"23px", paddingLeft:"18px"}}className='h-all'>Cherries-Berries-Exotic-Fruits</h5></Card.Title>
              
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr className='h-all' style={{marginLeft:"30px",marginRight:"15px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
            <Accordion.Body >
          
      <Accordion.Item className='item '> <Card  as={Link}
                to={"/premiumfruits/CherriesBerriesDragonfruit/cherries"} border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Cherries</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card  as={Link}
                to={"/premiumfruits/CherriesBerriesDragonfruit/berries"}border='white' className='border-none  text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Berries</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card  as={Link}
                to={"/premiumfruits/CherriesBerriesDragonfruit/dragonfruits"}border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Dragon Fruits</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
       </Accordion.Body>
     </Accordion.Item>
    </Accordion>
    


{/*---                                                **1**                                                       --- */}


            <Accordion style={{paddingBottom:"0px"}} className='accordian accordian-flush 1' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card as={Link}
                to={"/premiumfruits/CitrusMangosGrapes"} border='white' className='border-none text-decoration-none'>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/citrus-mango-grapes-20230607.webp'  alt="Your Image" style={{width:"60px",height:"50px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h5 style={{fontWeight:"bolder",paddingTop:"23px", paddingLeft:"18px"}}className='h-all'>Citrus-Mangos-Grapes</h5></Card.Title>
              
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr className='h-all' style={{marginLeft:"30px",marginRight:"15px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
            <Accordion.Body >
          
            <Accordion.Item className='item '> <Card as={Link}
                to={"/premiumfruits/CitrusMangosGrapes/citrus"}border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Citrus</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card as={Link}
                to={"/premiumfruits/CitrusMangosGrapes/mangos"} border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Mangos</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card as={Link}
                to={"/premiumfruits/CitrusMangosGrapes/grapes"}
                border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Grapes    </h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
       </Accordion.Body>
     </Accordion.Item>
    </Accordion>
    


{/*---                                                **1**                                                       --- */}


            <Accordion style={{paddingBottom:"0px"}} className='accordian accordian-flush 1' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card  as={Link} to={"/premiumfruits/Dates/wetdates"} border='white' className='border-none text-decoration-none'>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/dates-20230607.webp'  alt="Your Image" style={{width:"60px",height:"50px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h5 style={{fontWeight:"bolder",paddingTop:"23px", paddingLeft:"18px"}}className='h-all'>Dates</h5></Card.Title>
              
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr className='h-all' style={{marginLeft:"30px",marginRight:"15px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
            <Accordion.Body >
          
            <Accordion.Item className='item '> <Card
             as={Link} to={"/premiumfruits/dates/wetdates"} border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Wet Dates</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
       </Accordion.Body>
     </Accordion.Item>
    </Accordion>
    


{/*---                                                **1**                                                       --- */}


            <Accordion style={{paddingBottom:"0px"}} className='accordian accordian-flush 1' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card border='white' as={Link}
                to={"/premiumfruits/GiftAssortedXlPacks"}className='border-none text-decoration-none'>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/gift-assorted-xl-packs-20230607.webp'  alt="Your Image" style={{width:"60px",height:"50px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h5 style={{fontWeight:"bolder",paddingTop:"23px", paddingLeft:"18px"}}className='h-all'>Gift-Assorted-xl-Packs</h5></Card.Title>
              
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr className='h-all' style={{marginLeft:"30px",marginRight:"15px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
            <Accordion.Body >
          
            <Accordion.Item className='item '> <Card as={Link}
                to={"/premiumfruits/GiftAssortedXlPacks/giftpack"}border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Gift Packes</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
       </Accordion.Body>
     </Accordion.Item>
    </Accordion>
  


{/*---                                                **1**                                                       --- */}


            <Accordion style={{paddingBottom:"0px"}} className='accordian accordian-flush 1' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card border='white' as={Link}
                to={"/premiumfruits/PomegranatePapayaPineapple"}className='border-none text-decoration-none'>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/pomegranate-papaya-pineapple-20230607.webp'  alt="Your Image" style={{width:"60px",height:"50px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h5 style={{fontWeight:"bolder",paddingTop:"10px", paddingLeft:"18px"}}className='h-all'>Pomegranate-Papaya-Pineapple</h5></Card.Title>
              
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr className='h-all' style={{marginLeft:"30px",marginRight:"15px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
            <Accordion.Body >
          
            <Accordion.Item className='item '> <Card as={Link}
                to={"/premiumfruits/PomegranatePapayaPineapple/pomegranates"}border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>pomegranates</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card as={Link}
                to={"/premiumfruits/PomegranatePapayaPineapple/papayas"} border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>papayass</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card as={Link}
                to={"/premiumfruits/PomegranatePapayaPineapple/pineapples"} border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Pineapples</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
       </Accordion.Body>
     </Accordion.Item>
    </Accordion>
    


{/*---                                                **1**                                                       --- */}


            <Accordion style={{paddingBottom:"0px"}} className='accordian accordian-flush 1' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card border='white' 
             as={Link}
             to={"/premiumfruits/SeasonalMinorFruits"}className='border-none text-decoration-none'>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/seasonal-minor-fruits-20230607.webp'  alt="Your Image" style={{width:"60px",height:"50px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h5 style={{fontWeight:"bolder",paddingTop:"23px", paddingLeft:"18px"}}className='h-all'>Seasonal-Minor-Fruits</h5></Card.Title>
              
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr className='h-all' style={{marginLeft:"30px",marginRight:"15px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
            <Accordion.Body >
          
            <Accordion.Item className='item '> <Card  as={Link}
                to={"/premiumfruits/SeasonalMinorFruits/guavas"}border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Guava</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card  as={Link}
                to={"/premiumfruits/SeasonalMinorFruits/custardapples"}border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Gustard Apples</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
       </Accordion.Body>
     </Accordion.Item>
    </Accordion>
    </Accordion.Body>


{/*---                                                **1**                                                       --- */}




     </Accordion.Item>
    </Accordion>


    {/* PremiumFruits-end-----------------------------------------------------------------------------------
    -----------------------------------------------------------------------------------------------------------
    --------------------------------------------------------------------------------------------------------
    --------------------------------------------------------------------------------------------------------
    - */}
    
{/* Fashion-------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------
----------- */}
        <Accordion style={{border:"0!important"}} className='accordian accordian-flush' >
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card border='white' className='border-none text-decoration-none' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/fashion.png'  alt="Your Image" style={{width:"90px",height:"70px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h4 style={{fontWeight:"bolder",paddingTop:"3px", paddingLeft:"8px"}}>Fashion</h4></Card.Title>
              <Card.Text className='' style={{fontWeight:"",paddingTop:"0px", paddingLeft:"8px"}}>Kitchenware, Furnishing, Home Decor, Prayer & Spiritual Needs, Furniture, Disposables, Tableware, Bathroom & LaundryAcees...
       </Card.Text>
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr style={{marginLeft:"10px",marginRight:"10px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
            <Accordion.Body className='pt-0 '>
            <Accordion style={{paddingBottom:"0px"}} className='accordian accordian-flush' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card border='white' className='border-none text-decoration-none'>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/men-20230607.webp'  alt="Your Image" style={{width:"60px",height:"50px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h5 style={{fontWeight:"bolder",paddingTop:"10px", paddingLeft:"8px"}}className='h-all'>Mens Fashion</h5></Card.Title>
              
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr className='h-all' style={{marginLeft:"30px",marginRight:"15px",border:"1px solid grey",borderColor:isHover?"black":"grey"}}/>
            <Accordion.Body >
          
            <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Clothing Accessories</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Western Wear</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Food Wear</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Eye Wear</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Inner Wear</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      
       </Accordion.Body>
     </Accordion.Item>
    </Accordion>
    <Accordion style={{paddingBottom:"0px"}} className='accordian accordian-flush' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card border='white' className='border-none text-decoration-none'>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/women-20230607 (1).webp'  alt="Your Image" style={{width:"60px",height:"50px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h5 style={{fontWeight:"bolder",paddingTop:"10px", paddingLeft:"8px"}}className='h-all'>Womens Fashion</h5></Card.Title>
              
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr className='h-all' style={{marginLeft:"30px",marginRight:"15px",border:"1px solid grey",borderColor:isHover?"black":"grey"}}/>
            <Accordion.Body >
          
            <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Wthnic Wear</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Traditional Wear</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Eye Wear</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Watches</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Foot Wear</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      
       </Accordion.Body>
     </Accordion.Item>
    </Accordion>
    <Accordion style={{paddingBottom:"0px"}} className='accordian accordian-flush' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card border='white' className='border-none text-decoration-none'>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/junior-boys-20230607.webp'  alt="Your Image" style={{width:"60px",height:"50px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h5 style={{fontWeight:"bolder",paddingTop:"10px", paddingLeft:"8px"}}className='h-all'>Kids Fashion</h5></Card.Title>
              
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr className='h-all' style={{marginLeft:"30px",marginRight:"15px",border:"1px solid grey",borderColor:isHover?"black":"grey"}}/>
            <Accordion.Body >
          
            <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Junior Boy</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Junior Girl</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Infants</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Toys</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      
       </Accordion.Body>
     </Accordion.Item>
    </Accordion>
       </Accordion.Body>
     </Accordion.Item>
    </Accordion>


    {/* Fashion-end-----------------------------------------------------------------------------------
    -----------------------------------------------------------------------------------------------------------
    --------------------------------------------------------------------------------------------------------
    --------------------------------------------------------------------------------------------------------
    - */}
{/* Electronics-------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------
----------- */}
        <Accordion style={{border:"0!important"}} className='accordian accordian-flush' >
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card border='white' className='border-none text-decoration-none' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/elect.webp'  alt="Your Image" style={{width:"90px",height:"70px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h4 style={{fontWeight:"bolder",paddingTop:"3px", paddingLeft:"8px"}}>Electronics</h4></Card.Title>
              <Card.Text className='' style={{fontWeight:"",paddingTop:"0px", paddingLeft:"8px"}}>Mobiles & Tablets, TV & Speaker, Home Appliances, Computers, Cameras, Kitchen Appliances, Personal Care & Grooming, Smart...</Card.Text>
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr style={{marginLeft:"10px",marginRight:"10px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
            <Accordion.Body className='pt-0 '>
            <Accordion style={{paddingBottom:"0px"}} className='accordian accordian-flush' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card border='white' className='border-none text-decoration-none'>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/mobiles-tablets-20230607.webp'  alt="Your Image" style={{width:"60px",height:"50px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h5 style={{fontWeight:"bolder",paddingTop:"10px", paddingLeft:"8px"}}className='h-all'>Mobiles & Tables</h5></Card.Title>
              
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr className='h-all' style={{marginLeft:"30px",marginRight:"15px",border:"1px solid grey",borderColor:isHover?"black":"grey"}}/>
            <Accordion.Body >
          
            <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Smart Phones</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Mobile Accessories</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Tablets</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
       </Accordion.Body>
     </Accordion.Item>
    </Accordion>
    <Accordion style={{paddingBottom:"0px"}} className='accordian accordian-flush' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card border='white' className='border-none text-decoration-none'>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/tv-speaker-20230607.webp'  alt="Your Image" style={{width:"60px",height:"50px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h5 style={{fontWeight:"bolder",paddingTop:"22px", paddingLeft:"8px"}}className='h-all'>Tv & Speaker</h5></Card.Title>
              
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr className='h-all' style={{marginLeft:"30px",marginRight:"15px",border:"1px solid grey",borderColor:isHover?"black":"grey"}}/>
            <Accordion.Body >
          
            <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>TV</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Home Theater</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>TV Remote</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
       </Accordion.Body>
     </Accordion.Item>
    </Accordion>
    <Accordion style={{paddingBottom:"0px"}} className='accordian accordian-flush' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card border='white' className='border-none text-decoration-none'>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/home-appliances-20230607.webp'  alt="Your Image" style={{width:"60px",height:"50px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h5 style={{fontWeight:"bolder",paddingTop:"10px", paddingLeft:"8px"}}className='h-all'>Home Appliances</h5></Card.Title>
              
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr className='h-all' style={{marginLeft:"30px",marginRight:"15px",border:"1px solid grey",borderColor:isHover?"black":"grey"}}/>
            <Accordion.Body >
          
            <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Washing Machine</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Irons</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Fans</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
       </Accordion.Body>
     </Accordion.Item>
    </Accordion>
    <Accordion style={{paddingBottom:"0px"}} className='accordian accordian-flush' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card border='white' className='border-none text-decoration-none'>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/computers-20230607.webp'  alt="Your Image" style={{width:"60px",height:"50px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h5 style={{fontWeight:"bolder",paddingTop:"19px", paddingLeft:"8px"}}className='h-all'>Computers</h5></Card.Title>
              
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr className='h-all' style={{marginLeft:"30px",marginRight:"15px",border:"1px solid grey",borderColor:isHover?"black":"grey"}}/>
            <Accordion.Body >
          
            <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Laptop</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Desktop</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Monitor</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
       </Accordion.Body>
     </Accordion.Item>
    </Accordion>
       </Accordion.Body>
     </Accordion.Item>
    </Accordion>


    {/* Electronics-end-----------------------------------------------------------------------------------
    -----------------------------------------------------------------------------------------------------------
    --------------------------------------------------------------------------------------------------------
    --------------------------------------------------------------------------------------------------------
    - */}
{/* Home & kitchen -------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------
----------- */}
        <Accordion style={{border:"0!important"}} className='accordian accordian-flush' >
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card border='white' className='border-none text-decoration-none' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/home kit.webp'  alt="Your Image" style={{width:"90px",height:"70px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h4 style={{fontWeight:"bolder",paddingTop:"3px", paddingLeft:"8px"}}>Home & Kitchen</h4></Card.Title>
              <Card.Text className='' style={{fontWeight:"",paddingTop:"0px", paddingLeft:"8px"}}>Kitchenware, Furnishing, Home Decor, Prayer & Spiritual Needs, Furniture, Disposables, Tableware, Bathroom & Laundry Acc...</Card.Text>
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr style={{marginLeft:"10px",marginRight:"10px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
            <Accordion.Body className='pt-0 '>
            <Accordion style={{paddingBottom:"0px"}} className='accordian accordian-flush' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card border='white' className='border-none text-decoration-none'>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/kitchenware-20231025.webp'  alt="Your Image" style={{width:"60px",height:"50px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h5 style={{fontWeight:"bolder",paddingTop:"10px", paddingLeft:"8px"}}className='h-all'>Kitchenware</h5></Card.Title>
              
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr className='h-all' style={{marginLeft:"30px",marginRight:"15px",border:"1px solid grey",borderColor:isHover?"black":"grey"}}/>
            <Accordion.Body >
          
            <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>KitchenTools</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Cookware</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Gas Stove</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      
       </Accordion.Body>
     </Accordion.Item>
    </Accordion>
    <Accordion style={{paddingBottom:"0px"}} className='accordian accordian-flush' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card border='white' className='border-none text-decoration-none'>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/home-decor-20231025.webp'  alt="Your Image" style={{width:"60px",height:"50px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h5 style={{fontWeight:"bolder",paddingTop:"10px", paddingLeft:"8px"}}className='h-all'>Home Decor</h5></Card.Title>
              
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr className='h-all' style={{marginLeft:"30px",marginRight:"15px",border:"1px solid grey",borderColor:isHover?"black":"grey"}}/>
            <Accordion.Body >
          
            <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Interior Needs</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Decors</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Gifting Sets</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      
       </Accordion.Body>
     </Accordion.Item>
    </Accordion>
    <Accordion style={{paddingBottom:"0px"}} className='accordian accordian-flush' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card border='white' className='border-none text-decoration-none'>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/furniture-20231025.webp'  alt="Your Image" style={{width:"60px",height:"50px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h5 style={{fontWeight:"bolder",paddingTop:"10px", paddingLeft:"8px"}}className='h-all'>Furniture</h5></Card.Title>
              
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr className='h-all' style={{marginLeft:"30px",marginRight:"15px",border:"1px solid grey",borderColor:isHover?"black":"grey"}}/>
            <Accordion.Body >
          
            <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Chairs</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Tables</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Mattress</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Sofas & Couches</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      
       </Accordion.Body>
     </Accordion.Item>
    </Accordion>
    <Accordion style={{paddingBottom:"0px"}} className='accordian accordian-flush' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card border='white' className='border-none text-decoration-none'>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/bathroom-laundry-accessories-20231025.webp'  alt="Your Image" style={{width:"60px",height:"50px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h5 style={{fontWeight:"bolder",paddingTop:"10px", paddingLeft:"8px"}}className='h-all'>Bathroom Accessories</h5></Card.Title>
              
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr className='h-all' style={{marginLeft:"30px",marginRight:"15px",border:"1px solid grey",borderColor:isHover?"black":"grey"}}/>
            <Accordion.Body >
          
            <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Mugs,Tubs,Bucket</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Hooks,Clips,LuandryEssesntials</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      
       </Accordion.Body>
     </Accordion.Item>
    </Accordion>
       </Accordion.Body>
     </Accordion.Item>
    </Accordion>


    {/* HomeKitchen-end-----------------------------------------------------------------------------------
    -----------------------------------------------------------------------------------------------------------
    --------------------------------------------------------------------------------------------------------
    --------------------------------------------------------------------------------------------------------
    - */}
{/* Beauty-------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------
----------- */}
        <Accordion style={{border:"0!important"}} className='accordian accordian-flush' >
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card border='white' as={Link}
              to={"/Beauty"}className='border-none text-decoration-none' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/bea.webp'  alt="Your Image" style={{width:"90px",height:"70px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h4 style={{fontWeight:"bolder",paddingTop:"3px", paddingLeft:"8px"}}>Beauty</h4></Card.Title>
              <Card.Text className='' style={{fontWeight:"",paddingTop:"0px", paddingLeft:"8px"}}>Make-Up, Hair, Skin Care, Fragrances, Personal Care, Mom & Baby, Men's Grooming, Tools & Appliances, Wellness, Fitness...</Card.Text>
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr style={{marginLeft:"10px",marginRight:"10px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
            <Accordion.Body className='pt-0 '>
            <Accordion style={{paddingBottom:"0px"}} className='accordian accordian-flush' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card border='white'
            as={Link}
            to={"/Beauty/make-up"} className='border-none text-decoration-none'>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/make-up-20230607.webp'  alt="Your Image" style={{width:"60px",height:"50px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h5 style={{fontWeight:"bolder",paddingTop:"10px", paddingLeft:"8px"}}className='h-all'>Makeup</h5></Card.Title>
              
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr className='h-all' style={{marginLeft:"30px",marginRight:"15px",border:"1px solid grey",borderColor:isHover?"black":"grey"}}/>
            <Accordion.Body >
          
            <Accordion.Item className='item '> <Card
            as={Link}
            to={"/Beauty/make-up/Lips"} border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Lips</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card as={Link}
            to={"/Beauty/make-up/Nails"}border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Nails</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item><Accordion.Item className='item '> <Card border='white' as={Link}
            to={"/Beauty/make-up/Eyes"}className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Eyes</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item><Accordion.Item className='item '> <Card border='white' as={Link}
            to={"/Beauty/make-up/FaceMakeUp"}className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>FaceMakeUp</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item><Accordion.Item className='item '> <Card border='white' as={Link} to={"/Beauty/make-up/MakeUpToolsBrushes"}
      className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>MakeupToolsBrushes</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      
       </Accordion.Body>
     </Accordion.Item>
    </Accordion>
    <Accordion style={{paddingBottom:"0px"}} className='accordian accordian-flush' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card border='white' className='border-none text-decoration-none'>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/skin-care-20230607.webp'  alt="Your Image" style={{width:"60px",height:"50px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h5 style={{fontWeight:"bolder",paddingTop:"10px", paddingLeft:"8px"}}className='h-all'>Skincare</h5></Card.Title>
              
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr className='h-all' style={{marginLeft:"30px",marginRight:"15px",border:"1px solid grey",borderColor:isHover?"black":"grey"}}/>
            <Accordion.Body >
          
            <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Serum</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Moistures</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>FaceMask</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      
      
       </Accordion.Body>
     </Accordion.Item>
    </Accordion>
    <Accordion style={{paddingBottom:"0px"}} className='accordian accordian-flush' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card border='white' className='border-none text-decoration-none'>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/tools-appliances-20230607.webp'  alt="Your Image" style={{width:"60px",height:"50px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h5 style={{fontWeight:"bolder",paddingTop:"10px", paddingLeft:"8px"}}className='h-all'>Hair</h5></Card.Title>
              
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr className='h-all' style={{marginLeft:"30px",marginRight:"15px",border:"1px solid grey",borderColor:isHover?"black":"grey"}}/>
            <Accordion.Body >
          
            <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Haircare</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Hair Color</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Hair Styling</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Hair Tools And Accessories</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Scalp Treatments</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Shop By Hair Type</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      
       </Accordion.Body>
     </Accordion.Item>
    </Accordion>
    
       </Accordion.Body>
     </Accordion.Item>
    </Accordion>


    {/* Beauty-end-----------------------------------------------------------------------------------
    -----------------------------------------------------------------------------------------------------------
    --------------------------------------------------------------------------------------------------------
    --------------------------------------------------------------------------------------------------------
    - */}
{/* -------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------
----------- */}
        <Accordion style={{border:"0!important"}} className='accordian accordian-flush' >
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card border='white' className='border-none text-decoration-none' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/pf.png'  alt="Your Image" style={{width:"90px",height:"70px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h4 style={{fontWeight:"bolder",paddingTop:"3px", paddingLeft:"8px"}}>Vegetables</h4></Card.Title>
              <Card.Text className='' style={{fontWeight:"",paddingTop:"0px", paddingLeft:"8px"}}>Vegetables, Dairy & Bakery, Staples, Snacks & Branded Foods, Beverages, Personal Care, Home Care, Apparel...</Card.Text>
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr style={{marginLeft:"10px",marginRight:"10px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
            <Accordion.Body className='pt-0 '>
            <Accordion style={{paddingBottom:"0px"}} className='accordian accordian-flush' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card border='white' className='border-none text-decoration-none'>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/str.jpg'  alt="Your Image" style={{width:"60px",height:"50px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h5 style={{fontWeight:"bolder",paddingTop:"10px", paddingLeft:"8px"}}className='h-all'>Starchy</h5></Card.Title>
              
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr className='h-all' style={{marginLeft:"30px",marginRight:"15px",border:"1px solid grey",borderColor:isHover?"black":"grey"}}/>
            <Accordion.Body >
          
            <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Starchy</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
       </Accordion.Body>
     </Accordion.Item>
    </Accordion>
    <Accordion style={{paddingBottom:"0px"}} className='accordian accordian-flush' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card border='white' className='border-none text-decoration-none'>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/night.jpg'  alt="Your Image" style={{width:"60px",height:"50px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h5 style={{fontWeight:"bolder",paddingTop:"10px", paddingLeft:"8px"}}className='h-all'>Night Shades</h5></Card.Title>
              
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr className='h-all' style={{marginLeft:"30px",marginRight:"15px",border:"1px solid grey",borderColor:isHover?"black":"grey"}}/>
            <Accordion.Body >
          
            <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Night Shades</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
       </Accordion.Body>
     </Accordion.Item>
    </Accordion>
    <Accordion style={{paddingBottom:"0px"}} className='accordian accordian-flush' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card border='white' className='border-none text-decoration-none'>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/leaves.jpg'  alt="Your Image" style={{width:"60px",height:"50px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h5 style={{fontWeight:"bolder",paddingTop:"10px", paddingLeft:"8px"}}className='h-all'>Leaf Green</h5></Card.Title>
              
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr className='h-all' style={{marginLeft:"30px",marginRight:"15px",border:"1px solid grey",borderColor:isHover?"black":"grey"}}/>
            <Accordion.Body >
          
            <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Leaf Green</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
       </Accordion.Body>
     </Accordion.Item>
    </Accordion>
    <Accordion style={{paddingBottom:"0px"}} className='accordian accordian-flush' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card border='white' className='border-none text-decoration-none'>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/pv (1).jpg'  alt="Your Image" style={{width:"60px",height:"50px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h5 style={{fontWeight:"bolder",paddingTop:"10px", paddingLeft:"8px"}}className='h-all'>Allium</h5></Card.Title>
              
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr className='h-all' style={{marginLeft:"30px",marginRight:"15px",border:"1px solid grey",borderColor:isHover?"black":"grey"}}/>
            <Accordion.Body >
          
            <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Allium</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
       </Accordion.Body>
     </Accordion.Item>
    </Accordion>
    <Accordion style={{paddingBottom:"0px"}} className='accordian accordian-flush' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card border='white' className='border-none text-decoration-none'>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/noncc.webp'  alt="Your Image" style={{width:"60px",height:"50px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h5 style={{fontWeight:"bolder",paddingTop:"10px", paddingLeft:"8px"}}className='h-all'>Non Starchy</h5></Card.Title>
              
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr className='h-all' style={{marginLeft:"30px",marginRight:"15px",border:"1px solid grey",borderColor:isHover?"black":"grey"}}/>
            <Accordion.Body >
          
            <Accordion.Item className='item '> <Card border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Non Starchy</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
       </Accordion.Body>
     </Accordion.Item>
    </Accordion>
     </Accordion.Body>
     </Accordion.Item>
    </Accordion>


    {/* Veg-end-----------------------------------------------------------------------------------
    -----------------------------------------------------------------------------------------------------------
    --------------------------------------------------------------------------------------------------------
    --------------------------------------------------------------------------------------------------------
    - */}
    {/* Bags Luggages
    -------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------
----------- */}
        <Accordion style={{border:"0!important"}} className='accordian accordian-flush' >
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card border='white' as={Link}
              to={"/SportsToysLuggages"}className='border-none text-decoration-none' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/stLugg.webp'  alt="Your Image" style={{width:"90px",height:"70px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h4 style={{fontWeight:"bolder",paddingTop:"3px", paddingLeft:"8px"}}>Sports,Toys & Luggages</h4></Card.Title>
              <Card.Text className='' style={{fontWeight:"",paddingTop:"0px", paddingLeft:"8px"}}>Toys & Games, Bags & Travel Luggage, Sporting Goods & Fitness Equipment,DoffleBags, Bags and Backpacks, Luggages ...</Card.Text>
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr style={{marginLeft:"10px",marginRight:"10px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
            <Accordion.Body className='pt-0 '>
            <Accordion style={{paddingBottom:"0px"}} className='accordian accordian-flush' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <Accordion.Item eventKey='0' className='item' style={{border:"none",borderRadius:"0"}}>
            <Accordion.Header style={{cursor:"default",userSelect:"none"}}className='accordian-header'>
            <Card border='white'  as={Link}
                to={"/SportsToysLuggages/BagsTravelLuggages"} className='border-none text-decoration-none'>
        <Card.Body>
          <div className="d-flex">
            {/* Left side image */}
            <img src='../../AllCatogries/bags-travel-luggage-20231025.webp'  alt="Your Image" style={{width:"60px",height:"50px"}} />

            {/* Right side heading and paragraph */}
            <div className="ml-3 mr-3">
              <Card.Title><h5 style={{fontWeight:"bolder",paddingTop:"10px", paddingLeft:"8px"}}className='h-all'>Bags & Luggages</h5></Card.Title>
              
            </div>
          </div>
        </Card.Body>
      </Card>
            </Accordion.Header><hr className='h-all' style={{marginLeft:"30px",marginRight:"15px",border:"1px solid grey",borderColor:isHover?"black":"grey"}}/>
            <Accordion.Body >
          
            <Accordion.Item className='item '> <Card  as={Link}
                to={"/SportsToysLuggages/BagsTravelLuggages/BagsAndBackpacks"}  
            border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Bags & Backpacks</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      <Accordion.Item className='item '> <Card  as={Link}
                to={"/SportsToysLuggages/BagsTravelLuggages/DuffleBags"} border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>DuffleBags</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      
      <Accordion.Item className='item '> <Card  as={Link}
                to={"/SportsToysLuggages/BagsTravelLuggages/TrolleysAndSuitcases"}border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Trollyes & Suitcases</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      
      <Accordion.Item className='item '> <Card  as={Link}
                to={"/SportsToysLuggages/BagsTravelLuggages/ShoppingAndOtherbags"} border='white' className='border-none text-decoration-none' style={{height:"50px"}}>
        <Card.Body style={{paddingLeft:"93px"}}>
          
            <Row> 
                <Col xs={11}><h6 style={{fontWeight:"bolder",paddingBottom:"15px", paddingLeft:"5px",cursor:"pointer",color:"grey"}}>Shopping & Otherbags</h6></Col>
                <Col style={{justifyContent:"end"}} xs={1}><span className='arrow-icon' style={{marginRight:"auto",padding:"10px",borderRadius:"100px",cursor:"pointer",fontSize:"15px"}}><FontAwesomeIcon icon={faArrowRight} color="" /></span></Col>
            </Row>
            
          
        </Card.Body>
      </Card><hr style={{width:"",marginLeft:"80px",marginRight:"0px",border:"1px solid grey",borderColor:isHover?"blue":"grey"}}/>
      </Accordion.Item>
      
      
       </Accordion.Body>
     </Accordion.Item>
    </Accordion>
       </Accordion.Body>
     </Accordion.Item>
    </Accordion>


    {/* Bags Luggages-end-----------------------------------------------------------------------------------
    -----------------------------------------------------------------------------------------------------------
    --------------------------------------------------------------------------------------------------------
    --------------------------------------------------------------------------------------------------------
    - */}


   
        
    </div>
    </Container>
  )
}

export default AllCatogries