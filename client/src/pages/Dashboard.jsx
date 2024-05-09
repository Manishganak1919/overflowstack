import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import { AdmissionEnq } from "../components/FrontOffice";
import { VisitorBook, PostalDispatch } from "../components/FrontOffice";
import PhoneCalllog from "../components/FrontOffice/PhoneCalllog";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    console.log(tabFromUrl);
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="md:w-64">
        <DashSidebar />
      </div>
      {/* Profile */}
      {tab === "profile" && <DashProfile />}
      {/* Front office */}
      {tab === "admission" && <AdmissionEnq />}
      {/*** Visitor Book */}
      {tab === "visitor" && <VisitorBook />}
      {/***Phone log */}
      {tab === "phonelog" && <PhoneCalllog />}
      {/**postal dispatch */}
      {tab === "postaldispatch" && <PostalDispatch />}
    </div>
  );
};

export default Dashboard;
