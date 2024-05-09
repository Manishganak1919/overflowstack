import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import { HiUser } from "react-icons/hi";
import { FaSignOutAlt } from "react-icons/fa";
import { ImOffice } from "react-icons/im";
import { FaAnglesRight } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import { GiMoneyStack } from "react-icons/gi";
import { MdAttachMoney } from "react-icons/md";
import { GiExpense } from "react-icons/gi";
import { PiExamFill } from "react-icons/pi";
import { MdOnlinePrediction } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { IoIosBook } from "react-icons/io";
import { GiHumanPyramid } from "react-icons/gi";
import { AiFillSound } from "react-icons/ai";

import { IoMdCloudDownload } from "react-icons/io";

import { MdOutlineAddTask } from "react-icons/md";
import { SiLibrarything } from "react-icons/si";

const DashSidebar = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlparams = new URLSearchParams(location.search);
    const tabformurl = urlparams.get("tab");
    console.log(tabformurl);
    if (tabformurl) {
      setTab(tabformurl);
    }
  }, [location.search]);
  return (
    <Sidebar className="w-full md:w-64">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item
              active={tab === "profile"}
              icon={HiUser}
              label="User"
              as="div"
              labelColor="dark"
            >
              Profile
            </Sidebar.Item>
          </Link>
          {/**front office */}
          <Sidebar.Collapse
            icon={ImOffice}
            label="Front office"
            as="div"
            labelColor="dark"
            className="cursor-pointer"
          >
            <Link to="/dashboard?tab=admission">
              <Sidebar.Item
                icon={FaAnglesRight}
                className="cursor-pointer"
                active={tab === "admission"}
              >
                Admission Enquiry
              </Sidebar.Item>
            </Link>
            <Link to="/dashboard?tab=visitor">
              <Sidebar.Item
                icon={FaAnglesRight}
                className="cursor-pointer"
                active={tab === "visitor"}
              >
                Visitor Book
              </Sidebar.Item>
            </Link>
            <Link to="/dashboard?tab=phonelog">
              <Sidebar.Item
                icon={FaAnglesRight}
                className="cursor-pointer"
                active={tab === "phonelog"}
              >
                Phone call log
              </Sidebar.Item>
            </Link>
            <Link to="/dashboard?tab=postaldispatch">
              <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer" active={tab === "postaldispatch"}>
                Postal Dispatch
              </Sidebar.Item>
            </Link>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Postal Receive
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Complaint
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Setup Front office
            </Sidebar.Item>
          </Sidebar.Collapse>
          {/**Student information */}
          <Sidebar.Collapse
            icon={PiStudentFill}
            label="Student Inform."
            as="div"
            labelColor="dark"
            className="cursor-pointer"
          >
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Student Details
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Student Admission
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Online Admission
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Disabled Student
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Multi Class Student
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Bulk Delete
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Student Category
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Student House
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Disabled Reason
            </Sidebar.Item>
          </Sidebar.Collapse>
          {/**Fees collection */}
          <Sidebar.Collapse
            icon={GiMoneyStack}
            label="Fees Collections"
            as="div"
            labelColor="dark"
            className="cursor-pointer"
          >
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Collect Fee
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Online Bank Payment
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Search Fee Payment
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Search Due Fees
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Fees Master
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Fees Group
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Fees Types
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Fees Discount
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Fees carry Forward
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Fees Remainder
            </Sidebar.Item>
          </Sidebar.Collapse>
          {/** Income */}
          <Sidebar.Collapse
            icon={MdAttachMoney}
            label="Income"
            as="div"
            labelColor="dark"
            className="cursor-pointer"
          >
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Add income
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Search income
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Income Head
            </Sidebar.Item>
          </Sidebar.Collapse>
          {/**Expense */}
          <Sidebar.Collapse
            icon={GiExpense}
            label="Expense"
            as="div"
            labelColor="dark"
            className="cursor-pointer"
          >
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Add Expense
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Search Expense
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Head Expense
            </Sidebar.Item>
          </Sidebar.Collapse>
          {/**Examination */}
          <Sidebar.Collapse
            icon={PiExamFill}
            label="Examination"
            as="div"
            labelColor="dark"
            className="cursor-pointer"
          >
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Exam Group
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Exam Schedule
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Design Admit card
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Design Marksheet
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Print Marksheet
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Marks Grade
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Marks Division
            </Sidebar.Item>
          </Sidebar.Collapse>
          {/**online Examination */}
          <Sidebar.Collapse
            icon={MdOnlinePrediction}
            label="Online Examination"
            as="div"
            labelColor="dark"
            className="cursor-pointer"
          >
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Online Exam
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Question Bank
            </Sidebar.Item>
          </Sidebar.Collapse>
          {/**Academic */}
          <Sidebar.Collapse
            icon={HiAcademicCap}
            label="Academics"
            as="div"
            labelColor="dark"
            className="cursor-pointer"
          >
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Class TimeTable
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Teacher TimeTable
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Assign Class Teacher
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Promote Student
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Subject Group
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Subjects
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Class
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Sections
            </Sidebar.Item>
          </Sidebar.Collapse>
          {/**Attendence */}
          <Sidebar.Collapse
            icon={BsFillCalendarDateFill}
            label="Attendance"
            as="div"
            labelColor="dark"
            className="cursor-pointer"
          >
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Student Attendence
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Approve Leave
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Attendence by date
            </Sidebar.Item>
          </Sidebar.Collapse>
          {/**Lesson plan */}
          <Sidebar.Collapse
            icon={IoIosBook}
            label="Lesson Plan"
            as="div"
            labelColor="dark"
            className="cursor-pointer"
          >
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Copy Old Lessons
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Mennage Lesson Plan
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Manage Syllabus Status
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Lessons
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Topics
            </Sidebar.Item>
          </Sidebar.Collapse>
          {/**Human Resources */}
          <Sidebar.Collapse
            icon={GiHumanPyramid}
            label="Human Resources"
            as="div"
            labelColor="dark"
            className="cursor-pointer"
          >
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Staff Directory
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Staff Academic
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Approve Leave Request
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Apply Leave
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Leave Type
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Teacher rating
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Department
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Designation
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Disabled Staff
            </Sidebar.Item>
          </Sidebar.Collapse>
          {/**communicate */}
          <Sidebar.Collapse
            icon={AiFillSound}
            label="Communicate"
            as="div"
            labelColor="dark"
            className="cursor-pointer"
          >
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Notice Board
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Send Email
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Send SMS
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Email/SMS Logs
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Schedule Email
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Login Credential Send
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Email Template
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              SMS Template
            </Sidebar.Item>
          </Sidebar.Collapse>
          {/**Download Center */}
          <Sidebar.Collapse
            icon={IoMdCloudDownload}
            label="Download Center"
            as="div"
            labelColor="dark"
            className="cursor-pointer"
          >
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Content Type
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Content Share
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Upload/Share List
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Video Tutorials
            </Sidebar.Item>
          </Sidebar.Collapse>
          {/**Homework */}
          <Sidebar.Collapse
            icon={MdOutlineAddTask}
            label="HomeWork"
            as="div"
            labelColor="dark"
            className="cursor-pointer"
          >
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Add HomeWork
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Daily Assignment
            </Sidebar.Item>
          </Sidebar.Collapse>
          {/**Library */}
          <Sidebar.Collapse
            icon={SiLibrarything}
            label="Library"
            as="div"
            labelColor="dark"
            className="cursor-pointer"
          >
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Book List
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Issue-Return
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Add Student
            </Sidebar.Item>
            <Sidebar.Item icon={FaAnglesRight} className="cursor-pointer">
              Add Staff member
            </Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item active icon={FaSignOutAlt} className="cursor-pointer">
            Sign out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default DashSidebar;
