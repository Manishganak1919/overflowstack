import React from "react";
import { Label, Select, Datepicker, Button } from "flowbite-react";

const AdmissionEnq = () => {
  return (
    <div className="w-full md:w-5/6">
      <div className="md:m-3 w-full min-h-screen border-2 border-gray-500">
        <div className="w-full mt-3 border-b-2 border-gray-500">
          <h1 className="my-3 ml-3 text-2xl font-medium">Select Criteria</h1>
        </div>
        {/* Select criteria form */}
        <div className="flex flex-wrap gap-3 w-full my-4">
          <div className="w-full md:w-1/6">
            <div className="mb-2 mx-3">
              <Label htmlFor="class" value="Select your class" />
            </div>
            <Select id="class" className="my-2 mx-3">
              <option>Nursery</option>
              <option>LKG</option>
              <option>UKG</option>
              <option>Class 1</option>
              <option>Class 2</option>
              <option>Class 3</option>
              <option>Class 4</option>
              <option>Class 5</option>
              <option>Class 6</option>
              <option>Class 7</option>
              <option>Class 8</option>
            </Select>
          </div>
          <div className="w-full md:w-1/6">
            <div className="mb-2 mx-3">
              <Label htmlFor="Source" value="Source" />
            </div>
            <Select id="Source" className="my-2 mx-3">
              <option>Facebook</option>
              <option>Website</option>
              <option>Youtube</option>
              <option>Others</option>
            </Select>
          </div>
          <div className="w-full md:w-1/6">
            <div className="mb-2 mx-3">
              <Label htmlFor="FromDate" value="Enquiry From Date *" />
            </div>
            <Datepicker id="FromDate" className="my-2 mx-3" />
          </div>
          <div className="w-full md:w-1/6">
            <div className="mb-2 mx-3">
              <Label htmlFor="ToDate" value="Enquiry to Date *" />
            </div>
            <Datepicker id="ToDate" className="my-2 mx-3" />
          </div>
          <div className="w-full md:w-1/6">
            <div className="mb-2 mx-3">
              <Label htmlFor="Status" value="Status" />
            </div>
            <Select id="Status" className="my-2 mx-3">
              <option>Select</option>
              <option>All</option>
              <option>Active</option>
              <option>Passive</option>
              <option>Dead</option>
              <option>Won</option>
              <option>Lost</option>
            </Select>
          </div>
          <div className="my-auto">
            <Button as="span" className="cursor-pointer">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionEnq;
