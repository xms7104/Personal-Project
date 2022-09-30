import React from "react";
import SortDown from "../src/img/SortDown.svg";
import LabelsImage from "../src/img/Labels.svg";
import Milestone from "../src/img/milestone.svg";
import issueOpened from "../src/img/issueOpened.svg";
import Check from "../src/img/check.svg";
import UserImg from "../src/img/userImg.png";
import Light from "../src/img/light.svg";
import { useState, useEffect, useRef } from "react";

import {IssueOpenedIcon, LinkExternalIcon, CheckIcon, XIcon, ChevronRightIcon,ChevronLeftIcon, CommentIcon   } from "@primer/octicons-react"

import api from "./api";
import IssueLabelList from "./IssueLabelList";

function IssuePage() {
const[filtersMenu, setFiletersMenu] = useState(false);
const[labelMenu, setLabelMenu] = useState(false);
const[assigneMenu, setAssigne] = useState(false);
const[sortMenu, setSortMenu] = useState(false);
const[mobileMenuBG, setMobileMenuBG] = useState(false);
const[noSearch, setNoSearch] = useState(false);
const[clearSearch, setClearSearch]:any = useState();
const[assigneeName, setAssigneeName] = useState("");
const[sortSelectName, setSortSelectName] = useState("");
const[date, setDate] = useState("created");
const[sort, setSort] = useState("desc");


const[renderData, setRenderData]:any = useState([]);
const[sortSelect, setsortSelect]:any = useState(null);

const assigneeUserName:any = useRef<HTMLParagraphElement | null>(null);

const Filters = ["Open issues and pull requests","Your issues","Your Pull requests","Everything assigned to you","Everything mentioning you"];
const SortsSelect = ["Newest", "Oldest", "Most commented", "Least commented", "Recently updated", "Least recently updated"];


useEffect(() =>{
  if(sortSelect === "Newest"){
    setSort("desc")
    setDate("created")
  }
  else if(sortSelect === "Oldest"){
    setSort("asc")
    setDate("created")
  }
  else if(sortSelect === "Most commented"){
    setSort("desc")
    setDate("comments")
  }
  else if(sortSelect === "Least commented"){
    setSort("asc")
    setDate("comments")
  }
  else if(sortSelect === "Recently updated"){
    setSort("desc")
    setDate("updateed")
  }
  else if(sortSelect === "Least recently updated"){
    setSort("asc")
    setDate("updateed")
  }


  async function getListIssues() {
    if(sortSelect === null){
      const data = await api.getListIssuesState();
      setRenderData(data);
      console.log(renderData)
      if(data.length === 0){
        setNoSearch(true);
      }else{
        setNoSearch(false);
      }
      console.log(data)
    }
    else if(sortSelect === "Your issues"){
      const data = await api.getIssuesAuthorMe()
      setRenderData(data);
      if(data.length === 0){
        setNoSearch(true);
      }else{
        setNoSearch(false);
      }
    }    
    else if(sortSelect === "Everything assigned to you" || sortSelect === assigneeName){
      console.log(sortSelect ,assigneeName )
      const data = await api.getIssuesAssigneeMe(assigneeName);
      setRenderData(data);
      if(data.length === 0){
        setNoSearch(true);
      }else{
        setNoSearch(false);
      }
    }
    else if(sortSelect === "Everything mentioning you"){
      const data = await api.getIssuesMentionsMe();
      setRenderData(data);
      if(data.length === 0){
        setNoSearch(true);
      }else{
        setNoSearch(false);
      }
    }
   else if(sortSelect === sortSelectName && date !== null && sort !== null){
      const data = await api.getIssuesSort(date,sort);
      setRenderData(data);      
      console.log(sortSelect)
    }
  }
  getListIssues();
}, [sortSelect]);


function getIssues(){
  return renderData.map((item:any, index: number) => {
    if(renderData[index].pull_request === undefined){ 
  return(
    <>
    <div style={{border:"revert"}} className={`${noSearch ? "hidden" : "flex"} justify-between items-center border-b-[1px] border-r-[1px] border-l-[1px] border-slate-300"`}>
    <div className="flex justify-start items-start pl-4">
        <div className="py-2">
          <input type="checkbox" className="flex md:hidden"/>
        </div>
        <div className="pt-2 pl-4">
        <IssueOpenedIcon size={16} fill="green"/>
        </div>
        <div className="block justify-center items-center px-2 py-2">
          <div className="flex justify-start items-center md:block">
            <p className="text-base font-semibold hover:text-[#0969da] hover:cursor-pointer">{renderData[index].title}</p>
            {getLabels(index)}
          </div>
              {TimeDifference(index)}
          </div>
          </div>
          <div className="flex justify-end items-center pt-2 pr-4">
            {getAssignees(index)}
            <div className="flex justify-end items-center w-[70px] hover:text-[#0969da] hover:cursor-pointer ml-2 sm:hidden">
            {getComments(index)}
            </div>
          </div>
      </div>
    </>
      )}})
    
}

function getLabels(index:number){
  return renderData[index].labels.map((item:any, listIndex: number) => {
    if(renderData[index].labels.length !== 0){
      return(
        <button style={{backgroundColor: `#${renderData[index].labels[listIndex].color}`}} className={`rounded-xl px-[7px] font-semibold text-sm md:text-xs`}>
        {renderData[index].labels[listIndex].name}
        </button>
      )
    }
  })}

  function TimeDifference(index:number){
    const NewTime = new Date();
    const IssuesTime = new Date(renderData[index].created_at)
    const reduce = NewTime.getTime() - IssuesTime.getTime()
    const days=Math.floor(reduce/(24*3600*1000))
    const leave1=reduce%(24*3600*1000)    //計算天數後剩余的毫秒數  
    const hours=Math.floor(leave1/(3600*1000))  //計算相差分鐘數  
    const leave2=leave1%(3600*1000)        //計算小時數後剩余的毫秒數  
    const minutes=Math.floor(leave2/(60*1000))  //計算相差秒數  
    const leave3=leave2%(60*1000)      //計算分鐘數後剩余的毫秒數  
    const seconds=Math.round(leave3/1000) 
    // console.log(" 相差 "+days+"天 "+hours+"小時 "+minutes+" 分鐘"+seconds+" 秒")
    
    return renderData.map((item:any, CreateTimeIndex: number) => {
    if (days>0 && index === CreateTimeIndex){
      return(
        <p className="mt-1 text-xs">
        #{`${renderData[CreateTimeIndex].number}`} opend {`${days}`} days ago by {`${renderData[CreateTimeIndex].user.login}`}
      </p>
      )  
    }else if(days === 0 && hours>0 && index === CreateTimeIndex){
      return(
        <p className="mt-1 text-xs">
        #{`${renderData[CreateTimeIndex].number}`} opend {`${hours}`} hour ago by {`${renderData[CreateTimeIndex].user.login}`}
      </p>
      )
    }else if(days === 0 && hours === 0 && minutes>0 && index === CreateTimeIndex){
      return(
        <p className="mt-1 text-xs">
        #{`${renderData[CreateTimeIndex].number}`} opend {`${minutes}`} minutes ago by {`${renderData[CreateTimeIndex].user.login}`}
      </p>
      )
    }else if(days === 0 && hours === 0 && minutes === 0 && seconds>0 && index === CreateTimeIndex){
      <p className="mt-1 text-xs">
        #{`${renderData[CreateTimeIndex].number}`} opend {`${seconds}`} seconds ago by {`${renderData[CreateTimeIndex].user.login}`}
      </p>
    }
    })}
    

  function getAssignees(index:number){
    return renderData.map((item:any, assigneesIndex: number) => {
      if(renderData[index].assignees.length !== 0 && index === assigneesIndex){
        return(
          <div className="flex justify-end items-center w-[87.83px]">
          <img src={UserImg} alt="" className="w-[30%] rounded-full sm:hidden"/>
          </div>
        )
      }
    })}

    function getComments(index:number){
      return renderData.map((item:any, commentsIndex: number) => {
        if(renderData[index].comments !== 0 && index === commentsIndex){
          return(
            <div className="flex justify-end items-center w-[70px] hover:text-[#0969da] hover:cursor-pointer ml-2 sm:hidden">
            <CommentIcon size={16}  className="hover:fill-[#0969da]"/>
              <p>{renderData[index].comments}</p>
            </div>
          )
        }
      })}

      function FiltersDSelect(){
        return Filters.map((item:any, FiltersDSelectIndex: number) => {
            return(
              <li className="flex justify-start items-center border-b-[1px] border-solid border-gray-400 py-[7px] pl-9 pr-[7px] text-xs sm:px-4 sm:py-4" onClick={() => {setsortSelect(Filters[FiltersDSelectIndex])
                setFiletersMenu(false)
                setClearSearch(true)
                }}>
              <div className={`${sortSelect === Filters[FiltersDSelectIndex] ? "block" : "hidden" } absolute left-[26px] `}>
              <CheckIcon size={16} className="mr-2"/>
              </div>
              <p>{Filters[FiltersDSelectIndex]}</p>
            </li>
            )
          
        })}

    function SortSelect(){   
      return SortsSelect.map((item:any, SortsSelectIndex: number) => {
          return(
            <li className="py-[7px] px-9 text-xs border-t-[1px] border-solid border-gray-300 flex justify-start items-center sm:px-4 sm:py-4 sm:text-sm" onClick={() => {setsortSelect(SortsSelect[SortsSelectIndex])
              setSortSelectName(SortsSelect[SortsSelectIndex])
              setFiletersMenu(false)
              setClearSearch(true)
              console.log(sort,date,sortSelect,sortSelectName,SortsSelect[SortsSelectIndex])}}>
            <div className={`${sortSelect === SortsSelect[SortsSelectIndex] ? "block" : "hidden" } absolute left-3 `}>
              <CheckIcon size={16} className="mr-2"/>
            </div>
              {SortsSelect[SortsSelectIndex]}
            </li>
          )        
      })}

  return (
    <div className=" relative z-10">      
    <div className="mt-6 px-6">    
   <div className="px-6 py-6 mb-6 border-[1px] border-solid border-gray-200 flex justify-between items-start rounded-xl">
      <div className="w-full block justify-between items-center text-center relative">
        <div>
        <p>
        <p className="mb-1 font-semibold text-base">Label issues and pull requests for new contributors</p>
        <br /><p className="mb-1 text-sm">Now, GitHub will help potential first-time contributors <a href="#" className="text-blue-500">discover issues</a> labeled with 
        <button className="text-white bg-indigo-600 rounded-xl text-xs w-24 h-[18px] px-[7px] ml-1">good first issue</button></p>
        </p>
        </div>
        <button className="inline-flex justify-center items-center text-center h-[30px] py-[5px] px-4 mt-4 border-[1px] border-solid border-gray-200 text-blue bg-slate-50 text-base text-[#0969da] rounded-xl font-semibold hover:bg-[#0969da] hover:text-white">
          Go to Labels
        </button>
      </div>
   </div>
   <button className="text-blue-500 text-sm absolute top-[10px] right-[40px]">
          <p className="hover:underline decoration-auto">Dismiss</p>
        </button>
    <div>    
      <div className="flex justify-between items-center md:flex-col md:mb-0">       
      <div className="xl:bg-gray-100 border-[1px] border-solid border-gray-400 flex justify-between items-center rounded-lg order-0 w-[60%] relative lg:w-[46%] md:w-full md:order-2 my-6">
        <button className="flex px-4 py-[5px]" onClick={() => {
          setFiletersMenu(true)
          setMobileMenuBG(true)
          if(labelMenu === true || assigneMenu === true || sortMenu === true){
            setLabelMenu(false)
            setAssigne(false)
            setSortMenu(false)
          }
        }}>
          Filters
          <img src={SortDown} alt="" />
        </button>
        <div className={`${mobileMenuBG ? "visible" : "invisible"} sm:bg-black opacity-60 top-0 bottom-0 left-0 right-0 fixed`} onClick={() => {
          if(mobileMenuBG === true){
            setMobileMenuBG(false)
            setFiletersMenu(false)
            setLabelMenu(false)
            setAssigne(false)
            setSortMenu(false)
          }

        }}></div> 
        <ul className={`${filtersMenu ? "visible" : "invisible"} bg-white border-[1px] absolute left-auto top-[40px] border-solid border-gray-400 rounded-lg z-10 sm:fixed sm:top-[25%] sm:left-[16%] px-4 text-sm w-[70%]`}>
          <li className="flex justify-between items-center border-b-[1px] border-solid border-gray-400 py-[7px] pl-4 pr-[7px] text-xs sm:font-semibold px-4 sm:py-4">
            <p>Filiter Issues</p>
            <p onClick={() => {setFiletersMenu(false)
            setMobileMenuBG(false)
            }}>X</p>  
          </li>
          {FiltersDSelect()}
          <li className="flex justify-start items-center  py-[7px] px-4 text-xs sm:px-4 sm:py-4">
            <LinkExternalIcon size={16} className="mr-2"/>
            <p>View advanced search syntax</p>
            </li>
        </ul>
        <input type="text"
        defaultValue={"is:issue"}
        className=" text-sm bg-gray-100 pr-3 pl-8 py-[5px] bg-[url('../src/img/search.svg')] bg-no-repeat bg-[center_left_4px] bg-auto border-l-[1px] border-solid border-gray-400 w-full rounded-r-lg h-[30px]"
        onChange={(e) => {console.log(e.target.value)}}
        />
      </div>
      
      <div className="flex justify-between items-center md:w-full">
       
        <div className="flex justify-between  border-[1px] border-solid border-gray-400 rounded-md h-[30px] w-[270px] md:w-auto">
          <button className="flex justify-evenly items-center px-4 py-[5px] bg-white rounded-l-md border-r-[1px] border-solid border-gray-400 text-sm">
          <img src={LabelsImage} alt="" className="w-1/5 text-sm"/>
            Labels
            <p className=" px-[6px] bg-gray-200 rounded-xl w-6 h-6 border-[1px] border-solid border-gray-50 flex justify-center items-center md:hidden">
              11
            </p>
          </button>
          <button className="flex justify-evenly items-center px-4 py-[5px] bg-white rounded-r-md text-sm">
          <img src={Milestone} alt="" className="w-1/6 text-sm"/>
            Milestones
            <p className=" px-[6px] bg-gray-200 rounded-xl w-6 h-6 border-[1px] border-solid border-gray-50 flex justify-center items-center md:hidden">
              0
            </p>
          </button>
        </div>
      
      <button className="px-4 py-[5px] text-white bg-green-600 border-[1px] border-solid border-gray-400 rounded-md h-[30px] text-sm lg:ml-[15px]">
          <p className="flex md:hidden">New issue</p>
          <p className="hidden md:flex">New</p>
        </button>
      </div>
      </div>
    <div>
    <button className={`${clearSearch ? "flex" : "hidden"} justify-evenly items-center mb-4 lg:text-sm`}>
    <XIcon size={16} fill="white" className="bg-gray-500 rounded-md mr-1"/>
    <p className="font-semibold hover:cursor-pointer hover:text-[#0969da]" onClick={() =>{setsortSelect(null) 
      setClearSearch(false)}}>
      Clear current search query, filters, and sorts
    </p>
    </button>
    <div className="hidden justify-start items-center lg:flex mb-4">
    <button className="flex justify-center items-center">
      <img src={issueOpened} alt="" className="mr-1 w-1/4"/>
      <p className="text-sm">3 Open</p>
    </button>
    <button className="flex justify-center items-center ml-[10px]">
    <img src={Check} alt="" className="mr-1 w-1/5"/>
    <p className="text-sm">2 Closed</p>
    </button>
    </div>
      </div>
      <div>
        <div className="px-4 py-4 flex justify-between items-center bg-gray-100 rounded-t-md lg:justify-start sm:justify-between">
          <div className="flex justify-start items-center">
            <input type="checkbox" className="flex mr-4 md:hidden"/>
            <div className="flex justify-start items-center lg:hidden">
            <button className="flex justify-center items-center">
              <img src={issueOpened} alt="" className="mr-1 w-1/4"/>
              <p className="text-sm">3 Open</p>
            </button>
            <button className="flex justify-center items-center ml-[10px]">
            <img src={Check} alt="" className="mr-1 w-1/5"/>
            <p className="text-sm">2 Closed</p>
            </button>
            </div>
          </div>
          <div className="flex justify-center items-center relative sm:w-full justify-around">
            <button className="flex justify-center items-center px-4 text-[#57606a] md:text-sm hover:text-black">
              Author
              <img src={SortDown} alt="" className="hidden"/>
            </button>
            <button className="flex justify-center items-center px-4 text-[#57606a] md:text-sm hover:text-black" 
            onClick={() => {setLabelMenu(true) 
              setMobileMenuBG(true)
              if(filtersMenu === true || assigneMenu === true || sortMenu === true){
                setFiletersMenu(false)
                setAssigne(false)
                setSortMenu(false)
              }
              }}>
              Label
              <img src={SortDown} alt="" className="hidden" />
            </button>
                <IssueLabelList labelMenu={labelMenu} setLabelMenu={setLabelMenu} sortSelect={sortSelect} setsortSelect={setsortSelect} setRenderData={setRenderData} renderData={renderData} clearSearch={clearSearch} setClearSearch={setClearSearch}/>
            <button className="flex justify-center items-center px-4 text-[#57606a] md:hidden hover:text-black">
              Projects
              <img src={SortDown} alt="" />
            </button>
            <button className="flex justify-center items-center px-4 text-[#57606a] md:hidden hover:text-black">
              Milestones
              <img src={SortDown} alt="" />
            </button>
            <button className="flex justify-center items-center px-4 text-[#57606a] md:text-sm hover:text-black" onClick={() =>{setAssigne(true)
            setMobileMenuBG(true)
            if(filtersMenu === true || labelMenu === true || sortMenu === true){
              setFiletersMenu(false)
              setLabelMenu(false)
              setSortMenu(false)
            }}}>
              Assignee
              <img src={SortDown} alt="" className="hidden"/>
            </button>
            <ul className={`${assigneMenu ? "block" : "hidden"} absolute top-[25px] right-[60px] bg-white border-[1px] border-solid border-gray-300 rounded-lg w-[275px] sm:sm:fixed sm:top-[1%] sm:left-[4%] sm:bottom-[35%] px-4 text-sm sm:w-[92%]`} >
              <li className="px-4 py-[7px] text-xs font-semibold flex justify-between items-center sm:font-semibold sm:px-4 sm:py-4">
                <p>Filter by who's assigned</p>
                <p onClick={() =>{setAssigne(false)
                setMobileMenuBG(false)
                }}>X</p>
                </li>
              <li className="px-2 py-2 border-t-[1px] border-solid border-gray-300 sm:px-4 sm:py-4">
              <input type="text" defaultValue="Filter users" className="py-[5px] px-3 bg-white border-[1px] border-solid border-gray-300 rounded-lg text-xs w-full"/>
              </li>
              <li className="py-[7px] px-4 text-xs border-t-[1px] border-solid border-gray-300 flex justify-start items-center sm:px-4 sm:py-4">
              <div className="invisible">
                <CheckIcon size={16} className="mr-2"/>
              </div>
                Assigned to nobody
              </li>
              <li className="py-[7px] px-4 border-t-[1px] border-solid border-gray-300 text-xs flex justify-start items-center sm:px-4 sm:py-4"  onClick={() =>{setAssigneeName(assigneeUserName.current?.outerText)
              setAssigne(false)
              setsortSelect(assigneeUserName.current?.outerText)
              setClearSearch(true)
              console.log(assigneeUserName.current?.outerText,assigneeName,sortSelect)}}>
              <div className={`${assigneeUserName.current?.outerText === sortSelect ? "visible" : "invisible" }`}>
                <CheckIcon size={16} className="mr-2"/>
              </div>
                <div className="flex items-center justify-start">
                  <img src={UserImg} alt="" className="w-[9%] rounded-full mr-2"/>
                  <div className="flex items-center justify-center">
                  <p className="mr-2 font-semibold" ref={assigneeUserName}>Xie-MS</p> 
                  <p>xms_7104</p>
                  </div>
                </div>
              </li>
            </ul>
            <button className="flex justify-center items-center pl-4 text-[#57606a] md:text-sm hover:text-black" onClick={() => {setSortMenu(true)
            setMobileMenuBG(true)
            if(filtersMenu === true || labelMenu === true || assigneMenu === true){
              setFiletersMenu(false)
              setLabelMenu(false)
              setAssigne(false)
            }
            }}>
              Sort
              <img src={SortDown} alt="" className="hidden"/>
            </button>
            <ul className={`${sortMenu ? "visible" : "invisible"} absolute top-[25px] right-0 bg-white border-[1px] border-solid border-gray-300 rounded-lg w-[275px] sm:fixed sm:top-[2%] sm:left-[2%] sm:bottom-[21%] sm:w-[95%]`}>
              <li className="px-4 py-[7px] text-xs font-semibold flex justify-between items-center sm:py-4 sm:text-sm">
                <p>Sort by</p>
                <p onClick={() => {setSortMenu(false)
                setMobileMenuBG(false)}}>X</p>
                </li>
              {SortSelect()}
            </ul>
          </div>
          </div>
          <div className="contents justify-start items-center px-4 py-2 bg-white border-[1px] border-solid border-gray-200 rounded-b-md h-[62.5px] md:h-[83.5px] sm:text-sm">
          {getIssues()}

          </div>
      </div>
      <div className={`${noSearch ? "block" : "hidden"} px-10 py-20 text-center`}>
        <img src={issueOpened} alt=""  className=" my-0 mx-auto"/>
        <p className="my-4 text-2xl font-semibold">No results matched your search.</p>
        <p className="mb-[10px]">You could search <a href="#" className="text-[#0969da]">all of GitHub</a> or try an <a href="#" className="text-[#0969da]">advanced search</a>.</p>
      </div>
    </div>

    <div className="visible my-4 flex justify-center items-center">
    <button className="flex justify-start items-center px-[10px] py-[5px] ">
    <ChevronLeftIcon size={16} className="fill-[#0969da] sm: fill-[#8c959f]"/>
      <p className="text-[#0969da] sm:text-[#8c959f]">
        previous
      </p>
    </button>
    <div className="flex justify-center items-center sm:hidden">
    <button className="px-[10px] py-[5px]">
      <p className="w-8 h-8 flex justify-center items-center">1</p>
    </button>
    <button className="px-[10px] py-[5px]">
    <p className="w-8 h-8 flex justify-center items-center bg-[#0969da] text-white rounded-md">2</p>
    </button>
    </div>
    <button className="flex justify-start items-center px-[10px] py-[5px]">
    
      <p className="text-[#0969da]">
        Next
      </p>
      <ChevronRightIcon size={16} fill={"#0969da"}/>
    </button>
    </div>

    <div className="pt-4">
      <p className="flex justify-center items-center text-sm">
        <img src={Light} alt="" className="mr-1"/>
      <p className="font-semibold mr-1 text-base">ProTip!</p>Click a checkbox on the left to edit multiple issues at once.
      </p>
    </div>
    </div>
    </div>
  )
}

export default IssuePage;