import  { useState } from "react";

import CartIcon from "./CartIcon";

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

import { Link } from "react-router-dom";

const Header = () => {
  const [showPremiumFruitsDropdown, setshowPremiumFruitsDropdown] =
    useState(false);
  const [showApplePearsDropdown, setShowApplePearsDropdown] = useState(false);
  const [showAvacadoPeachPlumDropdown, setShowAvacadoPeachPlumDropdown] =
    useState(false);
  const [showBananaMelonCoconutDropdown, setShowBananaMelonCoconutDropdown] =
    useState(false);
  const [
    showCherriesBerriesExoticDropdown,
    setShowCherriesBerriesExoticDropdown,
  ] = useState(false);
  const [showCitrusMangoGrapeDropdown, setShowCitrusMangoGrapeDropdown] =
    useState(false);
  const [showWetDatesDropdown, setShowWetDatesDropdown] = useState(false);
  const [showGiftPackDropdown, setShowGiftPackDropdown] = useState(false);
  const [
    showPomegranatePapayaPineappleDropdown,
    setShowPomegranatePapayaPineappleDropdown,
  ] = useState(false);
  const [showSeasonalMinorFruitsDropdown, setShowSeasonalMinorFruitsDropdown] =
    useState(false);
  //beauty state
  const [showBeautyDropdown, setshowBeautyDropdown] = useState(false);
  const [showMakeUpDropdown, setShowMakeUpDropdown] = useState(false);
  const [showSkinCareDropdown, setShowSkinCareDropdown] = useState(false);
  const [showHairDropdown, setShowHairDropdown] = useState(false);
  //fashion state
  const [showFashionDropdown, setshowFashionDropdown] = useState(false);
  const [showMensFashionDropdown, setshowMensFashionDropdown ] = useState(false);
  const [showWomensFashionDropdown, setshowWomensFashionDropdown ] = useState(false);
  const [showKidsFashionDropdown, setshowKidsFashionDropdown ] = useState(false);
  const [showInfantsDropdown, setshowInfantsDropdown] = useState(false);
  //electronics state
  const [showElectronicsDropdown, setshowElectronicsDropdown] = useState(false);
  const [showMobilesTabletsDropdown, setshowMobilesTabletsDropdown] = useState(false);
  const [showTvSpeakerDropdown, setshowTvSpeakerDropdown] = useState(false);
  const [showHomeAppliancesDropdown, setshowHomeAppliancesDropdown] = useState(false);
  const [showComputersDropdown, setshowComputersDropdown] = useState(false);
  //home and kitchen needs state
  const [showHomeKitchenNeedsDropdown, setshowHomeKitchenNeedsDropdown] = useState(false);
  const [showKitchenwareDropdown, setshowKitchenwareDropdown] = useState(false);
  const [showHomeDecorDropdown, setshowHomeDecorDropdown] = useState(false);
  const [showFurnitureDropdown, setshowFurnitureDropdown] = useState(false);
  const [showBathroomAccessoriesDropdown, setshowBathroomAccessoriesDropdown] = useState(false);
  //SportsToysLuggage
  const [showSportsToysLuggagesDropdown, setshowSportsToysLuggagesDropdown] =
    useState(false);
  const [
    showBagsAndTravelLuggagesDropdown,
    setShowBagsAndTravelLuggagesDropdown,
  ] = useState(false);

  const handlePremiumFruitsMouseEnter = () => {
    setshowPremiumFruitsDropdown(true);
  };

  const handlePremiumFruitsMouseLeave = () => {
    setshowPremiumFruitsDropdown(false);
  };
  //for apples-pears
  const handleApplePearsMouseEnter = () => {
    setShowApplePearsDropdown(true);
  };

  const handleApplePearsMouseLeave = () => {
    setShowApplePearsDropdown(false);
  };
  //for avacado-peach-plum
  const handleAvacadoPeachPlumMouseEnter = () => {
    setShowAvacadoPeachPlumDropdown(true);
  };

  const handleAvacadoPeachPlumMouseLeave = () => {
    setShowAvacadoPeachPlumDropdown(false);
  };
  //for bananas-melons-coconut
  const handleBananaMelonCoconutMouseEnter = () => {
    setShowBananaMelonCoconutDropdown(true);
  };

  const handleBananaMelonCoconutMouseLeave = () => {
    setShowBananaMelonCoconutDropdown(false);
  };

  //for cherries-berries-dragonfruits
  const handleCherriesBerriesExoticMouseEnter = () => {
    setShowCherriesBerriesExoticDropdown(true);
  };

  const handleCherriesBerriesExoticMouseLeave = () => {
    setShowCherriesBerriesExoticDropdown(false);
  };

  //for citrus-mangos-grapes
  const handleCitrusMangoGrapeMouseEnter = () => {
    setShowCitrusMangoGrapeDropdown(true);
  };

  const handleCitrusMangoGrapeMouseLeave = () => {
    setShowCitrusMangoGrapeDropdown(false);
  };

  //for dates
  const handleWetDatesMouseEnter = () => {
    setShowWetDatesDropdown(true);
  };

  const handleWetDatesMouseLeave = () => {
    setShowWetDatesDropdown(false);
  };

  //for gift packs
  const handleGiftPackMouseEnter = () => {
    setShowGiftPackDropdown(true);
  };

  const handleGiftPackMouseLeave = () => {
    setShowGiftPackDropdown(false);
  };

  //for pomegranate-papayas-pineapple
  const handlePomegranatePapayaPineappleMouseEnter = () => {
    setShowPomegranatePapayaPineappleDropdown(true);
  };

  const handlePomegranatePapayaPineappleMouseLeave = () => {
    setShowPomegranatePapayaPineappleDropdown(false);
  };

  //for seasonal-minor-fruits
  const handleSeasonalMinorFruitsMouseEnter = () => {
    setShowSeasonalMinorFruitsDropdown(true);
  };

  const handleSeasonalMinorFruitsMouseLeave = () => {
    setShowSeasonalMinorFruitsDropdown(false);
  };

  //beauty
  const handleBeautyMouseEnter = () => {
    setshowBeautyDropdown(true);
  };
  const handleBeautyMouseLeave = () => {
    setshowBeautyDropdown(false);
  };
  //for Makeup
  const handleMakeUpMouseEnter = () => {
    setShowMakeUpDropdown(true);
  };
  const handleMakeUpMouseLeave = () => {
    setShowMakeUpDropdown(false);
  };
  //for skincare
  const handleSkinCareMouseEnter = () => {
    setShowSkinCareDropdown(true);
  };
  const handleSkinCareMouseLeave = () => {
    setShowSkinCareDropdown(false);
  };
   //for hair
   const handleHairMouseEnter = () => {
    setShowHairDropdown(true);
  };
  const handleHairMouseLeave = () => {
    setShowHairDropdown(false);
  };
  //fashion
  const handleFashionMouseEnter = () => {
    setshowFashionDropdown(true);
  };
  const handleFashionMouseLeave = () => {
    setshowFashionDropdown(false);
  };
  //for Mens wear
  const handleMensFashionMouseEnter = () => {
    setshowMensFashionDropdown(true);
  };
  const handleMensFashionMouseLeave = () => {
    setshowMensFashionDropdown(false);
  };
   //for Womens wear
   const handleWomensFashionMouseEnter = () => {
    setshowWomensFashionDropdown(true);
  };
  const handleWomensFashionMouseLeave = () => {
    setshowWomensFashionDropdown(false);
  };
   //for kids fashion
   const handleKidsFashionMouseEnter = () => {
    setshowKidsFashionDropdown(true);
  };
  const handleKidsFashionMouseLeave = () => {
    setshowKidsFashionDropdown(false);
  };
   //for Infants
   const handleInfantsMouseEnter = () => {
    setshowInfantsDropdown(true);
  };
  const handleInfantsMouseLeave = () => {
    setshowInfantsDropdown(false);
  };
  //electronics
  const handleElectronicsMouseEnter = () => {
    setshowElectronicsDropdown(true);
  };
  const handleElectronicsMouseLeave = () => {
    setshowElectronicsDropdown(false);
  };
  //moblies and tablets
  const handleMobilesTabletsMouseEnter = () => {
    setshowMobilesTabletsDropdown(true);
  };
  const handleMobilesTabletsMouseLeave = () => {
    setshowMobilesTabletsDropdown(false);
  };
  //tv speaker
  const handleTvSpeakerMouseEnter = () => {
    setshowTvSpeakerDropdown(true);
  };
  const handleTvSpeakerMouseLeave = () => {
    setshowTvSpeakerDropdown(false);
  };
  //home appliances
  const handleHomeAppliancesMouseEnter = () => {
    setshowHomeAppliancesDropdown(true);
  };
  const handleHomeAppliancesMouseLeave = () => {
    setshowHomeAppliancesDropdown(false);
  };
  //computers
  const handleComputersMouseEnter = () => {
    setshowComputersDropdown(true);
  };
  const handleComputersMouseLeave = () => {
    setshowComputersDropdown(false);
  };
  //home and kitchen needs
  const handleHomeKitchenNeedsMouseEnter = () => {
    setshowHomeKitchenNeedsDropdown(true);
  };
  const handleHomeKitchenNeedsMouseLeave = () => {
    setshowHomeKitchenNeedsDropdown(false);
  };
  // kitchenware
  const handleKitchenwareMouseEnter = () => {
    setshowKitchenwareDropdown(true);
  };
  const handleKitchenwareMouseLeave = () => {
    setshowKitchenwareDropdown(false);
  };
  // homedecor
  const handleHomeDecorMouseEnter = () => {
    setshowHomeDecorDropdown(true);
  };
  const handleHomeDecorMouseLeave = () => {
    setshowHomeDecorDropdown(false);
  };
  // furniture
  const handleFurnitureMouseEnter = () => {
    setshowFurnitureDropdown(true);
  };
  const handleFurnitureMouseLeave = () => {
    setshowFurnitureDropdown(false);
  };
  // bathroom accesssories
  const handleBathroomAccessoriesMouseEnter = () => {
    setshowBathroomAccessoriesDropdown(true);
  };
  const handleBathroomAccessoriesMouseLeave = () => {
    setshowBathroomAccessoriesDropdown(false);
  };
  //SportsToysLuggages
  const handleSportsToysLuggagesMouseEnter = () => {
    setshowSportsToysLuggagesDropdown(true);
  };
  const handleSportsToysLuggagesMouseLeave = () => {
    setshowSportsToysLuggagesDropdown(false);
  };
  //for BagsAndTravleLuggages
  const handleBagsAndTravelLuggagesMouseEnter = () => {
    setShowBagsAndTravelLuggagesDropdown(true);
  };
  const handleBagsAndTravelLuggagesMouseLeave = () => {
    setShowBagsAndTravelLuggagesDropdown(false);
  };
  return (
    <>
      <Navbar expand="lg"  style={{backgroundColor:"#0c5273"}}>
        {/* <Navbar.Brand as={Link} to="/">GMart</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto text-white" navbarScroll >
            <NavDropdown
            
              show={showPremiumFruitsDropdown}
              onMouseEnter={handlePremiumFruitsMouseEnter}
              onMouseLeave={handlePremiumFruitsMouseLeave}
            >
              <NavDropdown.Item
                as={Link}
                to={"/premiumfruits/ApplePears"}
                onMouseEnter={handleApplePearsMouseEnter}
                onMouseLeave={handleApplePearsMouseLeave}
              >
                Apple & Pears
              </NavDropdown.Item>
              {showApplePearsDropdown && (
                <>
                  <Container
                    show={showApplePearsDropdown}
                    onMouseEnter={handleApplePearsMouseEnter}
                    onMouseLeave={handleApplePearsMouseLeave}
                  >
                    <NavDropdown.Item as={Link} to="/premiumfruits/ApplePears/apples">
                      Apples
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/premiumfruits/ApplePears/pears">
                      Pears
                    </NavDropdown.Item>
                  </Container>
                </>
              )}

              <NavDropdown.Item
                as={Link}
                to={"/premiumfruits/AvacadoPeachPlum"}
                onMouseEnter={handleAvacadoPeachPlumMouseEnter}
                onMouseLeave={handleAvacadoPeachPlumMouseLeave}
              >
                Avacados-Peaches-Plum
              </NavDropdown.Item>
              {showAvacadoPeachPlumDropdown && (
                <>
                  <Container
                    show={showAvacadoPeachPlumDropdown}
                    onMouseEnter={handleAvacadoPeachPlumMouseEnter}
                    onMouseLeave={handleAvacadoPeachPlumMouseLeave}
                  >
                    <NavDropdown.Item as={Link} to="/premiumfruits/AvacadoPeachPlum/avacados">
                      Avacados
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/premiumfruits/AvacadoPeachPlum/peaches">
                      Peaches
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/premiumfruits/AvacadoPeachPlum/nectarines">
                      Nectarines
                    </NavDropdown.Item>
                  </Container>
                </>
              )}
              <NavDropdown.Item
                as={Link}
                to={"/premiumfruits/BananaMelonCoconut"}
                onMouseEnter={handleBananaMelonCoconutMouseEnter}
                onMouseLeave={handleBananaMelonCoconutMouseLeave}
              >
                banana-melons-coconut
              </NavDropdown.Item>
              {showBananaMelonCoconutDropdown && (
                <>
                  <Container
                    show={showBananaMelonCoconutDropdown}
                    onMouseEnter={handleBananaMelonCoconutMouseEnter}
                    onMouseLeave={handleBananaMelonCoconutMouseLeave}
                  >
                    <NavDropdown.Item as={Link} to="/premiumfruits/BananaMelonCoconut/bananas">
                      Bananas
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/premiumfruits/BananaMelonCoconut/melons">
                      Melons
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/premiumfruits/BananaMelonCoconut/coconuts">
                      Coconuts
                    </NavDropdown.Item>
                  </Container>
                </>
              )}
              <NavDropdown.Item
                as={Link}
                to={"/premiumfruits/CherriesBerriesDragonfruit"}
                onMouseEnter={handleCherriesBerriesExoticMouseEnter}
                onMouseLeave={handleCherriesBerriesExoticMouseLeave}
              >
                cherries-berries-exotic-fruits
              </NavDropdown.Item>
              {showCherriesBerriesExoticDropdown && (
                <>
                  <Container
                    show={showCherriesBerriesExoticDropdown}
                    onMouseEnter={handleCherriesBerriesExoticMouseEnter}
                    onMouseLeave={handleCherriesBerriesExoticMouseLeave}
                  >
                    <NavDropdown.Item as={Link} to="/premiumfruits/CherriesBerriesDragonfruit/cherries">
                      Cherries
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/premiumfruits/CherriesBerriesDragonfruit/berries">
                      Berries
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/premiumfruits/CherriesBerriesDragonfruit/dragonfruits">
                      Dragon Fruits
                    </NavDropdown.Item>
                  </Container>
                </>
              )}
              <NavDropdown.Item
                as={Link}
                to={"/premiumfruits/CitrusMangosGrapes"}
                onMouseEnter={handleCitrusMangoGrapeMouseEnter}
                onMouseLeave={handleCitrusMangoGrapeMouseLeave}
              >
                citrus-mango-grapes
              </NavDropdown.Item>
              {showCitrusMangoGrapeDropdown && (
                <>
                  <Container
                    show={showCitrusMangoGrapeDropdown}
                    onMouseEnter={handleCitrusMangoGrapeMouseEnter}
                    onMouseLeave={handleCitrusMangoGrapeMouseLeave}
                  >
                    <NavDropdown.Item as={Link} to="/premiumfruits/CitrusMangosGrapes/citrus">
                      Citrus
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/premiumfruits/CitrusMangosGrapes/mangos">
                      Mangos
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/premiumfruits/CitrusMangosGrapes/grapes">
                      Grapes
                    </NavDropdown.Item>
                  </Container>
                </>
              )}
              <NavDropdown.Item
                as={Link}
                to={"/premiumfruits/Dates"}
                onMouseEnter={handleWetDatesMouseEnter}
                onMouseLeave={handleWetDatesMouseLeave}
              >
                dates
              </NavDropdown.Item>
              {showWetDatesDropdown && (
                <>
                  <Container
                    show={showWetDatesDropdown}
                    onMouseEnter={handleWetDatesMouseEnter}
                    onMouseLeave={handleWetDatesMouseLeave}
                  >
                    <NavDropdown.Item as={Link} to="/premiumfruits/Dates/wetdates">
                      Wet Dates
                    </NavDropdown.Item>
                  </Container>
                </>
              )}
              <NavDropdown.Item
                as={Link}
                to={"/premiumfruits/GiftAssortedXlPacks"}
                onMouseEnter={handleGiftPackMouseEnter}
                onMouseLeave={handleGiftPackMouseLeave}
              >
                gift-assorted-xl-packs
              </NavDropdown.Item>
              {showGiftPackDropdown && (
                <>
                  <Container
                    show={showGiftPackDropdown}
                    onMouseEnter={handleGiftPackMouseEnter}
                    onMouseLeave={handleGiftPackMouseLeave}
                  >
                    <NavDropdown.Item as={Link} to="/premiumfruits/GiftAssortedXlPacks/giftpacks">
                      Gifts Pack
                    </NavDropdown.Item>
                  </Container>
                </>
              )}
              <NavDropdown.Item
                as={Link}
                to={"/premiumfruits/PomegranatePapayaPineapple"}
                onMouseEnter={handlePomegranatePapayaPineappleMouseEnter}
                onMouseLeave={handlePomegranatePapayaPineappleMouseLeave}
              >
                pomegranate-papaya-pineapple
              </NavDropdown.Item>
              {showPomegranatePapayaPineappleDropdown && (
                <>
                  <Container
                    show={showPomegranatePapayaPineappleDropdown}
                    onMouseEnter={handlePomegranatePapayaPineappleMouseEnter}
                    onMouseLeave={handlePomegranatePapayaPineappleMouseLeave}
                  >
                    <NavDropdown.Item as={Link} to="/premiumfruits/PomegranatePapayaPineapple/pomegranates">
                      Pomegranates
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/premiumfruits/PomegranatePapayaPineapple/papayas">
                      Papayas
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/premiumfruits/PomegranatePapayaPineapple/pineapples">
                      Pineapples
                    </NavDropdown.Item>
                  </Container>
                </>
              )}
              <NavDropdown.Item
                as={Link}
                to={"/premiumfruits/SeasonalMinorFruits"}
                onMouseEnter={handleSeasonalMinorFruitsMouseEnter}
                onMouseLeave={handleSeasonalMinorFruitsMouseLeave}
              >
                seasonal-minor-fruits
              </NavDropdown.Item>
              {showSeasonalMinorFruitsDropdown && (
                <>
                  <Container
                    show={showSeasonalMinorFruitsDropdown}
                    onMouseEnter={handleSeasonalMinorFruitsMouseEnter}
                    onMouseLeave={handleSeasonalMinorFruitsMouseLeave}
                  >
                    <NavDropdown.Item as={Link} to="/premiumfruits/SeasonalMinorFruits/guavas">
                      Guava
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/premiumfruits/SeasonalMinorFruits/custardapples">
                      Custard Apples
                    </NavDropdown.Item>
                  </Container>
                </>
              )}
            </NavDropdown>

            {/* <Nav.Link
              as={Link}
              className="text-white fw-bold"
              to={"/Groceries"}
              onMouseEnter={handleGroceriesEnter}
              onMouseLeave={handleGroceriesLeave}
            >
              Groceries
            </Nav.Link> */}

            
            <Nav.Link
              as={Link}
              className="text-white fw-bold"
              to={"/premiumfruits"}
              onMouseEnter={handlePremiumFruitsMouseEnter}
              onMouseLeave={handlePremiumFruitsMouseLeave}
            >
              Premium Fruits
            </Nav.Link>
            {/* beauty dropdown */}
            <NavDropdown
            
              show={showBeautyDropdown}
              onMouseEnter={handleBeautyMouseEnter}
              onMouseLeave={handleBeautyMouseLeave}
            >
              <NavDropdown.Item
                as={Link}
                to={"/Beauty/makeup"}
                onMouseEnter={handleMakeUpMouseEnter}
                onMouseLeave={handleMakeUpMouseLeave}
              >
                Make-Up
              </NavDropdown.Item>
              {showMakeUpDropdown && (
                <>
                  <Container
                    show={showMakeUpDropdown}
                    onMouseEnter={handleMakeUpMouseEnter}
                    onMouseLeave={handleMakeUpMouseLeave}
                  >
                    <NavDropdown.Item as={Link} to="/Beauty/makeup/Lips">
                      Lips
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/Beauty/makeup/Nails">
                      Nails
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/Beauty/makeup/Eyes">
                      Eyes
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/Beauty/makeup/FaceMakeUp">
                      FaceMakeUp
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/Beauty/makeup/MakeupToolsBrushes">
                      MakeupToolsBrushes
                    </NavDropdown.Item>
                  </Container>
                </>
              )}
              <NavDropdown.Item
                as={Link}
                to={"/Beauty/SkinCare"}
                onMouseEnter={handleSkinCareMouseEnter}
                onMouseLeave={handleSkinCareMouseLeave}
              >
                SkinCare
              </NavDropdown.Item>
              {showSkinCareDropdown && (
                <>
                  <Container
                    show={showSkinCareDropdown}
                    onMouseEnter={handleSkinCareMouseEnter}
                    onMouseLeave={handleSkinCareMouseLeave}
                  >
                    <NavDropdown.Item as={Link} to="/Beauty/SkinCare/Serum">
                    Serum
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/Beauty/SkinCare/FaceMask">
                    FaceMask
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/Beauty/SkinCare/Moisturizers">
                    Moisturizers
                    </NavDropdown.Item>
                  </Container>
                </>
              )}
              <NavDropdown.Item
                as={Link}
                to={"/Beauty/Hair"}
                onMouseEnter={handleHairMouseEnter}
                onMouseLeave={handleHairMouseLeave}
              >
                 Hair
              </NavDropdown.Item>
              {showHairDropdown && (
                <>
                  <Container
                    show={showHairDropdown}
                    onMouseEnter={handleHairMouseEnter}
                    onMouseLeave={handleHairMouseLeave}
                  >
                    <NavDropdown.Item as={Link} to="/Beauty/Hair/HairCare">
                    HairCare
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/Beauty/Hair/HairColor">
                    HairColor
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/Beauty/Hair/HairStyling">
                    HairStyling
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/Beauty/Hair/HairToolAndAccessories">
                    HairToolAndAccessories
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/Beauty/Hair/ScalpTreatments">
                    ScalpTreatments
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/Beauty/Hair/ShopByHairType">
                    ShopByHairType
                    </NavDropdown.Item>
                  </Container>
                </>
              )}
            </NavDropdown>
            <Nav.Link
              as={Link}
              className="text-white fw-bold"
              to={"/Beauty"}
              onMouseEnter={handleBeautyMouseEnter}
              onMouseLeave={handleBeautyMouseLeave}
            >
              Beauty
            </Nav.Link>
            {/* bagsandluggages */}
            <NavDropdown
              show={showSportsToysLuggagesDropdown}
              onMouseEnter={handleSportsToysLuggagesMouseEnter}
              onMouseLeave={handleSportsToysLuggagesMouseLeave}
            >
              <NavDropdown.Item
                as={Link}
                to={"/SportsToysLuggages/BagsTravelLuggages"}
                onMouseEnter={handleBagsAndTravelLuggagesMouseEnter}
                onMouseLeave={handleBagsAndTravelLuggagesMouseLeave}
              >
                Bags & Travel Luggages
              </NavDropdown.Item>
              {showBagsAndTravelLuggagesDropdown && (
                <>
                  <Container
                    show={showBagsAndTravelLuggagesDropdown}
                    onMouseEnter={handleBagsAndTravelLuggagesMouseEnter}
                    onMouseLeave={handleBagsAndTravelLuggagesMouseLeave}
                  >
                    <NavDropdown.Item as={Link} to="/SportsToysLuggages/BagsTravelLuggages/BagsAndBackpacks">
                      Bags & Backpacks
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/SportsToysLuggages/BagsTravelLuggages/DuffleBags">
                      Duffle Bags
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/SportsToysLuggages/BagsTravelLuggages/ShoppingAndOtherbags">
                      Shopping & Other Bags
                    </NavDropdown.Item>
                    {/* <NavDropdown.Item as={Link} to="/SportsToysLuggages/BagsTravelLuggages/TravelAccessories">
                      Travel Accessories
                    </NavDropdown.Item> */}
                    <NavDropdown.Item as={Link} to="/SportsToysLuggages/BagsTravelLuggages/TrolleysAndSuitcases">
                      Trolleys & Suitcases
                    </NavDropdown.Item>
                  </Container>
                </>
              )}
            </NavDropdown>
            <Nav.Link
              as={Link}
              className="text-white fw-bold"
              to={"/SportsToysLuggages"}
              onMouseEnter={handleSportsToysLuggagesMouseEnter}
              onMouseLeave={handleSportsToysLuggagesMouseLeave}
            >
              Sports, Toys & Luggages
            </Nav.Link>
            <NavDropdown
            
            show={showFashionDropdown}
            onMouseEnter={handleFashionMouseEnter}
            onMouseLeave={handleFashionMouseLeave}
          >
            <NavDropdown.Item
              as={Link}
              to={"/Fashion/MensFashion"}
              onMouseEnter={handleMensFashionMouseEnter}
              onMouseLeave={handleMensFashionMouseLeave}
            >
              Mens Fashion
            </NavDropdown.Item>
            {showMensFashionDropdown && (
              <>
                <Container
                  show={showMensFashionDropdown}
                  onMouseEnter={handleMensFashionMouseEnter}
                  onMouseLeave={handleMensFashionMouseLeave}
                >
                  <NavDropdown.Item as={Link} to="/Fashion/MensFashion/ClothingAccessories">
                    ClothingAccesseries
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Fashion/MensFashion/WesternWear">
                  WesternWear
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Fashion/MensFashion/MensFootWear">
                  MensFootWear
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Fashion/MensFashion/MensEyeWear">
                  MensEyeWear
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Fashion/MensFashion/InnerWear">
                    InnerWear
                  </NavDropdown.Item>
                  
                </Container>
              </>
            )}
            <NavDropdown.Item
              as={Link}
              to={"/Fashion/WomensFashion"}
              onMouseEnter={handleWomensFashionMouseEnter}
              onMouseLeave={handleWomensFashionMouseLeave}
            >
              Womens Fashion
            </NavDropdown.Item>
            {showWomensFashionDropdown && (
              <>
                <Container
                  show={showWomensFashionDropdown}
                  onMouseEnter={handleWomensFashionMouseEnter}
                  onMouseLeave={handleWomensFashionMouseLeave}
                >
                  <NavDropdown.Item as={Link} to="/Fashion/WomensFashion/EthinicWear">
                  EthinicWear
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Fashion/WomensFashion/TraditionalWear">
                  TraditionalWear
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Fashion/WomensFashion/EyeWear">
                  EyeWear
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Fashion/WomensFashion/FootWear">
                  FootWear
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Fashion/WomensFashion/Watches">
                  Watches
                  </NavDropdown.Item>
                  
                </Container>
              </>
            )}
            <NavDropdown.Item
              as={Link}
              to={"/Fashion/KidsFashion"}
              onMouseEnter={handleKidsFashionMouseEnter}
              onMouseLeave={handleKidsFashionMouseLeave}
            >
              Kids Fashion
            </NavDropdown.Item>
            {showKidsFashionDropdown && (
              <>
                <Container
                  show={showKidsFashionDropdown}
                  onMouseEnter={handleKidsFashionMouseEnter}
                  onMouseLeave={handleKidsFashionMouseLeave}
                >
                  <NavDropdown.Item as={Link} to="/Fashion/KidsFashion/JuniorBoyShirt">
                  JuniorBoyShirt
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Fashion/KidsFashion/JuniorBoyTracks">
                  JuniorBoyTracks
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Fashion/KidsFashion/JuniorBoyInnerWear">
                  JuniorBoyInnerWear
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Fashion/KidsFashion/JuniorGirlGowns">
                  JuniorGirlGowns
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Fashion/KidsFashion/JuniorGirlCasualWear">
                  JuniorGirlCasualWear
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Fashion/KidsFashion/JuniorGirlInnerWear">
                  JuniorGirlInnerWear
                  </NavDropdown.Item>
                  
                </Container>
              </>
            )}
            <NavDropdown.Item
              as={Link}
              to={"/Fashion/Infants"}
              onMouseEnter={handleInfantsMouseEnter}
              onMouseLeave={handleInfantsMouseLeave}
            >
              Infants
            </NavDropdown.Item>
            {showInfantsDropdown && (
              <>
                <Container
                  show={showInfantsDropdown}
                  onMouseEnter={handleInfantsMouseEnter}
                  onMouseLeave={handleInfantsMouseLeave}
                >
                  <NavDropdown.Item as={Link} to="/Fashion/Infants/BabyGirl">
                  BabyGirl
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Fashion/Infants/BabyBoy">
                  BabyBoy
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Fashion/Infants/Toys">
                  Toys
                  </NavDropdown.Item>
                </Container>
              </>
            )}
          </NavDropdown>
            <Nav.Link 
            as={Link}
            className="text-white fw-bold"
            to={"/Fashion"}
            onMouseEnter={handleFashionMouseEnter}
            onMouseLeave={handleFashionMouseLeave}
            >
              Fashion
            </Nav.Link>
             {/* Electronics */}
        <NavDropdown
            
            show={showElectronicsDropdown}
            onMouseEnter={handleElectronicsMouseEnter}
            onMouseLeave={handleElectronicsMouseLeave}
          >
            <NavDropdown.Item
              as={Link}
              to={"/Electronics/MobilesTablets"}
              onMouseEnter={handleMobilesTabletsMouseEnter}
              onMouseLeave={handleMobilesTabletsMouseLeave}
            >
              MobilesTablets
            </NavDropdown.Item>
            {showMobilesTabletsDropdown && (
              <>
                <Container
                  show={showMobilesTabletsDropdown}
                  onMouseEnter={handleMobilesTabletsMouseEnter}
                  onMouseLeave={handleMobilesTabletsMouseLeave}
                >
                  <NavDropdown.Item as={Link} to="/Electronics/MobilesTablets/Smartphone">
                  Smartphone
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Electronics/MobilesTablets/MobileAccessories">
                  MobileAccessories
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Electronics/MobilesTablets/Tablets">
                  Tablets
                  </NavDropdown.Item>
                </Container>
              </>
            )}
            <NavDropdown.Item
              as={Link}
              to={"/Electronics/TvSpeaker"}
              onMouseEnter={handleTvSpeakerMouseEnter}
              onMouseLeave={handleTvSpeakerMouseLeave}
            >
              TvSpeaker
            </NavDropdown.Item>
            {showTvSpeakerDropdown && (
              <>
                <Container
                  show={showTvSpeakerDropdown}
                  onMouseEnter={handleTvSpeakerMouseEnter}
                  onMouseLeave={handleTvSpeakerMouseLeave}
                >
                  <NavDropdown.Item as={Link} to="/Electronics/TvSpeaker/Tv">
                  Tv
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Electronics/TvSpeaker/HomeTheatre">
                  HomeTheatre
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Electronics/TvSpeaker/TvRemote">
                  TvRemote
                  </NavDropdown.Item>
                </Container>
              </>
            )}
            <NavDropdown.Item
              as={Link}
              to={"/Electronics/HomeAppliances"}
              onMouseEnter={handleHomeAppliancesMouseEnter}
              onMouseLeave={handleHomeAppliancesMouseLeave}
            >
              HomeAppliances
            </NavDropdown.Item>
            {showHomeAppliancesDropdown && (
              <>
                <Container
                  show={showHomeAppliancesDropdown}
                  onMouseEnter={handleHomeAppliancesMouseEnter}
                  onMouseLeave={handleHomeAppliancesMouseLeave}
                >
                  <NavDropdown.Item as={Link} to="/Electronics/HomeAppliances/WashingMachine">
                  WashingMachine
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Electronics/HomeAppliances/Irons">
                  Irons
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Electronics/HomeAppliances/Fans">
                  Fans
                  </NavDropdown.Item>
                </Container>
              </>
            )}
            <NavDropdown.Item
              as={Link}
              to={"/Electronics/Computers"}
              onMouseEnter={handleComputersMouseEnter}
              onMouseLeave={handleComputersMouseLeave}
            >
              Computers
            </NavDropdown.Item>
            {showComputersDropdown && (
              <>
                <Container
                  show={showComputersDropdown}
                  onMouseEnter={handleComputersMouseEnter}
                  onMouseLeave={handleComputersMouseLeave}
                >
                  <NavDropdown.Item as={Link} to="/Electronics/Computers/Laptop">
                  Laptop
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Electronics/Computers/Desktop">
                  Desktop
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Electronics/Computers/Monitor">
                  Monitor
                  </NavDropdown.Item>
                </Container>
              </>
            )}
          </NavDropdown>
          <Nav.Link
            as={Link}
            className="text-white fw-bold"
            to={"/Electronics"}
            onMouseEnter={handleElectronicsMouseEnter}
            onMouseLeave={handleElectronicsMouseLeave} 
            >
              Electronics
            </Nav.Link>
            <NavDropdown
            
            show={showHomeKitchenNeedsDropdown}
            onMouseEnter={handleHomeKitchenNeedsMouseEnter}
            onMouseLeave={handleHomeKitchenNeedsMouseLeave}
          >
            <NavDropdown.Item
              as={Link}
              to={"/HomeKitchenNeeds/Kitchenware"}
              onMouseEnter={handleKitchenwareMouseEnter}
              onMouseLeave={handleKitchenwareMouseLeave}
            >
              Kitchenware
            </NavDropdown.Item>
            {showKitchenwareDropdown && (
              <>
                <Container
                  show={showKitchenwareDropdown}
                  onMouseEnter={handleKitchenwareMouseEnter}
                  onMouseLeave={handleKitchenwareMouseLeave}
                >
                  <NavDropdown.Item as={Link} to="/HomeKitchenNeeds/Kitchenware/KitchenTools">
                  KitchenTools
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/HomeKitchenNeeds/Kitchenware/CookWare">
                  CookWare
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/HomeKitchenNeeds/Kitchenware/GasStove">
                  GasStove
                  </NavDropdown.Item>
                </Container>
              </>
            )}
            <NavDropdown.Item
              as={Link}
              to={"/HomeKitchenNeeds/HomeDecor"}
              onMouseEnter={handleHomeDecorMouseEnter}
              onMouseLeave={handleHomeDecorMouseLeave}
            >
              HomeDecor
            </NavDropdown.Item>
            {showHomeDecorDropdown && (
              <>
                <Container
                  show={showHomeDecorDropdown}
                  onMouseEnter={handleHomeDecorMouseEnter}
                  onMouseLeave={handleHomeDecorMouseLeave}
                >
                  <NavDropdown.Item as={Link} to="/HomeKitchenNeeds/HomeDecor/InteriorNeeds">
                  InteriorNeeds
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/HomeKitchenNeeds/HomeDecor/Decors">
                  Decors
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/HomeKitchenNeeds/HomeDecor/GiftingSets">
                  GiftingSets
                  </NavDropdown.Item>
                </Container>
              </>
            )}
            <NavDropdown.Item
              as={Link}
              to={"/HomeKitchenNeeds/Furniture"}
              onMouseEnter={handleFurnitureMouseEnter}
              onMouseLeave={handleFurnitureMouseLeave}
            >
              Furniture
            </NavDropdown.Item>
            {showFurnitureDropdown && (
              <>
                <Container
                  show={showFurnitureDropdown}
                  onMouseEnter={handleFurnitureMouseEnter}
                  onMouseLeave={handleFurnitureMouseLeave}
                >
                  <NavDropdown.Item as={Link} to="/HomeKitchenNeeds/Furniture/Chairs">
                  Chairs
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/HomeKitchenNeeds/Furniture/Tables">
                  Tables
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/HomeKitchenNeeds/Furniture/Mattress">
                  Mattress
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/HomeKitchenNeeds/Furniture/SofasAndCouches">
                  SofasAndCouches
                  </NavDropdown.Item>
                </Container>
              </>
            )}
            <NavDropdown.Item
              as={Link}
              to={"/HomeKitchenNeeds/BathroomAccessories"}
              onMouseEnter={handleBathroomAccessoriesMouseEnter}
              onMouseLeave={handleBathroomAccessoriesMouseLeave}
            >
              BathroomAccessories
            </NavDropdown.Item>
            {showBathroomAccessoriesDropdown && (
              <>
                <Container
                  show={showBathroomAccessoriesDropdown}
                  onMouseEnter={handleBathroomAccessoriesMouseEnter}
                  onMouseLeave={handleBathroomAccessoriesMouseLeave}
                >
                  <NavDropdown.Item as={Link} to="/HomeKitchenNeeds/BathroomAccessories/MugsTubsBuckets">
                  MugsTubsBuckets
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/HomeKitchenNeeds/BathroomAccessories/HooksClipsLaundryEssentials">
                  HooksClipsLaundryEssentials
                  </NavDropdown.Item>
                </Container>
              </>
            )}
          </NavDropdown>
          <Nav.Link
            as={Link}
            className="text-white fw-bold"
            to={"/HomeKitchenNeeds"}
            onMouseEnter={handleHomeKitchenNeedsMouseEnter}
            onMouseLeave={handleHomeKitchenNeedsMouseLeave} 
            >
              HomeAndKitchenNeeds
            </Nav.Link>
            {/* <Nav.Link as={Link} to="#about">About</Nav.Link> */}
            {/* <CartIcon/> */}

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;



