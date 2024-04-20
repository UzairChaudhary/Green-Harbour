"use client"
import React, { useState, useEffect } from 'react';
import Button from '../../../components/common/button'
import './Questions.css'; // Import CSS file for styling
import GetInTouch from '../../../components/LandingPage/GetInTouch';
import Link from 'next/link'

import {toast} from 'react-hot-toast';
import { IoClose } from 'react-icons/io5';

import { council_options } from '../../../data/council';
import ContactUs from '../../../components/LandingPage/ContactUs';
const axios = require('axios');

export default function Page() {

    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [phonenumber, setphonenumber] = useState("")
    const [email, setemail] = useState("")


    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isSubmit, setisSubmit] = useState(false)
    const [formDisplay, setformDisplay] = useState(false)
    const [eligible, seteligible] = useState(false)

    const [notQualify, setnotQualify] = useState(false)
    
    const [questions, setQuestions] = useState([
        "What is your occupancy type?",
        "What is your main source of heating?",
        "Has your property got central heating?",
        "Is your boiler older than 15 years?",
        "What type of property do you live in?",
        "Does anyone living at the property claim any UK qualified benefits?",
        "",
        ""
        
        // Add more questions as needed
    ]);

    const [options, setOptions] = useState([
        ["Homeowner", "Private Tenant", "Social Tenant", "Other"],
        ["Gas", "Electricity", "Oil", "Not sure"],
        ["Yes","No"],
        ["Yes","No","Not sure"],
        ["Detached House", "Semi-Detached House", "Terraced House", "Flat/Apartment", "Bungalow", "Other"],
        ["Yes","No"],
        [],
        []
        

    ]);

    
    const [answers, setAnswers] = useState(Array(questions.length).fill(null)); // Use questions.length
    
    
    
    const updateQuestionAndAnswerAtIndex = (index, newQuestion, newOptions) => {
        // Update question at the specified index
        const updatedQuestions = [...questions];
        updatedQuestions[index] = newQuestion;
        setQuestions(updatedQuestions);
    
        // Update options at the specified index
        const updatedOptions = [...options];
        updatedOptions[index] = newOptions;
        setOptions(updatedOptions);
    };
    



  const handleAnswer = (index, answer) => {
    setnotQualify(false)
    //console.log(answer)
    setAnswers(prevAnswers => {
        const newAnswers = [...prevAnswers];
        newAnswers[index] = answer;
        return newAnswers;
    });
    //Case Social Tenant
    if(answer==="Social Tenant") //show submit button
    {
        setnotQualify(true)
        return
    }

    //Case Gas ->No
    if ((answers[1] === "Gas" || answers[1] === "Oil" || answers[1] === "Not sure") && answers[2]===null && answer==="No") {
        updateQuestionAndAnswerAtIndex(3, "What type of property do you live in?", ["Detached House", "Semi-Detached House", "Terraced House", "Flat/Apartment", "Bungalow", "Other"]);
        
    }
    //Case Gas -> No -> Property
    if ((answers[1] === "Gas" || answers[1] === "Oil" || answers[1] === "Not sure") && answers[2]==="No" && options[3].includes(answer)) {
        updateQuestionAndAnswerAtIndex(4,"Does anyone living at the property claim any UK qualified benefits?", ["Yes","No"]);
    }
    // Case Gas -> No -> Property -> Claim UK Benefits Yes
    if((answers[1] === "Gas" || answers[1] === "Oil" || answers[1] === "Not sure") && answers[2]==="No" && answers[3]!==null && answers[4]===null && answer==="Yes"){
        //console.log("show form display")
        setCurrentQuestion(currentQuestion+1)
        handleFormDisplay()
        return
    }
    // Case Gas -> No -> Property -> Claim UK Benefits No
    if((answers[1] === "Gas" || answers[1] === "Oil" || answers[1] === "Not sure") && answers[2]==="No" && answers[3]!==null && answers[4]===null && answer==="No"){
        updateQuestionAndAnswerAtIndex(5, "Do either of the following two options apply to you?", ["Someone in the household has a health condition and could qualify through an NHS referral (i.e. related to Cardiovascular problems, Respiratory issues, Limited mobility or Weakened immunity)", "Household earns under £31,000 per year (before tax)", "Both apply", "None of the above apply"]); 
        handleProceeding(index)
        return
    }
    // Case Gas -> No -> Property -> Claim UK Benefits No -> None of the above apply
    if ((answers[1] === "Gas" || answers[1] === "Oil" || answers[1] === "Not sure") && answers[2]==="No" && answers[3]!==null&& answers[4]==="No" && answers[5]===null && answer==="None of the above apply") {
        //If none of the above apply, show form
        setnotQualify(true)
        return
       
    }
    // Case Gas -> No -> Property -> Claim UK Benefits No -> Other than None of the above apply

    if ((answers[1] === "Gas" || answers[1] === "Oil" || answers[1] === "Not sure") && answers[2]==="No" && answers[3]!==null&& answers[4]==="No" && answers[5]===null && answer!=="None of the above apply") {
        //If none of the above apply, show form
        updateQuestionAndAnswerAtIndex(6, "As you qualify through a FLEX route, please type your local council below to see if they are taking part? ", ["Dropdown"]);
        handleProceeding(index)
        return
       
    }
    // Case Gas -> Yes -> Property -> Claim UK Benefits Yes
    if((answers[1] === "Gas" || answers[1] === "Oil" || answers[1] === "Not sure") && answers[2]!==null && answers[3]!==null&& answers[4]!==null&& answers[5]===null && answer==="Yes"){
        //console.log("case 1 gas yes")
        
        //console.log("show form display")
        setCurrentQuestion(currentQuestion+1)
        handleFormDisplay()
        return
        
    }
    // Case Gas -> Yes -> Property -> Claim UK Benefits No
    if ((answers[1] === "Gas" || answers[1] === "Oil" || answers[1] === "Not sure") && answers[2]!==null && answers[3]!==null && answers[4]!==null && answer==="No") {
        // 6) Does anyone living at the property claim any UK qualified benefits
        //console.log('case 2 No Gas')
        updateQuestionAndAnswerAtIndex(6, "Do either of the following two options apply to you?", ["Someone in the household has a health condition and could qualify through an NHS referral (i.e. related to Cardiovascular problems, Respiratory issues, Limited mobility or Weakened immunity)", "Household earns under £31,000 per year (before tax)", "Both apply", "None of the above apply"]);
       // console.log("updated")
       // console.log(questions)
        handleProceeding(index)
        return

       
    }
    // Case Gas -> Yes -> Property -> Claim UK Benefits No -> None of above apply
    if ((answers[1] === "Gas" || answers[1] === "Oil" || answers[1] === "Not sure") && answers[2]!==null && answers[3]!==null&& answers[4]!==null&&answers[5]!==null&& answer==="None of the above apply") {
        //If none of the above apply, show form
        setnotQualify(true)
        return
       
    }
    // Case Gas -> Yes -> Property -> Claim UK Benefits No -> Other than None of above apply
    if ((answers[1] === "Gas" || answers[1] === "Oil" || answers[1] === "Not sure") && answers[2]!==null && answers[3]!==null&& answers[4]!==null&& answers[5]==="No" && answer!=="None of the above apply") {
        // Add a custom question based on previous responses
        updateQuestionAndAnswerAtIndex(7, "As you qualify through a FLEX route, please type your local council below to see if they are taking part? ", ["Dropdown"]);
        //console.log("updated")
        //console.log(questions)
        

       
    }
    // Case Gas ->Yes ->Boiler is not older than 15 years
    if((answers[1] === "Gas" || answers[1] === "Oil" || answers[1] === "Not sure") && answers[2]!==null && answer==="No"){
        //if boiler is not older than 15 years, he will not qualify
        //console.log("Boiler doesn't qualify")
        setnotQualify(true)
        return
        
    }
    //Case Electricity
    if (answer === "Electricity") {
        updateQuestionAndAnswerAtIndex(2, "What type of property do you live in?", ["Detached House", "Semi-Detached House", "Terraced House", "Flat/Apartment", "Bungalow", "Other"]);
        
    }
    //Case Electricity  -> Property
    if (answers[1] === "Electricity" && options[2].includes(answer)) {
        updateQuestionAndAnswerAtIndex(3,"Does anyone living at the property claim any UK qualified benefits?", ["Yes","No"]);
        
    }
    //Case Electricity -> Property -> Claim UK Benefits Yes
    if(answers[1] === "Electricity" && answers[2]!==null && answers[3]===null && answer==="Yes"){
       
        let allquestions = questions.slice(0,4)
        setQuestions(allquestions)
        //console.log(allquestions)
        //console.log("show form display")
        setCurrentQuestion(currentQuestion+1)
        handleFormDisplay()
        return
        
    }
    //Case Electricity -> Property -> Claim UK Benefits No
    if(answers[1] === "Electricity" && answers[2]!==null && answers[3]===null && answer==="No"){
       
        updateQuestionAndAnswerAtIndex(4, "Do either of the following two options apply to you?", ["Someone in the household has a health condition and could qualify through an NHS referral (i.e. related to Cardiovascular problems, Respiratory issues, Limited mobility or Weakened immunity)", "Household earns under £31,000 per year (before tax)", "Both apply", "None of the above apply"]);
        handleProceeding(index) 
        return
        
    }
    //Case Electricity -> Property -> Claim Uk Benefits No -> None of above apply
    if (answers[1] === "Electricity" && answers[2]!==null && answers[3]==="No" && (answers[4]===null || answers[4]==="None of the above apply")&& answer==="None of the above apply") {
        //If none of the above apply, show form
        setnotQualify(true)
        return
       
    }
    //Case Electricity -> Property -> Claim Uk Benefits No -> Other than None of above apply
    if (answers[1] === "Electricity" && answers[2]!==null && answers[3]==="No" && (answers[4]===null || answers[4]==="None of the above apply")&& answer!=="None of the above apply") {
        updateQuestionAndAnswerAtIndex(5, "As you qualify through a FLEX route, please type your local council below to see if they are taking part? ", ["Dropdown"]);
        
    }





    //if go previous and change the response from ---- to gas
    // if (answer === "Gas") {
        
    //     setQuestions([
    //         "1) What is your occupancy type?",
    //         "2) What is your main source of heating?",
    //         "3) Has your property got central heating?",
    //         "4) Is your boiler older than 15 years?",
    //         "5) What type of property do you live in?",
    //         "6) Does anyone living at the property claim any UK qualified benefits?",
    //         "",
    //         "",
            
    //         // Add more questions as needed
    //     ]);
        
    //     setOptions([
    //         ["Homeowner", "Private Tenant", "Social Tenant", "Other"],
    //         ["Gas", "Electricity", "Oil", "Not sure"],
    //         ["Yes","No"],
    //         ["Yes","No","Not sure"],
    //         ["Detached House", "Semi-Detached House", "Terraced House", "Flat/Apartment", "Bungalow", "Other"],
    //         ["Yes","No"],
    //         [],
    //         [],
            
    
    //     ]);
    // }
    //console.log(autoProceeding)
    

    handleProceeding(index)
    
    

    }
    const handleProceeding = (index) => {
        //console.log("index: ",index)
        //console.log("no of Questions: ",questions.length)
        //console.log(questions)
        
        if (index < questions.length-1) {
            setCurrentQuestion(index + 1);
            }
        if (index===questions.length-1) {
            setCurrentQuestion(currentQuestion+1)
            handleFormDisplay()
        }
       // console.log(answers)
        
    }

    const handleFormDisplay = () =>{
        setformDisplay(true)
    }
  const handleNextQuestion = () => {
    handleAnswer(currentQuestion,answers[currentQuestion])
    //if questions completed, show contact form 
//     if(currentQuestion===questions.length-1){
//         setCurrentQuestion(currentQuestion+1)
//         handleFormDisplay()
//     }
//     else setCurrentQuestion(currentQuestion + 1);
//   
};


  const handlePrevQuestion = () => {
    //automatically change back questions if option is not electricity
    //console.log(questions)
    //console.log(currentQuestion)
    if(formDisplay){
        setformDisplay(false)
    }
    if (answers[1] !== "Electricity") {
        // Reset questions and options
        // setQuestions([
        //     "1) What is your occupancy type?",
        //     "2) What is your main source of heating?",
        //     "3) Has your property got central heating?",
        //     "4) Is your boiler older than 15 years?",
        //     "5) What type of property do you live in?",
        //     "6) Does anyone living at the property claim any UK qualified benefits?",
        //     "",
        //     "",
            
        //     // Add more questions as needed
        // ]);
        
        // setOptions([
        //     ["Homeowner", "Private Tenant", "Social Tenant", "Other"],
        //     ["Gas", "Electricity", "Oil", "Not sure"],
        //     ["Yes","No"],
        //     ["Yes","No","Not sure"],
        //     ["Detached House", "Semi-Detached House", "Terraced House", "Flat/Apartment", "Bungalow", "Other"],
        //     ["Yes","No"],
        //     [],
        //     [],
            
    
        // ]);
    }
    setCurrentQuestion(currentQuestion - 1 < 0 ? 0 : currentQuestion - 1);
    
  };
  

  const handleSubmitButton = () => {
      setisSubmit(true)
  }

  const handleSubmission = () =>{
    //console.log("trimQuestions")
    // const filteredQuestions = questions.filter(question => question.trim() !== "");
    const filteredQuestions = questions.slice(0, currentQuestion);
    // const filteredAnswers = answers.filter(answer => answer !== null);
    const filteredAnswers = answers.slice(0, currentQuestion);

    //Update the state with filtered questions
    setQuestions(filteredQuestions);
    setAnswers(filteredAnswers)
    
    //console.log(filteredQuestions)
    //console.log(filteredAnswers)

    // toast.success('Submitted Successfully')
    // seteligible(true)
    // setisSubmit(true)
    if(firstname===""){
        toast.error("Please enter your first name")
        return
    }
    
    if(phonenumber===""){
        toast.error("Please enter your phone number")
        return
    }
    if(email===""){
        toast.error("Please enter your email")
        return
    }
    try{
        const contactInfo = {
            properties: {
              firstname: firstname,
              lastname: lastname,
              email: email,
              phone: phonenumber,                       
            
            }
          };

        

        const combinedArray = filteredQuestions.map((question, index) => question + filteredAnswers[index]);

        //console.log(combinedArray);

        combinedArray.forEach((question, index) => {
            
            contactInfo.properties[`question${index+1}`] = combinedArray[index];
        });

        //console.log(contactInfo);
        axios.post('/api/userResponses', contactInfo)
        .then(response => {
            //conconsole.log(response.data);
            if (response.data.success){
                toast.success('Thankyou for contacting us. We will get back to you soon.')
                seteligible(true)
                setisSubmit(true)
            }
            else
            {
                toast.error("Something went wrong. Please try again.")
            }
        }); 
        
    }
    catch(error){
        console.error('Error:', error);
    }
    
    
  }

// Array of strings containing different options
  const [inputValue, setInputValue] = useState(""); // State to store the input value
  const [filteredOptions, setFilteredOptions] = useState([]); // State to store filtered options based on input value

  // Function to handle changes in the input field
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value); // Update input value state
    // Filter options based on input value
    const filtered = council_options.filter(option =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered); // Update filtered options state
  };

  // Function to handle selection of an option
  const handleOptionSelect = (option) => {
    setInputValue(option); // Set input value to the selected option
    setFilteredOptions([]); // Clear filtered options
    if (answers[2]==="No"){
        setAnswers(prevAnswers => {
            const newAnswers = [...prevAnswers];
            newAnswers[currentQuestion] = option;
            return newAnswers;
        });
        handleFormDisplay()
    }
    else handleAnswer(7,option)
  };

  const clearInput = () => {
    setInputValue(""); // Clear input value
  };
  
  return (
    <>
    <div className=" mx-auto px-4 font-proxima-nova mt-20">
        <h1 className="text-4xl font-extrabold text-center text-mud_color"> Who Qualifies?</h1>
        <p className="mt-10 text-lg font-bold text-center text-mud_color">You may qualify for the ECO4 grant if you meet any of the three eligibility criteria:</p>
        <div className="flex flex-col items-center md:items-stretch md:flex-row justify-center md:justify-center mt-16 gap-3">
            <div className=' text-white flex flex-col hover:scale-105 w-80 hover:transition-a justify-between bg-mud_color p-8 rounded-xl'>
                <div className='flex justify-center  flex-col items-center'>
                <h1 className='text-2xl flex justify-center font-bold'> Qualifying Benefits</h1>
                <ul className='list-disc mt-5 pl-5'>
                    <li>Pension Credit</li>
                    <li>Child Tax Credits</li>
                    <li>Working Tax Credits</li>
                    <li>Universal Credit</li>
                    <li>Income Support</li>
                    <li>Housing Benefit</li>
                    <li>Income-Based Employment and Support allowance</li>
                    <li>Income-Based Job Seekers Allowance</li>
                    <li>Child Benefit</li>
                </ul>
                </div>
                <div className='flex justify-center mt-5'>

                <Link
                href="#question-container"
                className="block  sm:w-auto bg-orange-500 text-lg text-white py-2 px-4 rounded-lg text-center hover:scale-105 hover:transition-a hover:bg-orange-600">
                    Check Your Eligibility
                </Link>
                </div>
            </div>
            <div className='flex flex-col hover:scale-105 hover:transition-a w-80 justify-between  p-8 text-white bg-mud_color rounded-xl'>
                <div>
                <h1 className='text-2xl flex justify-center font-bold'>Income</h1>
                <p className=' mt-5'>Household earns less than £31,000 (gross)</p>

                </div>
                <div className='flex flex-col items-center  mt-5'>

                <Link
                href="#question-container"
                className="block  sm:w-auto bg-orange-500 text-lg text-white py-2 px-4 rounded-lg text-center hover:scale-105 hover:transition-a hover:bg-orange-600">
                    Check Your Eligibility
                </Link>
                </div>
            </div>
            <div className='flex flex-col hover:scale-105 hover:transition-a w-80 justify-between p-8 text-white bg-mud_color rounded-xl'>
                <h1 className='text-2xl flex justify-center font-bold'>NHS Referrral</h1>
                <p className=' mt-5'>You may qualify for ECO4 benefits through an NHS referral if you or anyone in the household receive repeated medication or have medical conditions affected by the cold, such as:</p>
                <ul className='list-disc mt-5 pl-5'>
                        <li>Cardiovascular problems</li>
                        <li>Respiratory issues</li>
                        <li>Limited mobility</li>
                        <li>Weakened immunity</li>
                        
                </ul>
                <div className='flex justify-center mt-5'>

                <Link
                href="#question-container"
                className="block  sm:w-auto bg-orange-500 text-lg text-white py-2 px-4 rounded-lg text-center hover:scale-105 hover:transition-a hover:bg-orange-600">
                    Check Your Eligibility
                </Link>
                </div>

            </div>
        </div>
        
        
        {/* Display this div when he is not eligible */}
        {isSubmit ? (
            <div className='container fade-in'>

                {eligible ? (
                    <div className='py-10 px-5 bg-green_color text-white w-full mx-10  rounded-lg'>
                        <p className='text-2xl font-bold m-5 flex justify-center'>Your information is submitted successfully.</p>
                        <p className='m-5 text-2xl flex justify-center font-bold'>Thankyou for using our services!</p>
                        <p className='m-5 text-lg flex justify-center'>Green Harbour ECO4 Home Advisor will contact you soon.</p>
                    </div>
                ):(

                    <div className='p-10 bg-green_color text-white w-full mx-20  rounded-lg'>
                        <p className='text-2xl font-bold m-5 flex justify-center'>Sorry. It seems like you do not meet the criteria to claim a heating upgrade today.</p>
                        <p className='mt-5 text-2xl flex justify-center font-bold'>Thankyou for checking</p>
                        <p className='mt-5 m-5 text-lg flex justify-center'>If you are still confident you should be eligible, or know someone else that might qualify, please share or give us a call.</p>
                    </div>
                )}
            </div>
        ):(
            
        <div className="container">
            {formDisplay ? (

            <div
            className="question-container fade-in bg-green_color z-10 text-white mt-10">
            <h2 className="question font-bold text-2xl">You{`'`}re highly likely to qualify! </h2>
            <h2>Please confirm your contact details below.</h2>
            <p>This is so your Green Harbour ECO4 Home Advisor can get in touch.</p>
            <div className='flex flex-col mt-5'>
                <label className=''>First Name</label>
                <input
                type='text'
                required
                value={firstname}
                onChange={(e) => setfirstname(e.target.value)}
                placeholder='Enter your first name'
                className='rounded-md border border-mud_color p-2 text-mud_color'
                />
            </div>
            <div className='flex flex-col mt-5'>
                <label className=''>Last Name</label>
                <input
                type='text'
                required
                value={lastname}
                onChange={(e) => setlastname(e.target.value)}
                placeholder='Enter your last name'
                className='rounded-md border border-mud_color p-2 text-mud_color'
                />
            </div>
            <div className='flex flex-col mt-5'>
                <label className=''>Phone Number</label>
                <input
                type='text'
                required
                value={phonenumber}
                onChange={(e)=>setphonenumber(e.target.value)}
                placeholder='Enter your phone number'
                className='rounded-md border border-mud_color p-2 text-mud_color'
                />
            </div>
            <div className='flex flex-col mt-5'>
                <label className=''>Email</label>
                <input
                type='text'
                required
                value={email}
                onChange={(e)=>setemail(e.target.value)}
                placeholder='Enter your email'
                className='rounded-md border border-mud_color p-2 text-mud_color'
                />
            </div>
            <div className="navigation-buttons fade-in">
                {/* <button
                    className="prev-button "
                    
                    onClick={handlePrevQuestion}
                >
                    Back
                </button> */}
                <button
                    className="next-button"
                    onClick={handleSubmission}
                    
                >
                    Submit
                </button>
                </div>
            </div>
            ):(
                
            <div
            id='question-container' 
            className="question-container fade-in mt-10 bg-green_color text-white">
                <h2 className="question fade-in font-bold text-xl">{currentQuestion+1}) {questions[currentQuestion]}</h2>
                {((answers[1] === "Gas" || answers[1] === "Oil" || answers[1] === "Not sure")&&answers[2]==="Yes"&&currentQuestion===3) && (
                    <p className="answer fade-in mb-5 text-lg">
                    If unsure if the boiler qualifies, please visit <a href='https://www.homeheatingguide.co.uk/efficiency-tables' target='_blank' className='text-mud_color'>https://www.homeheatingguide.co.uk/efficiency-tables</a> and check the efficiency rating is below 86%
                    </p>
                )}
                {(((answers[1] === "Gas" || answers[1] === "Oil" || answers[1] === "Not sure")&&answers[2]==="Yes"&&currentQuestion===5)||(answers[1]==="Electricity"&&options[2].includes(answers[2])&&currentQuestion===3)) && (
                    <p className="answer fade-in mb-5 text-lg">
                        (This could include Pension Credit, Child benefits, Working Tax Credits, income support etc.)
                    </p>
                )}
                {((answers[1] === "Gas" || answers[1] === "Oil" || answers[1] === "Not sure")&&answers[2]==="No"&&currentQuestion===4) && (
                    <p className="answer fade-in mb-5 text-lg">
                        (This could include Pension Credit, Child benefits, Working Tax Credits, income support etc.)
                    </p>
                )}
                {questions[currentQuestion] === "As you qualify through a FLEX route, please type your local council below to see if they are taking part? " ? (
                    <div className='options fade-in text-mud_color'>
                        
                        {/* <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            onFocus={handleInputChange}
                            className="w-full rounded-md border border-mud_color p-2 text-mud_color"
                            placeholder='Type or select an option'
                        /> */}

                      <div className="relative fade-in w-full">
                            {/* Input field */}
                            <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            className="w-full fade-in rounded-md border border-mud_color p-2 pr-8 text-mud_color"
                            placeholder="Type or select an option"
                            />
                            {/* Delete icon */}
                            {inputValue && (
                            <IoClose
                                className="absolute hover:scale-125 top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                                onClick={clearInput}
                                size={20}
                            />
                            )}
                        </div>
                        
                        {/* Display filtered options as suggestions */}
                        <div className='bg-white fade-in rounded-md' style={{ maxHeight: "200px", overflow: "auto", marginTop: "5px" }}>
                            {filteredOptions.map((option, index) => (
                            <div key={index} className='hover:bg-mud_color hover:text-white' onClick={() => handleOptionSelect(option)} style={{ padding: "5px", cursor: "pointer" }}>
                                {option}
                            </div>
                            ))}
                        </div>
                        
                    
                  </div>
                ):(

                <div className="options">
                {options[currentQuestion].map((option, index) => (
                    

                    <label key={index} className={`fade-in rounded-lg flex items-center option ${answers[currentQuestion] === option ? 'selected' : ''}`}>
                    <input
                        type="radio"
                        hidden
                        name={`question-${currentQuestion}`}
                        value={option}
                        checked={answers[currentQuestion] === option}
                        onChange={() => handleAnswer(currentQuestion, option)}
                    />
                    <span className={`option-letter border fade-in rounded-md px-3 p-2 ${answers[currentQuestion] === option ? 'selected' : ''}`}>{String.fromCharCode(65 + index)}</span>
                    {option}
                    </label>
                    
                ))}
                </div>
                )}
                {notQualify && (
                    <div className="navigation-buttons">
                    <button
                    className="submit-button fade-in "
                    
                    onClick={handleSubmitButton}
                    >
                    Submit
                    </button>
                    
                    </div>
                )}
                {/*  :(

                <div className="navigation-buttons">
                <button
                    className="prev-button "
                    disabled={currentQuestion === 0}
                    onClick={handlePrevQuestion}
                >
                    Previous
                </button>
                <button
                    className="next-button"
                    
                    onClick={handleNextQuestion}
                >
                    Next
                </button>
                </div>
                 )} */}
            </div>

            )}
      
        </div>
        )}

        
        

        
    </div>
    <GetInTouch/>
    <ContactUs/>
    </>
  )
}
