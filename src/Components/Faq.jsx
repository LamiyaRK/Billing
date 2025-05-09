import React from 'react';
import Qna from './Qna';

const Faq = () => {
    const data = [
      {
        id: 1,
        question: "How do I make a payment?",
        answer: "Simply select the biller, enter your bill details, and hit 'Pay Now' to complete your transaction."
      },
      {
        id: 2,
        question: "Is my payment secure?",
        answer: "Yes, all transactions are secured with SSL encryption to ensure your data and payment details are safe."
      },
      {
        id: 3,
        question: "Can I pay from my mobile?",
        answer: "Absolutely! Our platform is fully optimized for mobile devices, so you can make payments on the go."
      },
      {
        id: 4,
        question: "What payment methods do you accept?",
        answer: "We accept credit/debit cards, mobile banking, and other popular payment methods."
      },
      {
        id: 5,
        question: "How do I check the status of my payment?",
        answer: "You can view the payment status in your transaction history on your profile page."
      },
      {
        id: 6,
        question: "Can I save my bill details for future payments?",
        answer: "Yes, you can securely store your biller details for quicker and easier future payments."
      },
      {
        id: 7,
        question: "How can I contact customer support?",
        answer: "You can contact our customer support team via email, phone, or our live chat feature on the website."
      },
      {
        id: 8,
        question: "Do you offer cashback or rewards?",
        answer: "Yes, we offer special cashback and rewards on select bill payments and transactions. Keep an eye on our promotions!"
      }
      ];
      
    return (
        <div className='space-y-10'>
        <div className='text-center space-y-5'>
          <h1 className='text-4xl font-bold '>Frequently Asked Questions</h1>
          <p className='text-xl font-semibold max-w-4xl mx-auto'>Have questions? We’ve got answers. Explore common queries about payments, security, and how our platform works — all in one place to help you get started quickly and confidently.

</p>
        </div>
        <div className='space-y-3'>
            {
             data.map(da=><Qna key={da.id} da={da}></Qna>)   
            }
            </div>
        </div>
    );
};

export default Faq;