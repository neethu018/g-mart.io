import React, { useState } from 'react';
import { Accordion, Container } from 'react-bootstrap';

const Faq = () => {
    const faqData = [
        {
          heading: 'User Registration',
          items: [
            {
              title: 'How do I register?',
              ans: 'You can register by clicking on the "Sign In" section located at the top right corner on the home page. Please provide the required information in the form that appears and click on submit. We will send a one-time password (OTP) to verify your mobile number. Post verification, you can start shopping on JioMart.',
            },
            {
              title: 'Do I need to register before shopping on JioMart?',
              ans: 'Yes, you do need to register before shopping with us. However, you can browse the website without registration. You are required to login or register while you checkout.',
            },
            {
              title: 'Can I register multiple times using the same phone number/email ID?',
              ans: 'Each email ID/login ID and mobile number can only be associated with one customer account',
            },
          ],
        },
        {
          heading: 'Product / Price / Promotion',
          items: [
            {
              title: 'How do I look for a particular Product?',
              ans: 'You can search for a product by navigating through the category pages or by using search tab on the top of every page.',
            },
            {
              title: 'How will you ensure the freshness of products?',
              ans: 'We ensure that all our products are hygienically and carefully handled and maintain them in the correct temperature & packaging.',
            },
            {
              title: 'How can I check if the product I am ordering is in stock?',
              ans: 'You can prepare your cart and select the address you want the order to be delivered at. The availability of the product will be dependent on the selected address. Product without availability will be shown as ‘Out of stock’. You may remove them or add similar products as per your convenience',
            },
          ],
        },
        {
          heading: 'Ordering',
          items: [
            {
              title: 'How do I know if I placed my order correctly?',
              ans: 'Upon the successful completion of your order, an order confirmation e-mail and SMS containing your order details will be sent to your registered email ID and phone number.',
            },
            {
              title: 'Can I call and place an order?',
              ans: 'No, currently this service is not available.',
            },
            {
              title: 'How are the fruits and vegetables weighed?',
              ans: 'All fruits and vegetables vary in size and weight. You can choose any size/weight available on the website. While you shop, we will show an estimated weight and price. At the time of processing, we pack the closest size/weight and charge you for the actual weight of each item. E.g. If you order 1 kg of apples, we will try to pack exactly 1 kg or the weight closest to 1 kg. If the actual weight is 987 gm, we will bill you for 987 gm and not 1 kg.',
            },
            {
              title: 'How do I make changes to my order?',
              ans: 'Currently, there is no provision to modify the order once it is placed. You may cancel the order until it is shipped. You may request for a return of the ordered product as per the return policy.',
            },
          ],
        },
        // Continue with other sections...
        // ... (previous sections)

{
    heading: 'Payment',
    items: [
      {
        title: 'What are the various modes of payment I can use for shopping?',
        ans: `You can pay for your order using the following modes of payment:

        UPI ,
        Credit Card / Debit Card,
        Netbanking,
        e-Wallets,
        Meal Cards,
        Pay Later,
        Cash on Delivery`,
      },
      {
        title: 'Can I pay online during the delivery of the product?',
        ans: 'You can pay by scanning the QR available on the invoice using any UPI app at the time of delivery. Please check with the delivery executive to assist you.',
      },
      {
        title: 'I have placed an order with Cash on Delivery option. Can I change the payment method now?',
        ans: 'Payment method cannot be changed once the order is placed',
      },
      {
        title: 'How much time will it take to get the refund of a cancelled/returned order?',
        ans: '  Refund against a cancelled or return product may take up to 7 working days depending on the payment instrument used to place the order.   ',
      },
      {
        title: 'How will I get the refund against an order which placed with Cash on Delivery?',
        ans: '  Refund against orders delivered with Cash on delivery will credited in your JioMart wallet which can be utilized for future orders   ',
      },
      {
        title: 'What are RBI guidelines?',
        ans: '  As per RBI guidelines, effective 1st October 2022, merchants can no longer save your credit or debit card details. Instead, the card will be stored at merchant, payment gateway and aggregators in the form of tokens.   ',
      },
      {
        title: 'Why am I unable to see some of my previously added cards?',
        ans: ' All cards for which you have before September 30, 2022 are removed from JioMart. You need to save your cards again as per the new RBI guidelines.    ',
      },
      {
        title: 'Is it mandatory to save cards with JioMart? What impact will it have on my payment?',
        ans: ' It is not mandatory but highly recommended for better payment experience on JioMart. Starting 1st Oct 2022, you will have to input card details each time you want to make a payment unless the card is saved with us in tokenized format.    ',
      },
      {
        title: 'Can I delete a tokenized card?',
        ans: 'Yes, you will have an option to remove any saved card with us. However, to save again, you will have to provide your consent to tokenize the card.     ',
      },
      {
        title: 'Do I need any additional step to tokenize the card or make a payment through tokenized card?',
        ans: ' No, you don’t need to perform any additional steps. But while saving the card in tokenized form, you need to provide a consent. The payment experience through a tokenized card will remain same.    ',
      },
      {
        title: 'How do I provide my consent to save the card?',
        ans: 'When you add a new card, you will see a consent screen requesting you to tap on ‘Secure & Pay’ button. Simply select the tap on the button and continue with your payment on that card. Your consent will be successfully captured once the payment is complete.     ',
      },
  
      // Add more payment-related questions as needed
    ],
  },
  {
    heading: 'Delivery',
    items: [
      {
        title: 'How will I know if JioMart delivers to my area?',
        ans: '  You can check the serviceability of your area while selecting your pin code when you place your order   ',
      },
      {
        title: 'How can I check for an expected date of delivery of an order I placed?',
        ans: '   You can check for an estimated date of delivery on the product description page by entering your pin code. Date of delivery may vary from product to product and is also dependent on the pin code of the delivery address. We try our best to delivery your orders as early as possible.  ',
      },
    ],
  },
  {
    heading: 'Delivery Fee',
    items: [
      {
        title: 'What is delivery fee? Why am I being charged?',
        ans: `'  A Delivery fee is the amount that is charged to a customer, aside from the order total, to cover shipping and handling costs. This fee covers the cost of fulfilling the given customer's order, including storage costs, packaging, shipping etc. We are charging a nominal delivery fee of Rs.40 on all the orders less than cart value of Rs.250 for selected categories in JioMart. We are not charging any delivery fees for orders above Rs.250   '`,
      },
      {
        title: 'How does JioMart calculate delivery fee?',
        ans: '   Delivery fee for an order is calculated based on the order value and product category/type. We are not charging any delivery fees for orders above Rs.250 and for your first three orders  ',
      },
      {
        title: 'Why do I see a delivery fee in my cart?',
        ans: ' For orders below Rs.250, we have a nominal delivery fee of Rs.40. We are not charging any fees for orders above Rs.250.    ',
      },
      {
        title: 'If I cancel/return the product, will I get back my delivery fees?',
        ans: 'In case of complete cancellation of order, delivery fee will be refunded to you along with the product amount you paid. In case of return of already delivered product, delivery fee will not be refunded, only product amount will be refunded.',
      },
      {
        title: 'Why am I being charged for a few orders, and not for others?',
        ans: ' We are charging a nominal delivery fee of Rs.40 on all the orders less than Rs.250 for selected categories in JioMart. We are not charging any delivery fees for orders above Rs.250  ',
      },
      {
        title: 'What kinds of coupons/discounts/offers can I avail to waive off the delivery fee?',
        ans: '  No coupon/discount/offer is required to avail this offer. The order value should be more than Rs.250 to get the free delivery. ',
      },
      {
        title: 'If I place multiple orders individually within a specific timeframe (3 hours), and the order value is less than Rs. 250 for every individual order, can I get a waive off, on the delivery fee?',
        ans: 'No. This is applicable only if the order in question is more than Rs.250   ',
      },
      {
        title: 'Why is my delivery fee greater than my order amount? (Ex- Order value less than Rs.40, but my delivery fee is Rs. 40)',
        ans: ' Any order which is less than Rs.250 a nominal delivery fee of Rs.40 is charged per order.  ',
      },
      {
        title: 'Would I get the delivery fee back if my product is damaged, wrong item etc., and in non-returnable category?',
        ans: ' Delivery fee will not be refunded, in case of both complete/partial return of order, as it is charged as a service for the order which has been already delivered.  ',
      },
      {
        title: 'Why did I not receive a delivery fee refund on the partial cancellation?',
        ans: 'Delivery fee is charged below threshold of Rs. 250. Considering post partial cancellation threshold still remains below Rs. 250, customer will need to pay the delivery charge for remaining order to be delivered, and only product amount will be refunded for partial cancellation.   ',
      },
      // Add more delivery fee-related questions as needed
    ],
  },
  // Continue with other sections...
  // ... (previous sections)

{
    heading: 'Loyalty Program',
    items: [
      {
        title: 'What is the RelianceOne?',
        ans: `'RelianceOne or ROne is the Loyalty Program of Reliance Retail. Members enjoy wide range of privileges & benefits and can earn RelianceOne points at all the following stores:

        JioMart.com,
        JioMartExpress.com,
        Reliancedigital.in,
        AJIO,
        Reliance Fresh,
        Reliance Smart,
        Reliance Smart Point,
        Freshpik,
        Shri Kannan Departmental Store,
        Reliance Jewels,
        Reliance Digital,
        Jio Stores (select products),
        Reliance Trends (including Trends Man, Trends Woman, Trends Junior, Trends Footwear),
        Avantra by Trends,
        Reliance Footprint'`,
      },
      {
        title: 'How do I become a RelianceOne Member?',
        ans: ' You can become a member by giving your phone number during billing at any of our store or by shopping on JioMart.com    ',
      },
      {
        title: 'What are the benefits of RelianceOne?',
        ans: `'RelianceOne members get access to wide range of exclusive benefits and privileges across our partner stores. Some of the benefits are:

        Exclusive discounts and offers on your favourite brands and products,
        SMS and Emailer alerts with special offers,
        Loyalty Points on every purchase,
        Redeem Loyalty Points against transactions'`,
      },
      {
        title: 'How do I know my current balance of ROne points?',
        ans: ' You can get the current balance of RelianceOne points by giving a missed call on 9212999888    ',
      },
      {
        title: 'What is the value of ROne points?',
        ans: 'You earn 1 point for every Rs. 200 spent and value of 1 point is Rs 0.70     ',
      },
      {
        title: 'How to redeem ROne points?',
        ans: ' The redemption of ROne points is available both in physical stores and on JioMart.com while billing ',
      },
    ],
  },
  
  // ... (previous sections)

{
    heading: 'Login / Account Related',
    items: [
      {
        title: 'What is My Account?',
        ans: ' My Account is the section where you can view your Personal Information, Order History and Shopping List',
      },
      {
        title: 'I am unable to login',
        ans: ' You may have entered incorrect login details. Please enter the correct information & try again. In case the issue persists, please write to us at cs@jiomart.com or call us at 1800 890 1222    ',
      },
     
      {
        title: 'I want to deactivate my account. How can I do it?',
        ans: '  You can deactivate your account by writing an email to cs@jiomart.com with the subject line "Account deactivation "  Also, in the email, mention . mobile number associated with the account you would like to deactivate. Reason for choosing to deactivate the account.Our team will reach out to you to confirm the deactivation request and the account will be deactivated within 15 working days.   ',
      },
      {
        title: 'What happens if I deactivate my account?',
        ans: 'If you deactivate your account: You will be logged out of all the devices that you’re logged in and will not be able to login again. All your account information will be stored securely with us and will be restored in full if reactivated. Some information may remain visible to others (e.g., product ratings & reviews)        You can reactivate your account whenever you want in the future',
      },
      {
        title: 'I deactivated my account. How do I reactivate it?',
        ans: ' Coming back is easy. Simply write an email to cs@jiomart.com with the subject line "Account Reactivation". Also, in the email, mention the mobile number associated with the account you would like to reactivate. Our team will reach out to you to confirm the reactivation request and the account will be reactivated within 15 working days.Your account information will be fully restored after reactivation.',
      },
      {
        title: 'What happens if I permanently delete my account?',
        ans: ' If you permanently delete your account: You can’t regain access to your account once it’s deleted You will not be able to access products and services associated with your deleted account including: your profile information stored delivery addresses Purchase history, returns & refunds of orders You can sign up later on JioMart after a cooling-off period. However, the information such as purchase history, refunds, delivery addresses that you had earlier will not be available.',
      },
      // Add more Login / Account Related questions as needed
    ],
  },
  {
    heading: 'Fraud prevention and awareness',
    items: [
      {
        title: 'What are the ways in which fraudsters may approach customers?',
        ans: ' it has come to the notice of JioMart that, some fraudsters are approaching customers: with promotional Offers from JioMart; through fake email IDs as well as fake domain names/website links which may appear confusingly similar or identical with JioMart and its Group Companies through Social media Apps such as Whatsapp / Facebook by including the trademark/logo of JioMart and/or the logo ‘B’ as part of their profile pic and pushing fake offers to the innocent public, by luring them with false promises. ',
      },
      {
        title: 'How can customers safeguard themselves from fraudsters?',
        ans: ' Please exercise caution against fraudsters who may use fake email IDs, fake profiles on Social media (Whatsapp, Facebook etc.), domains, websites, telephones and advertisements in newspapers/magazines, etc. by impersonating themselves to be from JioMart and/or its Group Companies and claim to be offer promotional offers, collect customer account details, ask for advance money to process winners, etc. JioMart or any of its representatives would NOT ask for any OTP or PIN to offer any promotional offers. You are obliged NOT to share OTP/PIN with any person or authorizing UPI requests in wallets, received from unknown sources, as the same may lead to a fraud, through which, money may be debited from your Bank account and credited to fraudster’s account',
      },
      {
        title: 'What should customers do in case they have become a victim to any fraud?',
        ans: 'General public and prospective customers are advised to immediately report any suspicious incident to the concerned authorities and to us. Please note that any person dealing with such fraudsters will be dealing at his/her own risk and responsibility. JioMart and/or any of its Group Company will not be responsible for any loss suffered or otherwise in this respect.',
      },
      // Add more Fraud prevention and awareness-related questions as needed
    ],
  },
  
      ];
      
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Container style={{paddingLeft:"35px"}}>
      <div className='pt-5'>
        <h6 style={{fontSize:'20px'}}>FAQs</h6>
        <h6 style={{fontSize:'20px',fontWeight:'700px'}}>Frequently Asked Questions</h6>
        <p style={{fontSize:'16px',paddingtop:'10px'}}>Check out this section to get answers for all the frequently asked questions.</p>
        

        <Accordion className='accordian accordian-flush'>
          {faqData.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h4 style={{fontSize: '19px',fontWeight:'700px',color:'black' }} >{section.heading}</h4>

              <Accordion className='accordian accordian-flush'>
                {section.items.map((item, itemIndex) => (
                  <Accordion.Item key={itemIndex} eventKey={`${sectionIndex}-${itemIndex}`} className='item'>
                    <Accordion.Header
                      onClick={() => handleAccordionClick(`${sectionIndex}-${itemIndex}`)}
                      className={activeIndex === `${sectionIndex}-${itemIndex}` ? 'active-accordion' : ''}
                    >
                      <div className="ml-3 mr-3">
                        <h6 style={{fontSize: '14px', margin: '-5px',fontWeight:'700px',color:'black',padding: '0' }}>{item.title}</h6>
                      </div>
                    
                    </Accordion.Header>  <hr style={{margin:'1px', textdecoration: 'dotted'}}/>
                    <Accordion.Body hidden={activeIndex !== `${sectionIndex}-${itemIndex}`}>
                      <div className="ml-3 mr-3">
                        <p style={{ fontSize: '12px', padding: '0' }}>{item.ans}</p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          ))}
        </Accordion>
      </div>
    </Container>
  );
};

export default Faq;
