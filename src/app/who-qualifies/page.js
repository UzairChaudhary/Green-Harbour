"use client"
import React, { useState, useEffect } from 'react';
import Button from '../../../components/common/button'
import './Questions.css'; // Import CSS file for styling
import GetInTouch from '../../../components/LandingPage/GetInTouch';
import {toast} from 'react-hot-toast'
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
    const [autoProceeding, setautoProceeding] = useState(true);
    
    const [questions, setQuestions] = useState([
        "1) What is your occupancy type?",
        "2) What is your main source of heating?",
        "3) Has your property got central heating?",
        "4) Is your boiler older than 15 years?",
        "5) What type of property do you live in?",
        "6) Does anyone living at the property claim any UK qualified benefits?",
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
    

    // useEffect(() => {
    
    //     if(answers[1]==="Gas" && answers[5]==="No"){
    //         setautoProceeding(false)

    //         console.log("answers[5]==='No'")
    //         updateQuestionAndAnswerAtIndex(6, "Do either of the following two options apply to you?", ["Someone in the household has a health condition and could qualify through a NHS referral", "Household earns under £31,000 per year (before tax)", "Both apply", "None of the above apply"]);
    //         console.log(questions.length) //7
    //         // console.log(currentQuestion) //5
    //         // handleProceeding(currentQuestion)
    //     }

        
    // }, [answers,questions])

    // useEffect(() => {
    //     if(questions[6]){
    //         //console.log(questions)
    //         //console.log(options)
    //         console.log(currentQuestion)
    //         handleProceeding(currentQuestion)
            
    //     }
        
    
    // }, [questions])
    


  const handleAnswer = (index, answer) => {
    
    setAnswers(prevAnswers => {
        const newAnswers = [...prevAnswers];
        newAnswers[index] = answer;
        return newAnswers;
    });
    //Case Social Tenant
    if(answer==="Social Tenant") //show submit button
    {
        return
    }

    //Case Gas
    if (answers[1] === "Gas" && answers[2]!==null && answers[3]!==null&& answers[4]!==null&& answer==="No") {
        // Add a custom question based on previous responses
        updateQuestionAndAnswerAtIndex(6, "7) Do either of the following two options apply to you?", ["Someone in the household has a health condition and could qualify through an NHS referral (i.e. related to Cardiovascular problems, Respiratory issues, Limited mobility or Weakened immunity)", "Household earns under £31,000 per year (before tax)", "Both apply", "None of the above apply"]);
        console.log("updated")
        console.log(questions)

       
    }
    if (answers[1] === "Gas" && answers[2]!==null && answers[3]!==null&& answers[4]!==null&& answers[5]==="No" && answer!=="None of the above apply") {
        // Add a custom question based on previous responses
        updateQuestionAndAnswerAtIndex(7, "8) As you qualify through a FLEX route, please type your local council below to see if they are taking part", ["Dropdown"]);
        console.log("updated")
        console.log(questions)
        

       
    }
    //Case Electricity
    if (answer === "Electricity") {
        updateQuestionAndAnswerAtIndex(2, "3) What type of property do you live in?", ["Detached House", "Semi-Detached House", "Terraced House", "Flat/Apartment", "Bungalow", "Other"]);
        
    }
    if (answer === "Gas") {
        
        setQuestions([
            "1) What is your occupancy type?",
            "2) What is your main source of heating?",
            "3) Has your property got central heating?",
            "4) Is your boiler older than 15 years?",
            "5) What type of property do you live in?",
            "6) Does anyone living at the property claim any UK qualified benefits?",
            "",
            "",
            
            // Add more questions as needed
        ]);
        
        setOptions([
            ["Homeowner", "Private Tenant", "Social Tenant", "Other"],
            ["Gas", "Electricity", "Oil", "Not sure"],
            ["Yes","No"],
            ["Yes","No","Not sure"],
            ["Detached House", "Semi-Detached House", "Terraced House", "Flat/Apartment", "Bungalow", "Other"],
            ["Yes","No"],
            [],
            [],
            
    
        ]);
    }
    if(autoProceeding){

        handleProceeding(index)
    }
    

    }
    const handleProceeding = (index) => {
        console.log("index: ",index)
        console.log("Questions Length: ",questions.length-1)
        if (index < questions.length-1) {
            setCurrentQuestion(index + 1);
            }
        if (index===questions.length-1) {
            handleFormDisplay()
        }
        //setautoProceeding(true)
    }

    const handleFormDisplay = () =>{
        setformDisplay(true)
    }
  const handleNextQuestion = () => {
    //if questions completed, show contact form 
    if(currentQuestion===questions.length-1){
        setCurrentQuestion(currentQuestion+1)
        handleFormDisplay()
    }
    else setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrevQuestion = () => {
    //automatically change back questions if option is not electricity
    if(formDisplay){
        setformDisplay(false)
    }
    if (answers[currentQuestion - 1] !== "Electricity") {
        // Reset questions and options
        setQuestions([
            "1) What is your occupancy type?",
            "2) What is your main source of heating?",
            "3) Has your property got central heating?",
            "4) Is your boiler older than 18 years?",
            "5) What type of property do you live in?",
            "6) Does anyone living at the property claim any UK qualified benefits?",
            "",
            "",
            "",
            ""
            // Add more questions as needed
        ]);
        
        setOptions([
            ["Homeowner", "Private Tenant", "Social Tenant", "Other"],
            ["Gas", "Electricity", "Oil", "Not sure"],
            ["Yes","No"],
            ["Yes","No","Not sure"],
            ["Detached House", "Semi-Detached House", "Terraced House", "Flat/Apartment", "Bungalow", "Other"],
            ["Yes","No"],
            [],
            [],
            [],
            [],
    
        ]);
    }
    setCurrentQuestion(currentQuestion - 1 < 0 ? 0 : currentQuestion - 1);
    
  };
  

  const handleSubmitButton = () => {
      setisSubmit(true)
  }

  const handleSubmission = () =>{
    if(firstname===""){
        toast.error("Please enter your first name")
        return
    }
    if(lastname===""){
        toast.error("Please enter your last name")
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
        const contactData = {
            properties: {
              firstname: firstname,
              lastname: lastname,
              email: email,
              phone: phonenumber
            }
          };
        axios.post('/api/contacts', contactData)
        .then(response => {
            //console.log(response.data);
            if (response.data.success){
                toast.success('Submitted Successfully')
                seteligible(true)
                setisSubmit(true)
            }
            else
            {
                toast.error(response.data.error)
            }
        }); 
        
    }
    catch(error){
        console.error('Error:', error);
    }
    
    
  }

  const council_options = [
    "Aberdeen City Council",
    "Aberdeenshire Council",
    "Amber Valley Borough Council",
    "Angus Council",
    "Ashfield District Council",
    "Aylesbury Vale District Council",
    "Babergh District Council",
    "Barrow-in-Furness Borough Council",
    "Basingstoke and Deane Borough Council",
    "Bath and North East Somerset Council",
    "Birmingham City Council",
    "Bolsover District Council",
    "Bolton Metropolitan Borough Council",
    "Boston Borough Council",
    "Bristol City Council",
    "Broadland District Council",
    "Buckinghamshire County Council",
    "Bury Metropolitan Borough Council",
    "Calderdale Metropolitan Borough Council",
    "Cambridgeshire County Council",
    "Cannock Chase District Council",
    "Cardiff Council",
    "Carmarthenshire County Council",
    "Ceredigion County Council",
    "Cheltenham Borough Council",
    "Cherwell District Council",
    "Cheshire East Council (Unitary)",
    "Cheshire West and Chester Council",
    "Chesterfield Borough Council",
    "Chiltern District Council",
    "City of Lincoln Council",
    "Conwy County Borough Council",
    "Cornwall Council (Unitary)",
    "Cotswold District Council",
    "Coventry City Council",
    "Dacorum Council",
    "Darlington Borough Council",
    "Denbighshire County Council",
    "Derbyshire County Council",
    "Derbyshire Dales District Council",
    "Doncaster Metropolitan Borough Council",
    "Dudley Metropolitan Borough Council",
    "Dumfries and Galloway Council",
    "Dundee City Council",
    "Durham County Council",
    "East Ayrshire Council",
    "East Devon District Council",
    "East Dunbartonshire Council",
    "East Hampshire District Council",
    "East Lindsey District Council",
    "East Renfrewshire Council",
    "East Staffordshire Borough Council",
    "East Suffolk Council",
    "Eastleigh Borough Council",
    "Eden District Council",
    "Erewash Borough Council",
    "Exeter City Council",
    "Fareham Borough Council",
    "Fenland District Council",
    "Flintshire County Council",
    "Forest of Dean District Council",
    "Fylde Borough Council",
    "Gloucester City Council",
    "Gloucestershire County Council",
    "Gosport Borough Council",
    "Gwynedd County Council",
    "Halton Borough Council",
    "Hampshire County Council",
    "Harborough District Council",
    "Hart District Council",
    "Havant Borough Council",
    "Herefordshire Council",
    "Hertsmere Borough Council",
    "High Peak Borough Council",
    "Hinckley and Bosworth Borough Council",
    "Ipswich Borough Council",
    "Isle of Anglesey County Council",
    "King's Lynn and West Norfolk Borough Council",
    "Knowsley Metropolitan Borough Council",
    "Leicester City Council",
    "Leicestershire County Council",
    "Lichfield District Council",
    "Liverpool",
    "London Borough of Ealing",
    "London Borough of Hammersmith & Fulham",
    "London Borough of Waltham Forest",
    "Luton Borough Council",
    "Mendip District Council",
    "Merthyr Tydfil County Borough Council",
    "Mid Devon District Council",
    "Mid Suffolk District Council",
    "Midlothian Council",
    "Monmouthshire County Council",
    "Neath Port Talbot County Borough Council",
    "New Forest District Council",
    "Newcastle-Under-Lyme District Council",
    "Newcastle-upon-Tyne City Council",
    "Norfolk County Council",
    "North Devon Council",
    "North East Derbyshire District Council",
    "North Lanarkshire Council",
    "North Lincolnshire Council",
    "North Norfolk District Council",
    "North Somerset Council",
    "North Tyneside Metropolitan Borough Council",
    "Northampton Borough Council",
    "Northamptonshire County Council",
    "Northumberland Council",
    "Nottingham",
    "Oldham Metropolitan Borough Council",
    "Oxford City Council",
    "Oxfordshire County Council",
    "Pembrokeshire County Council",
    "Perth and Kinross Council",
    "Peterborough City Council",
    "Plymouth City Council",
    "Portsmouth City Council",
    "Powys County Council",
    "Renfrewshire Council",
    "Rochdale Metropolitan Borough Council",
    "Rother District Council",
    "Rotherham Metropolitan Borough Council",
    "Rushmoor Borough Council",
    "Rutland County Council",
    "Salford City Council",
    "Sandwell Metropolitan Borough Council",
    "Scottish Borders Council",
    "Sedgemoor District Council",
    "Sefton Metropolitan Borough Council",
    "Sheffield City Council",
    "Shetland Islands Council",
    "Shropshire Council - Unitary",
    "Somerset County Council",
    "South Ayrshire Council",
    "South Buckinghamshire District Council",
    "South Derbyshire District Council",
    "South Gloucestershire Council",
    "South Hams District Council",
    "South Lanarkshire Council",
    "South Oxfordshire District Council",
    "South Ribble Borough Council",
    "South Somerset District Council",
    "South Staffordshire Council",
    "South Tyneside Council",
    "Southampton City Council",
    "St Albans City and District Council",
    "St Helens Metropolitan Borough Council",
    "Stafford Borough Council",
    "Staffordshire County Council",
    "Staffordshire Moorlands District Council",
    "Stirling Council",
    "Stoke-on-Trent City Council",
    "Stroud District Council",
    "Suffolk County Council",
    "Sunderland City Council",
    "Swansea City and Borough Council",
    "Swindon Borough Council",
    "Tamworth Borough Council",
    "Taunton Deane Borough Council",
    "Teignbridge District Council",
    "Telford & Wrekin Council",
    "Test Valley Borough Council",
    "Tewkesbury Borough Council",
    "The Highland Council",
    "Three Rivers District Council",
    "Torbay Council",
    "Vale of Glamorgan Council",
    "Vale of White Horse District Council",
    "Walsall Metropolitan Borough Council",
    "Watford Borough Council",
    "West Devon Borough Council",
    "West Lothian Council",
    "West Oxfordshire District Council",
    "West Somerset District Council",
    "West Suffolk District Council",
    "Westmorland & Furness Council",
    "Wigan Metropolitan Borough Council",
    "Wiltshire Council",
    "Winchester City Council",
    "Wirral Council",
    "Wolverhampton City Council",
    "Wrexham County Borough Council",
    "Wycombe District Council"

]; // Array of strings containing different options
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

                    <Button/>
                </div>
            </div>
            <div className='flex flex-col hover:scale-105 hover:transition-a w-80 justify-between  p-8 text-white bg-mud_color rounded-xl'>
                <div>
                <h1 className='text-2xl flex justify-center font-bold'>Income</h1>
                <p className=' mt-5'>Household earns less than £31,000 (gross)</p>

                </div>
                <div className='flex flex-col items-center  mt-5'>

                    <Button/>
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

                    <Button/>
                </div>

            </div>
        </div>
        
        
        {/* Display this div when he is not eligible */}
        {isSubmit ? (
            <div className='container'>

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
            className="question-container bg-green_color z-10 text-white mt-10">
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
            <div className="navigation-buttons">
                <button
                    className="prev-button "
                    
                    onClick={handlePrevQuestion}
                >
                    Back
                </button>
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
            className="question-container bg-green_color text-white">
                <h2 className="question font-bold text-xl">{questions[currentQuestion]}</h2>
                {(answers[1]==="Gas"&&currentQuestion===3) && (
                    <p className="answer mb-5 text-lg">
                    If unsure if the boiler qualifies, please visit <a href='https://www.homeheatingguide.co.uk/efficiency-tables' target='_blank' className='text-mud_color'>https://www.homeheatingguide.co.uk/efficiency-tables</a> and check that efficiency rating is below 86%
                    </p>
                )}
                {(answers[1]==="Gas"&&currentQuestion===5) && (
                    <p className="answer mb-5 text-lg">
                        (This could include Pension Credit, Child benefits, Working Tax Credits, income support etc.)
                    </p>
                )}
                {questions[currentQuestion] === "8) As you qualify through a FLEX route, please type your local council below to see if they are taking part" ? (
                    <div className='options text-mud_color'>
                        
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            className="w-full rounded-md border border-mud_color p-2 text-mud_color"
                            placeholder='Type or select an option'
                        />
                        {/* Display filtered options as suggestions */}
                        <ul className='bg-white rounded-md '>
                            {filteredOptions.slice(0,5).map((option, index) => (
                            <li 
                            key={index} 
                            className={`option ${inputValue === option ? 'selected' : ''} hover:text-white`}
                            onClick={() => handleOptionSelect(option)}>
                                {option}
                            </li>
                            ))}
                        </ul>
                    
                  </div>
                ):(

                <div className="options">
                {options[currentQuestion].map((option, index) => (
                    

                    <label key={index} className={`rounded-lg flex items-center option ${answers[currentQuestion] === option ? 'selected' : ''}`}>
                    <input
                        type="radio"
                        hidden
                        name={`question-${currentQuestion}`}
                        value={option}
                        checked={answers[currentQuestion] === option}
                        onChange={() => handleAnswer(currentQuestion, option)}
                    />
                    <span className={`option-letter border  rounded-md px-3 p-2 ${answers[currentQuestion] === option ? 'selected' : ''}`}>{String.fromCharCode(65 + index)}</span>
                    {option}
                    </label>
                    
                ))}
                </div>
                )}
                {answers[0]==="Social Tenant" ? (
                    <div className="navigation-buttons">
                    <button
                    className="submit-button "
                    
                    onClick={handleSubmitButton}
                    >
                    Submit
                    </button>
                    
                </div>
                ):(

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
                )}
            </div>

            )}
      
        </div>
        )}

        
        

        
    </div>
    <GetInTouch/>
    </>
  )
}
