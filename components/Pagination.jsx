'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "./Navbar";
import About from "./About";
import Rules from "./Rules";
import Interests from "./Interests";
import { useState } from "react";

const Pagination = () => {
  const [visibleTab, setVisibleTab] = useState("about");

  const handleTabChange = (value) => {
    setVisibleTab(value); // Update the currently visible tab
  };

  return (
    <Tabs defaultValue="about" className="w-[400px] ml-2" onValueChange={handleTabChange}>
      <TabsList className='ml-2'>
        <TabsTrigger value="about">About</TabsTrigger>
        <TabsTrigger value="rules">Rules</TabsTrigger>
        <TabsTrigger value="interests">Interests</TabsTrigger>
      </TabsList>
      <div className="bg-muted w-[32.8vw] h-[21.4vh] rounded-sm relative">
        <div className="absolute top-2">
          <Navbar />
        </div>
        <div className="pt-12">
          <TabsContent value="about">
            <About isVisible={visibleTab === "about"} />
          </TabsContent>
          <TabsContent value="rules">
            <Rules isVisible={visibleTab === "rules"} />
          </TabsContent>
          <TabsContent value="interests">
            <Interests isVisible={visibleTab === "interests"} />
          </TabsContent>
        </div>
      </div>
    </Tabs>
  );
};

export default Pagination;